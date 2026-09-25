/* eslint-env jest */
import React from "react";
import {render, screen} from "@testing-library/react";
import {RatingSummary} from "../src/badge/RatingSummary";

describe('Rating Summary', () => {
    it ('renders the summary', () => {
        render(<RatingSummary averageRating={4.6} />);
        expect(screen.getByText('4.6 OUT OF 5')).toBeInTheDocument();
    })
});