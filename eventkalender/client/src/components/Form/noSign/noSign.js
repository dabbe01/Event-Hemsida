import React from 'react'
import { Link } from "react-router-dom";

const noSign = () => {
  return (
    <div align="center">
    <h2>
    För att skapa ett event, så behöver du logga in!
    </h2>
    <Link to="/auth" >Sign in</Link>
  </div>
  )
}

export default noSign