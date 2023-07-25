import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 120,
    marginBottom: '50px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: '600px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: '25px',
  },
  marginBottom: {
    marginBottom: '30px',
  },
  list: {
    height: '75vh',
    overflow: 'auto',
  },

  filterButton: {
    borderRadius: '4px',
    backgroundColor: theme.palette.common.white,
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.5)', 
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.25)',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.8)', 
    },
  },
}));
