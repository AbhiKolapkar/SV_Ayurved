import { Typography } from '@mui/material'
import React from 'react'

const btnStyle = {
  borderRadius: '30px',
  boxShadow: "1px 4px 10px 0 rgba(0, 0, 0, 0.3)",
  background: "linear-gradient(348deg, #869633 36%, #ACBD33 100%)",
}

const BookingBtn = () => {
  return (
    <>
      <button style={btnStyle}>
        <Typography variant='button' color='text.primary'>
          Book an Appointment
        </Typography>
      </button>
    </>
  )
}

export default BookingBtn
