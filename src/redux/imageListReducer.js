const SET_IMAGES = 'SET-IMAGES';
const INCREMENT_CURRENT_PAGE = 'INCREMENT-CURRENT-IMAGES';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

const initialState = {
    imagesData: [],
    isFetching: false,
    currentPage: 1
}

const imageListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IMAGES:
            return {
                ...state,
                imagesData: [...state.imagesData, ...action.imagesData]
            };

        case INCREMENT_CURRENT_PAGE:
            return {
                ...state,
                currentPage: state.currentPage + 1
            };

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.bool
            }

        default:
            return state;
    }
}

export const setImages = (images) => ({type: SET_IMAGES, imagesData: images});
export const incrementCurrentPage = () => ({type: INCREMENT_CURRENT_PAGE});
export const toggleIsFetching = (bool) => ({type: TOGGLE_IS_FETCHING, bool});

export default imageListReducer;
