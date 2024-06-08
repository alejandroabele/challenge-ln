import React from 'react';
import { render } from '@testing-library/react';
import { ArticleDescription } from './article-description';

describe("ArticleDescription", () => {

    it('Should render the ArticleDescription component with children', () => {
        const { getByText } = render(
            <ArticleDescription>
                <p>Descripcion 1</p>
                <p>Descripcion 2</p>
            </ArticleDescription>
        );
        const firstDescriptionElement = getByText("Descripcion 1");
        expect(firstDescriptionElement).toBeTruthy();
        const secondDescriptionElement = getByText("Descripcion 2");
        expect(secondDescriptionElement).toBeTruthy();
    });

    it('Should render the ArticleDescription component empty children', () => {
        const { queryByTestId } = render(
            <ArticleDescription />
        );
        const element = queryByTestId("article-description");
        expect(element).toBeTruthy();

    });

});
