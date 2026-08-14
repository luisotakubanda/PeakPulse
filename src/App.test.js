// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PeakPulse title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PeakPulse/i);
    expect(titleElement).toBeInTheDocument();
});
