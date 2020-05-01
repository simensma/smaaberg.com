import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import Theme from '../theme';
import * as Yup from 'yup';
import axios from 'axios';
import qs from 'querystring';

const StyledForm = styled(Form)`
    input, textarea {
        background-color: rgba(125,125,125,0.5);
        color: white;

        &:focus {
            background-color: rgba(200,200,200,0.5);
            color: white;
        }
    }

    .btn-success {
        background-color: ${Theme().lightest};
        border-color: ${Theme().lightestMed};
    }
`;

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .min(2)
        .max(250)
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    subject: Yup.string()
        .min(2, 'Too short')
        .max(500, 'Too long')
        .required('Required'),
    message: Yup.string()
        .min(2, 'Too short')
        .max(10000, 'Too long - max 10000 characters')
        .required('Required')
});

class ContactForm extends React.Component {

    async onSubmit(values, {setSubmitting, setErrors, setStatus, resetForm}) {
        values['form-name'] = 'contact-form';

        try {
            await axios.post('/', qs.stringify(values), {headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
              }});

            resetForm({});
            setStatus({success: true})
        } catch(e) {
            setStatus({success: false});
            setSubmitting(false);
            setErrors({submit: 'Something went wrong when submitting form'});
        }
    }

    render() {
        return (
            <Formik
                initialValues={{email: '', message: '', name: '', subject: ''}}
                validationSchema={ContactSchema}
                onSubmit={this.onSubmit}
            >
                {({isSubmitting, errors, status, isValid}) => (
                    <StyledForm
                            id="hire"
                            name="contact-form"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            error={errors.submit}>
                        <h2 style={{color: 'white', marginBottom: '32px'}}>Contact Me</h2>
                        <div className={'form-group ' + (errors.name? 'has-danger': '')}>
                            <label htmlFor="name">* Name</label>
                            <Field className={'form-control' + (errors.name? ' is-invalid': '')} type="text" name="name"/>
                            <ErrorMessage className="invalid-feedback" name="name" component="div"></ErrorMessage>
                        </div>

                        <div className={'form-group ' + (errors.email? 'has-danger': '')}>
                            <label htmlFor="email">* Email</label>
                            <Field className={'form-control' + (errors.email? ' is-invalid': '')} type="email" name="email"/>
                            <ErrorMessage className="invalid-feedback" name="email" component="div"></ErrorMessage>
                        </div>

                        <div className={'form-group ' + (errors.subject? 'has-danger': '')}>
                            <label htmlFor="subject">* Subject</label>
                            <Field className={'form-control' + (errors.subject? ' is-invalid': '')} type="text" name="subject"/>
                            <ErrorMessage className="invalid-feedback" name="subject" component="div"></ErrorMessage>
                        </div>
                        
                        <div className={'form-group ' + (errors.message? 'has-danger': '')}>
                            <label htmlFor="message">* Message</label>
                            <Field rows={10} className={'form-control' + (errors.message? ' is-invalid': '')} component="textarea" name="message"></Field>
                            <ErrorMessage className="invalid-feedback" name="message" component="div"></ErrorMessage>
                        </div>

                        {status && status.success && <div class="alert alert-success" role="alert">
                            Message Sent!
                        </div>}

                        {status && !status.success && <div class="alert alert-danger" role="alert">
                            Something went wrong when sending message.
                        </div>}

                        <div className={'form-group ' + (errors.submit? 'has-danger': '')} style={{textAlign: 'right'}}>
                            <ErrorMessage className="invalid-feedback" name="submit" component="div"></ErrorMessage>
                            <button className="btn btn-success" type="submit" disabled={isSubmitting}>Submit</button>
                        </div>
                    </StyledForm>
                )}
            </Formik>
        );
    }
}

export default ContactForm;