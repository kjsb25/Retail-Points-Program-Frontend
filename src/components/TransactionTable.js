import {
  TableContainer,
  Table,
  TableHead,
  Paper,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";

const TransactionTable = ({ rows }) => {
  return (
    <>
      <Typography variant="h6">Full Transaction List</Typography>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="right">User</TableCell>
              <TableCell align="right">Amount ($)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>{new Date(row.date).toDateString()}</TableCell>
                  <TableCell align="right">{row.user}</TableCell>
                  <TableCell align="right">
                    {Number(row.amount).toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TransactionTable;
