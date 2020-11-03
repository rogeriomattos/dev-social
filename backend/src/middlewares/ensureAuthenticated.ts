import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../config/auth';

interface TokenPayload {
    iat: number;
    exp: number;
    sub: string;
}

export default function ensureAuthenticated(
    request:Request, 
    response:Response, 
    next:NextFunction
): void {

    const authHeader = request.headers.authorization;

    if(!authHeader){
        throw new Error('JWT toke is missing');
    }

    const [, token] = authHeader.split(' ');

    try {
        const decode = verify(token, authConfig.jwt.secret);

        const { sub, iat, exp } = decode as TokenPayload;
        
        request.user.id = parseInt(sub);
        
        return next();
    } catch (error) {
        throw new Error('Invalid JWT token');
    }
}