const { mkMobileDir } = require("./mkDir")
const { saveMobilesImage } = require("./saveProductImages")

const pathMobiles = (image) => {
    if (image.length >= 2) {
        const path = image.map(item => {
            const dir = `public/images/mobiles/${image[0].name}/`
            mkMobileDir(dir)
            const path = saveMobilesImage(item, dir, item.name)
            return path
        })
        return path
    } else {
        const dir = `public/images/mobiles/${image.name}/`
        mkMobileDir(dir)
        const path = saveMobilesImage(image, dir, image.name)
        return path
    }
}

module.exports = {
    pathMobiles
}