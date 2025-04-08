import { useFormik } from "formik";
import * as Yup from 'yup';

import { Label } from "../../components/Input/styles";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { CheckboxWrapper, Homework15Container} from "./styles";
import { Homework15FormValues } from "./types";

export function Homework15 (){
    
    const schema = Yup.object().shape({
        code: Yup.number()
        .required('Обязательное поле')
        .typeError('Полу должно содержать только цифры')
        .test('length', 'Должно быть 6 символов', (value) => value ? String(value).length === 6 : false),
        agreement: Yup.boolean()
        .required('Обязательное поле')
        .oneOf([true], 'Вы должны принять условие'),
    });
    
    const formik = useFormik<Homework15FormValues>({
        initialValues: {
            code: '',
            agreement: false,
        }, 
validationSchema: schema,
onSubmit: (values: Homework15FormValues) => {
    console.log('Вы успешно вошли');
    console.log(values);
    
},
    });

    return (
        <Homework15Container>
            <form onSubmit={formik.handleSubmit}>
            <Label htmlFor="code">Validation code</Label>
            <Input 
            id="code_id"
            name="code"
            type="number"
            placeholder="Введите код"
            value={formik.values.code}
            onChange={formik.handleChange}
            error={formik.errors.code}
            />
            <CheckboxWrapper>
                <Input 
                id="agreement"
                name="agreement"
                type="checkbox"
                checked={formik.values.agreement}
                onChange={formik.handleChange}
                error={formik.errors.agreement}
                />
                <Label htmlFor="agreement">Privacy and policy</Label>
            </CheckboxWrapper>
            <Button name="Login" type="submit"/>
            </form>
        </Homework15Container>
    )
};

export default Homework15;