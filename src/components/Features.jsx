import { CheckCircle2 } from "lucide-react";
import Astronaut from "../assets/taxi-welcome-to-space-1.png";
import Robot from "../assets/taxi-robot-measuring-the-length-of-pumpkin-harvest.png";
import "./Features.css";

const Features = () => (
  <section className="features">
    <div className="feature-highlight">
      <img src={Astronaut} alt="Boost Productivity" />
      <div className="feature-content">
        <h2>Boost Productivity</h2>
        <p>
          Build an atmosphere that creates productivity in your organization and
          your company culture.
        </p>
        <ul>
          {[
            "Maximize productivity and growth",
            "Speed past your competition",
            "Learn the top techniques",
          ].map((item) => (
            <li key={item}>
              <CheckCircle2 className="check-icon" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="feature-highlight">
      <div className="feature-content">
        <h2>Automated Tasks</h2>
        <p>
          Save time and money with our revolutionary services. We are the
          leaders in the industry.
        </p>
        <ul>
          {[
            "Automated task management workflow",
            "Detailed analytics for your data",
            "Some awesome integrations",
          ].map((item) => (
            <li key={item}>
              <CheckCircle2 className="check-icon" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <img src={Robot} alt="Boost Productivity" />
    </div>
  </section>
);

export default Features;
