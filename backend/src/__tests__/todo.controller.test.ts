import { AddTodo } from "../controllers/todoController";

describe("TodoController AddTodo method", () => {
  it("should have a addTodo function", () => {
    expect(typeof AddTodo).toBe("function");
  });
});
