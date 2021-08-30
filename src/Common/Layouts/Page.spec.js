import { fireEvent, render, screen } from "@testing-library/react";
import Page from "./Page";

test('Page should have correct root class', () => {
    const {container} = render(<Page><p>Example paragraph</p></Page>);

    expect(container.getElementsByClassName('page-body').length).toBe(1);
});

test('Page should render content', () => {
    render(<Page><p>Example paragraph</p></Page>);

    expect(screen.getByText(/example paragraph/i)).toBeInTheDocument();
});