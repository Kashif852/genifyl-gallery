"use client"
import React, { useState } from 'react';
import styles from './Tabs.module.css';

const Tabs = ({ tabsConfig, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(tabsConfig[0]?.id || '');
  
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabs}>
        {tabsConfig.map((tab) => (
          <a
            key={tab.id}
            className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </a>
        ))}
      </div>

      {tabsConfig.map((tab) => (
        <div
          key={tab.id}
          className={`${styles.tabContent} ${activeTab === tab.id ? styles.active : ''}`}
        >
          {tab.component}
        </div>
      ))}
    </div>
  );
};

export default Tabs;