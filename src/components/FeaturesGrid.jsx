import {
  Box,
  FileBadge,
  Megaphone,
  Smile,
  SquareTerminal,
  Ticket,
} from "lucide-react";
import "./FeaturesGrid.css";

const features = [
  {
    name: "Certifications",
    description:
      "Each of our plan will provide you and your team with certifications.",
    icon: <FileBadge />,
  },
  {
    name: "Notifications",
    description:
      "Send out notifications to all your customers to keep them engaged.",
    icon: <Megaphone />,
  },
  {
    name: "Bundles",
    description: "High-quality bundles of awesome tools to help you out.",
    icon: <Box />,
  },
  {
    name: "Developer Tools",
    description:
      "Developer tools to help grow your application and keep it up-to-date.",
    icon: <SquareTerminal />,
  },
  {
    name: "Building Blocks",
    description:
      "The right kind of building blocks to take your company to the next level.",
    icon: <Smile />,
  },
  {
    name: "Coupons",
    description:
      "Coupons system to provide special offers and discounts for your app.",
    icon: <Ticket />,
  },
];

const FeaturesGrid = () => (
  <section className="features-grid">
    <h2>Our Features</h2>
    <p>Check out our list of awesome features below.</p>
    <div className="grid">
      {features.map((feature) => (
        <div key={feature} className="feature-card">
          <div className="feature-icon">{feature.icon}</div>
          <h3>{feature.name}</h3>
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesGrid;
