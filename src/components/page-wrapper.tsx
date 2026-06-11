"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import MobilePage from "@/components/mobile-page";

const DesktopPage = dynamic(() => import("@/components/home-client"), {
  ssr: false,
});

export default function PageWrapper() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return isMobile ? <MobilePage /> : <DesktopPage />;
}
