import {
  filterProjectsByCategory,
  normalizeProjectLinks,
  normalizeCredentialStatus,
  validateContactForm,
} from '../src/utils/portfolioHelpers';
import { projectsData, credentialsData } from '../src/data/portfolioData';

describe('Portfolio Pure Domain Helpers (SDD-REQ-01 to SDD-REQ-04)', () => {
  test('filterProjectsByCategory returns all projects for All and filters specific categories', () => {
    expect(filterProjectsByCategory(projectsData, 'All')).toHaveLength(projectsData.length);
    const practiceOnly = filterProjectsByCategory(projectsData, 'Practice');
    expect(practiceOnly.every((item) => item.category === 'Practice')).toBe(true);
    expect(filterProjectsByCategory(null, 'All')).toEqual([]);
  });

  test('normalizeProjectLinks handles valid URLs and missing URL fallbacks (Edge Case 2)', () => {
    const complete = normalizeProjectLinks({
      liveUrl: 'https://demo.example.com',
      repoUrl: 'https://github.com/example/repo',
    });
    expect(complete.hasLivePreview).toBe(true);
    expect(complete.hasRepo).toBe(true);

    const incomplete = normalizeProjectLinks({ liveUrl: null, repoUrl: '   ' });
    expect(incomplete.hasLivePreview).toBe(false);
    expect(incomplete.liveLabel).toBe('Preview Unavailable');
    expect(incomplete.hasRepo).toBe(false);
    expect(incomplete.repoLabel).toBe('Repo Pending');
  });

  test('normalizeCredentialStatus handles missing verification links and missing PDF fallback (Edge Case 3)', () => {
    const verified = normalizeCredentialStatus(credentialsData.certifications[0], '/resume.pdf');
    expect(verified.isVerified).toBe(true);
    expect(verified.badgeText).toBe('Verified Credential');
    expect(verified.hasResumePdf).toBe(true);

    const pending = normalizeCredentialStatus({ verifyUrl: null }, '');
    expect(pending.isVerified).toBe(false);
    expect(pending.badgeText).toBe('In Progress / Verification Pending');
    expect(pending.hasResumePdf).toBe(false);
    expect(pending.resumeFallbackNotice).toBe('PDF Updating — View Web Resume');
  });

  test('validateContactForm rejects empty or malformed inputs and passes valid payloads (Edge Case 4)', () => {
    const invalid = validateContactForm({ name: ' ', email: 'not-an-email', message: '' });
    expect(invalid.isValid).toBe(false);
    expect(invalid.errors.name).toBe('Name is required.');
    expect(invalid.errors.email).toBe('Please enter a valid email address.');
    expect(invalid.errors.message).toBe('Message cannot be empty.');

    const valid = validateContactForm({
      name: 'Recruiter Jane',
      email: 'jane@company.com',
      message: 'Let us schedule an interview!',
    });
    expect(valid.isValid).toBe(true);
    expect(valid.errors).toEqual({});
  });
});

