import classes from './ImageList.module.css'
import React from "react";
import Loader from "../loader";

export const ImageList = ({images, incrementCurrentPage, isFetching, likeImage, unlikeImage}) => {
    const imagesItems = images.map(({id, created_at, urls, liked_by_user}) => {
        return (
            <div key={id} className={classes.image_card}>
                <img src={urls.small}/>
                <div>{created_at}</div>
                {liked_by_user ?
                    <button onClick={() => unlikeImage(id)}><span className={classes.liked}>&#10084;</span></button>
                    :
                    <button onClick={() => likeImage(id)}><span>&#10084;</span></button>
                }
            </div>
        );
    });

    return (
        <React.Fragment>
            <div className={classes.images_list}>
                {imagesItems}
            </div>
            {isFetching ? <Loader/> : <button onClick={incrementCurrentPage}>Ещё</button>}
        </React.Fragment>
    );
};
