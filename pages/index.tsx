import Data from './api/data'
import Header from '../components/header'
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
    <div style={{ backgroundColor: '#0F0F10', height: "100vh" }}>
      <div style={{
        marginLeft: "26px",
        marginRight: "26px"
      }}>
        <div>2333</div>
        <Header />
        {element}
      </div>
    </div>
  )
}

export default MainPage
