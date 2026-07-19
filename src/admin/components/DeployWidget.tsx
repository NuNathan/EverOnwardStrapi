import { useState } from 'react';
import { Button, Flex, Typography } from '@strapi/design-system';
import { Rocket } from '@strapi/icons';
import { useFetchClient, useNotification } from '@strapi/admin/strapi-admin';

const DeployWidget = () => {
  const { post } = useFetchClient();
  const { toggleNotification } = useNotification();
  const [loading, setLoading] = useState(false);

  const handleDeploy = async () => {
    setLoading(true);

    try {
      await post('/api/deploy');
      toggleNotification({
        type: 'success',
        message: 'Site rebuild triggered successfully.',
      });
    } catch {
      toggleNotification({
        type: 'danger',
        message: 'Failed to trigger rebuild. Check server logs.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex direction="column" alignItems="center" justifyContent="center" gap={4} height="100%">
      <Typography variant="beta">Rebuild Website</Typography>
      <Typography variant="omega" textColor="neutral600">
        Trigger a full static rebuild of the live site.
      </Typography>
      <Button startIcon={<Rocket />} onClick={handleDeploy} loading={loading}>
        Rebuild Now
      </Button>
    </Flex>
  );
};

export { DeployWidget };
