import React from 'react'
import '../styles/main.css'
import Footer from './Footer'

class Main extends React.Component{
  render(){
    return (<main>
      <section className="movie">
        <div className="wrapper">
          <div className="movie__header">
            <h4>소향(Sohyang)의 ′I Will Always Love You′♬</h4>
            <h5>비긴어게인</h5>
          </div>
          <div className="movie__video">
            <iframe src="https://www.youtube.com/embed/DO845EqU3eE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </section>
      <section className="movie">
        <div className="wrapper">
          <div className="movie__header">
            <h4>소향(So Hyang) - Lean on me</h4>
            <h5>불후의 명곡</h5>
          </div>
          <div className="movie__video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/GvsgCllcNPE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </section>
      <section className="movie">
        <div className="wrapper">
          <div className="movie__header">
            <h4>박정현(Lena Park) - Someone like you</h4>
            <h5>비긴어게인</h5>
          </div>
          <div className="movie__video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/byumNPxw4ag" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </main>)
  }
}

export default Main