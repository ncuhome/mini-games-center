import Router from "next/router"

const Footer = () => {
    return (
        <div style={{
            paddingTop: " 24px",
            paddingBottom: "64px",
            textAlign: "center",
            color: "#919190",
            fontSize: "13px"
        }}>
            <div
                onClick={() => window.location.href = "https://team.ncuos.com/"}
            >
                @ 2022 NCUHOME <br />
            </div>
            <div
                style={{ marginTop: "16px" }}
                // onClick={() => window.location.href = "https://www.yuque.com/docs/share/58cbb478-0278-4cac-8b8e-bd4ea7e290b1?header=false#%20%E3%80%8A%E7%89%88%E6%9D%83%E5%A3%B0%E6%98%8E%E3%80%8B"}
                onClick={() => Router.push("../statement")}
            >
                <u>版权与许可说明</u>
            </div>
        </div >
    )
}

export default Footer