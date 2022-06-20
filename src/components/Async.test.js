import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
    test('renders posts if request succeeds', async () => {
        //Arrange
        render(<Async />)

        //Act

        //Assert
        //lists are a role
        //checking to see if it is empty or not, if it's 0, it's empty
        //it is an async function, initially a simple test would fail if using 'getAllByRole', need find
        //findAllByRole can have 3 arguements, including a time out
        //now at the top, need to make testing function async
        //thus can add await before screen.findAllByRole
        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    });
})