import PropTypes from 'prop-types';

export const Button = ({ text, customStyle }) => {
  return (
    <button
      className={`h-10 w-40 rounded-[100px] bg-accent-orange text-[16px] font-extrabold text-neutral-white ${customStyle}`}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  customStyle: PropTypes.string,
};
