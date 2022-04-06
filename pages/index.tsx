import Data from './api/data'
import Header from '../components/header'
import Footer from '../components/footer'
import Piece from '../components/piece'

const MainPage = () => {
  const element = Data.map((data: any) => {
    console.log(data)
    return (
      <Piece
        key={data.id}
        name={data.name}
        image={data.image}
        src={data.src}
      />)
  }
  )

  return (
    <div className="container">
      <div style={{ backgroundColor: '#0F0F10', height: "100%" }}>
        <div style={{
          marginLeft: "26px",
          marginRight: "26px",
        }}>
          <div>2333</div>
          <Header />
          {element}
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default MainPage
