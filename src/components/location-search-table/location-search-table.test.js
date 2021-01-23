import React from "react";
import { render, screen } from '@testing-library/react';
import LocationSearchTable from "./location-search-table";

test('LocationSearchTable', () => {
  render(<LocationSearchTable />);
  const linkElement = screen.getByLabelText("Name:");
  expect(linkElement).toBeInTheDocument();
});
