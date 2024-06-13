import { render, screen } from "@testing-library/react";
import { it } from "vitest";
import UserList from "../../src/components/UserList";
import { User } from "../../src/entities";

describe("UserList", () => {
  it("should render no users when list is empty", () => {
    render(<UserList users={[]} />);
    expect(screen.getByText(/No users/i)).toBeInTheDocument();
  });

  it("should render list of users", () => {
    const users: User[] = [
      { id: 1, name: "Tom", isAdmin: false },
      { id: 2, name: "Chants", isAdmin: true },
    ];
    render(<UserList users={users} />);

    users.forEach((user) => {
      const link = screen.getByRole("link", { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
