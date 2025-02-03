"use client";
import { useEffect, useState } from "react";
import "../public/assets/css/main.css";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import { ReduxProvider } from '../redux/reduxProvider';
import WhatsAppWidget from "@/utlis/WhatsAppWidget";

function ClientLayout({ children }) {
  const path = usePathname();

  useEffect(() => {
    const { WOW } = require("wowjs");
    const wow = new WOW({
      live: false,
      mobile: true,
    });
    wow.init();
  }, [path]);

  return children;
}

export default function RootLayout({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <html lang="en">
      <body>
      
        <ReduxProvider>
          {/* <ClientLayout> */}
          {/* <ToastContainer /> */}
            {/* <WhatsAppWidget />*/}
            {children}
          {/* </ClientLayout> */}
        </ReduxProvider>
      </body>
    </html>
  );
}