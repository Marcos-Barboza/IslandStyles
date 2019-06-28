import React, { useState } from 'react'
import Flip from 'src/components/ui/flip'

const Login: React.FunctionComponent = () => {
    const [activeTransition, setTransition] = useState(false)
    return (
      <Flip
        activeTransition={activeTransition}
        largura="375px"
        altura="400px"
        front={(
          <div className="login">
            <span onClick={() => setTransition(!activeTransition)}>
                        recuperar senha
            </span>
          </div>
)}
        back={(
          <div className="login">
            <span onClick={() => setTransition(!activeTransition)}>
                        voltar
            </span>
          </div>
)}
      />
    )
}

export default Login
