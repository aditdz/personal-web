import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, TextField } from '@material-ui/core';
import Title from '../components/title';
import { getTranslate } from '../localization/index';
import './contact.css';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },

  contactGrid: {
    paddingTop: 60,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 60,
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 5,
      paddingRight: 5,
    },
  },
  getintouch: {
    textAlign: 'left',
  },
  formGrid: {},
  details: {},
}));
export default function ContactScreen() {
  const translate = getTranslate();
  const classes = useStyles();
  return (
    <Grid container alignItems='flex-start' className={classes.root}>
      <Grid container item xs={12} className={classes.contactGrid}>
        <Title title={translate.contactme} />
        <Grid container>
          <Grid item xs={12} md={6} className={classes.formGrid}>
            <Typography className={classes.getintouch} variant='h4'>
              {translate.getintouch}
            </Typography>
            <TextField
              style={{ marginTop: 25 }}
              fullWidth
              size='medium'
              required
              id='outlined-required'
              label='Enter your name'
              defaultValue='name'
              variant='outlined'
            />
            <TextField
              style={{ marginTop: 25 }}
              fullWidth
              size='medium'
              required
              id='outlined-required'
              label='Enter your email'
              defaultValue='email'
              variant='outlined'
            />
            <TextField
              style={{ marginTop: 25 }}
              fullWidth
              size='medium'
              required
              id='outlined-required'
              label='Enter your subject'
              defaultValue='subject'
              variant='outlined'
            />

            <TextField
              style={{ marginTop: 25 }}
              fullWidth
              size='medium'
              required
              id='outlined-required'
              label='Enter your message'
              defaultValue='message'
              variant='outlined'
              multiline
              rows={5}
            />
          </Grid>
          <Grid item xs={12} md={6} className={classes.details}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
