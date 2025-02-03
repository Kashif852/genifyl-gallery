"use client";

import React, { useEffect } from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const WhatsAppWidget: React.FC = () => {
  useEffect(() => {
    // Check if the global function exists
    if (typeof window !== 'undefined' && window.initWhatsAppWidget) {
      window.initWhatsAppWidget({
        whatsapp: "+17278333236",
        call_to_action: "Chat with us on WhatsApp",
        position: "right"
      });
    }
  }, []);

  return (
    <FloatingWhatsApp
      phoneNumber="+17278333236"
      accountName="Cartoonify AI Support"
      avatar="https://ik.imagekit.io/igwjlcyu8dw/Screenshot%202024-11-10%20at%2012.46.39%E2%80%AFAM_EZ-UnXLIh.png?updatedAt=1731181623576"
      statusMessage="Typically replies within 5-10 minutes"
      chatMessage="👋 Hi there! Welcome to Cartoonify AI. Ready to create amazing cartoon art for your merchandise or gifts? Let us know how we can assist!"
      notification={true}
      notificationDelay={60}
    />

  );
};

export default WhatsAppWidget;