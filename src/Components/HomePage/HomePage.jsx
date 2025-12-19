import { Grid } from "@mui/material";
import Navigation from '../Navigation/Navigation';

export default function Homepage() {
  return (
    <Grid container px={5} sx={{ px: { lg: 36 } }} justifyContent="space-between">
      <Grid item xs={0} lg={2.5} sx={{ display: { xs: "none", lg: "block" } }}>
        <Navigation/>
      </Grid>

      <Grid item xs={12} lg={6}>
        <p style={{ textAlign: "center" }}>middle part</p>
      </Grid>

      <Grid item xs={0} lg={3} sx={{ display: { xs: "none", lg: "block" } }}>
        <p style={{ textAlign: "center" }}>right part</p>
      </Grid>
    </Grid>
  );
}
