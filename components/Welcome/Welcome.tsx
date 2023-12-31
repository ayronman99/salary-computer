import { Title, Text, Anchor } from '@mantine/core';
import classes from './Welcome.module.css';
import { IconInfoCircleFilled } from '@tabler/icons-react';
export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Salary Computer
        </Text>
      </Title>
      <div className={classes.infoHolder}>
        <IconInfoCircleFilled opacity={0.5} />
        <Text size="sm" opacity={0.5} className={classes.subTitle}>
          Computation is based on fixed 8-hour shift per day. This should not replace any payroll
          computation that your company uses.
        </Text>
      </div>
    </>
  );
}
