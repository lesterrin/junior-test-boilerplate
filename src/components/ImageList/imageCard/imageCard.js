import classes from './imageCard.module.css';
import React from "react";

const ImageCard = ({id, created_at, urls, liked_by_user, likeImage, unlikeImage}) => {
    let date = new Date(created_at).toLocaleDateString('ru-ru', {day:"numeric", month:"long", year:"numeric"});
    date = date.replace('г.', 'года'); //переделать или перенести

    return (
        <div key={id} className={classes.image_card}>
            <div className={classes.image} style={{backgroundImage: `url(${urls.small})`}}></div>
            <div>Дата обновления:</div>
            <div>{date}</div>
            {liked_by_user ?
                <button className={classes.like_btn} onClick={() => unlikeImage(id)}><span
                    className={classes.liked}>&#10084;</span></button>
                :
                <button className={classes.like_btn} onClick={() => likeImage(id)}><span>&#10084;</span></button>
            }
        </div>
    );
}

export default ImageCard
