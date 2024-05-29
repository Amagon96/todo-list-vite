import { cleanup, fireEvent, getAllByTestId, getByDisplayValue, getByTestId, render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import App from "../src/App";
import userEvent from "@testing-library/user-event";
import { TodoList } from "../src/components/TodoList";
import { TodoTitle } from "../src/components/TodoTitle";
// @vitest-environment jsdom
describe('App component', () => {
  
  afterEach(cleanup)
  const testData = [
    {
        "title": "Luffy",
        "id": "ff4227a2-6386-4852-80cf-a855614b779d",
        "completed": false
    },
    {
        "title": "Nami",
        "id": "be6b166c-4d5c-4629-995d-363da1229b62",
        "completed": false
    },
    {
        "title": "Chopper",
        "id": "45988de4-d65f-415f-a315-7227542570bd",
        "completed": false
    },
    {
        "title": "Franky",
        "id": "2385e79b-3257-4f8f-bdce-335f4e2d1469",
        "completed": false
    },
    {
        "title": "Brook",
        "id": "7357ce02-9f73-4004-b6a0-2aa5b0231915",
        "completed": false
    },
    {
        "title": "Jimbei",
        "id": "3f3676db-a1e5-420d-b296-e97b9c679bac",
        "completed": false
    },
    {
        "title": "Zoro",
        "id": "496a5c62-c435-4797-8f28-6443cda3b2a8",
        "completed": false
    },
    {
        "title": "Sanji",
        "id": "ff9967e5-22fe-47fc-99b9-25377f418ca6",
        "completed": false
    },
    {
        "title": "Robin",
        "id": "59ed7a82-4a69-4f99-af77-0ffda624f55a",
        "completed": false
    },
    {
        "title": "Usopp",
        "id": "844a499a-e93e-4adc-873c-4338a221485b",
        "completed": false
    }
  ]

  it('should render app component', () => {
    const { getByText } = render(<App />);
    const headerElement = getByText('My ToDo List');
    expect(headerElement).toBeInTheDocument();
  })

  it('should render todo list component', () => {
    const { getByTestId } = render(<App />);
    const listElement = getByTestId('todo-list');
    expect(listElement).toBeInTheDocument();
  })

  it('should render todos in list component', () => {
    const { getAllByTestId } = render(<TodoList todos={testData} removeTodo={vi.fn()} toggleTodo={vi.fn()} editTitle={vi.fn()} />);
    const todoList = getAllByTestId('todo-item');
    expect(todoList.length).toBe(10);
  })

  it('should edit todo title', () => {
    const editTitle = vi.fn()
    const { getByText, getByRole, getByDisplayValue } = render(<TodoTitle id={testData[0].id} title={testData[0].title} completed={testData[0].completed} editTitle={editTitle} />);
    const todoItem = getByText('Luffy');
    expect(todoItem).toBeInTheDocument();
    
    const button = getByRole('edit-button')

    fireEvent.click(button)

    const inputElement = getByDisplayValue(testData[0].title)
    userEvent.type(inputElement, 'New Todo{enter}')
    expect(editTitle).toHaveBeenCalledTimes(1);
  })

  it('', () => {
    const localStorageMock = {
      getItem: vi.fn(),
      setItem: vi.fn(),
    };
    const handleAddToDo = vi.fn();
    // { todos, removeTodo, toggleTodo, editTitle }
    const { getByPlaceholderText } = render(<App />);
    const inputElement = getByPlaceholderText('New TODO item');

    userEvent.type(inputElement, 'New Todo{enter}')

    expect(handleAddToDo).toHaveBeenCalled();
    expect(localStorageMock.setItem).toHaveBeenLastCalledWith(
      '__stored__todos__',
      expect.stringContaining('New Todo')
    );
  })
})
