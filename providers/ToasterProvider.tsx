"use client";

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return (
    <Toaster
      containerStyle={{
        backdropFilter: "#333",
        color: "#fff"
      }}
    />
  )
};

export default ToasterProvider;