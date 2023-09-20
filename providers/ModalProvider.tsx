"use client";

import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";
import { useState, useEffect } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [])

  // if(!isMounted === true) Then --> Whatever is been render right now is 
  // server side rendering, so just return null for that;
  if(!isMounted) {
    return null;
  }

  // if(!isMounted === false) otherwise return all of our Modals;
  return (
    <>
      <AuthModal/>
      <UploadModal/>
    </>
  );
}

export default ModalProvider