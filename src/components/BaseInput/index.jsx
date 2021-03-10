import React, { memo } from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

const BaseInput = ({
  label,
  type,
  onChange,
  value,
  inputName,
}) => (
  <TextField
    fullWidth
    label={label}
    type={type}
    onChange={onChange}
    value={value}
    name={inputName}
  />
);

export default memo(BaseInput);

BaseInput.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  inputName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

BaseInput.defaultProps = {
  type: 'text',
  label: '',
  value: '',
};
