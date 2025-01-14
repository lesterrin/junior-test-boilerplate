import React from 'react';

import Loader from '../loader/loader';

import ImageCard from './imageCard/imageCard';
import classes from './ImageList.module.css';

export const ImageList = ({
  images,
  incrementCurrentPage,
  isFetching,
  likeImage,
  unlikeImage,
}) => {
  const imagesItems = images.map(({ id, created_at, urls, liked_by_user }) => {
    return (
      <ImageCard
        key={id}
        id={id}
        created_at={created_at}
        urls={urls}
        liked_by_user={liked_by_user}
        likeImage={likeImage}
        unlikeImage={unlikeImage}
      />
    );
  });

  return (
    <>
      <div className={`${classes.images_list} ${classes.container}`}>
        {imagesItems}
      </div>
      <div className={classes.more_wrapper}>
        {isFetching ? (
          <Loader />
        ) : (
          <button className={classes.more_btn} onClick={incrementCurrentPage}>
            Загрузить ещё
          </button>
        )}
      </div>
    </>
  );
};
