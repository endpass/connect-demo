import createController from '@/controllers/createController';
import OauthController from '@/controllers/OauthController';

export const createOauthController = () => createController(OauthController);

export default {
  createOauthController,
};
