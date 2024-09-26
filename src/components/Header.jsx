import { SearchIcon } from "lucide-react";
import "./Header.css";

const Header = () => (
  <>
    <header>
      <div className="logo">nullBrains.</div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
        <a href="#">
          <SearchIcon size={15} />
        </a>
      </nav>
      <div className="cta-buttons">
        <button className="sign-in">Sign In</button>
        <button className="start-free">Sign Up</button>
      </div>
    </header>
    <hr className="horizontal-line" />
  </>
);

export default Header;
