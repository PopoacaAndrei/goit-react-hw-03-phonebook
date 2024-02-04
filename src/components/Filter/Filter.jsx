import PT from 'prop-types';

import { FilterInputStyled, FilterTitleStyled } from './Filter.styled';

const Filter = ({ filterValue, onChange }) => {
  return (
    <div>
      <FilterTitleStyled>Find contacts by name</FilterTitleStyled>
      <FilterInputStyled type="text" value={filterValue} onChange={onChange} />
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  filterValue: PT.string.isRequired,
  onChange: PT.func.isRequired,
};
