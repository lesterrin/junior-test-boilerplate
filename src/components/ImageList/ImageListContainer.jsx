import {imagesAPI} from "../../api/api";
import React, {useEffect} from "react";
import {ImageList} from "./ImageList";
import {connect} from "react-redux";
import {
    incrementCurrentPage,
    likeImage,
    unlikeImage,
    setImages,
    toggleIsFetching,
    getImages, likeImageThunkCreator, unlikeImageThunkCreator
} from "../../redux/imageListReducer";

const ImageListContainer = ({images, setImages, currentPage, incrementCurrentPage, getImages, isFetching, likeImageThunkCreator, unlikeImageThunkCreator}) => {

    useEffect(() => {
        getImages(currentPage);
    }, [currentPage]); //должен перерисовываться сам при изменении стейта или должна быть зависимость от значения?

    return <ImageList images={images}
                      setImages={setImages}
                      incrementCurrentPage={incrementCurrentPage}
                      isFetching={isFetching}
                      likeImage={likeImageThunkCreator}
                      unlikeImage={unlikeImageThunkCreator}/>;
};

const mapStateToProps = (state) => {
    return ({
        images: state.imagesData,
        currentPage: state.currentPage,
        isFetching: state.isFetching
    });
}

export default connect(mapStateToProps, {
    setImages,
    incrementCurrentPage,
    toggleIsFetching,
    likeImage,
    unlikeImage,
    getImages,
    likeImageThunkCreator,
    unlikeImageThunkCreator
})(ImageListContainer);
