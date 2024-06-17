import { render, fireEvent, simulateDragDrop } from "../test_utils";
import List from "./List";

const items = [
  {
    content: "item test",
    id: "item-test"
  },
  {
    content: "item test-2",
    id: "item-test-2"
  }
];

test("renders items", () => {
  const { getByText } = render(<List items={items} />);

  expect.assertions(items.length);

  items.forEach((item) => {
    expect(getByText(item.content)).toBeInTheDocument();
  });
});

test(`Fire events`, (done) => {
  const onDragOver = jest.fn(() => done());
  const { getByText } = render(<List items={items} onDragOver={onDragOver} />);

  const list = getByText("Dropzone");
  const listItem = list.lastChild;
  list.addEventListener("dragover", () => {
    done();
  });
  fireEvent.dragStart(listItem);
  fireEvent.dragOver(list);
  fireEvent.dragEnter(list);
  fireEvent.drop(listItem);
  fireEvent.dragEnd(list);
});
