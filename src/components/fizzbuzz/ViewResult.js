import React from 'react'
import { useSelector } from 'react-redux'

function ViewResult(props) {
  const fizzbuzzList = useSelector((state) => state.fizzbuzz)

  return (
    <>
      {fizzbuzzList.result && fizzbuzzList.result.length ? fizzbuzzList.result.map((value, index) => {
        return <div key={index}>{value} </div>
      }) : <> </>}
    </>
  )
}

export default ViewResult
