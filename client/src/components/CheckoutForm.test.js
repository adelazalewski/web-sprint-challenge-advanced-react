import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
    const formHeader = screen.getByText(/checkout form/i)
    expect(formHeader).toBeInTheDocument(); //passes
});


test("fillout form and submit", async() => {
    render(<CheckoutForm />);
const firstName = screen.getByLabelText(/first name/i);
const lastName = screen.getByLabelText(/last name/i);
const address = screen.getByLabelText(/address/i);
const city = screen.getByLabelText(/city/i);
const state = screen.getByLabelText(/state/i);
const zipCode = screen.getByLabelText(/zip/i);

fireEvent.change(firstName, {target: { value: "adela"}});
fireEvent.change(lastName, {target: { value: "zalewski"}});
fireEvent.change(address, {target: { value: "123csdfsg"}});
fireEvent.change(city, {target: { value: "lasalle"}});
fireEvent.change(state, {target: { value: "michigan"}});
fireEvent.change(zipCode, {target: { value: "12345"}});

expect(firstName).toHaveValue("adela"); //broke this code on purpose so testing workes properly

const button = screen.getByRole("button", {name: /checkout/i});
fireEvent.click(button);
//after filling out the fom the state changed to true in my terminal and then when grabbing and checking for the seccess message the test passed

const successMessage = await screen.getByText(/you have ordered/i);
expect(successMessage).toBeInTheDocument();
})