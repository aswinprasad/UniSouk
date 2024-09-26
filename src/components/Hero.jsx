import { ArrowRight } from "lucide-react";
import "./Hero.css";

const Hero = () => (
  <section className="hero">
    <h1>
      Start Crafting Your <br />
      <span className="highlight">Next Great Idea</span>
    </h1>
    <p>
      Simplify the creation of landing pages, blog posts, product pages, and
      many more.
    </p>
    <div className="cta-button-container">
      <button className="cta-button">
        Purchase Now <ArrowRight />
      </button>
      <div className="chip">only $15/mo</div>
    </div>
    <p className="learn-more">Learn More</p>
  </section>
);

export default Hero;
