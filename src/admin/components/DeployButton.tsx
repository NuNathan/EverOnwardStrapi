import { Button } from '@strapi/design-system';
import { Rocket } from '@strapi/icons';

const DeployButton = ({ slug }: { slug: string }) => {
  if (slug !== 'api::home-page.home-page') {
    return null;
  }

  return (
    <Button
      variant="secondary"
      startIcon={<Rocket />}
      onClick={() => {
        // Future: call a custom server route
        console.log('Deploy button clicked');
      }}
      style={{ width: '100%' }}
    >
      Deploy Site
    </Button>
  );
};

export { DeployButton };
