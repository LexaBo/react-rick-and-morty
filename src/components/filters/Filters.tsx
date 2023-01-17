import './filters.scss';

import { Formik, Field, Form, FormikHelpers } from 'formik';
import { useActions } from "../../hooks/useActions";

interface Values {
    name: string;
    status: string;
    gender: string;
}

const Filters = () => {
    const { setFiltersName, setFiltersStatus, setFiltersGender,  setCharactersPageNum } = useActions();

    return (
        <Formik
            initialValues={{
                name: '',
                status: '',
                gender: '',
            }}
            onSubmit={(
                values: Values,
                {setSubmitting}: FormikHelpers<Values>
            ) => {
                setSubmitting(false);
                setFiltersName(values.name);
                setFiltersStatus(values.status);
                setFiltersGender(values.gender);
                setCharactersPageNum(1);
            }}
        >
            <Form className="filters-form">
                <label className="filters-form__label" htmlFor="characterName">name</label>
                <Field className="filters-form__field filters-form__field_text" id="characterName" name="name"/>
                <label className="filters-form__label" htmlFor="characterStatus">status</label>
                <Field className="filters-form__field" id="characterStatus" as="select" name="status">
                    <option value="">all</option>
                    <option value="alive">alive</option>
                    <option value="dead">dead</option>
                    <option value="unknown">unknown</option>
                </Field>
                <label className="filters-form__label" htmlFor="characterGender">gender</label>
                <Field className="filters-form__field" id="characterGender" as="select" name="gender">
                    <option value="">all</option>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="genderless">genderless</option>
                    <option value="unknown">unknown</option>
                </Field>
                <button className="filters-form__btn" type="submit">Search</button>
            </Form>
        </Formik>
    );
}

export default Filters;