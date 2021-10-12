import React from 'react';
import {TextField} from '@material-ui/core';
import {useFormContext} from 'react-hook-form';

interface FormFieldProps {
  name: string,
  label: string,
}

const FormField: React.FC<FormFieldProps> = ({name, label}) => {
    const {formState, register} = useFormContext();

    return (
        <TextField
            error={formState.errors[name]?.message}
            helperText={formState.errors[name]?.message}
            {...register(name)}
            className="mt-15"
            size={'small'}
            label={label}
            variant={'outlined'}
            fullWidth
        />
    );
};

export default FormField;
