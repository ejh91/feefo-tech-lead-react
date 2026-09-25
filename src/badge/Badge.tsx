import React from "react";
import { RatingDescription } from "./RatingDescription";
import { RatingBucket } from "./RatingBucket";
import { RatingSummary } from "./RatingSummary";
import { StarRating } from "./StarRating";
import {CentredColumn} from "../layout/CentredColumn";
import {CentredRow} from "../layout/CentredRow";
import feefoLogo from "../assets/feefo_logo.svg";
import '@fontsource/poppins';
import "../styles/styles.css";

const getRatingsCount = (ratingBuckets: {
    ratings5Star: number,
    ratings4Star: number,
    ratings3Star: number,
    ratings2Star: number,
    ratings1Star: number,
}) => {
    return ratingBuckets.ratings5Star
        + ratingBuckets.ratings4Star
        + ratingBuckets.ratings3Star
        + ratingBuckets.ratings2Star
        + ratingBuckets.ratings1Star;
}

const getTotalScore = (ratingBuckets: {
    ratings5Star: number,
    ratings4Star: number,
    ratings3Star: number,
    ratings2Star: number,
    ratings1Star: number,
}) => {
    return ratingBuckets.ratings5Star * 5
        + ratingBuckets.ratings4Star * 4
        + ratingBuckets.ratings3Star * 3
        + ratingBuckets.ratings2Star * 2
        + ratingBuckets.ratings1Star;
}

export const Badge = (props: {
    ratings5Star: number,
    ratings4Star: number,
    ratings3Star: number,
    ratings2Star: number,
    ratings1Star: number,
})=> {
    const ratingsCount = getRatingsCount(props);
    const totalScore = getTotalScore(props);
    const averageRating = totalScore / ratingsCount;

    return (
        <CentredColumn style={{
            margin: '4rem',
            padding: '2rem',
            border: '2px solid lightgrey',
            borderRadius: '20px',
            width: 'fit-contents',
            gap: '1rem'
        }}>
            <RatingDescription averageRating={averageRating} />
            <StarRating averageRating={averageRating} />
            <RatingSummary averageRating={averageRating} />
            <CentredRow style={{ gap: '0.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                Product Rating <img src={feefoLogo} alt={'Feefo'} width={100}/>
            </CentredRow>
            <CentredColumn style={{ width: '100%' }}>
                <div style={{
                    display: "grid",
                    width: '100%',
                    gridTemplateColumns: "auto 1fr auto",
                    columnGap: '1rem',
                    alignItems: 'center'
                }}>
                    <RatingBucket key={'bucket5'} bucketRatings={props.ratings5Star} bucket={5} ratingsCount={ratingsCount} />
                    <RatingBucket key={'bucket4'} bucketRatings={props.ratings4Star} bucket={4} ratingsCount={ratingsCount} />
                    <RatingBucket key={'bucket3'} bucketRatings={props.ratings3Star} bucket={3} ratingsCount={ratingsCount} />
                    <RatingBucket key={'bucket2'} bucketRatings={props.ratings2Star} bucket={2} ratingsCount={ratingsCount} />
                    <RatingBucket key={'bucket1'} bucketRatings={props.ratings1Star} bucket={1} ratingsCount={ratingsCount} />
                </div>
            </CentredColumn>
        </CentredColumn>
    );
}