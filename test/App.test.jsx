import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import App from "../src/App";
// @vitest-environment jsdom
describe('App component', () => {
  afterEach(cleanup)
  it('should render app component', () => {
    const { getByText } = render(<App />);
    const headerElement = getByText('My ToDo List');
    expect(headerElement).toBeInTheDocument();
  })

  it('', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const inputElement = getByPlaceholderText('Add a new todo');
    const addButton = getByText('Add');

    inputElement.value = 'New Todo';
    addButton.click();

    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(expect.any(String), expect.any(String));
    expect(localStorage.setItem).toHaveBeenLastCalledWith(
      '__stored__todos__',
      expect.stringContaining('New Todo')
    );
  })
})