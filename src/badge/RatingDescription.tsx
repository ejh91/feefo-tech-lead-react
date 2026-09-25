import React from "react";
import styled from "styled-components";

const getRatingDesc = (averageRating: number | undefined) => {
    if (averageRating === undefined || isNaN(averageRating)) {
        return 'Unrated';
    }
    if (averageRating === 5) {
        return 'Perfect';
    }
    if (averageRating >= 4) {
        return 'Excellent'
    }
    if (averageRating >= 3) {
        return 'Good'
    }
    if (averageRating >= 2) {
        return 'Average'
    }
    if (averageRating >= 1) {
        return 'Poor'
    }
    return 'Dreadful'
}

const RatingHeader = styled.h1`
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    color: #474344;
    margin: 0;
`;

export const RatingDescription = (props: {
    averageRating: number | undefined
})=> {
    const ratingDesc = getRatingDesc(props.averageRating);
    return <RatingHeader aria-label={"Overall rating"}>{ratingDesc}</RatingHeader>;
}