import classes from './ImageList.module.css';
import {imagesAPI} from "../../api/api";
import React, {useEffect} from "react";
import {ImageList} from "./ImageList";
import {connect} from "react-redux";
import {incrementCurrentPage, likeImage, unlikeImage, setImages, toggleIsFetching} from "../../redux/imageListReducer";

const ImageListContainer = ({images, setImages, currentPage, incrementCurrentPage, toggleIsFetching, isFetching}) => {
    console.log(images);
    useEffect(() => {
        toggleIsFetching(true);
        imagesAPI.getImages(currentPage)
            .then(data => {
                toggleIsFetching(false);
                setImages(data);
            });
    }, [currentPage]); //должен перерисовываться сам при изменении стейта или должна быть зависимость от значения?

    const likeImageWrap = (id) => { //обработать ошибки везде, где получаются данные
        imagesAPI.likeImage(id).then(() => {
                likeImage(id);
            }
        );
    }

    const unlikeImageWrap = (iid) => {
        imagesAPI.unlikeImage(iid).then(() => {
            }
        );

    }

    return <ImageList images={images}
                      setImages={setImages}
                      incrementCurrentPage={incrementCurrentPage}
                      isFetching={isFetching}
                      likeImage={likeImageWrap}
                      unlikeImage={unlikeImageWrap}/>;
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
    unlikeImage
})(ImageListContainer);
