import React from "react";
import { profileData, skillsData } from "../data/portfolioData";
import CodecademyLogo from "../assets/images/CodecademyLogo2.png";
import FullstackAcademyLogo from "../assets/images/FullstackAcademyLogo.png";
import SololearnLogo from "../assets/images/img-1.png";
import FreeCodeCampLogo from "../assets/images/freeCodeCampLogo.jpg";

/**
 * Developer biography and categorized skills matrix.
 * Complies with [SDD-REQ-06] rendering profile bio and mapping over skillsData categories.
 */
export default function About() {
  const [hardSkills, aiSkills, systemsSkills] = skillsData;

  return (
    <section className="page-section about-page">
      {/* Row 1: Bio 1 (left) + Hard Skills (right) */}
      <div className="about-intro">
        <div className="bioContent">
          <h1>About & Technical Skills</h1>
          <p className="about-bio">{profileData.bio}</p>
        </div>

        <article className="skill-card featured-skills">
          <h2 className="category-title">{hardSkills.category}</h2>
          <ul className="skill-list">
            {hardSkills.items.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </article>
      </div>

      {/* Row 2: AI & Testing (left) + Bio 2 (right) */}
      <div className="about-row-ai">
        <article className="skill-card ai-skills">
          <h2 className="category-title">{aiSkills.category}</h2>
          <ul className="skill-list">
            {aiSkills.items.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </article>

        <div className="bioContent bio2">
          <p className="about-bio">{profileData.bio_2}</p>
        </div>
      </div>

      {/* Row 3: Bio 3 (left) + Systems Card (right, pushed down) */}
      <div className="about-row-systems">
        <div className="bioContent bio3">
          <p className="about-bio">{profileData.bio_3 || ""}</p>
        </div>

        <article className="skill-card systems-skills">
          <h2 className="category-title">{systemsSkills.category}</h2>
          <ul className="skill-list">
            {systemsSkills.items.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
