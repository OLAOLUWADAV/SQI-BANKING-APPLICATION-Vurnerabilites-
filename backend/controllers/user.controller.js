const userDashboard = require("./../services/users.dashoard")

exports.getUser = async(req,res)=>{
    try {
        const userInfos = await userDashboard.getuser(req.user)
        res.status(200).json({userInfos})
    } catch (error) {
        throw error
    }
}