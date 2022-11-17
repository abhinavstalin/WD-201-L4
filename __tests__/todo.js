
const todoList = require("../todo");
const { all, add, markAsComplete, overdue, dueToday, dueLater } = todoList();

describe("to.do_list test ", () => {
  // Before starting all tests
  beforeAll(() => {
    add({
      title: "test_1 to.do",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
  });

  //add function
  test("Add a new_todo to the given todo-list", () => {
    const lea_todo = all.length;
    add({
      title: "test_2 to.do",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(all.length).toBe(lea_todo + 1);
  });

  //markAsComplete function
  test("complete the todo-list ", () => {
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  //overdue function
  test("overdue to.dos from to.do-list", () => {
    add({
      title: "Test the overdue from  to.do-list",
      dueDate: new Date(
        new Date().setDate(new Date().getDate() - 1)
      ).toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(overdue().length).toBe(1);
  });

  //dueToday function
  test("due today to.dos from to.do-list", () => {
    
    expect(dueToday().length).toBe(2);
  });

  //due function
  test("due-later to.dos", () => {
    add({
      title: "Testing the due from to.do-list",
      dueDate: new Date(
        new Date().setDate(new Date().getDate() + 1)
      ).toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(dueLater().length).toBe(1);
  });
});