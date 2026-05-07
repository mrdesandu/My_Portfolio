"use client"; // Meka aniwaryayen danna oni window object eka access karanna

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // Browser eken auto scroll wena eka nawattanawa
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    
    // Page eka load weddim top ekata scroll karanawa
    window.scrollTo(0, 0);
  }, []);

  // Meken UI ekata kisi deyak render wenne na
  return null; 
}