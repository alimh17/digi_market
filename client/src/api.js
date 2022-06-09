import axios from 'axios'
import config from './config/config.json'

export const getAllBanners = async () => {

    try {
        const res = await axios(`${config.BASE_URL}/all_banners`)
        const { data } = res.data
        return data

    } catch (err) {
        console.log(err)
    }
}

export const delBannersRequest = async (data) => {
    try {
        const req = await axios.post(`${config.BASE_URL}/del_banners`, {
            data,
        })
        return req
    } catch (err) {
        console.log(err)
    }
}