'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSidebarOpen } from '@/redux/slices/uiSlice';
import Sidebar from './Sidebar';
import Header from './Header';
import styles from './styles/Dashboard.module.css';

export default function Dashboard({ children }) {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state?.ui?.isSidebarOpen);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (window.innerWidth <= 768) {
        const sidebar = document.querySelector(`.${styles.sidebar}`);
        const menuButton = document.querySelector(`.${styles.menuButton}`);
        if (sidebar && !sidebar.contains(e.target) && !menuButton?.contains(e.target)) {
          dispatch(setSidebarOpen(false));
        }
      }
    };

    const handleResize = () => {
      dispatch(setSidebarOpen(window.innerWidth > 768));
    };

    document.addEventListener('click', handleClickOutside);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  return (
    <div className="relative min-h-screen">
      <Sidebar />
      <div className={`${styles.headerWrapper} ${!isSidebarOpen ? styles.full : ''}`}>
        <Header />
      </div>
      <main className={`${styles.mainContent} ${!isSidebarOpen ? styles.full : ''}`} >
        {children}
      </main>
    </div>
  );
}