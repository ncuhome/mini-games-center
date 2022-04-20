import Data from './api/data'
import Header from '../components/header'
import Footer from '../components/footer'
import Piece from '../components/piece'
import HotPiece from '../components/hotpiece'

var hash = require('object-hash');

const MainPage = () => {
  const prefix = 'https://galactus.ncuos.com/?url='

  const element = Data.map((data: any) => {
    console.log(data)
    if (data.hotevent == true) {
      return (
        <HotPiece
          key={hash(data.name)}
          name={data.name}
          image={data.image}
          src={`${prefix}${data.src}`}
          detail={data.detail}
        />)
    }
    else {
      return (
        <Piece
          key={hash(data.name)}
          name={data.name}
          image={data.image}
          src={`${prefix}${data.src}`}
        />
      )
    }
  }
  )

  return (
    <div className="container">
      <div style={{ backgroundColor: '#F2F6F6', height: "100%" }}>
        <div style={{
          marginLeft: "26px",
          marginRight: "26px",
        }}>
          <Header />
          {element}
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default MainPage
