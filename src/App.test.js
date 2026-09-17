import React, { act } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

global.IS_REACT_ACT_ENVIRONMENT = true;

describe('App', () => {
  it('renders without crashing', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);

    act(() => {
      root.render(<App />);
    });

    expect(container.textContent).toContain('Flight Schedule');
    expect(container.textContent).toContain('Continue');

    act(() => {
      root.unmount();
    });
    container.remove();
  });

  it('Shows a Calender', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);

    act(() => {
      root.render(<App />);
    });

    expect(container.querySelector('select')).not.toBeNull();

    expect(container.textContent).toContain('Mon');
    expect(container.textContent).toContain('Tue');
    expect(container.textContent).toContain('Wed');
    expect(container.textContent).toContain('Thu');
    expect(container.textContent).toContain('Fri');
    expect(container.textContent).toContain('Sat');
    expect(container.textContent).toContain('Sun');

    act(() => {
      root.unmount();
    });
    container.remove();
  });
});