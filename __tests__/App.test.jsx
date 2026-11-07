import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppRoutes } from '../src/App';
import { profileData, projectsData } from '../src/data/portfolioData';

describe('Multi-Page React Router Portfolio Integration (SDD-REQ-05 to SDD-REQ-09)', () => {
  test('renders Home route with hero introduction and quick CTAs', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: profileData.name })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Explore Project Gallery/i })).toBeInTheDocument();
  });

  test('renders Credentials route, switches between Web Resume and Cover Letter, and displays certifications', () => {
    render(
      <MemoryRouter initialEntries={['/credentials']}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(screen.getByTestId('resume-panel')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('tab', { name: /Cover Letter/i }));
    expect(screen.getByTestId('cover-letter-panel')).toBeInTheDocument();
    expect(screen.getByText(/In Progress \/ Verification Pending/i)).toBeInTheDocument();
  });

  test('renders Project Gallery with side-by-side GitHub showcase and handles empty category filter (Edge Cases 2 & 3)', () => {
    render(
      <MemoryRouter initialEntries={['/projects']}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(screen.getByText(/Preview Unavailable/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Full-Stack' }));
    expect(screen.getByText(/No projects found in this category/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Reset Filter/i }));
    expect(screen.getByText(projectsData[0].title)).toBeInTheDocument();
  });

  test('validates Contact form inputs and displays inline alerts on invalid submission (Edge Case 4)', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <AppRoutes />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));
    expect(screen.getAllByRole('alert')).toHaveLength(3);

    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'Hiring' } });
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Manager' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'manager@tech.io' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Great portfolio!' } });
    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));
    expect(screen.getByText(/Thank you for reaching out!/i)).toBeInTheDocument();
  });

  test('renders 404 NotFound fallback route on unmatched URL path (Edge Case 1)', () => {
    render(
      <MemoryRouter initialEntries={['/broken-url-path']}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /404 - Page Not Found/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Return Home/i })).toHaveAttribute('href', '/');
  });
});

