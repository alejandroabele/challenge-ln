import React from 'react';
import { render } from '@testing-library/react';
import { ArticleContent } from './article-content';

describe("ArticleContent", () => {

    it('Should render the ArticleContent component with children', () => {
        const { getByText } = render(
            <ArticleContent>
                <p>Desc 1</p>
            </ArticleContent>
        );
        const contentElement = getByText("Desc 1");
        expect(contentElement).toBeTruthy();
    });
    it('Should render the ArticleContent component empty children', () => {
        const { getByTestId } = render(
            <ArticleContent />
        );
        const element = getByTestId("article-content");
        expect(element).toBeTruthy();
    });

});
