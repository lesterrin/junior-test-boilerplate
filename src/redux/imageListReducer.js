const SET_IMAGES = 'SET-IMAGES';
const INCREMENT_CURRENT_PAGE = 'INCREMENT-CURRENT-IMAGES';

const initialState = {
    imagesData: [],
    isFetching: false,
    currentPage: 1,
    pageSize: 6
}

const imageListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IMAGES:
            return {
                ...state,
                imagesData: [...state.imagesData, ...action.imagesData]
            };

        case INCREMENT_CURRENT_PAGE:
            debugger;
            return {
                ...state,
                currentPage: state.currentPage + 1
            };

        default:
            return state;
    }
}

export const setImages = (images) => ({type: SET_IMAGES, imagesData: images})
export const incrementCurrentPage = () => ({type: INCREMENT_CURRENT_PAGE})

export default imageListReducer;
