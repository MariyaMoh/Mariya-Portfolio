import s from './Button.module.css';
// export default function Button({ children, onClick }) {
//   return (
//     <button onClick={onClick} className={s.button}>
//       {children}
//     </button>
//   );}

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

export const primary = (props) => (
  <Base as="button" variant="primary" {...props} />
);

export const secondary = (props) => (
  <Base as="button" variant="secondary" {...props} />
);
