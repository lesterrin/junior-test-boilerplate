import classes from './ImageList.module.css';
import {imagesAPI} from "../../api/api";
import React, {useEffect} from "react";
import {ImageList} from "./ImageList";
import {connect} from "react-redux";
import {incrementCurrentPage, setImages} from "../../redux/imageListReducer";

const ImageListContainer = ({images, setImages, currentPage, incrementCurrentPage}) => {
    useEffect(() => {
        imagesAPI.getImages(currentPage).then(data => {
            setImages(data);
        });
    }, [currentPage]); //должен перерисовываться сам при изменении стейта или должна быть зависимость от значения?


    return <ImageList images={images} setImages={setImages} incrementCurrentPage={incrementCurrentPage}/>;
};

const mapStateToProps = (state) => {
    return ({
        images: state.imagesData,
        currentPage: state.currentPage
    });
}

export default connect(mapStateToProps, {setImages, incrementCurrentPage})(ImageListContainer);
