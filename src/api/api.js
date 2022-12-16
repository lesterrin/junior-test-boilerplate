import axios from "axios";
import Unsplash, {toJson} from "unsplash-js";

/*const instance = axios.create({
    baseURL: `https://api.unsplash.com/`,
    headers: {
        Authorization: "Bearer Hrr5-Kb5FEPmrb74V4mD-AyChtsKL8-a7_i0dSPQRoc"
    },
    params: {
        client_id: "_s_qTCV6K0SHTJsi5dyz5zaiyrFVY8iQe_FXeWUy2Ss",
        per_page: 6
    }
})*/

const unsplash = new Unsplash({
    applicationId: "_s_qTCV6K0SHTJsi5dyz5zaiyrFVY8iQe_FXeWUy2Ss",
    secret: "5SDe5Kq6oijDz5D-PzXLB_EtFH4FJtwqsl3AxfH-Vek",
    callbackUrl: "http://localhost:3000/auth", //удалить
    bearerToken: "Hrr5-Kb5FEPmrb74V4mD-AyChtsKL8-a7_i0dSPQRoc"
});

export const unsplashAuthorize = () => {
    unsplash.currentUser.profile()
        .then(toJson)
        .then(json => {
            console.log(json);
        });
    console.log(unsplash);
}
export const imagesAPI = {
    likeImage: (id) => {
        return unsplash.photos.likePhoto(id)
            .then(toJson)
            .then(json => {
                return(json);
            });
    },

    unlikeImage: (id) => {
        return unsplash.photos.unlikePhoto(id)
            .then(toJson)
            .then(json => {
                return(json);
            });
    },

    getImages: (currentPage) => {
        return unsplash.photos.listPhotos(currentPage, 6, "latest")
            .then(toJson)
            .then(response => response);
    }
}

/*export const imagesAPI = {
    getImages: (currentPage) => {
        return instance.get(`photos`, {
            params: {
                page: currentPage
            }
        }).then(response => response.data);
    },
    //likeImage: async (pageId) => ({response: 'заглушка', id: pageId})
    likeImage: (imageId) => {
        return axios.post(`https://unsplash.com/photos/${imageId}/like`, {}, {
            headers: {
                Authorization: "Bearer Hrr5-Kb5FEPmrb74V4mD-AyChtsKL8-a7_i0dSPQRoc"
            }
        })
            .then(response => console.log(response));
    }
}*/

