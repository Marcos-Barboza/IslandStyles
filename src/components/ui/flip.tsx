import React from 'react'
import 'src/styles/main.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

interface Props {
    activeTransition: boolean
    front: JSX.Element[] | JSX.Element
    back: JSX.Element[] | JSX.Element
    largura: string
    altura: string
}

const Flip: React.FunctionComponent<Props> = props => {
    const { activeTransition, front, back, largura, altura } = props
    return (
      <CSSTransition
        classNames="fade"
        in={!activeTransition}
        onExiting={node => node.translate.valueOf}
        timeout={100000}
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
