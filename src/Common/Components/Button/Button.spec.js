import { fireEvent, render, screen } from "@testing-library/react"
import Button from './Button';

test('displays the button child content correctly', () => {
    render(<Button>Example Text</Button>);
    const renderedContent = screen.getByText('Example Text');

    expect(renderedContent).toBeInTheDocument();
});

test('button contains both root and danger style when the styleClass prop is "btn-danger"', () => {
    const { container } = render(<Button styleClasses={'btn-danger'}>Example Text</Button>);
    expect(container.getElementsByClassName('btn btn-danger').length).toBe(1);
});

test('button should fire the passed "onClick" event when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me!</Button>);

    fireEvent.click(screen.getByText(/click me/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
});