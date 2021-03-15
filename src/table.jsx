import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(
  Branch,
  Tournament,
  Market,
  Selection,
  Event,
  Price,
  Action
) {
  return { Branch, Tournament, Market, Selection, Event, Price, Action };
}

const rows = [
  createData(
    "outright",
    "england premier league",
    "winner",
    "Manchester united",
    "-",
    "-",
    "get link   get url"
  ),
  createData(
    "outright",
    "england premier league",
    "winner",
    "Manchester united",
    "-",
    "-",
    "get link   get url"
  ),
  createData(
    "outright",
    "england premier league",
    "winner",
    "Manchester united",
    "-",
    "-",
    "get link   get url"
  ),
  createData(
    "outright",
    "england premier league",
    "winner",
    "Manchester united",
    "-",
    "-",
    "get link   get url"
  ),
  createData(
    "outright",
    "england premier league",
    "winner",
    "Manchester united",
    "-",
    "-",
    "get link   get url"
  ),
];

function BasicTable() {
  const classes = useStyles();

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Branch</TableCell>
                  <TableCell>Tournament</TableCell>
                  <TableCell>Market</TableCell>
                  <TableCell>Selection</TableCell>
                  <TableCell>Event</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.Branch}>
                    <TableCell component="th" scope="row">
                      {row.Branch}
                    </TableCell>
                    <TableCell>{row.Tournament}</TableCell>
                    <TableCell>{row.Market}</TableCell>
                    <TableCell>{row.Selection}</TableCell>
                    <TableCell>{row.Event}</TableCell>
                    <TableCell>{row.Price}</TableCell>
                    <TableCell>{row.Action}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
export default BasicTable;
