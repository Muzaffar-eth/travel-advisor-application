import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      color: 'black'
    },
  },
  search: {
    position: 'relative',
   
    borderRadius: '4px', 
    backgroundColor: theme.palette.common.white,
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.5)', 
    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.25)' },
    marginLeft: '50px', 
    marginRight: 'auto',
    width: '100%',
    maxWidth: 500, 
    [theme.breakpoints.up('md')]: {
      borderRadius: theme.shape.borderRadius * 2, 
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
  appBar: {
    backgroundColor:'white'
  },
  toolbar: {
    display: 'flex',
    color: 'black',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: '4px',
    backgroundColor: theme.palette.common.white,
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.5)', 
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.25)',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.8)', 
    },
  },

}));
