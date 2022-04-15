import Avatar from "boring-avatars";
import { Popover, Link, useToasts } from "@geist-ui/core"

const Piece = (props: any) => {
    const prefix = 'https://galactus.ncuos.com/?url='
    const src = props.src
    const srcModified = ` ${src}`.replace(`${prefix}`, '')

    const { setToast } = useToasts()

    var str = srcModified
    var reg = RegExp(/vercel/);
    reg.test(str) ? console.log('true') : console.log('false')

    const alert = () => setToast({ text: '谢谢你🙏🙏🙏感谢有你👉👉👉世界更美丽🗺🗺🗺', delay: 3000 })

    const content = () => (
        <div>
            <Popover.Item>
                <div
                    style={{ width: '44px', fontSize: '14px', textAlign: 'center' }}
                    onClick={() => { alert() }}>
                    👍
                </div>
            </Popover.Item>
            <Popover.Item line />
            <Popover.Item>
                <div
                    style={{ width: '44px', fontSize: '14px', margin: 0, alignItems: 'center' }}
                    onClick={() => {
                        window.location.href = "https://docs.qq.com/form/page/DS1ZVcGRRSFZES0dj"
                    }}>
                    < div style={{ textAlign: 'center' }}>
                        反馈
                    </div>
                </div>
            </Popover.Item >
        </div >
    )
    // console.log(srcModified)
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: "space-between",
                // paddingLeft: "16px",
                padding: "3px",
                marginTop: "12px",
                marginBottom: "12px",
                borderRadius: "20px",
                backgroundColor: "#EF6E6E"
            }}
            >
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <div
                        style={{
                            borderRadius: '100px',
                            paddingLeft: '12px',
                            paddingRight: '16px',
                            marginTop: '6px'
                        }}
                    >
                        <Avatar
                            size={40}
                            name={(props.name)}
                            variant="beam"
                            colors={["#ADABFF", "#FFD234", "#F2F26F", "#FFF7BD", "#8DECC5"]}
                        />
                    </div>
                    <div onClick={() => window.location.href = src}>
                        <div style={{
                            color: "white",
                            fontSize: "15px"
                        }}>
                            {props.name}
                        </div>
                        <div style={{
                            color: "white",
                            fontSize: "12px",
                            width: "180px",
                            wordWrap: "break-word"
                        }}>
                            {reg.test(srcModified) == true ? "入选近期热门飙升榜" : srcModified}
                        </div>

                    </div>
                </div>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "16px"
                }}>
                    <Popover
                        content={content}
                        style={{ fontSize: "20px", color: "#000000", opacity: "0.5" }}>
                        ‧‧‧
                    </Popover>
                </div>
            </div>
        </>
    )
}

export default Piece