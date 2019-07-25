import React, { useState } from 'react'
import RecoveryPassword from 'src/components/login/recoveryPassword'
import Flip from 'src/components/ui/flip'

const Login: React.FunctionComponent = () => {
    const [activeTransition, setTransition] = useState(false)
    const transition = React.createRef()

    return (
      <Flip
        activeTransition={activeTransition}
        largura="375px"
        altura="400px"
        front={(
          <div className="login">
            <div
              role="presentation"
              onClick={() => setTransition(!activeTransition)}
            >
                        recuperar senha
            </div>
          </div>
)}
        back={<RecoveryPassword />}
      />
    )
}

export default Login
