import React from 'react';

import classes from './imageCard.module.css';

const ImageCard = ({
  id,
  created_at,
  urls,
  liked_by_user,
  likeImage,
  unlikeImage,
}) => {
  let date = new Date(created_at).toLocaleDateString('ru-ru', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  date = date.replace('г.', 'года');

  return (
    <div key={id} className={classes.image_card}>
      <div
        className={classes.image}
        style={{ backgroundImage: `url(${urls.small})` }}
      ></div>
      <div>Дата обновления:</div>
      <div>{date}</div>
      {liked_by_user ? (
        <span className={classes.like_btn} onClick={() => unlikeImage(id)}>
          <span className={classes.liked}>&#10084;</span>
        </span>
      ) : (
        <span className={classes.like_btn} onClick={() => likeImage(id)}>
          <span>&#10084;</span>
        </span>
      )}
    </div>
  );
};

export default ImageCard;
