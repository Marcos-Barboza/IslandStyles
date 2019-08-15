import React, { useState } from 'react'

const Details: React.FunctionComponent = () => {
    const [trocaPosition, setTrocaPosition] = useState(0)
    const imagens = [
        {
            before: 'modelingBefore',
            after: 'modelingAfter',
        },
        {
            before: 'designBefore',
            after: 'designAfter',
        },
        {
            before: 'collaborationBefore',
            after: 'collaborationAfter',
        },
    ]

    // const trocaPositionScrollY = () => {
    //     return window.addEventListener('scroll', () => {
    //         const scroll = window.scrollY
    //         if (scroll > 300 && scroll < 970) {
    //             setTrocaPosition(1)
    //           }
    //         if (scroll === 905 || scroll > 500) {
    //             setTimeout(() => {
    //                 setTrocaPosition(2)
    //             }, 1900)
    //         }
    //     })
    // }

    // trocaPositionScrollY()
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
                    {imagens.map(v => (
                        <div
                            key={v.after}
                            className={trocaPosition ? v.after : v.before}
                        />
                    ))}
                    <div className="computer">
                        <div
                            style={{ opacity: trocaPosition === 2 ? 1 : 0.2 }}
                            className="motorcycle"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
