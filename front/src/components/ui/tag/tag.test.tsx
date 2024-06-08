import React from 'react';
import { render } from '@testing-library/react';
import { Tag } from './tag';
describe("Tag", () => {

    const mockTag = {
        slug: "sample-slug",
        text: "Sample Tag",
        count: 5
    };

    it('Should render the Tag component with correct text', () => {
        const { getByText } = render(<Tag tag={mockTag} />);
        const tagElement = getByText("Sample Tag");
        expect(tagElement).toBeTruthy();
    });

});