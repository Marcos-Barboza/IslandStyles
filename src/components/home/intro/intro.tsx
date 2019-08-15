import React, { useState } from 'react'
import Fusion from 'src/assets/fusion.png'

const Intro: React.FunctionComponent = () => {
    const [trocaPosition, setTrocaPosition] = useState(false)
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

    const windowElement = () => {
        if (window.scrollY > 0 && window.scrollY < 50) {
            setTrocaPosition(true)
            window.scrollTo({ top: 850 })
            window.removeEventListener('scroll', windowElement, false)
        } else if (window.scrollY < 850) {
            setTrocaPosition(false)
            window.scrollTo({ top: -850 })
            window.removeEventListener('scroll', windowElement, false)
        }
    }

    const moveWindowElemet = () => {
        if (window.scrollY === 0 || window.scrollY === 850)
            window.addEventListener('scroll', windowElement, false)
    }

    window.addEventListener('scroll', moveWindowElemet)

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
                        <div className="subscribeButton">SUBSCRIBE</div>
                        <div className="downloadButton">
                            DOWNLOAD FREE TRIAL
                        </div>
                    </div>
                    <div style={{ marginTop: '10px' }} className="subTitle">
                        Talk to a sales representative: 1-833-843-3437
                    </div>
                    <div className="subTitle">Have Autodesk contact you</div>
                </div>
                <div>
                    {trocaStyle.map(v => (
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
