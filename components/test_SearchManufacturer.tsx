import { render, screen, fireEvent } from "@testing-library/react";
import SearchManufacturer from "./SearchManufacturer";

describe("SearchManufacturer", () => {
  test("renders search input", () => {
    render(<SearchManufacturer manufacturer="" setmanufacturer={() => {}} />);
    const searchInput = screen.getByPlaceholderText("Volkwagen");
    expect(searchInput).toBeInTheDocument();
  });

  test("filters manufacturers based on query", () => {
    render(<SearchManufacturer manufacturer="" setmanufacturer={() => {}} />);
    const searchInput = screen.getByPlaceholderText("Volkwagen");

    fireEvent.change(searchInput, { target: { value: "BMW" } });

    const option1 = screen.getByText("BMW");
    const option2 = screen.queryByText("Volkswagen");

    expect(option1).toBeInTheDocument();
    expect(option2).not.toBeInTheDocument();
  });

  test("displays 'No options' when no manufacturers match the query", () => {
    render(<SearchManufacturer manufacturer="" setmanufacturer={() => {}} />);
    const searchInput = screen.getByPlaceholderText("Volkwagen");

    fireEvent.change(searchInput, { target: { value: "Tesla" } });

    const noOptions = screen.getByText("No options");

    expect(noOptions).toBeInTheDocument();
  });
});
