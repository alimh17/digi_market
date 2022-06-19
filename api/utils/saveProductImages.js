const saveMobilesImage = (image, dir, name) => {
    image.mv(`${dir + name}`)
    // main.mv(`${dir + main.name}`)
    return `${dir + name}`
}

module.exports = {
    saveMobilesImage
}