import React from 'react';
import {Button} from "@material-ui/core";
import {Formik, Form, Field} from 'formik';
import {MyField} from "../../../../components/MyField";

interface Props {
    onSubmit: (values: Values) => void;
}

interface Values {
    nameMeet: string,
}


export const MeetsForm: React.FC<Props> = ({onSubmit}) => {
    return (
        <Formik initialValues={{nameMeet: ''}}
                onSubmit={(values,{resetForm}) => {
                    onSubmit(values)
                    resetForm()
                }}>
            {({values}) => (
                <Form style={{margin: '0 auto', maxWidth: 600}}>
                    <div>
                        <Field name="nameMeet" placeholder="Событие" label="Событие" component={MyField} />
                    </div>
                    <Button style={{margin: '20px 40px'}} type="submit">Добавить</Button>
                </Form>
            )}
        </Formik>
    )
}