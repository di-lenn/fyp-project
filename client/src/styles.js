import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#140F2D'
  },
  heading: {
    color: 'white',
    fontFamily: 'helvetica neue',
    fontWeight: 'bold'
  },
  image: {
    marginLeft: '15px',
  },
  instructions: {
    alignItems: 'right',
    marginRight: '5px'
  },
  button: {
    marginBottom: 10,
    marginTop: 15,
    fontWeight: 'bold'
  }
}));