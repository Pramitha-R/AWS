var AWS = require('aws-sdk');
AWS.config.update({
    region: 'ap-northeast-1'
});

const util = require('./../utils/util');
const bcrypt = require('bcryptjs');


const dynamodb = new AWS.DynamoDB.DocumentClient();
const userTable = 'hiring-user';

async function register(userInfo)
{
    const username=userInfo.username;
    const email=userInfo.email;
    const password=userInfo.password;
    if(!username || !email || !password)
    {
        return util.buildResponse(401,{
            message:'All field are required'
        });
    }

    const dynamoUser=await getUser(username);
    if(dynamoUser && dynamoUser.username){
        return util.buildResponse(401,{
            message: 'username already exists in our database. please choose a different username'
        });
    
    
    }
    const encryptePW =bcrypt.hashSync(password.trim(),10);
    const user={
        username:username.toLowerCase().trim(),
        email:email,
        password:encryptePW
    };

    const saveUserResponse =await saveUser(user);
    if(!saveUserResponse)
    {
        return util.buildResponse(503,{
            message: 'server Error. Please try again later'
        });
    }
    return util.buildResponse(200,{username:username});
}
async function getUser(username){
    const params={
        TableName:userTable,
        key:{
            username:username
        }
    };
    return await dynamodb.get(params).promise().then(response=>{
        return response.Item;
    },error=>{
        console.error('there is an error: ',error);
    });
}
async function saveUser(user){
    const params ={
        TableName :userTable,
        Item: user
    };
    return await dynamodb.put(params).promise().then(()=>{
        return true;
    },error=>{
        console.error('there is an error saving user ',error)});
}
module.exports.register=register;
