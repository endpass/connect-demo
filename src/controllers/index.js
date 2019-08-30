import createController from '@/controllers/createController';
import OauthController from '@/controllers/OauthController';

export const createOauthController = params =>
  createController(OauthController, params);

export default {
  createOauthController,
};
