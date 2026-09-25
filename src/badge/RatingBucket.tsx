import React, { useMemo } from "react";
import { CentredRow } from "../layout/CentredRow";
import starLightGrey from '../assets/feefo_star_lightgrey.svg';
import useMeasure from 'react-use-measure';

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
    const [leftInnerRef, leftInnerBounds] = useMeasure();
    const [rightRef, rightBounds] = useMeasure();
    const leftStyle = useMemo(() => {
        return {
            justifyContent: 'end',
            minWidth: Math.max(rightBounds.width)
        }
    }, [rightBounds.width])
    const rightStyle = useMemo(() => {
        return {
            justifyContent: 'start',
            minWidth: Math.max(leftInnerBounds.width)
        }
    }, [leftInnerBounds.width])

    const bucketPercentage = useMemo(() => getBucketPercentageOfTotal(props.bucketRatings, props.ratingsCount), [props.bucketRatings, props.ratingsCount]);
    return <>
        <CentredRow style={leftStyle}>
            <CentredRow style={{ gap: '0.5rem' }} ref={leftInnerRef}>
                <span style={{fontWeight: 'bold'}}>{props.bucket}</span><img width="21px" height="21px" src={starLightGrey} alt={' '}/>
            </CentredRow>
        </CentredRow>
        <CentredRow style={{justifyContent: 'left', width: '100%', backgroundColor: 'lightgrey', height: '8px', borderRadius: '2px'}}
                    aria-label={`${props.bucket}-star reviews: ${props.bucketRatings}`}
                    role="img"
        >
            <CentredRow style={{width: `${bucketPercentage}%`, backgroundColor: 'rgba(255, 209, 0, 1)', height: '8px', borderRadius: '2px'}} />
        </CentredRow>
        <CentredRow ref={rightRef} style={rightStyle}>{props.bucketRatings}</CentredRow>
    </>;
}