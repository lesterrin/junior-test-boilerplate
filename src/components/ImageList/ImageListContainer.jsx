import classes from './ImageList.module.css';
import {imagesAPI} from "../../api/api";
import {useEffect} from "react";
import {ImageList} from "./ImageList";
import {connect} from "react-redux";
import {setImages} from "../../redux/imageListReducer";

const ImageListContainer = ({images, setImages}) => {
    useEffect(() => {
        imagesAPI.getImages().then(data => {
            console.log(data);
        });
    }, []);

    return (
        <ImageList/>
    );
};

const mapStateToProps = (state) => {
    return({
       images: state
    });
}

export default connect(mapStateToProps, {setImages})(ImageListContainer);
