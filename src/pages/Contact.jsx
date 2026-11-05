// ============================================================================
// FILE 10 OF 12: src/pages/Contact.jsx
// [SDD-REQ-04 / SDD-REQ-09] Controlled Contact Form with Synchronous Validation
// ============================================================================

// Step 1a: Import React, { useState } from 'react'
// Step 1b: Import { validateContactForm } from '../utils/portfolioHelpers'

// Step 2: Declare and export default function Contact()
// Step 3a: Initialize a const with [formData, setFormData] equal to calling useState({ name: '', email: '', message: '' })
// Step 3b: Initialize a const with [errors, setErrors] equal to calling useState({})
// Step 3c: Initialize a const with [isSubmitted, setIsSubmitted] equal to calling useState(false)

// Step 4: Declare an arrow function named handleChange accepting event:
//   - Destructure property { name, value } from event.target
//   - Call setFormData((prev) => ({ ...prev, [name]: value }))

// Step 5: Declare an arrow function named handleSubmit accepting event:
//   - Call event.preventDefault()
//   - Initialize a const with validation equal to calling validateContactForm(formData)
//   - If condition NOT validation.isValid (!validation.isValid):
//       - Call setErrors(validation.errors)
//       - Call setIsSubmitted(false)
//       - Return early
//   - Else (valid):
//       - Call setErrors({})
//       - Call setIsSubmitted(true)

// Return these following JSX elements:
// Step 6: Render a <section> element with className="page-section contact-page"
// Step 7: Inside <section>, render an <h1> heading displaying text 'Contact & Hiring Inquiries'
// Step 8: Use logical AND: if condition isSubmitted is true, render a <div className="submission-success" role="status"> displaying text 'Thank you for reaching out! Your message has been validated and prepared.'
// Step 9: Render a <form onSubmit={handleSubmit} noValidate aria-label="Contact Form"> containing 3 input groups:
//   - Group 1 (Name):
//       - <label htmlFor="contact-name">Name</label>
//       - <input id="contact-name" name="name" type="text" value={formData.name} onChange={handleChange} />
//       - Logical AND: {errors.name && <p role="alert">{errors.name}</p>}
//   - Group 2 (Email):
//       - <label htmlFor="contact-email">Email</label>
//       - <input id="contact-email" name="email" type="email" value={formData.email} onChange={handleChange} />
//       - Logical AND: {errors.email && <p role="alert">{errors.email}</p>}
//   - Group 3 (Message):
//       - <label htmlFor="contact-message">Message</label>
//       - <textarea id="contact-message" name="message" rows="4" value={formData.message} onChange={handleChange} />
//       - Logical AND: {errors.message && <p role="alert">{errors.message}</p>}
//   - Submit Button: <button type="submit" className="btn-primary">Send Message</button>

// LIVE HMR CHECK: Click "Contact" in the Navbar to test live form validation!
// NEXT STEP: Once Contact renders cleanly on screen, open src/pages/NotFound.jsx
