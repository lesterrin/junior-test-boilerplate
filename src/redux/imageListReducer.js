import { imagesAPI } from '../api/api';

const SET_IMAGES = 'SET-IMAGES';
const INCREMENT_CURRENT_PAGE = 'INCREMENT-CURRENT-IMAGES';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const LIKE_IMAGE = 'LIKE_IMAGE';
const UNLIKE_IMAGE = 'UNLIKE_IMAGE';

const initialState = { imagesData: [], isFetching: false, currentPage: 1 };

const imageListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMAGES:
      return {
        ...state,
        imagesData: [...state.imagesData, ...action.imagesData],
      };

    case INCREMENT_CURRENT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.bool,
      };

    case LIKE_IMAGE:
      return {
        ...state,
        imagesData: state.imagesData.map((image) => {
          if (action.id === image.id) {
            return {
              ...image,
              liked_by_user: true,
            };
          }

          return image;
        }),
      };

    case UNLIKE_IMAGE:
      return {
        ...state,
        imagesData: state.imagesData.map((image) => {
          if (action.id === image.id) {
            return {
              ...image,
              liked_by_user: false,
            };
          }

          return image;
        }),
      };

    default:
      return state;
  }
};

//action creators
export const setImages = (images) => ({ type: SET_IMAGES, imagesData: images });

export const incrementCurrentPage = () => ({ type: INCREMENT_CURRENT_PAGE });

export const toggleIsFetching = (bool) => ({ type: TOGGLE_IS_FETCHING, bool });

export const likeImageSuccess = (id) => ({ type: LIKE_IMAGE, id });

export const unlikeImageSuccess = (id) => ({ type: UNLIKE_IMAGE, id });

//thunk creators
export const getImages = (currentPage) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));

    imagesAPI.getImages(currentPage).then((data) => {
      dispatch(toggleIsFetching(false));
      dispatch(setImages(data));
    });
  };
};

export const likeImage = (imageId) => {
  return (dispatch) => {
    imagesAPI.likeImage(imageId).then((response) => {
      dispatch(likeImageSuccess(imageId));
    });
  };
};

export const unlikeImage = (imageId) => {
  return (dispatch) => {
    imagesAPI.unlikeImage(imageId).then((response) => {
      dispatch(unlikeImageSuccess(imageId));
    });
  };
};

export default imageListReducer;
