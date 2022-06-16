const saveMobilesImage = (image, dir, name) => {
    image.mv(`${dir + name}`)
    return `${dir + name}`
}

module.exports = {
    saveMobilesImage
}