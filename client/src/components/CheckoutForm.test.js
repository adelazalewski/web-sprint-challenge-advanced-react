import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
    const formHeader = screen.getByText(/checkout form/i)
    expect(formHeader).toBeInTheDocument(); //passes
});

test("form shows success message on submit with form details", async() => {
    render(<CheckoutForm />)
const successMessage = await screen.findByTestId("successMessage");
 expect(successMessage).toHaveTextContent("You have ordered some plants! Woo-hoo!");

//the form can be submited - passed
// const button = screen.getByRole("button", {name: /checkout/i});
// fireEvent.click(button);
// const successMessage = await screen.getByText(/you have ordered/i);
// expect(successMessage).toBeInTheDocument();
});
