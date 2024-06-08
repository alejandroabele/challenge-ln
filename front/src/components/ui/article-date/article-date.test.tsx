import React from 'react';
import { render } from '@testing-library/react';
import { ArticleDate } from './article-date';

describe("ArticleDate", () => {

    it('Should render the ArticleDate component', () => {
        const { queryByTestId } = render(
            <ArticleDate date="8 de Junio de 2024" />,
        );
        const articleDate = queryByTestId('article-date');
        expect(articleDate).toBeTruthy();
    });

    it('Should display the correct date', () => {
        const { getByText } = render(
            <ArticleDate date="8 de Junio de 2024" />,
        );
        const date = getByText('8 de Junio de 2024');
        expect(date).toBeTruthy();
    });

});
