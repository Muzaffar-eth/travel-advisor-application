import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  paper: { padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100px'
 },
 
  mapContainer: { height: '85vh',
   width: '100%', 
   margin: 0, 
   padding: 0 
  },

  markerContainer: { position: 'absolute',
  transform: 'translate(-50%, -50%)', 
  zIndex: 1, 
  '&:hover': { zIndex: 2 } 
},
  pointer: { cursor: 'pointer' },
  // Filters styles 
  filterContainer: { marginBottom: '20px',
   backgroundColor: '#f9f9f9',
   padding: '10px', 
   borderRadius: '8px', 
   boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', 
   display: 'flex',
    alignItems: 'center' 
  },
  filterItem: { flex: '1', 
  display: 'flex', 
  alignItems: 'center', 
  marginLeft: '10px' 
},
  filterLabel: { fontSize: '14px',
   fontWeight: '600', 
   marginRight: '10px' 
  },
  filterInput: { flex: '1', 
  padding: '8px', 
  border: '1px solid #ccc', 
  borderRadius: '4px', 
  outline: 'none', 
  '&:focus': { borderColor: 'primary.main' } },
  filterSlider: { flex: '1', marginLeft: '20px' },
}));
