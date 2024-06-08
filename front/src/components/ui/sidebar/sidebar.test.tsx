import React from 'react';
import { render } from '@testing-library/react';
import { Sidebar } from './sidebar';

describe("Sidebar", () => {

    it('Should render the Sidebar component', () => {
        const { queryByTestId } = render(
            <Sidebar>
                <p>Contenido de ejemplo</p>
            </Sidebar>,
        );
        const sidebar = queryByTestId('sidebar');
        expect(sidebar).toBeTruthy();
    });

    it('Should render children inside the Sidebar component', () => {
        const { getByText } = render(
            <Sidebar>
                <p>Contenido de ejemplo</p>
            </Sidebar>,
        );
        const childContent = getByText('Contenido de ejemplo');
        expect(childContent).toBeTruthy();
    });

});
