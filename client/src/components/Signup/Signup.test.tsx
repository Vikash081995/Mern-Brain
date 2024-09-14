import Signup from "./Signup";
import { render, screen } from "@testing-library/react";

describe("Sign up page", () => {
  describe("Layout", () => {
    it("has header", () => {
      render(<Signup />);
      const header = screen.queryByRole("heading", { name: "Sign up" });
      expect(header).toBeInTheDocument();
    });
    it("has username input field", () => {
      render(<Signup />);
      const input = screen.getByLabelText("Username");
      expect(input).toBeInTheDocument();
    });
    it("has email input field", () => {
      render(<Signup />);
      const input = screen.getByLabelText("Email");
      expect(input).toBeInTheDocument();
    });
    it("has password input", () => {
      render(<Signup />);
      const input = screen.getByLabelText("Password");
      expect(input).toBeInTheDocument();
    });
    it("has password type for password input", () => {
      render(<Signup />);
      const input = screen.getByLabelText("Password");
      expect(input.type).toBe("password");
    });
    it("has password rpeat input", () => {
      render(<Signup />);
      const input = screen.getByLabelText("Password Repeat");
      expect(input).toBeInTheDocument();
    });
    it("has password type for password repeat input", () => {
      render(<Signup />);
      const input = screen.getByLabelText("Password Repeat");
      expect(input.type).toBe("password");
    });
    it("has submit button", () => {
      render(<Signup />);
      const button = screen.queryByRole("button", { name: "Sign up" });
      expect(button).toBeInTheDocument();
    });
    it("has submit button disabled initially", () => {
      render(<Signup />);
      const button = screen.queryByRole("button", { name: "Sign up" });
      expect(button).toBeDisabled();
    });
  });
  describe("Interactions", () => {
    it("enables the button when password and repeat passwords have sane value", () => {
      render(<Signup />);
      const passwordInput = screen.getByLabelText("Password");
      const passwordRepeatInput = screen.getByLabelText("Password Repeat");
    });
  });
});
