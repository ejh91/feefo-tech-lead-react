
import { BadgeStory } from './Badge';

const ratingControl =  {
  type: 'number',
  min: 0
};

export default {
  title: 'Feefo/Badge',
  component: BadgeStory,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    ratings5Star: 952,
    ratings4Star: 171,
    ratings3Star: 55,
    ratings2Star: 14,
    ratings1Star: 40,
  },
  argTypes: {
    ratings5Star: ratingControl,
    ratings4Star: ratingControl,
    ratings3Star: ratingControl,
    ratings2Star: ratingControl,
    ratings1Star: ratingControl,
  }
};

// More on component testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Standard = {

};
