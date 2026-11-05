import React from "react";
import { Link } from "react-router-dom";
import { profileData } from "../data/portfolioData";
import HeroImage from "../assets/matwalPic.jpg";

/**
 * Portfolio landing view featuring intro banner, recruiter CTAs, and highlight metrics.
 * Complies with [SDD-REQ-06] linking directly to Project Gallery and Credentials views.
 */
export default function Home() {
  return (
    <section className="page-section home-page">
      <div className="hero-banner" id="hero">
        <p className="hero-role">{profileData.role}</p>
        <br />
        <div className="hero-image-backdrop">
        <img
          className="hero-image"
          src={HeroImage}
          alt="Matthew Walters - Web Application Developer"
        />
        </div>
        <h1>{profileData.name}</h1>
        <p className="hero-tagline">{profileData.tagline}</p>
        <div className="hero-cta-group">
          <Link to="/projects" className="btn-primary">
            Explore Project Gallery
          </Link>
          <Link to="/credentials" className="btn-secondary">
            View Resume & Credentials
          </Link>
        </div>
        <div className="highlights-strip" id="highlights">
          <div className="highlights-stat">
            <strong>2+</strong>
            <span>Showcased Projects & GitHub Repos</span>
          </div>
          <div className="highlights-stat">
            <strong>3</strong>
            <span>Development Certifications</span>
          </div>
        </div>
      </div>
    </section>
  );
}
