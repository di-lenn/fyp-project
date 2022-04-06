import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    background: '#140F2D',
    color: 'white',
    fontWeight: 'bold'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 10
  },
  buttonSubmit: {
    marginBottom: 5,
    marginTop: 15,
  },
  typography: {
    fontWeight: 'bold',
    color: 'white'
  }
}));