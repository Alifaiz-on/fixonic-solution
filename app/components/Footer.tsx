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

          <a href="/contact">
            GET IN TOUCH
          </a>
        </div>


        <div className="footer-links">

          <div>
            <h4>Explore</h4>
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
          </div>


          <div>
            <h4>Social</h4>
            <a href="https://api.whatsapp.com/send/?phone=923154928521">Whatsapp</a>
            <a href="https://www.facebook.com/fixonicsolutions">Facebook</a>
            <a href="https://www.instagram.com/fixonicsolutions/">Instagram</a>
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