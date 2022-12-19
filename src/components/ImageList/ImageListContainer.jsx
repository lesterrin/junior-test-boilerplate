import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  getImages,
  incrementCurrentPage,
  likeImage,
  setImages,
  toggleIsFetching,
  unlikeImage,
} from '../../redux/imageListReducer';

import { ImageList } from './ImageList';

const ImageListContainer = ({
  images,
  setImages,
  currentPage,
  incrementCurrentPage,
  getImages,
  isFetching,
  likeImage,
  unlikeImage,
}) => {
  useEffect(() => {
    getImages(currentPage);
  }, [currentPage]);

  return (
    <ImageList
      images={images}
      setImages={setImages}
      incrementCurrentPage={incrementCurrentPage}
      isFetching={isFetching}
      likeImage={likeImage}
      unlikeImage={unlikeImage}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    images: state.imagesData,
    currentPage: state.currentPage,
    isFetching: state.isFetching,
  };
};

export default connect(mapStateToProps, {
  setImages,
  incrementCurrentPage,
  toggleIsFetching,
  getImages,
  likeImage,
  unlikeImage,
})(ImageListContainer);
