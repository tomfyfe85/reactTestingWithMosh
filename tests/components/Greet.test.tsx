// import { it, expect, describe } from "vitest";
import { render, screen } from '@testing-library/react'
import Greet from "../../src/components/Greet";
// import "@testing-library/jest-dom/vitest";
// commented out because global settings for vitest are enabled- see setup.ts/vitest.config.ts/tsconfig.ts
describe("Greet", () => {
  it("should render Hello with the name when the name is provided", () => {
    render(<Greet name="Tom" />);

    screen.debug();
    // screen.debug allows us to see virtual dom in the console log
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/tom/i);
  });

  it("should render login button when name isn't provided", () => {
    render(<Greet />);

    screen.debug();
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});
