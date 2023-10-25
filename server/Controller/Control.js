const User = require('../Model/User')

//signup code
exports.singupData = async(req, res) => {
    const data = new User({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender,
        hear: req.body.hear,
        city: req.body.city,
        state: req.body.state
    })

    try{
        const singupData = await data.save()
        res.json(singupData)        
    }
    catch(err) {
        message: err
    }
}



//login code
exports.loginData = async(req, res) => {
    const data = {
        email: req.body.email,
        password: req.body.password
    }
    try{
        const loginData = await User.find(data)
        res.json(loginData)
    }
    catch(err) {
        message: err
    }
}

//check existing user
exports.checkUser = async(req, res) => {
    const data = {email: req.body.email}
    try{
        const checkUser = await User.find(data)
        res.json(checkUser)
    }
    catch(err) {
        message: err
    }
}

//view all user
exports.viewAll = async(req, res) => {
    try{
        const viewAll = await User.find()
        res.json(viewAll)
    }
    catch(err) {
        message: err
    }
}

//edit a user
exports.updateUser= async(req, res) => {
    try{
        const data = await User.updateOne(
            {_id: req.params.postId},
            {$set: {
                name: req.body.name,
                password: req.body.password,
                email: req.body.email,
                phone: req.body.phone,
                gender: req.body.gender,
                hear: req.body.hear,
                city: req.body.city,
                state: req.body.state
            }}
        )
        res.json(data)
    }
    catch(err) {
        message: err
    }
}

//delete a user
exports.deleteUser= async(req, res) => {
    try{
        const data = await User.deleteOne({_id: req.params.postId})
        res.json(data)
    }
    catch(err) {
        message: err
    }
}

//view single user using params
exports.viewOne = async(req, res) => {
    try{
        const viewOne = await User.find({_id: req.params.postId})
        res.json(viewOne)
    }
    catch(err) {
        message: err
    }
}



// = async(req, res) => {
//     try{
        
//     }
//     catch(err) {
//         message: err
//     }
// }

// {
//     "name": "",
//     "password": "",
//     "email": "",
//     "phone": "",
//     "gender": "",
//     "hear": "",
//     "city": "",
//     "state": ""
// }