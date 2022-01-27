import React, { useState } from 'react'
import { connect, useSelector } from 'react-redux'

import { Paper, Box, Grid, Button, TextField } from '@mui/material';
import { getFizzBuzzData, clearData } from '../../actions/index'
import ViewResult from './ViewResult';
import './fizzbuzz.css'

function Fizzbuzz(props) {
  const [count, setCount] = useState('')
  const [countError, setCountError] = useState('')

  const fizzbuzzList = useSelector((state) => state.fizzbuzz)

  const onChangeHandler = (e) => {
    let error = ''
    if (!isNaN(e.target.value)){
      let value = parseInt(e.target.value)

      if(value > 100 || value < 0) 
        error ="Input value must be between 1 to 100"
      else
        setCount(value)
    } else
      error ="Please enter integer value"

    setCountError(error)
  }

  const clearCount = () => {
    setCount('')
    setCountError("")
  }

  return (
    <>
      <Paper variant="outlined" className='container' >
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} style={{textAlign: "center"}}>
            <Grid item xs={12} className='header'>
              <h3 >Fizz Buzz</h3>
            </Grid>
            <Grid item xs={12}>

              <TextField className= 'input' value={count} InputProps={{ inputProps: { min: 0 } }} name='count' type='number' variant='filled' onChange={(e) => onChangeHandler(e)} />
              {countError ? <span className='countError'>{countError}</span> : <></>}
            </Grid>
            <Grid item xs={12} >

              <Button  disabled={!count} variant="outlined" size="small" onClick={() => props.getFizzBuzzData(count)}>Get</Button>
              <Button disabled={!count} className='button' variant="outlined" size="small" onClick={() => clearCount()}>Clear</Button>
              <Button disabled={!fizzbuzzList || !fizzbuzzList.result || !fizzbuzzList.result.length }  variant="outlined" size="small" onClick={() => props.clearData()}>Reset</Button>
            </Grid>
            <Grid item xs={12} className='viewcard'>
              <ViewResult />
            </Grid>

          </Grid>
        </Box>
      </Paper>
    </>
  )
}


// const mapStateToProps = (state) => ({
//   fizzbuzz: state.fizzbuzz
// })

const mapDispatchToProps = {
  getFizzBuzzData,
  clearData
}


export default connect(null, mapDispatchToProps)(Fizzbuzz)

