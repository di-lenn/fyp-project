import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

import useStyles from './styles';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  useEffect(() => {
    setTimeout(() => {
      setOpen(true)
    }, 1000)
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button className={classes.buttonSubmit} variant="outlined" onClick={handleClickOpen}>
        Instructions
      </Button> */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Instructions
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography align='center' variant='h5' gutterBottom>
            Welcome to my Twitter Sentiment Labelling Web App!
          </Typography>
          <Typography align='left' variant='h6'>About</Typography>
          <Typography align='center' variant='body1' gutterBottom>
            The purpose of this site is to assist in the labelling of tweets, based on the emotion and sentiment conveyed
            to the reader. The data collected on this site will be used for research in the field of sentiment analysis.
            The goal here is to collect accurate information about a tweet's conveyed meaning (according to us humans),
            and use this data to help train Artificial Intelligence models to accurately be able to determine a piece of text's
            general sentiment and intended meaning.
          </Typography>
          <Typography align='left' variant='h6'>Usage</Typography>
          <Typography align='center' variant='body1' gutterBottom>
            To get started using this app, simply select whichever sentiment (Positive, Negative, or Neutral) and emotion
            you perceive from reading the tweet displayed on the left side of the screen. Once you've made your choice, simply
            click 'Submit' and we'll show you another tweet to label if you like!
          </Typography>
          <Typography className={classes.copyright} align='center' variant='caption'>V. 1.0 | Dylan Lee 2022</Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            CLOSE
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
