import useTransactionData from "../hooks/useTransactionData";
import { useState } from "react";
import { Button, Grid } from "@mui/material";
import TransactionTable from "./TransactionTable";
import PointsSummaryTable from "./PointsSummaryTable";
import PointsPerMonthTable from "./PointsPerMonthTable";

const MainPage = () => {
  const [fakeDataToggle, setFakeDataToggle] = useState(true);
  const [rows, createRandomRow] = useTransactionData(fakeDataToggle);

  return (
    <Grid container spacing={2} sx={{ mt: 10 }}>
      <Grid item xs>
        <Button variant="contained" onClick={createRandomRow}>Create Random Row</Button>
      </Grid>
      <Grid item xs>
        <PointsSummaryTable rows={rows} />
      </Grid>
      <Grid item xs>
        <PointsPerMonthTable rows={rows} />
      </Grid>
      <Grid item xs>
        <TransactionTable rows={rows} />
      </Grid>
    </Grid>
  );
};

export default MainPage;
