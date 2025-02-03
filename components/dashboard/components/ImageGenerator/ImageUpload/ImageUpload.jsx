"use client";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Container, Row, Col, Button, Image, Alert } from "react-bootstrap";
import styles from "./ImageUpload.module.css"; // Import scoped CSS for styling

const ImageUpload = ({ setFile }) => {
  const [file, setLocalFile] = useState(null);
  const [error, setError] = useState("");

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const uploadedFile = acceptedFiles[0];
      if (uploadedFile.type.startsWith("image/")) {
        setLocalFile(Object.assign(uploadedFile, { preview: URL.createObjectURL(uploadedFile) }));
        setFile(uploadedFile); // Call parent function
        setError("");
      } else {
        setError("Only image files are supported.");
      }
    }
  };

  const removeFile = () => {
    setLocalFile(null);
    setFile(null); // Clear the file in the parent component
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: "image/*",
  });

  return (
    <Container fluid className={`${styles.uploadContainer}`} style={{marginBottom: "2rem"}}>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <div
            {...getRootProps()}
            className={`${styles.dropzone} ${isDragActive ? styles.active : ""}`}
          >
            <input {...getInputProps()} />
            {!file ? (
              <p className={styles.placeholder}>
                {isDragActive
                  ? "Drop the image here..."
                  : "Drag & drop an image, or click to select one"}
              </p>
            ) : (
              <div className={styles.previewContainer}>
                <Image
                  src={file.preview}
                  alt="Preview"
                  fluid
                  className={styles.previewImage}
                />
                <Button variant="outline-danger" onClick={removeFile} className={styles.removeButton}>
                  Remove File
                </Button>
              </div>
            )}
          </div>
          {error && <Alert variant="danger" className={styles.errorAlert}>{error}</Alert>}
        </Col>
      </Row>
    </Container>
  );
};

export default ImageUpload;
