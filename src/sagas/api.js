import Axios from "axios";

const GET_FIZZ_BUZZ_DATA = 'http://localhost:4400/getFizzBuzz'


export const getFizzBuzz = (count) => {

  return Axios.get(`${GET_FIZZ_BUZZ_DATA}`, {
    params: {
      count: parseInt(count)
    }
  })
    .then(res => res.data)
    .catch(error => {
      throw error
    })

}
