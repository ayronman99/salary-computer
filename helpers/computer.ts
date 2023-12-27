import { periods } from '@/data/periods';

class PCMethod {
  method: string;
  constructor(method: string) {
    this.method = method;
  }

  rateComputer(rate: number): number[] | string {
    const periodCompute = (hours: number) => {
      // {hours} is the hours for each working period
      return rate * hours;
    };

    const salaryTime = periods.map((session) => {
      if (session.period === this.method) {
        return periodCompute(session.time);
      } else if (session.time < session.time) {
        return session.time / 8;
      } else {
        return 0;
      }
    });

    // switch (this.method) {
    //   case 'daily':
    //     return periodCompute(8);
    //   case 'weekly':
    //     return periodCompute(40);
    //   case 'semimonthly':
    //     return periodCompute(80);
    //   case 'monthly':
    //     return periodCompute(160);
    //   case 'yearly':
    //     return periodCompute(1920);
    //   default:
    //     return 'Something went wrong! Please refresh the page.';
    // }

    return salaryTime;
  }
}

export default PCMethod;
