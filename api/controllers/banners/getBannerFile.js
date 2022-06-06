const hash = require('string-hash');

const getBannerFile = async (req, res) => {
    console.log(req.body)

    res.send("receved")

    // try {
    //     if (!req.files) {
    //         res.send({
    //             status: false,
    //             message: 'No file uploaded'
    //         })
    //     }
    //     else {
    //         let avatar = req.files.avatar
    //         const name = hash(avatar.name)

    //         let format;
    //         if (avatar.mimetype === 'image/png') {
    //             format = '.png'
    //         } else if (avatar.mimetype === 'image/jpg') {
    //             format = '.jpg'
    //         } else if (avatar.mimetype === 'image/jpeg') {
    //             format = '.jpeg'
    //         }

    //         avatar.mv('public/images/banners/' + name + format)
    //         //! --------------------- send response -----------------
    //         res.send({
    //             status: true,
    //             message: 'File is uploaded',
    //             data: {
    //                 name,
    //                 mimetype: avatar.mimetype,
    //                 size: avatar.size,
    //                 path: `http://localhost:${process.env.PORT_API}/images/banners/${name}${format}`
    //             }
    //         });
    //     }
    // } catch (err) {
    //     console.log(err)
    // }
}

module.exports = getBannerFile