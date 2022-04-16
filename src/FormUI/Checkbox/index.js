import React from 'react';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel
} from '@material-ui/core';
import { useField, useFormikContext } from 'formik';

const CheckboxWrapper = ({
  name,
  label,
  legend,
  color,
  ...otherProps
}) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = evt => {
    const { checked } = evt.target;
    setFieldValue(name, checked);
  };

  const configCheckbox = {
    ...field,
    color: 'primary',
    onChange: handleChange
  };

  const configFormControl = {};
  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
    configFormControl.FormHelperText = meta.error
  }


  return (
    <FormControl {...configFormControl}>
      <FormLabel component="legend">{legend}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox {...configCheckbox} />}
          label={label}
          color='primary'
        />
        <FormHelperText>{meta.error}</FormHelperText>
      </FormGroup>
    </FormControl>
  );
};

export default CheckboxWrapper;