const SET_IMAGES = 'SET-IMAGES';

const initialState = {
    imagesData: [123,312],
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
            }
    }
}

export const setImages = (images) => ({type: SET_IMAGES, imagesData: images})

export default imageListReducer;
