import React from 'react';
import { render } from '@testing-library/react';
import { ArticleText } from './article-text';

describe("ArticleText", () => {

    it('Should render the ArticleText component', () => {
        const { queryByTestId } = render(
            <ArticleText text="Contenido de ejemplo" />,
        );
        const articleText = queryByTestId('article-text');
        expect(articleText).toBeTruthy();
    });

    it('Should display the correct text', () => {
        const { getByText } = render(
            <ArticleText text="Contenido de ejemplo" />,
        );
        const text = getByText('Contenido de ejemplo');
        expect(text).toBeTruthy();
    });

});
