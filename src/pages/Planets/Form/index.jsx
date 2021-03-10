import React, {
  memo,
  useState,
  useEffect,
  useMemo,
} from 'react';
import { useSelector } from 'react-redux';
import {
  Dialog,
  Box,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
  CircularProgress,
  FormControl,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import BaseInput from '../../../components/BaseInput';
import SelectInput from '../../../components/SelectInput';
import { INPUTS, SELECT } from './constants';

const Form = ({
  handleClose,
  handleClick,
  open,
}) => {
  const planetInfo = useSelector((state) => state.planets.currentPlanet);
  const isMultipleSelected = useMemo(() => planetInfo.terrain.includes(','), [planetInfo]);
  const selectValues = useMemo(() => (isMultipleSelected
    ? planetInfo.terrain.split(',')
    : [planetInfo.terrain]), [isMultipleSelected, planetInfo.terrain]);
  const [valuesFields, setValuesFields] = useState({});
  const [dropdownField, setDropdownField] = useState([]);
  const isPlanetLoading = useSelector((state) => state.planets.isPlanetLoading);
  const [disabledConfirm, setDisabledConfirm] = useState(true);

  useEffect(() => {
    if (open) {
      setValuesFields((oldValues) => ({
        ...oldValues,
        ...INPUTS.reduce((res, value) => {
          const { name } = value;
          const defaultValue = planetInfo ? planetInfo[name] : '';
          return ({ ...res, [value.name]: defaultValue });
        }, {}),
      }));
    }
    setDropdownField(selectValues);
  }, [planetInfo, open, selectValues]);

  useEffect(() => {
    const isFilledValues = dropdownField && Object.values(valuesFields).every((val) => `${val}`.trim());
    setDisabledConfirm(!isFilledValues);
  }, [valuesFields, dropdownField]);

  const onInputChange = (event) => {
    const { target: { name, value } } = event;
    setValuesFields({
      ...valuesFields,
      [name]: value,
    });
  };

  const onSelectInputChange = (event) => {
    const { value } = event.target;
    const values = [];
    for (let i = 0; i < value.length; i += 1) {
      if (value[i]) {
        values.push(value[i]);
      }
    }
    setDropdownField(values);
  };

  return (
    <Dialog fullWidth open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      {isPlanetLoading && <CircularProgress />}
      { !isPlanetLoading && (
      <DialogContent>
        <DialogContentText>
          Form
        </DialogContentText>
        <FormControl fullWidth>
          {INPUTS.map((item) => (
            <Box p={1} key={item.name}>
              <BaseInput
                onChange={onInputChange}
                type={item.type}
                label={item.label}
                value={valuesFields[item.name]}
                inputName={item.name}
              />
            </Box>
          ))}
          <SelectInput
            label={SELECT.label}
            variants={SELECT.variants}
            value={dropdownField}
            onChange={onSelectInputChange}
          />
          <br />
          <Button disabled={disabledConfirm} onClick={handleClick} variant="contained" color="primary">
            Ok
          </Button>
        </FormControl>
      </DialogContent>
      )}
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default memo(Form);

Form.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
