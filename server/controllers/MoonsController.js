import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'

export class MoonsController extends BaseController {
  constructor() {
    super('api/moons')
      .get('', this.getAll)
      .user(Auth0Provider.getAuthorizedUserInfo)
      .put('', this.create)
  }
}