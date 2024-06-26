import { Card } from './components/sections/Card';
import { Footer } from './components/sections/Footer';
import { Header } from './components/sections/Header';
import { Membership } from './components/sections/Membership';
import { RetreatFact } from './components/sections/RetreatFact';
import { Testimonial } from './components/sections/Testimonial';
import { UserInput } from './components/sections/UserInput';

export const App = () => {
  return (
    <div className="grid grid-cols-1">
      <Header />
      <RetreatFact />
      <Testimonial />
      <Membership />
      <Card />
      <UserInput />
      <Footer />
    </div>
  );
};
