"use client"
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Nav, Tab, TabContainer, TabContent, TabPane } from "react-bootstrap";
import styles from "./ImageGeneratorTabs.module.css"; // Import scoped CSS
import Tab1 from "./TabContent/Tab1";
import Tab2 from "./TabContent/Tab2/Tab2";
import { ImageSelect } from "@/data/workItems";
import { useDispatch } from "react-redux";
import { setPrompt } from "@/redux/slices/uiSlice";
import Tabs from "../../ReusableTabs/Tabs"

function ImageGeneratorTabs() {
  const [mainTabKey, setMainTabKey] = useState('tab1')
  const dispatch = useDispatch();
  const handleTabSelect = (key) => {
    setMainTabKey(key)
    dispatch(setPrompt(''))
  };

  const tabsConfig = [
    { id: 'Quick Picks', label: 'Quick Picks', component: <Tab2 images={ImageSelect} mainTab={mainTabKey} />},
    { id: 'Design Builder', label: 'Design Builder', component: <Tab1   mainTabKey={mainTabKey}/> }
  ];
  return (
    <>
      {/* <Row>
        <Col>
          <TabContainer defaultActiveKey="tab1"  onSelect={handleTabSelect}>
            <Nav variant="tabs" className={`${styles.genifylTabs} nav-tabs`}>
              <Nav.Item style={{padding: "0px"}}>
                <Nav.Link
                  eventKey="tab1"
                  className={`${styles.genifylTab} nav-link`}
                >
                  Quick Picks
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="tab2"
                  className={`${styles.genifylTab} nav-link`}
                >
                  Design Builder
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <TabContent>
              <TabPane eventKey="tab2">
                <div className={styles.genifylTabContent}>
                  <Tab1   mainTabKey={mainTabKey}/>
                </div>
              </TabPane>
              <TabPane eventKey="tab1">
                <div className={styles.genifylTabContent}>
                  <Tab2 images={ImageSelect} mainTab={mainTabKey} />
                </div>
              </TabPane>
            </TabContent>
          </TabContainer>
        </Col>
      </Row> */}
      <Row >
        <Col >
          <Tabs tabsConfig={tabsConfig} onTabChange={handleTabSelect} />
        </Col>
      </Row>
    </>
  );
}

export default ImageGeneratorTabs;
