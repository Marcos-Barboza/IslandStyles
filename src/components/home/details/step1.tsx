import React, { useState, useEffect } from 'react'

const Step1: React.FunctionComponent = () => {
    const [trocaPosition, setTrocaPosition] = useState(false)
    const [visible, setVisible] = useState(false)
    const [begin, setBegin] = useState(false)

    interface Imagem {
        key: number
        before: string
        after: string
    }

    const imagens: Imagem[] = [
        {
            key: 1,
            before: 'modelingBefore',
            after: 'modelingAfter',
        },
        {
            key: 2,
            before: 'designBefore',
            after: 'designAfter',
        },
        {
            key: 3,
            before: 'collaborationBefore',
            after: 'collaborationAfter',
        },
    ]

    useEffect(() => {
        setTimeout(() => {
            setVisible(trocaPosition)
        }, 1000)
    }, [trocaPosition])

    const handleMoveWindowScroll = () => {
        const scroll = window.scrollY
        if (scroll > 0 && scroll < 50) {
            setTrocaPosition(true)
            window.removeEventListener('scroll', handleMoveWindowScroll)
        }
        if (scroll < 850 && scroll > 800) {
            setTrocaPosition(false)
            window.removeEventListener('scroll', handleMoveWindowScroll)
        }
    }

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

    window.addEventListener('scroll', handleWindowScroll)

    const handleChangeImages = (v: Imagem) => {
        return trocaPosition ? v.after : v.before
    }

    return (
        <div>
            {imagens.map(v => (
                <div key={v.key} className={handleChangeImages(v)} />
            ))}
            <div className="computer">
                <div
                    style={{ opacity: visible ? 1 : 0.2 }}
                    className="motorcycle"
                />
            </div>
        </div>
    )
}

export default Step1
