import { fireEvent, render, screen } from "@testing-library/react";
import Tutorial from "./Tutorial";

test('should show tutorial images correctly', () => {
    render(<Tutorial/>);

    expect(screen.getByText(/spider solitaire tutorial/i)).not.toBeNull();
});