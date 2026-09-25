/* eslint-env jest */
import React from "react";
import {render, screen} from "@testing-library/react";
import {RatingDescription} from "../src/badge/RatingDescription";

describe('Rating Description', () => {
    it ('renders the description', () => {
        render(<RatingDescription averageRating={0} />);
        expect(screen.getByText('Dreadful')).toBeInTheDocument();
        render(<RatingDescription averageRating={1} />);
        expect(screen.getByText('Poor')).toBeInTheDocument();
        render(<RatingDescription averageRating={2} />);
        expect(screen.getByText('Average')).toBeInTheDocument();
        render(<RatingDescription averageRating={3} />);
        expect(screen.getByText('Good')).toBeInTheDocument();
        render(<RatingDescription averageRating={4} />);
        expect(screen.getByText('Excellent')).toBeInTheDocument();
        render(<RatingDescription averageRating={5} />);
        expect(screen.getByText('Perfect')).toBeInTheDocument();
    })
});