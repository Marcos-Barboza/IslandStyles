import React, { useState } from 'react'
import Flip from 'src/components/ui/flip'

const Login: React.SFC = () => {
    const [display, setDisplay] = useState(true)
    return (
      <Flip activeTransition={display}>
        <div className="login">
          <span
            className="forgotPassword"
            role="presentation"
            onClick={() => setDisplay(!display)}
          >
                    Esqueceu a senha?
          </span>
        </div>
      </Flip>
    )
}

export default Login
