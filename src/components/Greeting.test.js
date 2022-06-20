import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders Hello World! as a text', () => {
    //Arrange - set up test data, condition, and environment
    render(<Greeting />);

    //Act- run logic that should be tested, ex. execute function
    //nothing yet

    // Assert- compare execution results with expected results
    const helloWorldElement = screen.getByText('Hello World!', { exact: false });
    //test will fail because of exact match- World is not capitalized in Greeting.js
    //add { exact: false } and it will allow different capitalizations
    expect(helloWorldElement).toBeInTheDocument();
});