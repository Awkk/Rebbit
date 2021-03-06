import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Container } from "@material-ui/core";

const EndPointRequestTable = ({ data }) => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Method</TableCell>
              <TableCell align="left">Endpoint</TableCell>
              <TableCell align="left">Requests</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.api_id}>
                <TableCell align="left">{row.method}</TableCell>
                <TableCell align="left">{row.endpoint}</TableCell>
                <TableCell align="left">{row.request}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

const useStyles = makeStyles({
  container: {
    marginTop: 20,
  },
  table: {
    minWidth: 650,
  },
});

export default EndPointRequestTable;
