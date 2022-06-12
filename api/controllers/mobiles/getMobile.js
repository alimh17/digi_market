const getMobile = async (req, res, next) => {

    try {

        console.log(req.body)

    } catch (err) {
        next(err)
    }

}




module.exports = getMobile