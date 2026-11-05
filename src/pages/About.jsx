import React from "react";
import { profileData, skillsData } from "../data/portfolioData";

/**
 * Developer biography and categorized skills matrix.
 * Complies with [SDD-REQ-06] rendering profile bio and mapping over skillsData categories.
 */
export default function About() {
  return (
    <section className="page-section about-page">
     <div>
      <h1>About & Technical Skills</h1>
      <p className="about-bio">{profileData.bio}</p>
      </div>
      <div>
        <img src="./assets/images/CodecademyLogo.png"></img>
      </div>
      <div className="skills-grid">
        {skillsData.map((group) => (
          <article key={group.category} className="skill-card">
            <h2 className="category-title">{group.category}</h2>
            <ul className="skill-list">
              {group.items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
