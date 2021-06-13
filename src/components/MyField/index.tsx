import React from 'react'
import {TextField} from "@material-ui/core";
import {FieldProps} from "formik";
import { TextFieldProps } from '@material-ui/core';


export const MyField: React.FC<FieldProps & TextFieldProps> = ({label, placeholder, field}) => {
    return (
        <TextField label={label} placeholder={placeholder} {...field} />
    )
}