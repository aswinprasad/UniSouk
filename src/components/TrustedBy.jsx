import "./TrustedBy.css";
import Google from "../assets/Google.svg";
import Instagram from "../assets/Instagram.svg";
import Youtube from "../assets/Youtube.svg";
import Microsoft from "../assets/Microsoft.svg";
import Netflix from "../assets/Netflix.svg";
import Disney from "../assets/Disney.svg";

const companies = [
  { src: Google, alt: "Google" },
  { src: Instagram, alt: "Instagram" },
  { src: Youtube, alt: "Youtube" },
  { src: Microsoft, alt: "Microsoft" },
  { src: Netflix, alt: "Netflix" },
  { src: Disney, alt: "Disney" },
];

const CompanyLogo = ({ src, alt }) => (
  <div className="company-logo">
    <img src={src} alt={alt} style={{ height: 100, width: 100 }} />
  </div>
);

const TrustedBy = () => (
  <section className="trusted-by">
    <h2>TRUSTED BY TOP-LEADING COMPANIES</h2>
    <div className="company-logos">
      {companies.map(({ src, alt }) => (
        <CompanyLogo key={alt} src={src} />
      ))}
    </div>
  </section>
);

export default TrustedBy;
