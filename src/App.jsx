import { Card } from './components/Card';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Membership } from './components/Membership';
import { RetreatQuote } from './components/RetreatQuote';
import { Testimonial } from './components/Testimonial';
import { UserInput } from './components/UserInput';

export const App = () => {
  return (
    <div>
      <Header />
      <RetreatQuote />
      <Testimonial />
      <Membership />
      <Card />
      <UserInput />
      <Footer />
    </div>
  );
};
