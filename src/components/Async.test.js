import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
    test('renders posts if request succeeds', async () => {
        //Arrange
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: 'p1', title: 'First post'}],
        });
        render(<Async />)

        //Act

        //Assert
        //lists are a role
        //checking to see if it is empty or not, if it's 0, it's empty
        //it is an async function, initially a simple test would fail if using 'getAllByRole', need find
        //findAllByRole can have 3 arguements, including a time out
        //now at the top, need to make testing function async
        //thus can add await before screen.findAllByRole
        //however, this is not ideal because we are sending an http request here, may cause too many API requests to server
        // posts requests could also send data we do not want since we are testing
        // window.fetch = jest.fn(); helps create a mock dummy and then: window.fetch.mockResolvedValueOnce();
        // fill in the mock with a function based on json data function and array of fake data
        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    });
})