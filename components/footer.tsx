import Router from "next/router"
import { Button, Divider } from "@geist-ui/core"

const Footer = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: " 24px",
            paddingBottom: "64px",
            textAlign: "center",
            color: "#919190",
            fontSize: "13px"
        }}>
            <div style={{ margin: "8px" }}>
                <Button
                    scale={0.45}
                    style={{
                        backgroundColor: " rgba(256, 256, 256, 0.12)",
                        color: "#cccccc",
                        border: "none",
                    }}
                    onClick={() => window.location.href = "https://www.wenjuan.com/s/UZBZJvEOdvM/#%E3%80%8A%E5%B0%8F%E6%B8%B8%E6%88%8F%E6%8E%A8%E8%8D%90%E3%80%8B"}>
                    向我们推荐小游戏
                </Button>
            </div>

            <div style={{ margin: "8px" }}>
                <Button
                    scale={0.45}
                    style={{
                        backgroundColor: " rgba(256, 256, 256, 0.12)",
                        color: "#cccccc",
                        border: "none",
                    }}
                    onClick={() => Router.push("../statement")}>
                    版权与许可说明
                </Button>
            </div>



            {/* <div
                style={{ marginTop: "32px", marginBottom: "100px" }}
                // onClick={() => window.location.href = "https://www.yuque.com/docs/share/58cbb478-0278-4cac-8b8e-bd4ea7e290b1?header=false#%20%E3%80%8A%E7%89%88%E6%9D%83%E5%A3%B0%E6%98%8E%E3%80%8B"}
                onClick={() => Router.push("../statement")}
            >
                <u>版权与许可说明</u>
            </div> */}
            <div style={{
                backgroundColor: "rgba(256, 256, 256, 0.24)", height: "1px",
                marginTop: "24px",
                marginBottom: "12px"
            }}>

            </div>
            <div
                onClick={() => window.location.href = "https://team.ncuos.com/"}
            >
                @ 2022 NCUHOME <br />
            </div>
        </div >
    )
}

export default Footer