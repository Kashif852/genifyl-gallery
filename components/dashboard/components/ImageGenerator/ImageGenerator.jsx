"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { toast } from "react-toastify";
import { Button, Spinner, Alert, Container, Row, Col, Image } from "react-bootstrap";
import { Wand2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  generateImage,
  selectGenerationLoading,
  selectGenerationError,
  selectGeneratedImage,
  fetchUserCredits,
  useCredits,
  selectUserCredits,
  selectPrompt,
} from "../../../../redux/slices/uiSlice";
import ImageGeneratorTabs from "./Tabs/ImageGeneratorTabs";
import ImageUpload from "./ImageUpload/ImageUpload";
import styles from "../../styles/Buttons.module.css";
import GalleryImages from "../DashboardGallery/GalleryImages/GalleryImages"
const AIImageTool = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  
  const loading = useSelector(selectGenerationLoading);
  const error = useSelector(selectGenerationError);
  const generatedImage = useSelector(selectGeneratedImage);
  const credits = useSelector(selectUserCredits);
  const prompt = useSelector(selectPrompt)
  const isotopContainer = useRef(null);
  const [isotopeInitialized, setIsotopeInitialized] = useState(false);
  const [isotopeInstance, setIsotopeInstance] = useState(null);

  const handleGenerate = async () => {
    if (!file) {
      alert("Please upload an image first");
      return;
    }
    if(!prompt){
      alert("Please select prompt first");
      return;
    }
    const submitData = new FormData();
    submitData.append("image", file);
    // submitData.append("prompt", prompt);
    submitData.append("prompt", JSON.stringify({ prompt }));
    try {
      const isSufficietCredit = (credits-1) !== 0;
      if(isSufficietCredit){
        await dispatch(generateImage(submitData)).unwrap();
        await dispatch(useCredits()).unwrap();
        await dispatch(fetchUserCredits()).unwrap();
      }else{
        alert("You don’t have enough credits to complete this action. Please add more credits.");
      }
      
    } catch (error) {
      console.error("Generation failed:", error);
    }
  };

  const initIsotop = useCallback(async () => {
      if (typeof window === 'undefined' || !isotopContainer.current || isotopeInitialized) return;
  
      try {
        const [{ default: Isotope }, { default: imagesloaded }] = await Promise.all([
          import("isotope-layout"),
          import("imagesloaded")
        ]);
  
        const imgLoad = imagesloaded(isotopContainer.current);
        
        imgLoad.on('done', () => {
          const iso = new Isotope(isotopContainer.current, {
            itemSelector: ".element-item",
            layoutMode: "masonry",
            transitionDuration: '0.4s'
          });
          setIsotopeInstance(iso);
          setIsotopeInitialized(true);
        });
  
        imgLoad.on('fail', (error) => {
          console.error('Image load failed:', error);
        });
  
      } catch (error) {
        console.error('Error initializing Isotope:', error);
      }
    }, [isotopeInitialized]);

    useEffect(() => {
      if (generatedImage?.length > 0 && !isotopeInitialized) {
        if (isotopeInstance) {
          isotopeInstance.destroy();
        }
        initIsotop();
      }
  
      return () => {
        if (isotopeInstance) {
          isotopeInstance.destroy();
          setIsotopeInstance(null);
        }
      };
    }, [generateImage, isotopeInitialized, isotopeInstance, initIsotop]);
  return (
    <Container fluid>
      <div className="col-12" >
        <div className="heading-section wow fadeInUp style-2 text-center">
          <div className="main-title">
            Sketch Your <span className="animation-text tf-color-blue">Reality</span>
          </div>
        </div>
      </div>

      {/* Image Upload Section */}
      <Row >
        <Col>
          <ImageUpload setFile={setFile} />
        </Col>
      </Row>

      {/* Image Generator Tabs */}
      <Row className="mt-4">
        <Col>
          <ImageGeneratorTabs  />
        </Col>
      </Row>

      {/* Generate Button */}
      {/* <Row className="mt-4">
        <Col>
          <Button
            onClick={handleGenerate}
            variant="primary"
            className="w-100 d-flex align-items-center justify-content-center"
            disabled={loading || !file}
            style={{background: "#1a237e", fontSize: "1.5rem"}}
          >
            {loading ? (
              <>
                <Spinner animation="border" size="sm" className="me-2" />
                Generating...
              </>
            ) : (
              <>
                <Wand2 size={16} className="me-2" style={{marginRight: "2rem"}}/>
                Generate Image
              </>
            )}
          </Button>
        </Col>
      </Row> */}
      <Row className="mt-4">
  <Col>
    <Button
      onClick={handleGenerate}
      className={`${styles.generateButton} w-100`}
      disabled={loading || !file}
    >
      {loading ? (
        <>
          <Spinner animation="border" size="sm" className={styles.spinner} />
          Generating...
        </>
      ) : (
        <>
          <Wand2 size={20} className={styles.icon} />
          Generate Image
        </>
      )}
    </Button>
  </Col>
</Row>;

      {/* Generated Image Display */}
      
      <Row style={{marginTop: "4rem"}}>
      {generatedImage.length > 0 && <GalleryImages isotopContainer={isotopContainer} galleryImages={generatedImage} openModal={() => {}}/>}
      </Row>

      {/* Error Alert */}
      {error && (
        <Row className="mt-3">
          <Col>
            <Alert variant="danger">{error}</Alert>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default AIImageTool;