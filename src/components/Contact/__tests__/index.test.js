import React from 'react';
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from '..';

const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup);

describe('Contact component', () => {
   it('renders', () => {
      render(<Contact
         contactSelected={mockContactSelected}
         setContactSelected={mockSetContactSelected}
      />);
   });

   it('matches snapshot', () => {
      const { asFragment } = render(
        <Contact
          contactSelected={mockContactSelected}
          setContactSelected={mockSetContactSelected}
        />
      );
   });

   it('renders', () => {
      const { getByTestId } = render(
        <Contact
          contactSelected={mockContactSelected}
          setContactSelected={mockSetContactSelected}
        />
      )
      expect(getByTestId('contactH1')).toHaveTextContent('Contact me:')
   });

   it('renders', () => {
      const { getByTestId } = render(
        <Contact
          contactSelected={mockContactSelected}
          setContactSelected={mockSetContactSelected}
        />
      )
      expect(getByTestId('submitBtn')).toHaveTextContent('Submit')

   })
});

