import React from 'react';
import { render } from '@testing-library/react';
import { TagsList } from './tags-list';

describe("TagsList", () => {

    const mockTags = [
        { slug: "sample-slug-1", text: "Sample Tag 1", count: 5 },
        { slug: "sample-slug-2", text: "Sample Tag 2", count: 10 },
        { slug: "sample-slug-3", text: "Sample Tag 3", count: 15 }
    ];
    it('Should render TagsList component with correct tags', () => {
        const { queryByTestId } = render(<TagsList data={mockTags} />);
        const tagContainer = queryByTestId('tags-list-content');
        expect(tagContainer).toBeTruthy();
    });
    it('Should render TagsList component with correct number of tags', () => {
        const { getAllByTestId } = render(<TagsList data={mockTags} />);
        const tags = getAllByTestId('tag');
        expect(tags.length).toBe(mockTags.length);
    });
    it('Should render correctly when no tags are provided', () => {
        const { queryByTestId } = render(<TagsList />);
        const tagContainer = queryByTestId('tags-list-content');
        expect(tagContainer).toBeTruthy();
    });

});
