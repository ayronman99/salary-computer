import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Header } from '@/layout/Header';
import Body from '@/components/Sections/Body';

export default function HomePage() {
  return (
    <>
      <Header />
      <Body />
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
