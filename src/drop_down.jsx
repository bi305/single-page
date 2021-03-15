import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

function DropDown() {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(2),
      minWidth: 150,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 my-5">
          <div className="col-md-12 bg-white shadow-sm border  rounded ">
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">
                Sport
              </InputLabel>
              <Select
                native
                value={state.age}
                onChange={handleChange}
                label="Age"
                inputProps={{
                  name: "age",
                  id: "outlined-age-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value={10}>Soccer</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DropDown;
