import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, 
    // maxWidth: '100%',
    minHeight: "26em",
    borderRadius: "2em",
    backgroundColor: '#E6F4F1',
    transition: "all 1s",
    "&:hover": {
      backgroundColor: 'rgb(7, 177, 77, 0.42)'
    }
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundSize: "contain",
    backgroundColor: "white"
  },
  label:{
    backgroundColor: "#F79234",
    marginLeft: "1em",
    fontSize:  "0.7em",
    marginTop: "1em"

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