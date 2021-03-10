import React, { memo } from 'react';
import {
  Select, Input, MenuItem, ListItemText,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const SelectInput = ({
  label,
  onChange,
  variants,
  value,
}) => (
  <Select
    multiple
    value={value}
    defaultValue={value}
    label={label}
    onChange={onChange}
    input={<Input />}
    renderValue={(selected) => {
      if (selected.length === 0) {
        return <em>{label}</em>;
      }
      return selected.join(', ');
    }}
  >
    {variants.map((option) => (
      <MenuItem key={Math.random()} value={option.key}>
        <ListItemText primary={option.label} />
      </MenuItem>
    ))}
  </Select>
);

export default memo(SelectInput);

SelectInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  variants: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string,
    }),
  ).isRequired,
};

SelectInput.defaultProps = {
  label: '',
};
