import React from 'react';
import { render } from '@testing-library/react';
import { Aside } from './aside';

describe("Aside", () => {

    it('Should render the Aside component', () => {
        const { queryByTestId } = render(
            <Aside>
                <p>Ejemplo de contenido</p>
            </Aside>,
        );
        const aside = queryByTestId('aside');
        expect(aside).toBeTruthy();
    });

    it('Should render children inside the Aside component', () => {
        const { getByText } = render(
            <Aside>
                <p>Ejemplo de contenido</p>
            </Aside>,
        );
        const childContent = getByText('Ejemplo de contenido');
        expect(childContent).toBeTruthy();
    });

});
