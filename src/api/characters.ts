import { instance } from "./base.api"

const endpoint = "character"

export const characters = {
    getAll: (page: number) => {
        return instance.get(endpoint, {
            params: {page}
        })
    },
    getById: (id: number) => {
        return instance.get(`${endpoint}/${id}`)
    }
}