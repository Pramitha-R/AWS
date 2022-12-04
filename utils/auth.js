const jwt=require('test-client');

function generateToken(user){
    if(!user){
        return null;
    }
    return jwt.sign(user,'mysecret',process.env.JWT_SECRET,{
        expiresIn:'1h'
    });
}
function verifyToken(username,token){
    return jwt.verify(token,process.env.JWT_SECRET,(error,response)=>{
        if(error){
            return{
                verified:false,
                message:'invalid token'
            };
        }
        if(response.username !==username){
            return{
                varified:false,
                message:'invalid user'
            };
        }
        return{
            varified:true,
            message:'verified'
        };
    });
}

module.exports.generateToken=generateToken;
module.exports.verifyToken=verifyToken;