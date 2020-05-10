import React from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import Header from "./Header";
import Content from "./Content";
function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
         <Content/>

        </Grid>
      </Grid>
      <Grid item xs={false} sm={2}/>
      
    </Grid>
  );
}

export default App;
