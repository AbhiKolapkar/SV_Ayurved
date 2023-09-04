import React from 'react'
import { toast } from 'react-toastify'

const Success = () => {
  toast.success('Appointment booked successfully', {
    position: 'top-right',
    autoClose: 3000,
    closeOnClick: true,
  })

  return null
}

export default Success
