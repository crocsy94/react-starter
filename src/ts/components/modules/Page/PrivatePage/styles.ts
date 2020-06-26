import { makeStyles } from "@material-ui/core";
import { IProps } from ".";

export const useStyles = makeStyles({
  privatePageWrapper: (props: IProps) => ({
    backgroundColor: props.color,
  }),
});
