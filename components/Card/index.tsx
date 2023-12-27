import { Card, Text, Title } from '@mantine/core';
import classes from './Card.module.css';
import { IconCurrencyPeso } from '@tabler/icons-react';
import { periods } from '@/data/periods';
import { capitalizedMethod, methodFilter, periodCompute } from '@/utils/generic-utils';
type TimeCardProps = {
  method: string;
  period: string;
  periodKey: number;
  rate: number;
  /**
   * {time} currently set on hourly
   */
  time: number;
};
function TimeCard(props: TimeCardProps) {
  const { method, rate, time, period, periodKey } = props;

  const currentPeriod = periods.find((x) => x.period === method);
  const currentKey = currentPeriod?.key ?? 1;
  const currentTime = currentPeriod?.time ?? 1;
  let currentRate = rate;

  console.log(periodKey, currentKey, '<---Should have value');
  console.log(rate, time, currentTime, '<---rate and time');
  // if (periodKey === currentKey) currentRate = periodCompute(rate, currentTime);
  if (periodKey > currentKey) {
    currentRate += periodCompute(currentRate, time);
  }
  if (periodKey < currentKey) {
    currentRate = (24 / currentTime) * rate;
  }

  return (
    <Card shadow="md" padding="xl">
      <Card.Section>
        <Title className={classes.title} order={3} size="h1">
          {period}
        </Title>
      </Card.Section>

      <Text className={classes.title} fw={400} size="lg" mt="md">
        Your {methodFilter(period)} rate is
      </Text>
      <Text className={classes.rateValue} fw={700} mt="sm">
        <IconCurrencyPeso className={classes.currency} scale={100} />
        {Number.isNaN(currentRate) ? 0 : currentRate.toLocaleString()}
      </Text>
    </Card>
  );
}

export default TimeCard;
