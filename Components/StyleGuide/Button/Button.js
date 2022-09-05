import s from './Button.module.css';
const VARIANT = {
  primary: 'primaryButton',
  secondary: 'secondaryButton',
};

const Base = ({
  as: Component = 'p',
  children,
  className,
  variant,
  ...props
}) => (
  <Component {...props} className={s[VARIANT[`${variant}`]]}>
    {children}
  </Component>

  //   <button onClick={onClick} className={s.button}>
  //     {children}
  //   </button>
);

export const PrimaryButton = (props) => (
  <Base as="button" variant="primary" {...props} />
);

export const SecondaryButton = (props) => (
  <Base as="button" variant="secondary" {...props} />
);
