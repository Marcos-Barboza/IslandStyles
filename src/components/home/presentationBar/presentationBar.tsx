import React from 'react'

const PresentationBar: React.FunctionComponent = () => {
    return (
      <div className="presentationBar">
        <div className="presentationItens">
          <div className="logoAutoDesk" />
          <div className="cartIcon" />
          <div className="globoContainer">
            <div className="search">
              <div className="searchIcon" />
              <input placeholder="SEARCH" />
            </div>
          </div>
          <div className="globoContainer">
            <div className="globoFont">SIGN IN</div>
          </div>
          <div className="globoContainer">
            <div className="globoIcon" />
            <div className="globoFont">UNITED STATES</div>
          </div>
          <div className="menuContainer">
            <div className="menuIcon" />
            <div className="menuFont">MENU</div>
          </div>
        </div>
      </div>
    )
}

export default PresentationBar
