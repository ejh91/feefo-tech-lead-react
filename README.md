Task:

> Implement the design provided as a set of React components.
> We would like to see
> - The layout should grow/shrink sensibly with the viewport
> - The design split into several components
> - Usage of proptypes
> - Unit tests covering your components
> - a11y considered and relevant ARIA attributes added
> 
> Technical Notes
> - The font family is Google font Poppins.
> - Exact font size specification in components is not necessary, as long as the result is close to the design.
> - Preference is the use of styled-components
> - Use jest + testing library for unit tests
> - Share a link to a GitHub repository

Plan:
Semantic HTML where possible but the ordering is a bit of a pain in the screenshot.
'Excellent' might want an aria label to say it's the overall rating
'4.6 out of 5' might want an aria label to say it's the average score
'Product rating feefo' should probably be read out first? No sure on the best approach for that.
Individual rank buckets should be labelled as '5-star reviews: <count>' etc.
 - fixed width on them all
 - each fill percentage is calculated as the bucket total as % of the sum across all buckets

Runs as a Storybook component so you can mess round with the numbers and see the changes take effect:
 - `storybook dev -p 6006`

Limitations:
 - Sampling of unit tests rather than exhaustive.
 - Not got every colour exactly right, and had to guess at the other rating level descriptions.
 - Have used styled components where I'm actually repeating patterns a lot.
   - Fixed styles for the one-off components or minor variations to/extensions of a styled component