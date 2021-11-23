import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, 
    // maxWidth: '100%',
    minHeight: "500px",
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundSize: "contain",
  },
  label:{
    backgroundColor: "#F79234",
    marginLeft: "1em",
    fontSize:  "0.7em",
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));