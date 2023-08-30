import { screen, render } from "@testing-library/react";
import Home from "../components/routes/home";

describe("Renders the home page with correct data", () => {
    it("renders the home page", () => {
        render(<Home/>)
    })
})
