import { Title, Text, Accordion, Popover } from '@mantine/core';
import classes from './Welcome.module.css';
import { IconInfoCircleFilled } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

export function Welcome() {
  const [popOver, setPopOver] = useState<boolean>(false);
  const msTime = 1000; // 1000ms/1sec
  const readingTime = 1 * msTime;

  useEffect(() => {
    const popNotif = setTimeout(() => {
      setPopOver(true);
    }, readingTime);

    return () => {
      clearTimeout(popNotif);
    };
  }, []);

  return (
    <>
      <Accordion defaultValue="Apples" classNames={{ chevron: classes.chevron }}>
        <Accordion.Item value={'Apples'}>
          <Popover
            width={400}
            position="top"
            withArrow
            shadow="md"
            opened={popOver}
            onChange={setPopOver}
          >
            <Popover.Target>
              <Accordion.Control onClick={() => setPopOver(false)}></Accordion.Control>
            </Popover.Target>
            <Popover.Dropdown>
              <Text>You can click here to minimize the message, if you're done reading. 😁</Text>
            </Popover.Dropdown>
          </Popover>

          <Accordion.Panel>
            {' '}
            <Title className={classes.title} ta="center" mt={100}>
              Welcome to{' '}
              <Text
                inherit
                variant="gradient"
                component="span"
                gradient={{ from: 'pink', to: 'yellow' }}
              >
                Salary Computer
              </Text>
            </Title>
            <div className={classes.infoHolder}>
              <IconInfoCircleFilled opacity={0.5} />
              <Text size="sm" opacity={0.5} className={classes.subTitle}>
                Computation is based on fixed 8-hour shift per day. This should not replace any
                payroll computation that your organization uses.
              </Text>
            </div>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
