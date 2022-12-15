import classes from './ImageList.module.css';
import {imagesAPI} from "../../api/api";
import React, {useEffect} from "react";
import {ImageList} from "./ImageList";
import {connect} from "react-redux";
import {incrementCurrentPage, setImages, toggleIsFetching} from "../../redux/imageListReducer";

const ImageListContainer = ({images, setImages, currentPage, incrementCurrentPage, toggleIsFetching, isFetching}) => {
    console.log(isFetching, currentPage);
    useEffect(() => {
        toggleIsFetching(true);
        imagesAPI.getImages(currentPage)
            .then(data => {
                toggleIsFetching(false);
                setImages(data);
            });
    }, [currentPage]); //должен перерисовываться сам при изменении стейта или должна быть зависимость от значения?


    return <ImageList images={images} setImages={setImages} incrementCurrentPage={incrementCurrentPage} isFetching={isFetching}/>;
};

const mapStateToProps = (state) => {
    return ({
        images: state.imagesData,
        currentPage: state.currentPage,
        isFetching: state.isFetching
    });
}

export default connect(mapStateToProps, {setImages, incrementCurrentPage, toggleIsFetching})(ImageListContainer);
