import React from 'react';
import { render } from '@testing-library/react';
import { ArticlesListFooter } from './articles-list-footer';

describe("ArticlesListFooter", () => {

    it('Should render the ArticlesListFooter component with children', () => {
        const { getByText } = render(
            <ArticlesListFooter>
                <p>Ejemplo</p>
            </ArticlesListFooter>
        );
        const childElement = getByText("Ejemplo");
        expect(childElement).toBeTruthy();
    });

    it('Should render the ArticlesListFooter component empty children', () => {
        const { queryByTestId } = render(
            <ArticlesListFooter />
        );
        const element = queryByTestId("articles-list-footer");
        expect(element).toBeTruthy();

    });


});
