import React, {useState, useReducer} from 'react';
import {TextField, Button, Typography, Grid, Card, CardContent } from '@material-ui/core'
import { InputFormElements } from './formElement';



const App = () => {
  const [formInput, SetFormInput] = useReducer((state, newState) => ({ ...state, ...newState }), {
    firstName: 'aman'
  })


  const submitHandler = (e) => {
    e.preventDefault()
    const data = { formInput }
    console.log('data', data)
  }

  const handleInput = (e) => {
    const name= e.target.name
    const newValue = e.target.value
    SetFormInput({[name]: newValue})
    console.log('dat', {[name]: newValue})
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <Card
        style={{
          height: "auto",
          width: '600px',
          border: "1px solid grey",
          background: "yellow"
        }}
      >
        <CardContent>
          <Typography align='center' variant='h4'>Create An Account</Typography>
          <Typography align='center' variant='h6'>Fill all the Mandatory Fields to Create an Account</Typography>
          <form onSubmit={submitHandler}>
            <Typography align='left' style={{margin: "5px 0px"}}>Personal Info:</Typography>
            <Grid container spacing={3} style={{ padding: "0px"}}>
              {InputFormElements.slice(0, 4).map((input) => {
                return (
              <Grid item xs={input.xs} sm={input.sm}>
                <TextField {...input} onChange={handleInput} />
              </Grid>
                )
              } )}
            </Grid>
            <Typography align='left' style={{margin: "5px 0px"}}>Address Info:</Typography>
            <Grid container spacing={3} style={{ padding: "0px" }}>
              {InputFormElements.slice(4, 10).map((input) => {
                return (
              <Grid item xs={input.xs} sm={input.sm}>
                <TextField {...input} onChange={handleInput} />
              </Grid>
                )
              } )}
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={12} align='right'>
                <Button type='reset' color='primary' variant='outlined' style={{margin: "0px 5px"}}>
                  Reset
                </Button>
                <Button type='submit' color='primary' variant='contained'>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default App