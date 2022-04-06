import { Button } from "@geist-ui/core"
import Image from "next/image"
import addicon from '../public/addicon.svg'

const Header = () => {
    return (
        <div>
            <div
                style={{
                    color: "white",
                    fontSize: "42px",
                    fontWeight: "800",
                    lineHeight: "56px",
                    marginTop: "40px",
                }}>小游戏<br />中心</div>
            {/* <p style={{ fontSize: "13px", color: "#919190" }}>
                Which means you don't have to store any generated images in your database anymore. It generates those images on the fly wherever you want based on the id, email and so on.</p> */}
            <div style={{ marginTop: "24px" }}>
                <Image src={addicon} alt="Addicon" width="44px" height="44px" onClick={() => window.location.href = "https://www.wenjuan.com/s/UZBZJvEOdvM/#%E3%80%8A%E5%B0%8F%E6%B8%B8%E6%88%8F%E6%8E%A8%E8%8D%90%E3%80%8B"} />
            </div>
        </div>
    )
}
export default Header
