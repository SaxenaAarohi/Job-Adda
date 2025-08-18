import jwt from 'jsonwebtoken'
export function createToken(data: any) {
    const token = jwt.sign(data , process.env.JWT_SECRET as string);
    return token;
}