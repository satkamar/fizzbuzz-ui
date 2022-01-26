import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Paper, Box, Grid, Button, TextField } from '@mui/material';
import { getFizzBuzzData, clearData } from '../../actions/index'
import ViewResult from './ViewResult';

const styles = {
  input: {
    width: "100%"
  },
  header: {
    textAlign: "center"
  },
  container: {
    margin: "10px 30%",
    padding: "30px",
    minHeight: "600px"
  },
  viewcard: {
    overflow: "auto",
    maxHeight: "450px"
  },
  countError: {
    color: "#DD0000",
    fontSize: "10px"
  }
};

function Fizzbuzz(props) {
  const [count, setCount] = useState('')
  const [countError, setCountError] = useState('')


  const onChangeHandler = (e) => {

    if (typeof parseInt(e.target.value) === 'number')
      setCount(parseInt(e.target.value))
    else
      setCountError("Please enter integer value")
  }

  const clearCount = () => {
    setCount('')
    setCountError("")
  }

  return (
    <>
      <Paper variant="outlined" style={{ ...styles.container }} >
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12}>
              <h3 style={{ ...styles.header }}>Fizz Buzz</h3>
            </Grid>
            <Grid item xs={12}>

              <TextField style={{ ...styles.input }} value={count} name='count' type='number' variant='filled' onChange={(e) => onChangeHandler(e)} />
              {countError ? <span style={{ ...styles.countError }}>{countError}</span> : <></>}
            </Grid>
            <Grid item xs={12} style={{ ...styles.header }}>

              <Button disabled={!count} variant="outlined" size="small" onClick={() => props.getFizzBuzzData(count)}>Get</Button>
              <Button variant="outlined" size="small" onClick={() => clearCount()}>Clear</Button>
              <Button variant="outlined" size="small" onClick={() => props.clearData()}>Reset</Button>
            </Grid>
            <Grid item xs={12} style={{ ...styles.viewcard }}>
              <ViewResult />
            </Grid>

          </Grid>
        </Box>
      </Paper>
    </>
  )
}


const mapStateToProps = (state) => ({
  fizzbuzz: state.fizzbuzz

})

const mapDispatchToProps = {
  getFizzBuzzData,
  clearData
}


export default connect(mapStateToProps, mapDispatchToProps)(Fizzbuzz)

