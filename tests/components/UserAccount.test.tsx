import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";
import { User } from "../../src/entities";

describe("UserAccount", () => {
  it("should render users name in the dom", () => {
    const user1: User = { id: 1, name: "Tom" };
    render(<UserAccount user={user1} />);
    expect(screen.getByText(user1.name)).toBeInTheDocument();
  });
});