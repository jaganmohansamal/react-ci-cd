import { render, screen } from "@testing-library/react";
import { Header } from "../components/Header";

describe("Header", () => {
  it("renders title", () => {
    render(<Header title="Dashboard" />);
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });
});
