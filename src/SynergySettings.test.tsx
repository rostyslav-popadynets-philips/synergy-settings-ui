import { render, screen } from '@testing-library/react';
import SynergySettings from './SynergySettings';

describe('SynergySettings', () => {

  test('should find label text', () => {
    render(<SynergySettings />);
    const linkElement = screen.getByText("Synergy settings");
    expect(linkElement).toBeInTheDocument();
  });

});