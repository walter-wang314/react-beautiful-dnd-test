import { render } from "../test_utils";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  expect(getByText("DragDropContext")).toBeInTheDocument();
});
