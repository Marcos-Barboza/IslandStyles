import 'src/styles/home/presentationBar/presentationBar.scss'
import 'src/styles/home/menuBar/menuBar.scss'
import 'src/styles/home/intro/intro.scss'
import 'src/styles/home/details/details.scss'
import React from 'react'
import MenuBar from './menuBar/menuBar'
import PresentationBar from './presentationBar/presentationBar'
import Intro from './intro/intro'
import Details from './details/details'

const index: React.FunctionComponent = () => {
    return (
      <div>
        <PresentationBar />
        <MenuBar />
        <Intro />
        <Details />
      </div>
    )
}

export default index
