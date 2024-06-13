import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";
import { User } from "../../src/entities";

describe("UserAccount", () => {
  it("should render users name", () => {
    const user1: User = { id: 1, name: "Tom", isAdmin: false };
    render(<UserAccount user={user1} />);
    expect(screen.getByText(user1.name)).toBeInTheDocument();
  });

  it("edit button should be rendered if a admin user is passed", () => {
    const user2: User = { id: 2, name: "Tom", isAdmin: true };
    render(<UserAccount user={user2} />);
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i)
  });

  it("edit button should be rendered if a admin user is not passed", () => {
    const user3: User = { id: 3, name: "Tom", isAdmin: false };
    render(<UserAccount user={user3} />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
