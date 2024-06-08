import React from 'react';
import { render } from '@testing-library/react';
import { Navbar } from './navbar';

describe("Navbar", () => {

    it('Should render the TitlePage component with correct title', () => {
        const { getByText } = render(
            <Navbar />,
        );
        const title = getByText('Acumulado Grilla');
        expect(title).toBeTruthy();
    });

});
