import classes from './ImageList.module.css'
import React from "react";
import Loader from "../loader";

export const ImageList = ({images, incrementCurrentPage, isFetching, likeImage}) => {
    const imagesItems = images.map(({id, created_at, urls, liked_by_user}) => {
        return (
            <div key={id} className={classes.image_card}>
                <img src={urls.full} />
                <div>{created_at}</div>
                <button onClick={()=>likeImage(id)} className={!liked_by_user ? classes.liked : null}>like</button>
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
