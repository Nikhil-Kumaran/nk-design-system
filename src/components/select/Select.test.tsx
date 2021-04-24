import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Select } from "./Select";
const options = [
  { label: "Adelaide", value: "adelaide" },
  { label: "Brisbane", value: "brisbane" },
  { label: "Canberra", value: "canberra" },
  { label: "Darwin", value: "darwin" },
  { label: "Hobart", value: "hobart" },
  { label: "Melbourne", value: "melbourne" },
  { label: "Perth", value: "perth" },
  { label: "Sydney", value: "sydney" },
];
const placeholder = "Choose a city";
beforeEach(() => {
  render(<Select options={options} placeholder={placeholder} />);
});

test("Should have placeholder and the dropdown options are hidden", () => {
  expect(screen.getByText(placeholder)).toBeInTheDocument();
  expect(screen.getByLabelText("Menu items").className.includes("hidden")).toBe(
    true
  ); // CSS files are not loaded in JSDom
  //   expect(screen.queryByLabelText("Menu items")).not.toBeVisible();
});

test("Click on select should list all dropdown options", async () => {
  userEvent.click(screen.getByLabelText("Select"));

  const renderedOptions = await screen.findAllByRole("option");
  expect(renderedOptions.map((option) => option.textContent)).toEqual(
    options.map((option) => option.label)
  );
});

test("Select an option from the dropdown list", async () => {
  userEvent.click(screen.getByLabelText("Select"));

  userEvent.click(await screen.findByText("Melbourne"));
  expect((await screen.findByLabelText("Selected value")).textContent).toBe(
    "Melbourne"
  );
  expect(screen.getByLabelText("Menu items").className.includes("hidden")).toBe(
    true
  );
  expect(screen.queryByText(placeholder)).not.toBeInTheDocument();
});

test("Search for options and select", async () => {
  userEvent.click(screen.getByLabelText("Select"));
  userEvent.type(screen.getByLabelText("Search"), "b");

  const renderedOptions = await screen.findAllByRole("option");
  expect(renderedOptions.map((option) => option.textContent)).toEqual(
    options
      .filter((option) => option.label.includes("b"))
      .map((option) => option.label)
  );

  userEvent.click(await screen.findByText("Melbourne"));
  expect((await screen.findByLabelText("Selected value")).textContent).toBe(
    "Melbourne"
  );
  expect(screen.getByLabelText("Menu items").className.includes("hidden")).toBe(
    true
  );
  expect(screen.queryByText(placeholder)).not.toBeInTheDocument();
});
