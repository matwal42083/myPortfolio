// ============================================================================
// FILE 10 OF 12: src/pages/Contact.jsx
// [SDD-REQ-04 / SDD-REQ-09] Controlled Contact Form with Synchronous Validation
// ============================================================================

// import React, { useState } from 'react';
// import { validateContactForm } from '../utils/portfolioHelpers';

//export default function Contact() {
// Step 1: Initialize state for formData using useState({ name: '', email: '', message: '' }) -> [formData, setFormData]
// Step 2: Initialize state for errors using useState({}) -> [errors, setErrors]
// Step 3: Initialize state for isSubmitted using useState(false) -> [isSubmitted, setIsSubmitted]

// Step 4: Declare an arrow function named handleChange that accepts event:
// - Destructure { name, value } from event.target
// - Call setFormData((prev) => ({ ...prev, [name]: value }))

// Step 5: Declare an arrow function named handleSubmit that accepts event:
// - Call event.preventDefault()
// - Initialize validation set equal to calling validateContactForm(formData)
// - If validation.isValid is false (Edge Case 4): call setErrors(validation.errors), call setIsSubmitted(false), and return early
// - If valid: call setErrors({}) and call setIsSubmitted(true)

// return (
// Step 6: Render a <section> element with className="page-section contact-page"
// Step 7: Render an <h1> displaying "Contact & Hiring Inquiries"
// Step 8: If isSubmitted is true, render a <div className="submission-success" role="status"> displaying "Thank you for reaching out! Your message has been validated and prepared."
// Step 9: Render a <form onSubmit={handleSubmit} noValidate aria-label="Contact Form"> containing three <div className="form-group"> blocks and a submit button:
// - Field 1 (Name): <label htmlFor="contact-name">Name</label>, <input id="contact-name" name="name" type="text" value={formData.name} onChange={handleChange} />, and {errors.name && <p role="alert">{errors.name}</p>}
// - Field 2 (Email): <label htmlFor="contact-email">Email</label>, <input id="contact-email" name="email" type="email" value={formData.email} onChange={handleChange} />, and {errors.email && <p role="alert">{errors.email}</p>}
// - Field 3 (Message): <label htmlFor="contact-message">Message</label>, <textarea id="contact-message" name="message" rows="4" value={formData.message} onChange={handleChange} />, and {errors.message && <p role="alert">{errors.message}</p>}
// - Submit Button: <button type="submit">Send Message</button>
//);
//}

// LIVE HMR CHECK: Add <Route path="/contact" element={<Contact />} /> in src/App.jsx and click "Contact" in the Navbar to test form validation alerts live!
// NEXT STEP: Once Contact renders cleanly on screen, open src/pages/NotFound.jsx
