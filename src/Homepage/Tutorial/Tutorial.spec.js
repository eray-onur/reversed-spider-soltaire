import { fireEvent, render, screen } from "@testing-library/react";
import Tutorial from "./Tutorial";

test('should show tutorial images correctly', () => {
    const { container } = render(<Tutorial/>);
});