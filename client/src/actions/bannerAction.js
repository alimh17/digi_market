import axios from 'axios'
import config from '../config/config.json'

export const getBannersAction = () => async (dispatch) => {
    try {
        const res = await axios(`${config.BASE_URL}/all_banners`)
        const { data } = res
        dispatch({ type: "INIT", payload: data.data })

    } catch (err) {
        console.log(err)
    }


}