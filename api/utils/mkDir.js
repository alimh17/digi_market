
const fs = require('fs')

const mkMobileDir = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
    }
}



module.exports = {
    mkMobileDir
}