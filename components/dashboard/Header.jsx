'use client';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar, selectUserCredits, fetchUserCredits } from '../../redux/slices/uiSlice';
import { Menu, Bell } from 'lucide-react';
import CreditDisplay from "./components/DisplayCredit/DisplayCredit";
import styles from './styles/Header.module.css';
import Link from "next/link";
const Header = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state?.ui?.isSidebarOpen);
  const credits = useSelector(selectUserCredits);

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        await dispatch(fetchUserCredits()).unwrap();
      } catch (error) {
        console.error('Failed to fetch credits:', error);
      }
    };
    
    fetchCredits();

  }, [dispatch]);

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className={`${styles.headerWrapper} ${!isSidebarOpen ? styles.full : ''}`}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <button className={styles.menuButton} onClick={handleToggle}>
            <Menu size={20} />
          </button>
        { !isSidebarOpen && <div
            id="site-logo-inner"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Link
              href={`/`}
              rel="home"
              className="main-logo"
              style={{
                display: "inline-block",
                textDecoration: "none",
                fontSize: "3rem",
                fontWeight: "bold",
                color: "#6844ed", // A color that matches the blue in your logo
              }}
            >
              genifyl
            </Link>
          </div> }
        </div>

        <div className={styles.headerRight}>
          <div className={styles.userActions}>

            <div className={styles.creditsContainer}>
              <span>Available Credits: </span>
              <span className={styles.creditValue}>{credits ?? 0}</span>
            </div>

            {/* <div className={styles.userProfile}>
            <span className={styles.userName}>Kashif Hussain</span>
              <img
                src="https://ik.imagekit.io/igwjlcyu8dw/profile_A5A8Zc6-I.jpeg?updatedAt=1685552634891"
                alt="Kashif Hussain"
                className={styles.avatar}
              />
              
            </div> */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;