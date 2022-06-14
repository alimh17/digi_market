const saveMobilesImage = (image, dir, name) => {

    if (image.mimetype === "jpeg") {
        image.mv(`${dir + name}.jpeg`)
        return `${dir + name}.jpeg`
    } else if (image.mimetype === "jpg") {
        image.mv(`${dir + name}.jpg`)
        return `${dir + name}.jpg`
    } else {
        image.mv(`${dir + name}.png`)
        return `${dir + name}.png`
    }

}







module.exports = {
    saveMobilesImage
}