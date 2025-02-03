'use client';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { logout } from '../../redux/slices/authSlice';
import { setActiveTab } from '../../redux/slices/uiSlice';
import styles from './styles/Dashboard.module.css';
import { LayoutDashboard, Brain, Image, Brush, LogOut} from 'lucide-react';

const icons = {
  LayoutDashboard,
  Brain,
  Image,
  Brush
};
// const menuItems = [
//   { 
//     icon: 'LayoutDashboard', 
//     label: 'Dashboard', 
//     href: '/dashboard',
//   },
//   { 
//     icon: 'Brain', 
//     label: 'Genifyl', 
//     href: '/dashboard/genifyl',
//   },
//   { 
//     icon: 'Brush', 
//     label: 'Digital Canvas', 
//     href: '/dashboard/painting',
//   },
//   { 
//     icon: 'Image', 
//     label: 'Gallery', 
//     href: '/dashboard/gallery',
//   }
// ];

const menuItems = [
  { 
    icon: 'LayoutDashboard', 
    label: 'Dashboard', 
    href: '/dashboard',
  },
  { 
    icon: 'Brain', 
    label: 'Genifyl', 
    href: '/dashboard/genifyl',
  },
  { 
    icon: 'Brush', 
    label: 'Digital Canvas', 
    href: '/dashboard/painting//single',
    // subItems: [
    //   {
    //     label: 'Single Generation',
    //     href: '/dashboard/painting/single'
    //   },
    //   {
    //     label: 'Bulk Generation',
    //     href: '/dashboard/painting/bulk'
    //   }
    // ]
  },
  { 
    icon: 'Image', 
    label: 'Gallery', 
    href: '/dashboard/gallery',
  }
];
const Sidebar = () => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const isSidebarOpen = useSelector((state) => state?.ui?.isSidebarOpen);
  const activeTab = useSelector((state) => state?.ui?.activeTab);

  useEffect(() => {
    // Always sync with current pathname
    dispatch(setActiveTab(pathname));
    try {
      localStorage.setItem('activeTab', pathname);
    } catch (error) {
      console.error('Error saving tab state:', error);
    }
  }, [pathname, dispatch]);

  const handleTabClick = (href) => {
    try {
      dispatch(setActiveTab(href));
      localStorage.setItem('activeTab', href);
    } catch (error) {
      console.error('Error saving tab state:', error);
    }
  };


  const handleLogout = async (router) => {
    try {
      await dispatch(logout()).unwrap();
      window.location.href = '/login';
    } catch (error) {
      console.error('Logout failed:', error);
      // Still redirect to login even if logout fails
      window.location.href = '/login';
    }
  };


  const isActiveLink = (href) => {
    try {
      if (href === '/dashboard') {
        return activeTab === href;
      }
      return activeTab?.startsWith(href) || false;
    } catch (error) {
      console.error('Error checking active link:', error);
      return false;
    }
  };

  return (
    <nav className={`${styles.sidebar} ${!isSidebarOpen ? styles.closed : ''}`}>
      <div className={styles.sidebarContent}>
        <div  style={{display: "flex", flexDirection: "column", alignItems: "center",textAlign: "center", marginBottom: "7rem"}}>
          <Link
              href={`/`}
              rel="home"
              className="main-logo"
              style={{
                display: "inline-block",
                textDecoration: "none",
                fontSize: "3rem",
                fontWeight: "bold",
                color: "#6844ed",
              }}
            >
              genifyl
            </Link>
        </div>
        
        <div className={styles.menuWrapper}>
          <ul className={styles.navMenu} style={{fontSize: '1.5rem'}}>
          {menuItems.map((item) => (
              <li key={item.href} className={styles.navItem}>
                <Link 
                  href={!item.subItems ? item.href : '#'}
                  className={`${styles.navLink} ${isActiveLink(item.href) && !item.subItems ? styles.active : ''}`}
                  onClick={(e) => handleTabClick(item.href, e)}
                >
                  <div className={styles.iconWrapper}>
                    {React.createElement(icons[item.icon], { size: 24 })}
                  </div>
                  <span>{item.label}</span>
                </Link>
                {item.subItems && (
                  <div className={styles.subMenu}>
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={`${styles.subMenuItem} ${isActiveLink(subItem.href) ? styles.active : ''}`}
                        onClick={(e) => handleTabClick(subItem.href, e)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <a onClick={handleLogout} className={styles.logoutButton}>
        <div className={styles.iconWrapper}>
        <LogOut />
        </div>
        <span>Logout</span>
      </a>
    </nav>
  );
};

export default Sidebar;