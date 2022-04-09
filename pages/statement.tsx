import { useRouter } from "next/router"
import { Button } from "@geist-ui/core"

const Statement = () => {
    const router = useRouter()

    return (
        <div>
            <div style={{ padding: "24px", height: "100vh" }}>
                <div style={{ textAlign: "center", marginTop: "32px", marginBottom: "24px" }}>
                    <h2>版权声明</h2>
                </div>
                <div style={{ fontSize: "18px" }}>
                    南大家园小游戏中心（以下简称 小游戏中心）展示的所有资源均来自互联网及用户自发投稿，版权及商业利益归原作者或企业所有。
                    小游戏中心仅作为信息导航使用，不涉及任何商业目的。<br />如您对本站的内容及资源归属存有异议或认为可能侵害了您的权益，请发邮件至 pm@ncuhome.cn 。我们会在第一时间核实处理。
                </div>
                <div style={{ fontSize: "18px", color: "white", textAlign: "right" }}>NCUHOME</div>
                <div style={{ textAlign: "center", marginTop: "32px" }}>
                    <Button
                        auto scale={0.75}
                        onClick={() => router.back()}
                        style={{
                            backgroundColor: " rgba(0, 0, 0, 0.08)",
                            color: "#444444",
                            border: "none",
                        }}>
                        返回
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Statement