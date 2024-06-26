import email from '../../assets/contactIcons/Email.svg';
import facebook from '../../assets/contactIcons/Facebook.svg';
import instagram from '../../assets/contactIcons/Instagram.svg';
import map from '../../assets/contactIcons/Map.svg';
import phone from '../../assets/contactIcons/Phone.svg';
import twitter from '../../assets/contactIcons/Twitter.svg';

const contact = [
  { alt: 'phone', src: phone, text: 'Tel: +352 961 537 583' },
  { alt: 'email', src: email, text: 'info@aspireyoga.com' },
  { alt: 'location', src: map, text: 'Algarve, Portugal' },
];

const footerMenu = [
  'Contact us',
  'FAQ',
  'Terms and conditions',
  'Cancellation policy',
  'Press',
];

const socialMeida = [
  { alt: 'Facebook', src: facebook },
  { alt: 'Instagram', src: instagram },
  { alt: 'Twitter', src: twitter },
];

export const Footer = () => {
  return (
    <footer className="flex justify-center bg-primary-black py-12 text-neutral-white md:py-24 lg:py-32 xl:text-xl">
      <div className="grid w-max grid-cols-1 items-center gap-y-10 md:w-full md:grid-cols-2 md:justify-items-center">
        <ul className="flex  flex-col gap-8">
          {contact.map((item, index) => (
            <li key={index} className="flex flex-row items-center gap-3">
              <img src={item.src} alt={item.alt} />
              <p>{item.text}</p>
            </li>
          ))}
          <li className="hidden md:flex md:gap-10">
            {socialMeida.map((item, index) => (
              <img
                className="cursor-pointer hover:scale-125"
                key={index}
                alt={item.alt}
                src={item.src}
              />
            ))}
          </li>
        </ul>
        <ul className="flex cursor-pointer flex-col gap-8 md:gap-6">
          {footerMenu.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="flex flex-row gap-10 md:hidden">
          {socialMeida.map((item, index) => (
            <img
              className="hover:scale-125"
              key={index}
              alt={item.alt}
              src={item.src}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};
