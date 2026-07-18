import type { StrapiApp } from '@strapi/strapi/admin';
import { DeployButton } from './components/DeployButton';

export default {
  bootstrap(app: StrapiApp) {
    app.getPlugin('content-manager').injectComponent('editView', 'right-links', {
      name: 'DeployButton',
      Component: DeployButton,
    });
  },
};
