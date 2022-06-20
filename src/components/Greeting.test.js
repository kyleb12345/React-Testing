import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

//Often organize tests into testing suite, can create one by using the describe() function, it has two arguements.
//the first is a description, the second is an anonymous function that includes the tests.
describe('Greeting component', () => {

    test('renders Hello World! as a text', () => {
        //Arrange - set up test data, condition, and environment
        render(<Greeting />);
    
        //Act- run logic that should be tested, ex. execute function
        //nothing yet for this test
    
        // Assert- compare execution results with expected results
        const helloWorldElement = screen.getByText('Hello World!', { exact: false });
        //test will fail because of exact match- World is not capitalized in Greeting.js
        //add { exact: false } and it will allow different capitalizations
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders Not changed if the button was NOT clicked', () => {
        //Arrange
        render(<Greeting />);

        //Act
        //nothing yet

        //Assert
        const outputElement = screen.getByText('Not changed', {exact: false });
        expect(outputElement).toBeInTheDocument();

    });

    test('renders Changed! when the button is clicked', () => {
        //Arrange
        render(<Greeting />);

        //Act
        //imported userEvent to help test run logic
        //can check by text again as before, but can also check by button 
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assert
        const outputElement = screen.getByText('Changed!');
        expect(outputElement).toBeInTheDocument();
    });

    test('does not render other conditional text is not shown after clicking', () => {
        //Arrange
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assert
        //use queryByText because it will return null if element is not found
        //thus, we can check if the element is then null with .toBeNull
        const outputElement = screen.queryByText('Not changed', {exact: false });
        expect(outputElement).toBeNull();

    });
});

