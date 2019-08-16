import '../../styles/home/home.scss'
import React from 'react'
import MenuBar from './menuBar/menuBar'
import PresentationBar from './presentationBar/presentationBar'
import Intro from './intro/intro'
import Details from './details/changeStep'

const index: React.FunctionComponent = () => {
    return (
        <div style={{ height: '5000px' }}>
            <PresentationBar />
            <MenuBar />
            <Intro />
            <Details />
        </div>
    )
}

export default index
