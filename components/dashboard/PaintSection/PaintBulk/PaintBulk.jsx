"use client"
import React, {useState, useEffect} from 'react'
import {paint_bulk_categories, filterPaintingsBulkDataByCategory} from "../data/paint_data"
import ImageUpload from '../../components/ImageGenerator/ImageUpload/ImageUpload';
import PaintTabs from '../PaintTabs/PaintTabs';
import PaintGrid from "../PaintGrid/PaintGrid"
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import { Wand2 } from "lucide-react";
function PaintSingle() {
  const [generateButtonLoading, setGenerateButtonLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('Bulk_1');
  const [grid, setGrid] = useState(null);
  const [file, setFile] = useState(null)
  
  const openTab = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(()=>{
    const data = filterPaintingsBulkDataByCategory(activeTab)
    setGrid(data);
  },[])
  useEffect(()=>{
    const data = filterPaintingsBulkDataByCategory(activeTab)
    setGrid(data);
  },[activeTab])

  const handleImageClick = (image) =>{
    // alert("Image: "+JSON.stringify(image))
  }

  const handleGenerate = () =>{

  }
  return (
    <>
    <Container fluid>
    <ImageUpload setFile={setFile} />
    <div>
      <PaintTabs paint_categories={paint_bulk_categories} openTab={openTab} activeTab={activeTab}/>
      <PaintGrid images={grid} handleImageClick={handleImageClick} selectionType="bulkSelection"/>
    </div>
    
    <Row className="mt-4">
        <Col>
          <Button
            onClick={handleGenerate}
            variant="primary"
            className="w-100 d-flex align-items-center justify-content-center"
            disabled={generateButtonLoading || !file}
            style={{background: "rgb(104, 68, 237)"}}
          >
            {generateButtonLoading ? (
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
      </Row>
    </Container>
    </>
  )
}

export default PaintSingle