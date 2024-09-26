import { Github, Twitter } from "lucide-react";
import "./Team.css";

const members = [
  { name: "Freddy Smith", role: "CEO and Founder" },
  { name: "Carl Jones", role: "CTO and Co-Founder" },
  { name: "Susan Peterson", role: "Marketing Directory" },
  { name: "Tommy Barnes", role: "Designer" },
  { name: "Ron Jenson", role: "Senior Developer" },
  { name: "Pete Thompson", role: "Web Developer" },
  { name: "Kelly Richards", role: "Sales Manager" },
  { name: "Alexis Jordan", role: "Affiliate Manager" },
];

const TeamMember = ({ name, role }) => (
  <div className="team-member">
    <div className="member-photo"></div>
    <h3>{name}</h3>
    <p>{role}</p>
    <div className="social-icons">
      <Twitter size={20} />
      <Github size={20} />
    </div>
  </div>
);

const Team = () => (
  <section className="team">
    <div className="team-header">
      <p>OUR TEAM</p>
      <h2>An incredible team of amazing individuals</h2>
    </div>
    <div className="team-grid">
      {members.map((member) => (
        <TeamMember key={member.name} {...member} />
      ))}
    </div>
  </section>
);

export default Team;
