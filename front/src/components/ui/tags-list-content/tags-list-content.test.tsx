import React from 'react';
import { render } from '@testing-library/react';
import { TagsListContent } from './tags-list-content';

describe("TagsListContent", () => {

    it('Should render the TagsListContent component with children', () => {
        const { getByText } = render(
            <TagsListContent>
                <p>Desc 1</p>
            </TagsListContent>
        );
        const contentElement = getByText("Desc 1");
        expect(contentElement).toBeTruthy();
    });
    it('Should render the TagsListContent component empty children', () => {
        const { getByTestId } = render(
            <TagsListContent />
        );
        const element = getByTestId("tags-list-content");
        expect(element).toBeTruthy();
    });

});
