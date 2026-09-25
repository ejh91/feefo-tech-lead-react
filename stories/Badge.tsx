import React, {useEffect, useState} from 'react';

import { Badge as BadgeComponent } from "../src/badge/Badge";

import '@fontsource/poppins';

export const BadgeStory = (props : {
  ratings5Star: number,
  ratings4Star: number,
  ratings3Star: number,
  ratings2Star: number,
  ratings1Star: number,
}) => {
  const [ratings, setRatings] = useState<{
    ratings5Star: number,
    ratings4Star: number,
    ratings3Star: number,
    ratings2Star: number,
    ratings1Star: number,
  }>(props);
  useEffect(() => {
    setRatings(props);
  }, [props])

  return (
      <BadgeComponent ratings5Star={ratings.ratings5Star}
                      ratings4Star={ratings.ratings4Star}
                      ratings3Star={ratings.ratings3Star}
                      ratings2Star={ratings.ratings2Star}
                      ratings1Star={ratings.ratings1Star}
      />
  );
};
