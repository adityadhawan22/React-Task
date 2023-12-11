import { beforeAll } from "vitest";
import { setupServer } from "msw/node";
import { HttpResponse, http } from "msw";
import { render } from "@testing-library/react";
import App from "./App";

const posts = [
  {
    user_id: 1,
    id: 1,
    title: "first post title",
  },
];

export const restHandlers = [
  http.get("http://localhost:3001/posts", () => {
    return HttpResponse.json(posts, { status: 500 });
  }),
];

const server = setupServer(...restHandlers);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

test("should render posts correctly", async () => {
  render(<App />);
});
