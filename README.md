# File Upload to Google Cloud Platform (GCP)

🚀 **Welcome to the File Upload to GCP Project!** 🚀

This project demonstrates how to upload large files to Google Cloud Storage in chunks using signed URLs and then compose the chunks into a single file. It includes both a backend server implemented in Node.js and a frontend interface for file selection and upload.

---

## 🌟 Features

- **Chunked File Upload**: Splits large files into smaller chunks for upload.
- **Signed URLs**: Uses GCP signed URLs to securely upload chunks.
- **File Composition**: Combines uploaded chunks into a single file on the server.
- **Frontend Interface**: Simple HTML interface for file selection and upload.

---

## 📂 Project Structure

```
file-upload-gcp/
├── app.js                # Backend server code
├── package.json          # Node.js dependencies
├── public/
│   └── index.html        # Frontend interface
```

---

## 🛠️ Prerequisites

- Node.js installed on your system.
- A Google Cloud Platform project with a storage bucket.
- Service account credentials for accessing the storage bucket.

---

## ⚙️ Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd file-upload-gcp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Update the `app.js` file with your GCP project details:**
   - Replace `project-id` with your GCP project ID.
   - Replace `email` and `key` with your service account credentials.
   - Replace `bucket-name` with the name of your GCP storage bucket.

4. **Start the server:**
   ```bash
   node app.js
   ```

5. **Open the frontend interface in your browser:**
   - Navigate to `http://localhost:3000`.

---

## 🧠 How It Works

### Backend

- **Signed URL Generation**: The `/generate-signed-url` endpoint generates a signed URL for each chunk, allowing secure upload to GCP.
- **File Composition**: The `/compose-file` endpoint combines all uploaded chunks into a single file in the storage bucket.

### Frontend

- **File Selection**: Users select a file using an HTML file input.
- **Chunk Upload**: The file is split into chunks and uploaded to GCP using signed URLs.
- **Completion Notification**: Once all chunks are uploaded, the server is notified to compose the file.

---

## ✨ Customization

- Adjust the `MAX_CHUNKS` constant in `index.html` to control the maximum number of chunks.
- Modify the `CHUNK_SIZE` calculation to customize chunk sizes.

---

## 📦 Dependencies

- [Express](https://expressjs.com/): Web framework for Node.js.
- [@google-cloud/storage](https://www.npmjs.com/package/@google-cloud/storage): GCP Storage client library.

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 💡 Inspiration

This project is designed to simplify the process of uploading large files to GCP, making it accessible and efficient for developers. Happy coding! 🎉