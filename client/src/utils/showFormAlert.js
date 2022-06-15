export const showMobileFormAlert = (err) => {
    if (err.name) {
        return err.name
    } else if (err.price) {
        return err.price
    } else if (err.screen) {
        return err.screen
    } else if (err.brand) {
        return err.brand
    } else if (err.image) {
        return err.image
    } else if (err.network) {
        return err.network
    } else if (err.Ram) {
        return err.Ram
    } else if (err.Dimensions) {
        return err.Dimensions
    } else if (err.Whigth) {
        return err.Whigth
    } else if (err.Simcart) {
        return err.Simcart
    } else if (err.color) {
        return err.color
    } else if (err.body) {
        return err.body
    } else if (err.SpecialFeatures) {
        return err.SpecialFeatures
    }
}