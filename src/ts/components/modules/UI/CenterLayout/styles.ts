import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  center: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "center",
    margin: "0 auto",
    textAlign: "center",
    width: "60%",

    "& > button": {
      alignSelf: "center",
      marginTop: "20px",
      width: "100px",
    },
  },
});
