import classes from './ImageList.module.css';
import {imagesAPI} from "../../api/api";
import React, {useEffect} from "react";
import Loader from "../loader";

export const ImageList = ({images, incrementCurrentPage, isFetching}) => {
    const imagesItems = images.map(({id, alt_description, likes, urls}) => {
        return (
            <li key={id}>
                <div>{alt_description}</div>
                <div>{likes}</div>
                <a href={urls.full}>Ссылка</a>
            </li>
        );
    });

    return (
        <React.Fragment>
            <ul className={classes.list}>
                {imagesItems}
            </ul>
            {isFetching ? <Loader/> : <button onClick={incrementCurrentPage}>Ещё</button>}
        </React.Fragment>
    );
};
