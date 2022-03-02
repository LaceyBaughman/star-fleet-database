import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class GalaxiesService {
  async getAll(query = {}) {
    const values = await dbContext.Galaxies.find(query)
    return values
  }

  async create(body) {
    const galaxy = await dbContext.Galaxies.create(body)
    return galaxy
  }
}

export const galaxiesService = new GalaxiesService()
