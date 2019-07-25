import React, { useState, useEffect, useMemo } from 'react'
import Fusion from 'src/assets/fusion.png'

const Intro: React.FunctionComponent = () => {
    const [trocaPosition, setTrocaPosition] = useState(0)

    useEffect(() => {
        if (trocaPosition === 1) {
            window.scrollTo({
                top: 800,
            })
        }
        if (trocaPosition === 2) {
            window.scrollTo({
                top: -1300,
            })
        }
    }, [trocaPosition])

    const trocaPositionScrollY = (window: Window) => {
        return window.addEventListener('scroll', event => {
            const scroll = window.scrollY
            if (scroll > 0 && scroll < 10) {
                setTrocaPosition(1)
            }
        })
    }

    trocaPositionScrollY(window)

    return (
      <div className="introContainer">
        <div className="intro">
          <div className="introLeft">
            <img
              style={{ marginBottom: '5px' }}
              width="587px"
              alt=""
              src={Fusion}
            />
            <div className="title">
                        Integrated CAD, CAM, and CAE software.
            </div>
            <p
              style={{ marginTop: '5px', paddingBottom: '5px' }}
              className="subTitle"
            >
                        Eliminate your disconnected product development process.
                        Unify design, engineering, and manufacturing into a
                        single platform.
            </p>
            <div style={{ display: 'flex' }}>
              <div className="button1">SUBSCRIBE</div>
              <div className="button2">DOWNLOAD FREE TRIAL</div>
            </div>
            <div style={{ marginTop: '10px' }} className="subTitle">
                        Talk to a sales representative: 1-833-843-3437
            </div>
            <div className="subTitle">Have Autodesk contact you</div>
          </div>
          <div className="introRight">
            <div className="imgContainerDesign">
              <div className="design" />
              <div className="imgTitle">DESIGN</div>
            </div>
            <div className="imgContainerSimulation">
              <div className="simulation" />
              <div className="imgTitle">SIMULATION</div>
            </div>
            <div className="imgContainerModeling">
              <div className="modeling" />
              <div className="imgTitle">3D MODELING</div>
            </div>
            <div className="imgContainerRapid">
              <div className="rapid" />
              <div className="imgTitle">RAPID PROTOTYPING</div>
            </div>
            <div className="imgContainerCollaboration">
              <div className="collaboration" />
              <div className="imgTitle">COLLABORATION</div>
            </div>
            <div className="imgContainerGenerative">
              <div className="generative" />
              <div className="imgTitle">GENERATIVE</div>
            </div>
            <div className="imgContainerManufacturing">
              <div className="manufacturing" />
              <div className="imgTitle">MANUFACTURING</div>
            </div>
            <div className="imgContainerDocumentation">
              <div className="documentation" />
              <div className="imgTitle">DOCUMENTATION</div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Intro
