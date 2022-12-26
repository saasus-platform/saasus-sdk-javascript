import { NextFunction, Request, Response } from "express";
import { UserInfo } from "../generated/Auth";
declare global {
    namespace Express {
        interface Request {
            userInfo?: UserInfo;
        }
    }
}
export declare function AuthMiddleware(req: Request, res: Response, next: NextFunction): Promise<any>;
