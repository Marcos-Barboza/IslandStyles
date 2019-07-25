import React from 'react'

const RecoveryPassword: React.FunctionComponent = () => {
    return (
      <div className="login">
        <div>
          <input type="email" placeholder="Insira seu email" />
          <span className="spanBtn">Enviar Email</span>
        </div>
        <div
          role="presentation"
          onClick={() => setTransition(false)}
        >
                Voltar
        </div>
      </div>
    )
}

export default RecoveryPassword
