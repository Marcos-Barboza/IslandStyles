import React from 'react'
import 'src/styles/main.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

interface Props {
    activeTransition: boolean
}

const Flip: React.SFC<Props> = props => {
    const { activeTransition } = props
    return (
      <div className="cardContainer">
        <TransitionGroup>
          <CSSTransition timeout={1000} classNames="flipper">
            {props.children}
          </CSSTransition>
          <CSSTransition timeout={1000} classNames="flipper">
            {props.children}
          </CSSTransition>
        </TransitionGroup>
      </div>
    )
}

export default Flip
