const registerService = require('./service/register');
const loginService = require('./service/login');
const verifyService = require('/service/verify'); 
const util = require('./utils/util');

const dashboardPath='/dashboard';
const loginPath='/login';
const registerPath='/register';
const verifyPath='/verify';


exports.handler = async (event) => {
    console.log('Request Event: ' ,event);
    let response;
    switch(true) 
    {
        case event.httpMethod === 'GET'  &&  event.path === dashboardPath:
            response=util.buildResponse(200);
            break;
        
        case event.httpMethod ==='POST' && event.path === registerPath:
            const registerBody = JSON.parse(event.body);
            response = await registerService.register(registerBody);
            break;
        
         case event.httpMethod ==='POST' && event.path === loginPath:
            const loginBody = JSON.parse(event.body);
            response = loginService.login(loginBody);
            break;
        
        case event.httpMethod ==='POST' && event.path === verifyPath:
            const verifyBody = JSON.parse(event.body);
            response = verifyService.verify(verifyBody);
            break;
        
        default :
            response=util.buildResponse(404,'404 Not Found');
    }
    return response;   
};
