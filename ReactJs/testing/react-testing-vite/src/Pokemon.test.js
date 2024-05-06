import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import Pokemon from "./Pokemon";

jest.mock("axios"); // Mock axios for consistent testing

describe("when the user enters a valid Pokémon name", () => {
  beforeEach(() => {
    axios.get.mockClear(); // Clear previous mock calls
  });

  test("should display the abilities of the Pokémon", async () => {
    const mockResponse = {
      data: {
        abilities: [
          {
            ability: {
              name: "overgrow",
              url: "https://pokeapi.co/api/v2/ability/65/",
            },
            is_hidden: false,
            slot: 1,
          },
          {
            ability: {
              name: "chlorophyll",
              url: "https://pokeapi.co/api/v2/ability/34/",
            },
            is_hidden: true,
            slot: 3,
          },
        ],
      },
    };

    // Set the mock response for axios.get to return the mock data
    axios.get.mockResolvedValueOnce(mockResponse);

    // Render the Pokémon component
    render(<Pokemon />);

    // Simulate entering a valid Pokémon name
    fireEvent.change(screen.getByLabelText(/Pokémon name/i), {
      target: { value: "bulbasaur" },
    });

    // Simulate submitting the form
    fireEvent.click(screen.getByText(/Fetch Pokémon abilities/i));

    // Wait for axios.get to be called
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(
        "https://pokeapi.co/api/v2/pokemon/bulbasaur"
      );
    });

    // Assert that the ability names are displayed in the document
    expect(screen.getByText("overgrow")).toBeInTheDocument(); // Verify first ability
    expect(screen.getByText("chlorophyll")).toBeInTheDocument(); // Verify second ability
  });
});
