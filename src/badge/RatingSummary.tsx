import React from "react";

const numberFormatter = new Intl.NumberFormat(undefined, {
    maximumFractionDigits: 1,
    minimumFractionDigits: 0
});

export const RatingSummary = (props: {
    averageRating: number | undefined
})=> {
    if (props.averageRating === undefined || isNaN(props.averageRating)) {
        return <></>;
    }
    return <p style={{ fontWeight: 'bold', margin: 0 }} aria-label={'Average rating'}>
        {`${numberFormatter.format(props.averageRating)} OUT OF 5`}
    </p>;
}