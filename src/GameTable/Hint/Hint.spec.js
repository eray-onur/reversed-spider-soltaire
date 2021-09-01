import { act, render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store";
import Hint from "./Hint";

test("hint button should be working", () => {
    const { container } = render(<Provider store={store}><Hint/></Provider>);
    const mockFunction = jest.fn();

    act(() => {
        // Find the link (perhaps using the text content)
        const btnHint = container.getElementsByClassName('hint')[0];
        btnHint.addEventListener('click', mockFunction);
        btnHint.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(mockFunction).toHaveBeenCalledTimes(1);
});