// ============================================================================
// FILE 11 OF 12: src/pages/NotFound.jsx
// [SDD-REQ-09] 404 Catch-All Route Fallback (Edge Case 1)
// ============================================================================

import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  // Step 1: Return a <section> element with className="page-section not-found-page"
    // Step 2: Render an <h1> displaying "404 - Page Not Found" (asserted by App.test.jsx)
    // Step 3: Render a <p> displaying "The portfolio route you requested does not exist."
    // Step 4: Render a <Link to="/" className="btn-return-home"> displaying "Return Home" (asserted by App.test.jsx)
}

// LIVE HMR CHECK: Add <Route path="*" element={<NotFound />} /> in src/App.jsx and visit an unknown path to verify the 404 fallback and "Return Home" link live!
// NEXT STEP: Finalize AppRoutes in src/App.jsx (File 12 of 12) and run `npx jest --watchAll=false`!
