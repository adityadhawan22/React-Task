import { render, screen } from "@testing-library/react";
import { Post } from "./Posts";

test("renders posts correctly", () => {
  render(<Post name={"Some Name"} title="React" />);
  screen.debug();

  // test something here
});
