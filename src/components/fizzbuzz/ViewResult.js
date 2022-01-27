import React from 'react'
import { useSelector } from 'react-redux'
import { List, ListItem, ListItemText, Divider } from '@mui/material';

const style = {
  width: '100%',
};

function ViewResult(props) {
  const fizzbuzzList = useSelector((state) => state.fizzbuzz)

  return (
    <>


      {fizzbuzzList.result && fizzbuzzList.result.length ?

        <List sx={style} component="nav" aria-label="fizzbuzz data">

          {fizzbuzzList.result.map((value, index) => {
            return <React.Fragment key={index}>
              <ListItem button style= {{ background: typeof value != 'number' ? (value == 'Fizz' ? '#1396d2' : (value == 'Buzz' ? '#7ac1fa' : '#09669c') ) : '#FFF'} }>
                <ListItemText primary={value} />
              </ListItem>
              <Divider />
            </React.Fragment>
          })}

        </List>
        : <> </>}
    </>
  )
}

export default ViewResult
