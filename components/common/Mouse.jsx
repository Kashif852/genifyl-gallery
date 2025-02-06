"use client";

// import { addMouse } from "@/utlis/addMouse";
import { useEffect } from "react";

export default function Mouse() {
  useEffect(() => {
    // addMouse();
  }, []);
  return (
    <>
      <div className="tf-mouse tf-mouse-outer"></div>
      <div className="tf-mouse tf-mouse-inner"></div>
    </>
  );
}
