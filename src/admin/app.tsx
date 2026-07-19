import type { StrapiApp } from '@strapi/strapi/admin';
import { Rocket } from '@strapi/icons';

export default {
  register(app: StrapiApp) {
    app.widgets.register({
      id: 'deploy-website',
      icon: Rocket,
      title: {
        id: 'deploy-widget.title',
        defaultMessage: 'Deploy',
      },
      component: () =>
        import('./components/DeployWidget').then((m) => m.DeployWidget),
    });
  },
};
