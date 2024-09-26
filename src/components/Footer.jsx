import { Dribbble, Facebook, Github, Instagram, Twitter } from "lucide-react";
import "./Footer.css";

const Footer = () => (
  <footer>
    <div className="footer-content">
      <div className="footer-section">
        <ul>
          <li>About</li>
          <li>Blog</li>
          <li>Team</li>
          <li>Pricing</li>
          <li>Contact</li>
          <li>Terms</li>
        </ul>
      </div>
      <div className="footer-socials">
        <Facebook size={24} />
        <Instagram size={24} />
        <Twitter size={24} />
        <Github size={24} />
        <Dribbble size={24} />
      </div>
    </div>
    <div className="footer-bottom">
      &copy; 2021 SomeCompany,Inc. All rights reserved.
    </div>
  </footer>
);

export default Footer;
