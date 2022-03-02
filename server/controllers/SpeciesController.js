import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController";

export class SpeciesController extends BaseController {
  constructor() {
    super('/api/species')
      .get('', this.getAll)
      .user(Auth0Provider.getAuthorizedUserInfo)
      .put('', this.create)
  }
}