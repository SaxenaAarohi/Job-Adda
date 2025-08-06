import jwt from 'jsonwebtoken'
export function createToken(data){
    const token = jwt.sign(dtaa , process.env.JWT_SECRET);
    return token;
}