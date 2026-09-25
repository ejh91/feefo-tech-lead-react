import React, { useMemo } from "react";
import { CentredRow } from "../layout/CentredRow";
import starLightGrey from '../assets/feefo_star_lightgrey.svg';

const getBucketPercentageOfTotal = (bucketRatings: number, ratingsCount: number) => {
    if (ratingsCount === 0) {
        return 0;
    }
    return (bucketRatings / ratingsCount) * 100;
}

export const RatingBucket = (props: {
    bucketRatings: number,
    bucket: number,
    ratingsCount: number
})=> {
    const bucketPercentage = useMemo(() => getBucketPercentageOfTotal(props.bucketRatings, props.ratingsCount), [props.bucketRatings, props.ratingsCount]);
    return <CentredRow style={{flex: 1, width: '100%', gap: '1rem'}} aria-label={`${props.bucket}-star reviews: ${props.bucketRatings}`}>
        <CentredRow><span style={{width: '20px', fontWeight: 'bold'}}>{props.bucket}</span><img width="21px" height="21px" src={starLightGrey} alt={'Star logo'}/></CentredRow>
        <CentredRow style={{justifyContent: 'left', width: '100%', backgroundColor: 'lightgrey', height: '8px', borderRadius: '2px'}}>
            <CentredRow style={{width: `${bucketPercentage}%`, backgroundColor: '#fddc47', height: '8px', borderRadius: '2px'}} />
        </CentredRow>
        <span style={{width: '70px'}}>{props.bucketRatings}</span>
    </CentredRow>
}