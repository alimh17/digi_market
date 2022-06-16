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
    } else if (err.ram) {
        return err.ram
    } else if (err.dimensions) {
        return err.dimensions
    } else if (err.weight) {
        return err.weight
    } else if (err.simcart) {
        return err.simcart
    } else if (err.color) {
        return err.color
    } else if (err.body) {
        return err.body
    } else if (err.SpecialFeatures) {
        return err.SpecialFeatures
    }
}