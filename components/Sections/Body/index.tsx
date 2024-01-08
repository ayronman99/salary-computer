import { ChangeEvent, useState } from 'react';
import { Container, SimpleGrid, Text, Title, Select } from '@mantine/core';
import { periods } from '@/data/periods';
import TimeCard from '@/components/Card';
import { Input } from '@mantine/core';
import { IconCurrencyPeso, IconInfoCircleFilled } from '@tabler/icons-react';
import classes from './Body.module.css';

const Body = () => {
  const defaultRate = 76.25;
  const defaultPeriod = 'Daily';
  const [rateAmt, setRateAmt] = useState<number>(defaultRate);
  const [periodical, setpPeriodical] = useState<string>(defaultPeriod);

  const nonNullPeriod = (evt: string | null) => {
    if (!evt || evt === null) {
      setpPeriodical(defaultPeriod);
    } else {
      setpPeriodical(evt);
    }
  };

  return (
    <div>
      <Container size={'xl'} p="md">
        <Container fluid className={classes.rateContainer}>
          <Text span fw={700}>
            Enter your
          </Text>
          <Select
            classNames={{
              wrapper: classes.periodSelect,
            }}
            // label="Enter your "
            placeholder="Pick value"
            data={periods.map((period) => period.period)}
            defaultValue="Daily"
            value={periodical}
            onChange={(evt) => nonNullPeriod(evt)}
            size="sm"
            radius="lg"
          />
          <Text span fw={700}>
            rate
          </Text>
          <Input
            className={classes.rateInput}
            type="number"
            value={rateAmt}
            onChange={evt => setRateAmt(parseInt(evt.target.value))}
            leftSection={<IconCurrencyPeso />}
          />
        </Container>

        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 3 }}
          spacing={{ base: 10, sm: 'xl' }}
          verticalSpacing={{ base: 'md', sm: 'xl' }}
        >
          {periods.map(({ period, time, key }) => (
            <TimeCard
              key={key}
              time={time}
              periodKey={key}
              method={periodical}
              period={period}
              rate={rateAmt ?? 1}
            />
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default Body;
