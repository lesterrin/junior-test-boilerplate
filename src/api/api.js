import axios from "axios";

const instance = axios.create({
    baseURL: `https://api.unsplash.com/`,
    params: {
        client_id: "_s_qTCV6K0SHTJsi5dyz5zaiyrFVY8iQe_FXeWUy2Ss",
        per_page: 6
    }
})

export const imagesAPI = {
    getImages: (currentPage) => {
        return instance.get(`photos`, {
            params: {
                page: currentPage
            }
        }).then(response => response.data);
    }
}
