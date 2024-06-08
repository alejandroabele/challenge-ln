import React from 'react';
import { render } from '@testing-library/react';
import { Loading } from './loading';

describe("Loading", () => {

    it('Should render the Loading component', () => {
        const { queryByTestId } = render(
            <Loading title="Loading..." />,
        );
        const loading = queryByTestId('loading');
        expect(loading).toBeTruthy();
    });

    it('Should display the correct title', () => {
        const { getByText } = render(
            <Loading title="Loading..." />,
        );
        const loadingTitle = getByText('Loading...');
        expect(loadingTitle).toBeTruthy();
    });


});
