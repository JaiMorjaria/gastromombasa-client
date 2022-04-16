import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Typography
} from '@material-ui/core';
import Textfield from './Textfield/index';
import Select from './Select/index';
import Checkbox from './Checkbox/index';
import Button from './Button/index';
import choices from './data/data.json'
import { useHistory} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
}));

const INITIAL_FORM_STATE = {
  name: '',
  email: '',
  number: '',
  appointmentType: '',
  description: '',
  termsOfService: false
};

const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string()
    .required('Required'),
  email: Yup.string()
    .email('Invalid email.')
    .required('Required'),
  number: Yup.number()
    .integer()
    .typeError('Please enter a valid phone number')
    .required('Required'),
  appointmentType: Yup.string()
  .required('Required'),
  description: Yup.string(),
  termsOfService: Yup.boolean()
    .oneOf([true], 'The terms and conditions must be accepted.')
    .required('The terms and conditions must be accepted.'),
});

const FormComplete = () => {
  const classes = useStyles();
  const history = useHistory();

  return (   
    <>
      <Grid container>
        <Grid item xs={12}>
          <Container maxWidth="sm">
            <div className={classes.formWrapper}>

              <Formik
                initialValues={{
                  ...INITIAL_FORM_STATE
                }}
                validationSchema={FORM_VALIDATION}
                onSubmit={async (values) => {
                  const data = {
                    name: values.name,
                    email: values.email,
                    number: values.number,
                    appointmentType: values.appointmentType,
                    description: values.description
                  }
                  const axiosConfig = {
                    headers : {
                      'Content-Type': 'application/json'
                    }
                  }

                  await axios
                  .post('https://gastro-mombasa.herokuapp.com/api/patients/', data, axiosConfig)
                      .then((response) => {
                          history.push({
                            pathname: '/success',
                            state: { submit: true }
                          });
                   })
                   .catch((error) => {
                     history.push({
                       pathname: '/failure',
                       state: { submit: true }
                     });
                   });
                }}
              >
                <Form>

                  <Grid container spacing={2}>

                    <Grid item xs={12}>
                      <Typography>
                        Your details
                      </Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <Textfield
                        name="name"
                        label="Name"
                      />
                    </Grid>


                    <Grid item xs={6}>
                      <Textfield
                        name="email"
                        label="Email"
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <Textfield
                        name="number"
                        label="Phone"
                      />
                    </Grid>


                    <Grid item xs={6}>
                      <Select
                        name="appointmentType"
                        label="Appointment Type"
                        options={choices}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Textfield
                        name="description"
                        label="Please describe what issues you're having."
                        multiline={true}
                        rows={4}
                      />
                    </Grid>
                  <div style={{paddingTop: 100}} />
                    <Grid item xs={12}>
                      <Checkbox
                        name="termsOfService"
                        legend="Note"
                        label={<Typography style={{fontSize: 14}}>I acknowledge that if I have any changes, I should contact gastromombasa@gmail.com or +254 719 669425</Typography>}
                      />
                    </Grid>
                  <Grid container direction='row' justifyContent='flex-end' alignItems='center'> 
                    <Grid item xs={6} justify='flex-end ' >
                      <Button>
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>


                </Form>
              </Formik>

            </div>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default FormComplete;