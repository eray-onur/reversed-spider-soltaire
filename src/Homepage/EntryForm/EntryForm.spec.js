import { fireEvent, render, screen } from "@testing-library/react";
import EntryForm from "./EntryForm";

test('Entry form should have 1 form element with "text-input" class name', () => {
    const {container} = render(<EntryForm/>);
    expect(container.getElementsByClassName('text-input').length).toBe(1);
});

test('Nickname text input element should set given value correctly', () => {
    const {container} = render(<EntryForm/>);

    const textInput = container.getElementsByClassName('text-input');
    textInput.value = 'eray.onur';
    expect(textInput.value).toBe('eray.onur');
});