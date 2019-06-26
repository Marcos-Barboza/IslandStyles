import React, { useState } from 'react'
import RecoveryPassword from './recoveryPassword'

const Login: React.SFC = () => {
    const [display, setDisplay] = useState(false)
    return (
      <div className="login">
        <RecoveryPassword recovery={display} />
        <span
          className="forgotPassword"
          role="presentation"
          onClick={() => setDisplay(!display)}
        >
                Esqueceu a senha?
        </span>
      </div>
    )
}

export default Login
