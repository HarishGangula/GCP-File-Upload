const express = require('express');
const { Storage } = require('@google-cloud/storage');
const path = require('path');
const app = express();
app.use(express.json());

const storage = new Storage({
    projectId: 'project-id',
    credentials: {
        client_email: 'email',
        private_key: `key`
    }
});
const bucketName = 'bucket-name';
const bucket = storage.bucket(bucketName);

// Serve the index.html file in the public folder
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Endpoint to generate a signed URL for uploading a chunk
app.post('/generate-signed-url', async (req, res) => {
  const { filename } = req.body;
  const options = {
    version: 'v4',
    action: 'write',
    expires: Date.now() + 15 * 60 * 1000, // 15 minutes
    contentType: 'application/octet-stream',
  };

  const [url] = await bucket.file(filename).getSignedUrl(options);
  res.json({ signedUrl: url });
});

// Endpoint to compose uploaded chunks into a single file
app.post('/compose-file', async (req, res) => {
  const { filename, chunks } = req.body;
  const sources = chunks.map(name => bucket.file(name));
  await bucket.combine(sources, filename);

  // Optionally delete the chunk files
  await Promise.all(sources.map(file => file.delete()));

  res.sendStatus(200);
});

app.listen(3000, () => console.log('Server started on port 3000'));
