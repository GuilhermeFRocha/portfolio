import React, { useRef, useEffect, useState } from "react";
import "../app.css"; // importa um arquivo CSS com as animações de transição

function ScrollTransition({ children }: any) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const top = ref?.current?.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight * 0.95) {
        // 80% da altura da janela
        setIsVisible(true);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-transition ${isVisible ? "is-visible" : ""}`}
    >
      {children}
    </div>
  );
}

export default ScrollTransition;