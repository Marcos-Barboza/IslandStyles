import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import 'src/styles/main.css'

interface Props {
    activeTransition: boolean
    largura: string
    altura: string
    front: JSX.Element[] | JSX.Element
    back: JSX.Element[] | JSX.Element
}

const Flip: React.FunctionComponent<Props> = props => {
    const { largura, altura, front, back, activeTransition } = props
    return (
      <CSSTransition
        in={activeTransition}
        addEndListener={node => console.log(node)}
        exit
        classNames="flip"
        timeout={3000}
      >
        <div
          style={{ minWidth: largura, minHeight: altura }}
          className="cardContainer"
        >
          <div className="flipper">
            <div
              style={{ minWidth: largura, minHeight: altura }}
              className="front"
            >
              {front}
            </div>
            <div
              style={{ minWidth: largura, minHeight: altura }}
              className="back"
            >
              {back}
            </div>
          </div>
        </div>
      </CSSTransition>
    )
}

export default Flip
