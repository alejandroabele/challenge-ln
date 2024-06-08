import React from 'react';
import { render } from '@testing-library/react';
import { TitlePage } from './title-page';

describe("TitlePage", () => {
    it('Should render the TitlePage component', () => {
        const { queryByTestId } = render(
            <TitlePage title="Ejemplo de título" />,
        );
        const titlePage = queryByTestId('title-page');
        expect(titlePage).toBeTruthy();
    });

    it('Should display the correct title', () => {
        const { getByText } = render(
            <TitlePage title="Ejemplo de título" />,
        );
        const title = getByText('Ejemplo de título');
        expect(title).toBeTruthy();
    });
});
