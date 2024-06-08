import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './button'


describe("Button", () => {

    it('Should render Button ', () => {

        const { queryByTestId } = render(
            <Button title='MAS NOTICIAS' />,
        );
        const button = queryByTestId('button');
        expect(button).toBeTruthy();
    })
    it('Should display the correct title', () => {
        const { getByText } = render(
            <Button title='MAS NOTICIAS' />,
        );
        const buttonTitle = getByText('MAS NOTICIAS');
        expect(buttonTitle).toBeTruthy();
    });

})