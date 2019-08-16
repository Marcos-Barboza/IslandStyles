import React, { useState, useEffect } from 'react'
import Fusion from 'src/assets/fusion.png'

const Intro: React.FunctionComponent = () => {
    const scrollG = document.querySelector('html') as HTMLHtmlElement
    const [trocaPosition, setTrocaPosition] = useState(false)
    const [begin, setBegin] = useState(false)

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

    /** Desabilita e habilita o scroll */
    useEffect(() => {
        if (scrollG.style.overflow === 'auto') scrollG.style.overflow = 'hidden'
        setTimeout(() => {
            scrollG.style.overflow = 'auto'
        }, 1000)
    }, [trocaPosition])

    /** Aplica os estilos e move o scroll */
    const handleMoveWindowScroll = () => {
        if (window.scrollY > 0 && window.scrollY < 50) {
            setTrocaPosition(true)
            window.scrollTo({ top: 850 })
            window.removeEventListener('scroll', handleMoveWindowScroll)
        } else if (window.scrollY < 850) {
            setTrocaPosition(false)
            window.scrollTo({ top: -850 })
            window.removeEventListener('scroll', handleMoveWindowScroll)
        }
    }

    /** Aciona handleMoveWindowScroll conforme as condições */
    const handleWindowScroll = () => {
        if (window.scrollY === 0 || window.scrollY === 850) {
            window.addEventListener('scroll', handleMoveWindowScroll)
        } else if (!begin) {
            setBegin(true)
            window.addEventListener('scroll', handleMoveWindowScroll)
            window.removeEventListener('scroll', handleWindowScroll)
        } else if (window.scrollY > 850) {
            setTrocaPosition(true)
        }
    }

    /** Evento responsável por ouvir constantemente o scroll */
    window.addEventListener('scroll', handleWindowScroll, false)

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
