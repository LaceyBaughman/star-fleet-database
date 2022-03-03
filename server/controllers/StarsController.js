import { Auth0Provider } from "@bcwdev/auth0provider";
import xPoweredBy from "helmet/dist/middlewares/x-powered-by";
import { get } from "mongoose";
import BaseController from "../utils/BaseController";

export class StarsController extends BaseController {
  // constructor() {
  //   super('/api/stars')
  //     .get('', this.getAll)
  //     .user(Auth0Provider.getAuthorizedUserInfo)
  //     .put('', this.create)
  // }
}