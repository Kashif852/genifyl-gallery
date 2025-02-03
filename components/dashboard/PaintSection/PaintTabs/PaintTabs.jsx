"use client"
import React, { useEffect, useState } from 'react';
import styles from './PaintTabs.module.css';


const PaintTabs = ({paint_categories, openTab, activeTab}) => {
  
  return (
    <>
    <div className={styles.tabsContainer}>
          
      <div className={styles.tabs}>
      {paint_categories && paint_categories.map((c) => (
            <a
              key={c}
              className={`${styles.tabButton} ${
                activeTab === c ? styles.active : ""
              }`}
              onClick={() => openTab(c)}
            >
              {c}
            </a>
          ))}
      </div>

    </div>
    </>
  );
};

export default PaintTabs;