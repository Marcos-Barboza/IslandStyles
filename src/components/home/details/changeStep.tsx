import React, { useState, useEffect } from 'react'
import step1 from './step1'
import step2 from './step2'
import step3 from './step3'
import step4 from './step4'

const ChangeSteps = () => {
    const scrollG = document.querySelector('html') as HTMLHtmlElement
    const [position, setPosition] = useState(850)
    const steps = [
        {
            step: step1,
            posit: 850,
        },
        {
            step: step2,
            posit: 1000,
        },
        {
            step: step3,
            posit: 1200,
        },
        {
            step: step4,
            posit: 1400,
        },
    ]

    useEffect(() => {
        if (scrollG.style.overflow === 'auto') scrollG.style.overflow = 'hidden'
        setTimeout(() => {
            scrollG.style.overflow = 'auto'
        }, 1000)
    }, [position])

    const handleMoveWindowScroll = () => {
        const scroll = window.scrollY
        if (scroll > 850 && scroll < 900) {
            window.scrollTo({ top: 1000 })
            setPosition(1000)
            window.removeEventListener('scroll', handleMoveWindowScroll)
        }
        if (scroll < 1000 && scroll > 900) {
            window.scrollTo({ top: 850 })
            setPosition(850)
            window.removeEventListener('scroll', handleMoveWindowScroll)
        }
        if (scroll > 1000 && scroll < 1050) {
            window.scrollTo({ top: 1200 })
            setPosition(1200)
            window.removeEventListener('scroll', handleMoveWindowScroll)
        }
        if (scroll < 1200 && scroll > 1100) {
            window.scrollTo({ top: 1000 })
            setPosition(1000)
            window.removeEventListener('scroll', handleMoveWindowScroll)
        }
        if (scroll > 1200 && scroll < 1250) {
            window.scrollTo({ top: 1400 })
            setPosition(1400)
            window.removeEventListener('scroll', handleMoveWindowScroll)
        }
        if (scroll < 1400 && scroll > 1350) {
            window.scrollTo({ top: 1200 })
            setPosition(1200)
            window.removeEventListener('scroll', handleMoveWindowScroll)
        }
    }

    const handleWindowScroll = () => {
        const pos = window.scrollY
        if (pos === 850 || pos === 1000 || pos === 1200 || pos === 1400) {
            window.addEventListener('scroll', handleMoveWindowScroll)
        }
    }

    window.addEventListener('scroll', handleWindowScroll)

    return (
        <div style={{ position: 'sticky' }} className="detailsContainer">
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
                    <div>
                        {steps.map(
                            v =>
                                position === v.posit && (
                                    <div key={v.posit}>
                                        {React.createElement(v.step)}
                                    </div>
                                )
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangeSteps
