import "./LandingPage.css";
import Blog from "./components/Blog";
import Features from "./components/Features";
import FeaturesGrid from "./components/FeaturesGrid";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Team from "./components/Team";
import TrustedBy from "./components/TrustedBy";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Trusted By Section */}
      <TrustedBy />

      {/* Features Section */}
      <Features />

      {/* Features Grid */}
      <FeaturesGrid />

      {/* Team Section */}
      <Team />

      {/* Blog Section */}
      <Blog />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
