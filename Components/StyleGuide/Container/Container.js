import s from './Container.module.css';

export const Container = ({ style = {}, ...props }) => {
  return <div className={s.container} {...props} />;
};
