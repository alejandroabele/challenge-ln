import React from 'react';
import { render } from '@testing-library/react';
import { Row } from './row';

describe("Row", () => {

    it('Should render the Row component', () => {
        const { queryByTestId } = render(
            <Row>
                <p>Ejemplo de contenido</p>
            </Row>,
        );
        const row = queryByTestId('row');
        expect(row).toBeTruthy();
    });

    it('Should render children inside the Row component', () => {
        const { getByText } = render(
            <Row>
                <p>Ejemplo de contenido</p>
            </Row>,
        );
        const childContent = getByText('Ejemplo de contenido');
        expect(childContent).toBeTruthy();
    });

});
