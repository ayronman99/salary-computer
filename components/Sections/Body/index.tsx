import { ChangeEvent, useState } from 'react';
import { Container, SimpleGrid, Text, Title, Select } from '@mantine/core';
import { periods } from '@/data/periods';
import TimeCard from '@/components/Card';
import { Input } from '@mantine/core';
import { IconCurrencyPeso } from '@tabler/icons-react';
import classes from './Body.module.css';

const Body = () => {
  const defaultRate = 76.25;
  const defaultPeriod = 'Daily';
  const [rateAmt, setRateAmt] = useState<number>(defaultRate);
  const [periodical, setpPeriodical] = useState<string>(defaultPeriod);

  const amountSetter = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number.isNaN(rateAmt)) {
      setRateAmt(defaultRate);
    } else {
      setRateAmt(parseInt(e.target.value));
    }
  };

  const nonNullPeriod = (evt: string | null) => {
    if (!evt || evt === null) {
      setpPeriodical(defaultPeriod);
    } else {
      setpPeriodical(evt);
    }
  };

  return (
    <div>
      <Title className={classes.title} order={1} size="h2" my={15}>
        Salary Computer
      </Title>
      <Container size={'xl'} style={{ border: '2px solid red' }}>
        <Container fluid className={classes.rateContainer}>
          <Select
            label=" Enter your "
            placeholder="Pick value"
            data={periods.map((period) => period.period)}
            defaultValue="Daily"
            value={periodical}
            onChange={(evt) => nonNullPeriod(evt)}
          />
          <Text span fw={700}>
            rate
          </Text>
          <Input
            className={classes.rateInput}
            type="number"
            value={rateAmt}
            onChange={amountSetter}
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
              rate={rateAmt}
            />
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default Body;
