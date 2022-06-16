import axios from "axios"
import config from '../../config/config.json'


const { BASE_URL } = config
axios.defaults.headers['Content-Type'] = 'application/json; charset=utf-8';

export const newMobileRequest = async (data) => {
    const formData = new FormData()
    const keys = Object.keys(data)
    const values = Object.values(data)
    keys.forEach((item, index) => {
        formData.append(item, values[index])
    });
    for (const keys of data.image) {
        formData.append("image", keys)
    }
    try {
        const res = await axios.post(`${BASE_URL}/mobile`, formData, {
            Accept: "application/json"
        })
        
        return res

    } catch (err) {
        console.log(err)
    }



    // // console.log(Object.keys(data.image))
    // formData.append("screen", data.screen)
    // formData.append("brand", data.brand)
    // formData.append("network", data.network)
    // formData.append("ram", data.ram)
    // formData.append("dimensions", data.network)
    // formData.append("weight", data.ram)
    // formData.append("simcart", data.simcart)
    // formData.append("color", data.color)
    // formData.append("body", data.body)
    // formData.append("features", data.features)
    // formData.append("image", data.image)
    // console.log(formData)



}