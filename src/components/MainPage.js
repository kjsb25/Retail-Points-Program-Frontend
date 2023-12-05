import useTransactionData from "../hooks/useTransactionData";
import { useState } from "react";
import { Grid } from "@mui/material";
import TransactionTable from "./TransactionTable";
import PointsSummaryTable from "./PointsSummaryTable";

const MainPage = () => {
  const [fakeDataToggle, setFakeDataToggle] = useState(true);
  const rows = useTransactionData(fakeDataToggle);

  return (
    <Grid container spacing={2} sx={{ mt: 10 }}>
      <Grid item xs>
        <PointsSummaryTable rows={rows} />
      </Grid>
      <Grid item xs>
        <TransactionTable rows={rows} />
      </Grid>
    </Grid>
  );
};

export default MainPage;
