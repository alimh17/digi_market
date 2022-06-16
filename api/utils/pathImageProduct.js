const _ = require('lodash')

const { mkMobileDir } = require("./mkDir")
const { saveMobilesImage } = require("./saveProductImages")

const pathMobiles = (image) => {
    if (image.length >= 2) {
        const path = image.map(item => {
            let dir = `public/images/mobiles/${image[0].name})/`
            dir = _.replace(dir, "jpge", "")
            dir = _.replace(dir, "png", "")
            dir = _.replace(dir, "jpg", "")
            mkMobileDir(dir)
            const path = saveMobilesImage(item, dir, item.name)
            return path
        })
        return path
    } else {
        let dir = `public/images/mobiles/${image.name}/`
        dir = _.replace(dir, "jpge", "")
        dir = _.replace(dir, "png", "")
        dir = _.replace(dir, "jpg", "")
        console.log(dir)
        mkMobileDir(dir)
        const path = saveMobilesImage(image, dir, image.name)
        return path
    }
}

module.exports = {
    pathMobiles
}