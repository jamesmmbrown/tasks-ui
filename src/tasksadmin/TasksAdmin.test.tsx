import { render, screen } from "@testing-library/react";
import TasksAdmin from "./TasksAdmin";

describe("tasks admin page", () => {
  it("displays tasks text", () => {
    render(<TasksAdmin />);

    expect(screen.getByText("Tasks")).toBeInTheDocument();
  });
});
