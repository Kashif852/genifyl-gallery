"use client";
import { useEffect, useState } from "react";
import "../public/assets/css/main.css";
import WhatsAppWidget from "@/utlis/WhatsAppWidget";


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
            {children}
            <div style={{height: "0"}}>
            <WhatsAppWidget/>
            </div>
      </body>
    </html>
  );
}