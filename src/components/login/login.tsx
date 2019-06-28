import React, { useState } from 'react'
import Flip from 'src/components/ui/flip'

const Login: React.SFC = () => {
    const [display, setDisplay] = useState(true)
    return (
      <Flip
        largura="375px"
        altura="400px"
        front={(
          <div className="login">
            <span
              className="forgotPassword"
              role="presentation"
              onClick={() => setDisplay(!display)}
            >
                        Esqueceu a senha?
            </span>
          </div>
)}
        back={<div className="login">opaaaa</div>}
        activeTransition={display}
      />
    )
}

export default Login
