import React from 'react'

function logout() {
    localStorage.clear();
  return (
      window.location.href = "/"
    
  )
}

export default logout