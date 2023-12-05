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
import useTotalUserPoints from "../hooks/useTotalUserPoints";

const PointsSummaryTable = ({ rows }) => {
  const [userScores,isLoading] = useTotalUserPoints(rows);

  return (
    <>
      <Typography variant="h6">Points Summary</Typography>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell align="right">Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!isLoading && userScores &&
              userScores.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>{row.user}</TableCell>
                  <TableCell align="right">{row.points}</TableCell>
                </TableRow>
              ))} 
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PointsSummaryTable;
