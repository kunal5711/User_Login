import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = ({regLog}) => {
  const navigateTo = useNavigate();
  useEffect(() => {
    regLog(null);
    navigateTo('/')
  }, []);
  
  return (
    <div>
      Logout
    </div>
  )
}

export default Logout