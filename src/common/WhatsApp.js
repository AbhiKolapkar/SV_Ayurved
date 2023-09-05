import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import favicon from "../assets/icons/favicon.svg";

const WhatsApp = () => {
  return (
    <>
      <FloatingWhatsApp
        accountName="SV Ayurved"
        phoneNumber="7588682035"
        avatar={favicon}
        statusMessage="We are available now"
        allowClickAway={true}
        notification={true}
        notificationSound={true}
      />
    </>
  );
};

export default WhatsApp;
