import { AxiosError } from "axios";
import { Request, Response } from "express";
import { Credentials } from "../generated/Auth";
import { AuthClient } from "./auth-client";
import { isAPI } from "./lib";

export async function CallbackRouteFunction(
  req: Request,
  res: Response
): Promise<Credentials | any> {
  if (!req.query.code) {
    console.error("code is not provided by query parameter");
    if (isAPI()) {
      return res.status(400).json({
        error_message: "code is not provided by query parameter",
        redirect_url: process.env.SAASUS_LOGIN_URL || "",
      });
    }
    return res.redirect(process.env.SAASUS_LOGIN_URL || "");
  }
  const apiClient = new AuthClient();
  try {
    const { data } = await apiClient.credentialApi.getAuthCredentials(
      `${req.query.code}`
    );
    res.cookie("idToken", data.id_token, {
      maxAge: 60 * 60 * 24 * 30,
      httpOnly: false,
    });
    if (isAPI()) {
      return res.json(data);
    }
    return res.render("callback");
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response?.status === 404) {
      console.error("Type: Not Found, Message: ", error);
      if (isAPI()) {
        return res.status(404).json({
          error_message: `Type: Not Found, Message: ${axiosError.message}`,
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
