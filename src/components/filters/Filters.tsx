import './filters.scss';

import {Formik, Field, Form, FormikHelpers} from 'formik';
import {setFiltersName, setFiltersStatus, setFiltersGender} from "./filtersSlice";
import {setCharactersPageNum} from "../characters-grid/charactersSlice"
import {useAppDispatch} from "../../hooks/redux";

interface Values {
    name: string;
    status: string;
    gender: string;
}

const Filters = () => {
    const dispatch = useAppDispatch();

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
                dispatch(setFiltersName(values.name));
                dispatch(setFiltersStatus(values.status));
                dispatch(setFiltersGender(values.gender));
                dispatch(setCharactersPageNum(1));
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