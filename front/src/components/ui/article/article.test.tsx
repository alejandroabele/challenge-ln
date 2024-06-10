import React from 'react';
import { render } from '@testing-library/react';
import { Article } from './article';
import { IArticle } from '@/interfaces';

describe("Article", () => {
    const mockArticle: IArticle = {
        headlines: "Sample Headline",
        date: "26 de Enero de Diciembre",
    };
    it('Should render the Article component with correct headline text', () => {
        const { getByText } = render(<Article article={mockArticle} />);
        const headlineElement = getByText("Sample Headline");
        expect(headlineElement).toBeTruthy();
    });

});
