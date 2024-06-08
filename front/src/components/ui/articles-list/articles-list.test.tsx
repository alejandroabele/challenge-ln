import React from 'react';
import { render } from '@testing-library/react';
import { ArticlesList } from './articles-list';

describe("ArticlesList", () => {

    const mockData = [
        { headlines: "Sample Article 1", date: "26 de Junio de 2024" },
        { headlines: "Sample Article 2", date: "26 de Junio de 2024" },
        { headlines: "Sample Article 3", date: "26 de Junio de 2024" }
    ];

    it('Should render ArticlesList component with correct number of articles', () => {
        const { getAllByTestId } = render(<ArticlesList data={mockData} />);
        const articles = getAllByTestId('article-description');
        expect(articles.length).toBe(mockData.length);
    });
    it('Should render the "MÁS NOTAS DE ACUMULADO GRILLA" button', () => {
        const { getByText } = render(<ArticlesList data={mockData} />);
        const buttonElement = getByText("MÁS NOTAS DE ACUMULADO GRILLA");
        expect(buttonElement).toBeTruthy();
    });

});
