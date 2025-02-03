'use client'
import React, { useState } from 'react';
import { Row, Col, Nav, TabContainer, TabContent, TabPane } from 'react-bootstrap';
import styles from './../../ImageGeneratorTabs.module.css';
import NestedTabs from './NestedTabs/NestedTabs';
import { selectPrompt, setPrompt } from '@/redux/slices/uiSlice';
import { useDispatch, useSelector } from 'react-redux';
import Tabs from "../../../../ReusableTabs/Tabs"
function Tab2({mainTab}) {
  const [activeTab, setActiveTab] = useState('Male');
  const dispatch = useDispatch();
  const prompt = useSelector(selectPrompt);

  const handleTabSelect = (key) => {
    setActiveTab(key);
    dispatch(setPrompt(''))
  };
  const tabsConfig = [
    { id: 'Male', label: 'Male', component: <NestedTabs tabType={activeTab} key={`tab-${activeTab}-male`} />},
    { id: 'Female', label: 'Female', component: <NestedTabs tabType={activeTab}  mainTab={mainTab}/> }
  ];
  return (
   <>
    {/* <Row>
      <Col>
        <TabContainer defaultActiveKey="Male" onSelect={handleTabSelect} activeKey={activeTab}>
          <Nav variant="tabs" className={`${styles.genifylTabs} nav-tabs`}>
            <Nav.Item style={{ padding: "0px" }}>
              <Nav.Link eventKey="Male" className={`${styles.genifylTab} nav-link`}>
                Male
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Female" className={`${styles.genifylTab} nav-link`}>
                Female
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <TabContent>
            <TabPane eventKey="Male">
              <div className={styles.NestedgenifylTabContent}>
                <NestedTabs tabType={activeTab} key={`tab-${activeTab}-male`} />
              </div>
            </TabPane>
            <TabPane eventKey="Female">
              <div className={styles.NestedgenifylTabContent}>
                <NestedTabs tabType={activeTab}  mainTab={mainTab}/>
              </div>
            </TabPane>
          </TabContent>
        </TabContainer>
      </Col>
    </Row> */}
    <Row >
        <Col className="md-12" >
          <Tabs tabsConfig={tabsConfig} onTabChange={handleTabSelect} />
        </Col>
      </Row>
   </>
  );
}

export default Tab2;