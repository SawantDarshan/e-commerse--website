import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    backgroundImage: "linear-gradient(to bottom, #5bc0de, #7ccbe3, #98d7e9, #b2e2ee, #ccedf5, #d9f2f9, #e6f7fc, #f3fcff, #f7fcff, #fbfdff, #fdfeff, #ffffff)"
  },
  root: {
    flexGrow: 1,
  },
}));