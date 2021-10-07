import { sayMessage } from "./Message";

test("Should say hello", () => {
  const result = sayMessage();
  expect(result).toBe("Hello");
});
