import React, { useState, useEffect } from 'react'
import Fusion from 'src/assets/fusion.png'

const Intro: React.FunctionComponent = () => {
    const [trocaPosition, setTrocaPosition] = useState(0)
    interface TrocaStyle {
        i: number
        title: string
        before: string
        after: string
        item: string
    }
    const trocaStyle: TrocaStyle[] = [
        {
            i: 1,
            title: 'DESIGN',
            before: 'imgContainerDesign',
            after: 'imgContainerDesignAfter',
            item: 'design',
        },
        {
            i: 2,
            title: 'SIMULATION',
            before: 'imgContainerSimulation',
            after: 'imgContainerSimulationAfter',
            item: 'simulation',
        },
        {
            i: 3,
            title: '3D MODELING',
            before: 'imgContainerModeling',
            after: 'imgContainerModelingAfter',
            item: 'modeling',
        },
        {
            i: 4,
            title: 'RAPID PROTOTYPING',
            before: 'imgContainerRapid',
            after: 'imgContainerRapidAfter',
            item: 'rapid',
        },
        {
            i: 5,
            title: 'COLLABORATION',
            before: 'imgContainerCollaboration',
            after: 'imgContainerCollaborationAfter',
            item: 'collaboration',
        },
        {
            i: 6,
            title: 'GENERATIVE',
            before: 'imgContainerGenerative',
            after: 'imgContainerGenerativeAfter',
            item: 'generative',
        },
        {
            i: 7,
            title: 'MANUFACTURING',
            before: 'imgContainerManufacturing',
            after: 'imgContainerManufacturingAfter',
            item: 'manufacturing',
        },
        {
            i: 8,
            title: 'DOCUMENTATION',
            before: 'imgContainerDocumentation',
            after: 'imgContainerDocumentationAfter',
            item: 'documentation',
        },
    ]
    useEffect(() => {
        if (trocaPosition === 1) {
            const intervalo = setInterval(() => {
                window.scrollTo({
                    top: 100 + window.scrollY,
                    behavior: 'smooth',
                })
            }, 100)
            setTimeout(() => {
                clearInterval(intervalo)
            }, 2000)
        }
    }, [trocaPosition])

    const trocaPositionScrollY = (window: Window) => {
        return window.addEventListener('scroll', () => {
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
            {trocaStyle.map((v) => (
              <div
                key={v.i}
                className={trocaPosition ? v.after : v.before}
              >
                <div className={v.item} />
                <div className="imgTitle">{v.title}</div>
              </div>
                    ))}
          </div>
        </div>
      </div>
    )
}

export default Intro
