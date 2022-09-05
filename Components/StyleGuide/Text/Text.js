import s from './Text.module.css';

const SCALE_TO_CLASS = {
  heading1: 'heading1',
  heading2: 'heading2',
  heading3: 'heading3',
  heading4: 'heading4',
  sectionTitle: 'sectionTitle',
};

const Base = ({
  as: Component = 'p',
  scale = 'body',
  children,
  className,
  ...props
}) => (
  <Component {...props} className={s[SCALE_TO_CLASS[`${scale}`]]}>
    {children}
  </Component>
);

export const Heading1 = (props) => <Base as="h1" scale="heading1" {...props} />;

export const Heading2 = (props) => <Base as="h2" scale="heading2" {...props} />;

export const Heading3 = (props) => <Base as="h3" scale="heading3" {...props} />;

export const Heading4 = (props) => <Base as="h4" scale="heading4" {...props} />;

export const SectionTitle = (props) => (
  <Base as="h2" scale="sectionTitle" {...props} />
);
