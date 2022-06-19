import React from 'react'

function logout() {
    localStorage.clear();
  return (
      window.location.href = "/login"
    
  )
}

export default logout