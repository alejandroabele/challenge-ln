import React from 'react';
import { render } from '@testing-library/react';
import { Layout } from './layout';

describe("Layout", () => {

    it('Should render the Layout component', () => {
        const { queryByTestId } = render(
            <Layout>
                <p>Ejemplo de contenido</p>
            </Layout>,
        );
        const layout = queryByTestId('layout');
        expect(layout).toBeTruthy();
    });

    it('Should render children inside the Layout component', () => {
        const { getByText } = render(
            <Layout>
                <p>Ejemplo de contenido</p>
            </Layout>,
        );
        const childContent = getByText('Ejemplo de contenido');
        expect(childContent).toBeTruthy();
    });

});
