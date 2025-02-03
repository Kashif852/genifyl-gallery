import React from 'react';
import { Modal } from 'react-bootstrap';
import Image from "next/image";
import { ArrowRight } from 'lucide-react';

const ImageModal = ({ show, onHide, selectedImage, onDownload }) => {
  if (!selectedImage) return null;

  return (
    <Modal
      size="xl"
      show={show}
      onHide={onHide}
      centered
      dialogClassName="modal-90w"
    >
      {/* <Modal.Header closeButton>
        <Modal.Title className="text-xl font-semibold">
        </Modal.Title>
      </Modal.Header> */}
      
      <Modal.Body className="p-0">
        <div className="overflow-hidden bg-gray-50">
          <div style={{ 
            position: 'relative',
            width: '100%',
            height: '600px',
            maxHeight: '70vh',
            margin: '0 auto'
          }}>
            <Image
              src={selectedImage?.generated_image_url}
              alt="Generated image"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              style={{ 
                objectFit: 'contain',
                padding: '0rem'
              }}
              priority
              quality={100}
            />
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer className="border-t bg-white flex justify-between items-center">
        <div className="text-sm text-gray-600">
          Created: {new Date(selectedImage?.created_at).toLocaleDateString()}
        </div>
        <button
          onClick={() => onDownload(selectedImage?.generated_image_url, selectedImage?.prompt)}
          id="download-button"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-lg transition-colors flex items-center gap-2 font-medium"
          style={{overflow: "hidden", height: "auto"}}
        >
          Download
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ImageModal;