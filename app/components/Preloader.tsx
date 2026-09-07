"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const startTime = Date.now();

    const finish = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 900 - elapsed);

      setTimeout(() => {
        setClosing(true);

        setTimeout(() => {
          setVisible(false);
        }, 500);
      }, remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);

      return () => {
        window.removeEventListener("load", finish);
      };
    }
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className={`preloader ${closing ? "preloader-closing" : ""}`}>

      <div className="preloader-content">

        <div className="preloader-logo">

          <Image
            src="/images/logo.png"
            alt="Fixonic Solutions"
            width={180}
            height={70}
            priority
          />

        </div>


        <div className="preloader-bottom">

          <span>LOADING</span>

          <div className="preloader-line">
            <div className="preloader-progress"></div>
          </div>

        </div>

      </div>

    </div>
  );
}