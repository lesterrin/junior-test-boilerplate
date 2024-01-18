import { imagesAPI } from '../api/api';

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {imagesData: [], isFetching: false, currentPage: 1};

const imageListSlice = createSlice({
    name: 'imageList',
    initialState: initialState,
    reducers: {
        setImages(state, action) {
            state.imagesData = [...state.imagesData, ...action.payload];
        },
        incrementCurrentPage(state, action) {
            state.currentPage += 1;
        },
        toggleIsFetching(state, action) {
            state.isFetching = action.payload;
        },
        likeImageSuccess(state, action) {
            state.imagesData.forEach((image) => {
                if (action.payload === image.id) {
                    image.liked_by_user = true;
                }
            })
        },
        unlikeImageSuccess(state, action) {
            state.imagesData.forEach((image) => {
                if (action.payload === image.id) {
                    image.liked_by_user = false;
                }
            })
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getImages.pending, (state) => {
                imageListSlice.caseReducers.toggleIsFetching(state,{payload: true});
            })
            .addCase(getImages.fulfilled, (state, action) => {
                imageListSlice.caseReducers.toggleIsFetching(state,{payload: false});
                imageListSlice.caseReducers.setImages(state,{payload: action.payload});
            })
            .addCase(likeImage.fulfilled, (state, action) => {
                imageListSlice.caseReducers.likeImageSuccess(state,{payload: action.payload});
            })
            .addCase(unlikeImage.fulfilled, (state, action) => {
                imageListSlice.caseReducers.unlikeImageSuccess(state,{payload: action.payload});
            });
    }
});

const {actions, reducer} = imageListSlice;

export const {
    setImages,
    incrementCurrentPage,
    toggleIsFetching
} = actions;

export const getImages = createAsyncThunk(
    'imageList/getImages',
    async (currentPage) => {
        return await imagesAPI.getImages(currentPage);
    }
);

export const likeImage = createAsyncThunk(
    'imageList/likeImage',
    async (imageId) => {
        return await imagesAPI.likeImage(imageId);
    }
);

export const unlikeImage = createAsyncThunk(
    'imageList/unlikeImage',
    async (imageId) => {
        return await imagesAPI.unlikeImage(imageId);
    }
);

export default reducer;
