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
    getImages
} from "../../redux/imageListReducer";

const ImageListContainer = ({images, setImages, currentPage, incrementCurrentPage, getImages, isFetching, likeImage, unlikeImage}) => {
    useEffect(() => {
        getImages(currentPage);
    }, [currentPage]); //должен перерисовываться сам при изменении стейта или должна быть зависимость от значения? Почитать про изменение примитивов в стейте

    return <ImageList images={images}
                      setImages={setImages}
                      incrementCurrentPage={incrementCurrentPage}
                      isFetching={isFetching}
                      likeImage={likeImage}
                      unlikeImage={unlikeImage}/>;
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
    getImages,
    likeImage,
    unlikeImage
})(ImageListContainer);
