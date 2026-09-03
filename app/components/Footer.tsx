"use client";

import Link from "next/link";


export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-left">
          <p>
            Building digital solutions that help businesses grow
            through technology, design, and strategy.
          </p>

          <a href="#">
            GET IN TOUCH
          </a>
        </div>


        <div className="footer-links">

          <div>
            <h4>Explore</h4>
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </div>


          <div>
            <h4>Social</h4>
            <a href="#">Behance</a>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>

        </div>

      </div>


      {/* THIS MUST NOT BE INSIDE CONTAINER */}
      <div className="footer-word">
        FIXONIC
      </div>


      <div className="footer-copy">
        © 2026 Fixonic Solutions. All rights reserved.
      </div>

    </footer>
  );
}