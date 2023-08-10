import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(no, name, calories, fat, carbs, protein) {
  return { no, name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, "Hello yoghurt", 159, 6.0, 24, 4.0),
  createData(2, "Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData(3, "Eclair", 262, 16.0, 24, 6.0),
  createData(4, "Cupcake", 305, 3.7, 67, 4.3),
  createData(5, "Gingerbread", 356, 16.0, 49, 3.9),
];

export default function OverViewTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell align="left">Ref</TableCell>
            <TableCell align="left">Leads</TableCell>
            <TableCell align="left">Deals</TableCell>
            <TableCell align="left">Tasks</TableCell>
            <TableCell align="left">Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.no}
              </TableCell>
              <TableCell component="th" scope="row">
                <div className="d-flex">
                  <img
                    src="https://i.pinimg.com/736x/8b/52/79/8b52795d08016d72e0898b384210b63a.jpg"
                    className="rounded-pill"
                    width={35}
                    height={35}
                  />
                  <div className="ms-2">
                    <div>Mohammed</div>
                    <div style={{ color: "grey", fontSize: 12 }}>Admin</div>
                  </div>
                </div>
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell align="left">{row.carbs}</TableCell>
              <TableCell align="left">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
