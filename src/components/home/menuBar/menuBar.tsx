import React, { useState } from 'react'

const MenuBar: React.FunctionComponent = () => {
    const [scroll, setScroll] = useState(0)
    window.addEventListener('scroll', () => setScroll(window.scrollY))
    return (
        <div className="menuBar">
            Bem vindos ao minicurso, agora &quot;sem bugs&quot; ! estou rolando
            olha só: &nbsp;
            {scroll}
        </div>
    )
}

export default MenuBar
