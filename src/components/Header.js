import React from 'react'
import '../styles/header.css'
import { observer, inject } from 'mobx-react'

@inject('userStore')
@observer
class Header extends React.Component{
  render(){
    const { userStore } = this.props
    const { usermail } = userStore
    return (<header>
      <h1>BEST VIDEO</h1>
      <div className="bottom">
        <h3>{usermail}</h3>
        <p> 
          좋아하는 유튜브 영상을 모아두고 싶었다.
          이 페이지는 내가 좋아하는 유튜브 영상을 수집한 페이지다.
          내 취향을 있는 그대로 노출한다는 게 약간 마음에 걸리긴 하지만,
          사실 이 페이지에는 나 외에 다른 사람이 들어 올 일이 거의 없다.
        </p>
        <nav>
          <ul>
            <li>유튜브</li>
            <li>인스타그램</li>
            <li>페이스북</li>
            <li>이메일</li>
          </ul>
        </nav>
      </div>
    </header>)
  }
}

export default Header