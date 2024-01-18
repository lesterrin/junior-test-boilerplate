import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
    getImages,
    incrementCurrentPage,
    likeImage,
    unlikeImage
} from '../../redux/imageListReducer';

import {ImageList} from './ImageList';
import {selectCurrentPage, selectImages, selectIsFetching} from "../../selectors/imageListSelector";

const ImageListContainer = () => {

    const images = useSelector(selectImages);
    const currentPage = useSelector(selectCurrentPage);
    const isFetching = useSelector(selectIsFetching);

    const dispatch = useDispatch();

    const incrementCurrentPageWrapper = () => dispatch(incrementCurrentPage());
    const getImagesWrapper = (currentPage) => dispatch(getImages(currentPage));
    const likeImageWrapper = (imageId) => dispatch(likeImage(imageId));
    const unlikeImageWrapper = (imageId) => dispatch(unlikeImage(imageId));

    useEffect(() => {
        getImagesWrapper(currentPage);
    }, [currentPage]);

    return (
        <ImageList
            images={images}
            isFetching={isFetching}
            incrementCurrentPage={incrementCurrentPageWrapper}
            likeImage={likeImageWrapper}
            unlikeImage={unlikeImageWrapper}
        />
    );
};

export default ImageListContainer;
