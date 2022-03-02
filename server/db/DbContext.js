import mongoose from 'mongoose';
import { AccountSchema, ProfileSchema } from '../models/Account';
import { PlanetSchema } from "../models/Planet";
import { SunSchema } from "../models/Sun";
import { GalaxySchema } from ".../models/Galaxy";
import { NativeSchema } from ".../models/NativeSchema";


class DbContext {

  Galaxies = mongoose.model('Galaxy', GalaxySchema);
  Suns = mongoose.model('Sun', SunSchema);
  Planets = mongoose.model('Planet', PlanetSchema);
  Species = mongoose.model('Native', NativeSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
}

export const dbContext = new DbContext()
