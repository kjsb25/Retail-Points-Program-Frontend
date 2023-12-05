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
import useMonthlyPoints from "../hooks/useMonthlyPoints";
import { useEffect, useState } from "react";

const PointsPerMonthTable = ({ rows }) => {
  const [userMonthScores, isLoading] = useMonthlyPoints(rows);
  const [uniqueMonths, setUniqueMonthsState] = useState([]);
  const [uniqueUsers, setUniqueUsersState] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      setUniqueMonthsState(
        userMonthScores
          .map((item) => item.month)
          .filter((value, index, self) => self.indexOf(value) === index),
      );
      setUniqueUsersState(
        userMonthScores
          .map((item) => item.user)
          .filter((value, index, self) => self.indexOf(value) === index),
      );
    }
  }, [isLoading, userMonthScores]);

  return (
    <>
      <Typography variant="h6">Points Per Month</Typography>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              {!isLoading &&
                uniqueMonths &&
                uniqueMonths.map((month) => <TableCell>{month}</TableCell>)}
            </TableRow>
          </TableHead>
          <TableBody>
            {!isLoading &&
              uniqueUsers &&
              uniqueUsers.map((user) => (
                <TableRow key={user}>
                  <TableCell>{user}</TableCell>
                  {uniqueMonths &&
                    uniqueMonths.map((month) => (
                      <TableCell key={user + month}>
                        {userMonthScores &&
                          userMonthScores.filter(
                            (userScore) =>
                              userScore.user === user &&
                              userScore.month === month,
                          )[0].points}
                      </TableCell>
                    ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PointsPerMonthTable;
