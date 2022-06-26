const _ = require('lodash')

const { mkMobileDir } = require("./mkDir")
const { saveMobilesImage } = require("./saveProductImages")

const pathImages = (image, root) => {
    if (image.length >= 2) {
        const path = image.map(item => {
            let dir = `${root + image[0].name})/`
            dir = _.replace(dir, "jpge", "")
            dir = _.replace(dir, "png", "")
            dir = _.replace(dir, "jpg", "")
            mkMobileDir(dir)
            const path = saveMobilesImage(item, dir, item.name)
            return path
        })
        return path
    } else {
        let dir = `${root + image.name}/`
        dir = _.replace(dir, "jpge", "")
        dir = _.replace(dir, "png", "")
        dir = _.replace(dir, "jpg", "")
        mkMobileDir(dir)
        const path = saveMobilesImage(image, dir, image.name)
        return path
    }
}

const mainMobilePath = (image) => {
    const path = pathImages(image, `public/images/mobiles/`)
    const split = path[0].split("/")
    split.pop()

    return `public/images/mobiles/${split[split.length - 1]}/`
}
const mainLaptopPath = (image) => {
    const path = pathImages(image, `public/images/laptops/`)
    const split = path[0].split("/")
    split.pop()

    return `public/images/laptops/${split[split.length - 1]}/`
}

module.exports = {
    pathImages,
    mainMobilePath,
    mainLaptopPath
}