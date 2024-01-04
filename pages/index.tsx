import { Welcome } from '../components/Welcome/Welcome';
import { Header } from '@/layout/Header';
import Body from '@/components/Sections/Body';

export default function HomePage() {
  return (
    <>
      <Header />
      <Welcome />
      <Body />
    </>
  );
}
