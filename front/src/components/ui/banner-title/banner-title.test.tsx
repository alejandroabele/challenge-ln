import React from 'react';
import { render } from '@testing-library/react';
import { BannerTitle } from './banner-title';

describe("BannerTitle", () => {

    it('Should render BannerTitle', () => {
        const { queryByTestId } = render(
            <BannerTitle title='Welcome to the Banner' />,
        );
        const bannerTitle = queryByTestId('banner-title');
        expect(bannerTitle).toBeTruthy();
    });

    it('Should display the correct title', () => {
        const { getByText } = render(
            <BannerTitle title='Welcome to the Banner' />,
        );
        const bannerTitle = getByText('Welcome to the Banner');
        expect(bannerTitle).toBeTruthy();
    });

    it('Should not render anything when title is not provided', () => {
        const { queryByTestId } = render(
            <BannerTitle />,
        );
        const bannerTitle = queryByTestId('banner-title');
        expect(bannerTitle?.textContent).toBe('');
    });

});
