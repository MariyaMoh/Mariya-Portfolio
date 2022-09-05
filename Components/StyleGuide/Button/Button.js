import s from './Button.module.css';
const VARIANT = {
  primary: 'primary',
  secondary: 'secondary',
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

export const Primary = (props) => (
  <Base as="button" variant="primary" {...props} />
);

export const Secondary = (props) => (
  <Base as="button" variant="secondary" {...props} />
);
