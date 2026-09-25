import React from "react";

export const RatingSummary = (props: {
    averageRating: number | undefined
})=> {
    if (props.averageRating === undefined || isNaN(props.averageRating)) {
        return <></>;
    }
    return <div style={{ fontWeight: 'bold' }} aria-label={'Average rating'}>
        {`${props.averageRating.toFixed(1)} OUT OF 5`}
    </div>;
}