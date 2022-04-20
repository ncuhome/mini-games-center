import { Card, Grid, Text } from "@geist-ui/core"

const Header = () => {
    return (
        <div>
            {/* <div style={{ paddingTop: "64px" }}>
                <Image src={centericon} alt="center_icon" width="80px" height="80px" />
            </div> */}
            {/* <div
                style={{
                    color: "white",
                    fontSize: "42px",
                    fontWeight: "800",
                    lineHeight: "56px",
                    marginTop: "0px",
                }}>小游戏<br />中心</div> */}
            <div style={{ fontSize: "13px", color: "#919190", paddingTop: "40px" }}>
                {/* <div style={{
                    backgroundColor: "#2E3132",
                    color: "white",
                    padding: "16px",
                    borderRadius: "20px",
                }}>
                    汇聚有趣好玩手游的小游戏分享社区，足不出户与全校玩家共同交流并体验各类小游戏。<br />
                    休闲、解压、益智....丰富类别等你体验，每一款推荐的游戏都由我们为你精选而出，只为拯救你的无聊与烦闷🎉🎉🎉<br />
                </div> */}

            </div>

            <div style={{
                marginBottom: "8px",
                fontSize: "36px",
                color: "#000000",
                fontWeight: "bold"
            }}>
                今日推荐🎉
                {/* <Image src={addicon} alt="add_icon" width="44px" height="44px" onClick={() => window.location.href = "https://www.wenjuan.com/s/UZBZJvEOdvM/#%E3%80%8A%E5%B0%8F%E6%B8%B8%E6%88%8F%E6%8E%A8%E8%8D%90%E3%80%8B"} /> */}
            </div>
        </div>
    )
}
export default Header
