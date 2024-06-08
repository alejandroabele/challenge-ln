import React from 'react';
import { render } from '@testing-library/react';
import { Banner } from './banner';

describe("Banner", () => {
    it('Should render the Banner component', () => {
        const { queryByTestId } = render(
            <Banner />,
        );
        const banner = queryByTestId('banner');
        expect(banner).toBeTruthy();
    });

});
