const { body, validationResult } = require('express-validator');


const registerRules=[
    body('username','username is required').notEmpty(),
    body('email','email is required and valid!').isEmail(),
    body('password','password must have at least 7 characters').isLength({min:7})
]
const loginRules=[
    
    body('email','email is required and valid!').isEmail(),
    body('password','password must have at least 7 characters').isLength({min:7})
]
const validator=(req,res,next)=>{
 const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
}
module.exports={
    registerRules,loginRules,validator
}
