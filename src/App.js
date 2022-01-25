import React, {useState} from 'react';
import { connect } from 'react-redux'

import './App.css';
import { getFizzBuzzData} from './actions/index'
import {Box, Grid, Button, TextField } from '@mui/material';

 function App(props) {
  const [count, setCount] = useState(0)

  const onChangeHandler = (e) => {
    setCount(parseInt(e.target.value))
  }
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={10}>
          <TextField  value={count} name='count' type='number' variant='outlined' onChange={(e) => onChangeHandler(e)} />
        </Grid>
        <Grid item xs={2}>
          <Button onClick={() => props.getFizzBuzzData(count) }>Get</Button>
        </Grid>
        <Grid item xs={12}>
          {props.fizzbuzz && props.fizzbuzz.result && props.fizzbuzz.result.length ? props.fizzbuzz.result.map((value, index) => {
            return <div key={index}>{value} </div>
          }) : <> </>}
        </Grid>
       
      </Grid>
    </Box>
  );
}


const mapStateToProps = (state) => ({
  fizzbuzz: state.fizzbuzz

})

const mapDispatchToProps = {
  getFizzBuzzData
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

