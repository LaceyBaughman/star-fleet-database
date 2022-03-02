import { Auth0Provider } from "@bcwdev/auth0provider";
import { galaxiesService } from "../services/GalaxiesService";
import BaseController from "../utils/BaseController";

export class GalaxiesController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
      .get('', this.getAll)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
  }


  async getAll(req, res, next) {
    try {
      const galaxy = await galaxiesService.getAll(req.query)
      return res.send
    } catch (error) {

    }
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const galaxy = await galaxiesService.create(req.body)
      return res.send.galaxy
    } catch (error) {
      next(error)
    }
  }


}