import { Request, Response } from "express";
import { Credentials } from "../generated/Auth";
export declare function CallbackRouteFunction(req: Request, res: Response): Promise<Credentials | any>;
