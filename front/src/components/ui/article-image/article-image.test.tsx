import React from 'react';
import { render } from '@testing-library/react';
import { ArticleImage } from './article-image';
describe("ArticleImage", () => {

    const mockSrc = "https://fastly.picsum.photos/id/77/450/300.jpg?hmac=V_LawevwSaVitpQs2t7AnuBi84UPSNl1Qp3PmKkmaXc";
    it('Should render the ArticleImage component', () => {
        const { getByTestId } = render(<ArticleImage src={mockSrc} />);
        const articleImage = getByTestId('article-image');
        expect(articleImage).toBeTruthy();
    });

});
