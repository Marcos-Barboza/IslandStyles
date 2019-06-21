import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

interface Props {
    recovery: boolean
}

const RecoveryPassword: React.SFC<Props> = (props: Props) => {
    const { recovery } = props
    return (
      <TransitionGroup>
        {recovery && (
        <CSSTransition
          className="recoveryGroup"
          timeout={9000}
          classNames="recoveryPassword"
        >
          <div>
            <input type="email" placeholder="Insira seu email" />
            <span className="spanBtn">Enviar Email</span>
          </div>
        </CSSTransition>
            )}
      </TransitionGroup>
    )
}

export default RecoveryPassword
