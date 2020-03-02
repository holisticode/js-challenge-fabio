import React from 'react';

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

export const Header = ({children}) => (
  <div
     style={{
       textAlign: "center", 
       marginTop: "50px",
       fontSize: "4em"
     }}
  >
  {children}
  </div>
)

export const Start = ({children}) => (
  <div
     style={{
       textAlign: "center", 
       marginTop: "50px",
       fontSize: "3em",
       position: "absolute",
       top: "50%",
       bottom: 0,
       left: 0,
       right: 0,
       margin: "auto"
     }}
  >
  {children}
  </div>
)

export const ValueRow = ({left, middle, right}) => (
   <Container>
     <Grid container>
       <Grid item xs={4}>
       {left}
       </Grid>
       <Grid item xs={4}>
       {middle}
       </Grid>
       <Grid item xs={4}>
       {right}
       </Grid>
     </Grid>
   </Container>
)

export const ValueField = ({label, value, align}) => (
  <div>
    <Typography align={align} color="secondary">{label}</Typography> 
    <Value value={value} align={align}></Value>
  </div>
)

export const Value = ({value, align}) => (
  <Typography color="primary" align={align}
     style={{
       margin: "20px",
       fontSize: "2em",
     }}
 >
  {value}
  </Typography>
)
