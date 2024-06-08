import React from 'react';
import { render } from '@testing-library/react';
import { ArticlesListContent } from './articles-list-content';

describe("ArticlesListContent", () => {

    it('Should render the ArticlesListContent component with children', () => {
        const { getByText } = render(
            <ArticlesListContent>
                <p>Ejemplo</p>
            </ArticlesListContent>
        );
        const childElement = getByText("Ejemplo");
        expect(childElement).toBeTruthy();
    });

    it('Should render the ArticlesListContent component empty children', () => {
        const { queryByTestId } = render(
            <ArticlesListContent />
        );
        const element = queryByTestId("articles-list-content");
        expect(element).toBeTruthy();

    });


});
