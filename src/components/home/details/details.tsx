import React, { useState, useEffect } from 'react'

const Details: React.FunctionComponent = () => {
    const [trocaPosition, setTrocaPosition] = useState(0)
    const imagens = [
        {
            before: 'modelingB',
            after: 'modelingF',
        },
        {
            before: 'designB',
            after: 'designF',
        },
        {
            before: 'collaborationB',
            after: 'collaborationF',
        },
    ]

    const trocaPositionScrollY = (window: Window) => {
        return window.addEventListener('scroll', () => {
            const scroll = window.scrollY
            if (scroll > 700 && scroll < 998) {
                setTrocaPosition(1)
            }
            if (scroll === 1041) {
                setTimeout(() => {
                    setTrocaPosition(2)
                }, 1400)
            }
        })
    }

    trocaPositionScrollY(window)
    return (
      <div className="detailsContainer">
        <div className="details">
          <div className="detailsLeft">
            <div className="titleDetails">
                        Simplify your entire workflow with one unified platform.
            </div>
            <div className="subTitleDetails">
                        Scroll down or select a category to explore the product
                        development process in Fusion 360.
            </div>
          </div>
          <div className="detailsRight">
            {imagens.map((v, i) => (
              <div
                key={i}
                className={trocaPosition ? v.after : v.before}
              />
                    ))}
            <div className="computador">
              <div
                style={{ opacity: trocaPosition === 2 ? 1 : 0.2 }}
                className="moto"
              />
            </div>
          </div>
        </div>
      </div>
    )
}

export default Details
