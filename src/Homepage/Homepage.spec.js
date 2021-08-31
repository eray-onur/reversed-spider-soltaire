import { fireEvent, render, screen } from "@testing-library/react";
import Homepage from "./Homepage";

test('Title "Spider Soltaire" should be rendered', () => {
    render(<Homepage/>);
    const gameTitle = screen.getByText(/spider soltaire/i);

    expect(gameTitle).toBeInTheDocument();
});