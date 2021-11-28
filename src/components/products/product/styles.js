import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, 
    // maxWidth: '100%',
    minHeight: "26em",
    borderRadius: "2em",
    backgroundColor: '#E6F4F1',
    transition: "all 0.3s",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    "&:hover": {
      backgroundColor: 'rgb(7, 177, 77, 0.42)',
      boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
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