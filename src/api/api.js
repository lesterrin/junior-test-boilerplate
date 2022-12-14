import axios from "axios";

const instance = axios.create({
    baseURL: `https://api.unsplash.com/`,
    params: {
        client_id: "_s_qTCV6K0SHTJsi5dyz5zaiyrFVY8iQe_FXeWUy2Ss"
    }
})

export const imagesAPI = {
    getImages: (currentPage = 1, pageSize = 6) => {
        return instance.get(`photos`, {
            params: {
                per_page: pageSize,
                page: currentPage
            }
        }).then(response => response.data);
    }
}
