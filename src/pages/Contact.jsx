import React, { useState } from 'react';
import { validateContactForm } from '../utils/portfolioHelpers';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9+\-().\s]{3,}$/;

/**
 * Evaluates an individual field's validity (minimum 3 characters + format rules).
 */
function checkFieldValid(fieldName, rawValue) {
  const val = typeof rawValue === 'string' ? rawValue.trim() : '';
  if (val.length < 3) return false;

  if (fieldName === 'email') {
    return EMAIL_REGEX.test(val);
  }
  if (fieldName === 'phone') {
    return PHONE_REGEX.test(val);
  }
  return true;
}

/**
 * Controlled Contact Form with Synchronous Real-Time Visual Validation
 * Complies with [SDD-REQ-04 / SDD-REQ-09].
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [touched, setTouched] = useState({});
  const [hasSubmittedAttempt, setHasSubmittedAttempt] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // If the user clears the input back to empty, reset its touched/error state back to neutral
    if (value.trim().length === 0) {
      setTouched((prev) => ({ ...prev, [name]: false }));
    } else {
      setTouched((prev) => ({ ...prev, [name]: true }));
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    if (value.trim().length === 0) {
      setTouched((prev) => ({ ...prev, [name]: false }));
    }
  };

  const getFieldVisualState = (fieldName) => {
    const rawVal = formData[fieldName] || '';
    // Always reset back to neutral when there is nothing in the input field
    if (rawVal.trim().length === 0) {
      return 'neutral';
    }
    return checkFieldValid(fieldName, rawVal) ? 'valid' : 'invalid';
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setHasSubmittedAttempt(true);

    const firstValid = checkFieldValid('firstName', formData.firstName);
    const lastValid = checkFieldValid('lastName', formData.lastName);
    const combinedName =
      firstValid && lastValid
        ? `${formData.firstName.trim()} ${formData.lastName.trim()}`
        : '';

    const validation = validateContactForm({
      ...formData,
      name: combinedName,
    });

    if (!firstValid || !lastValid) {
      validation.isValid = false;
      validation.errors.name =
        'First name and Last name must each be at least 3 characters long.';
    }

    if (formData.phone.trim().length > 0 && !checkFieldValid('phone', formData.phone)) {
      validation.isValid = false;
      validation.errors.phone = 'Phone must be at least 3 valid characters.';
    }

    if (!validation.isValid) {
      setErrors(validation.errors);
      setIsSubmitted(false);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    });
    setTouched({});
    setHasSubmittedAttempt(false);
  };

  const renderValidationBadge = (state) => {
    if (state === 'valid') {
      return (
        <span className="validation-icon valid-icon" aria-hidden="true" title="Valid format">
          ✓
        </span>
      );
    }
    if (state === 'invalid') {
      return (
        <span className="validation-icon invalid-icon" aria-hidden="true" title="Invalid format (minimum 3 characters required)">
          ✗
        </span>
      );
    }
    return null;
  };

  const firstState = getFieldVisualState('firstName');
  const lastState = getFieldVisualState('lastName');
  const emailState = getFieldVisualState('email');
  const phoneState = getFieldVisualState('phone');
  const messageState = getFieldVisualState('message');

  return (
    <section className="page-section contact-page">
      <h1>Contact & Hiring Inquiries</h1>
      <p className="contact-intro">
        Interested in discussing a frontend or full-stack role, reviewing code, or collaborating on a project? Send a message below (all fields require at least 3 characters).
      </p>

      {isSubmitted && (
        <div className="submission-success" role="status">
          Thank you for reaching out! Your message has been validated and prepared.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate aria-label="Contact Form" className="contact-form">
        {/* First Name & Last Name Row */}
        <div className="form-row-two-col">
          <div className="form-field">
            <label htmlFor="contact-first-name">First Name:</label>
            <div className="input-validation-wrapper">
              <input
                id="contact-first-name"
                name="firstName"
                type="text"
                minLength={3}
                placeholder="Min. 3 characters"
                className={`validated-input input-${firstState}`}
                value={formData.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {renderValidationBadge(firstState)}
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="contact-last-name">Last Name:</label>
            <div className="input-validation-wrapper">
              <input
                id="contact-last-name"
                name="lastName"
                type="text"
                minLength={3}
                placeholder="Min. 3 characters"
                className={`validated-input input-${lastState}`}
                value={formData.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {renderValidationBadge(lastState)}
            </div>
          </div>
        </div>
        {errors.name && (
          <p className="field-error" role="alert">
            {errors.name}
          </p>
        )}

        {/* Email */}
        <div className="form-field">
          <label htmlFor="contact-email">Email:</label>
          <div className="input-validation-wrapper">
            <input
              id="contact-email"
              name="email"
              type="email"
              minLength={3}
              placeholder="you@company.com"
              className={`validated-input input-${emailState}`}
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {renderValidationBadge(emailState)}
          </div>
          {errors.email && (
            <p className="field-error" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="form-field">
          <label htmlFor="contact-phone">Phone (Optional):</label>
          <div className="input-validation-wrapper">
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              minLength={3}
              placeholder="417-000-0000 (min. 3 chars)"
              className={`validated-input input-${phoneState}`}
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {renderValidationBadge(phoneState)}
          </div>
          {errors.phone && (
            <p className="field-error" role="alert">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="form-field">
          <label htmlFor="contact-message">Message:</label>
          <div className="input-validation-wrapper textarea-wrapper">
            <textarea
              id="contact-message"
              name="message"
              rows="5"
              minLength={3}
              placeholder="Share details about the role, team, or project (min. 3 characters)..."
              className={`validated-input input-${messageState}`}
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {renderValidationBadge(messageState)}
          </div>
          {errors.message && (
            <p className="field-error" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn-primary btn-submit-contact">
          Send Message
        </button>
      </form>
    </section>
  );
}
