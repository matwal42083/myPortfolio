import React from "react";
import { Link } from "react-router-dom";

/**
 * 404 Catch-All Route Fallback (Edge Case 1)
 * Complies with [SDD-REQ-09].
 */
export default function NotFound() {
  return (
    <section className="page-section not-found-page">
      <h1>404 - Page Not Found</h1>
      <br />
      <h2>Error Page 404: Page Not Found</h2>
      <p>The portfolio route page you requested does not exist.</p>
      <Link to="/" className="btn-return-home">
        Return Home
      </Link>
    </section>
  );
}
