import PT from 'prop-types';

import { SectionTitle, SectionWrapper } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionWrapper>
  );
};

export default Section;

Section.propTypes = {
  title: PT.string.isRequired,
  children: PT.any,
};
