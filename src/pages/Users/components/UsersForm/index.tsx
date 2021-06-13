import React from 'react';
import {Button} from "@material-ui/core";
import {Formik, Form, Field} from 'formik';
import {MyField} from "../../../../components/MyField";

interface Props {
    onSubmit: (values: Values) => void;
}

interface Values {
    firstName: string,
    lastName: string,
    patronymic: string
}


export const UsersForm: React.FC<Props> = ({onSubmit}) => {
    return (
        <Formik initialValues={{firstName: '', lastName: '', patronymic: ''}}
                onSubmit={(values,{resetForm}) => {
                    onSubmit(values)
                    resetForm()
                }}>
            {({values}) => (
                <Form style={{margin: '0 30px 30px 0', maxWidth: 600}}>
                    <div>
                        <Field name="firstName" placeholder="Имя" label="Имя" component={MyField} />
                    </div>
                    <div>
                        <Field name="lastName" placeholder="Фамилия" label="Фамилия" component={MyField}/>
                    </div>
                    <div>
                        <Field name="patronymic" placeholder="Отчество" label="Отчество" component={MyField}/>
                    </div>
                    <Button style={{margin: '20px 40px'}} type="submit">Добавить</Button>
                </Form>
            )}
        </Formik>
    )
}