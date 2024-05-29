import { AxiosError } from "axios";
import { NextFunction, Request, Response } from "express";
import { UserInfo } from "../generated/Auth";
import { AuthClient } from "./auth-client";
import { isAPI } from "./lib";

declare global {
  namespace Express {
    export interface Request {
      userInfo?: UserInfo;
    }
  }
}

export async function AuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> {
  if (isAPI() && !req.headers["authorization"]) {
    console.error("Can not get SaaSus ID token.");
    return res.status(401).json({
      error_message: "Invalid ID Token.",
      redirect_url: process.env.SAASUS_LOGIN_URL || "",
    });
  }
  if (!isAPI() && !req.cookies.idToken) {
    console.error("Can not get SaaSus ID token.");
    return res.redirect(process.env.SAASUS_LOGIN_URL || "");
  }
  let referer = "";
  if (req.headers["Referer"]) {
    referer = req.headers["Referer"] as string;
  }
  let xSaaSusReferer = "";
  if (req.headers["X-SaaSus-Referer"]) {
    xSaaSusReferer = req.headers["X-SaaSus-Referer"] as string;
  }
  try {
    const apiClient = new AuthClient(referer, xSaaSusReferer);
    const { data } = await apiClient.userInfoApi.getUserInfo(
      isAPI()
        ? req.headers["authorization"]!.split("Bearer ")[1]
        : req.cookies.idToken
    );
    req.userInfo = data;
    next();
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response?.status === 401) {
      console.error("Type: Unauthorized, Message: ", error);
      if (isAPI()) {
        return res.status(401).json({
          error_message: "Invalid ID Token.",
          redirect_url: process.env.SAASUS_LOGIN_URL || "",
        });
      }
      return res.redirect(process.env.SAASUS_LOGIN_URL || "");
    }
    console.error("Type: Internal Server Error, Message: ", error);
    if (isAPI()) {
      return res.status(500).json({
        error_message: `Type: Internal Server Error, Message: ${axiosError.message}`,
        redirect_url: process.env.SAASUS_LOGIN_URL || "",
      });
    }
    return res.redirect(process.env.SAASUS_LOGIN_URL || "");
  }
}
