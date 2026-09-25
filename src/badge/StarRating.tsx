import React, {useMemo} from "react";
import {CentredColumn} from "../layout/CentredColumn";
import {CentredRow} from "../layout/CentredRow";
import starWhite from '../assets/feefo_star_white.svg';

const Star = (props: { fillFraction: number }) => <CentredColumn style={{
    backgroundColor: 'lightgrey',
    borderRadius: '8px',
    overflow: 'hidden',
    position: 'relative'
}}>
    <div style={{position: 'absolute', left: 0, top: 0, bottom: 0, width: `${props.fillFraction * 100}%`, backgroundColor: 'rgba(255, 209, 0, 1)'}}></div>
    <img src={starWhite} alt={' '} style={{ zIndex: 1, padding: '0.5rem' }}/>
</CentredColumn>

const getStarFilledFractions = (averageRating: number | undefined)=> {
    if (averageRating === undefined || isNaN(averageRating)) {
        return undefined;
    }
    return {
        star5: averageRating >= 5 ? 1 : Math.max(0, averageRating - 4),
        star4: averageRating >= 4 ? 1 : Math.max(0, averageRating - 3),
        star3: averageRating >= 3 ? 1 : Math.max(0, averageRating - 2),
        star2: averageRating >= 2 ? 1 : Math.max(0, averageRating - 1),
        star1: averageRating >= 1 ? 1 : Math.max(0, averageRating),
    }
}

export const StarRating = (props: {
    averageRating: number | undefined
})=> {
    const starFilledFractions = useMemo(() => getStarFilledFractions(props.averageRating), [props.averageRating]);

    if (starFilledFractions === undefined) {
        return <></>;
    }
    return <CentredRow style={{ gap: '0.5rem' }}>
        <Star fillFraction={starFilledFractions.star1}/>
        <Star fillFraction={starFilledFractions.star2}/>
        <Star fillFraction={starFilledFractions.star3}/>
        <Star fillFraction={starFilledFractions.star4}/>
        <Star fillFraction={starFilledFractions.star5}/>
    </CentredRow>;
}