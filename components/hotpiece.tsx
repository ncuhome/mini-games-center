import Avatar from "boring-avatars";
import Image from "next/image"
import hot from '../public/hot.svg'

const HotPiece = (props: any) => {
    const prefix = 'https://galactus.ncuos.com/?url='
    const src = props.src
    const srcModified = ` ${src}`.replace(`${prefix}`, '')

    const hotevent = props.hotevent

    var reg = RegExp(/vercel/);

    const renderHot = () => {

        return (
            <div style={{
                alignItems: "center",
                display: "flex",
                marginLeft: "4px"
            }}>
                <Image src={hot} alt="hot" height='20px' width='20px' />
            </div>)
    }
    return (
        <>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: "12px",
                marginTop: "12px",
                marginBottom: "12px",
                borderRadius: "16px",
                backgroundColor: "#EF6E6E"
            }}
                onClick={() => window.location.href = src}>
                <div
                    style={{ borderRadius: '100px', marginRight: '16px', marginTop: '6px' }}
                >
                    <Avatar
                        size={40}
                        name={(props.name)}
                        variant="beam"
                        colors={["#ADABFF", "#FFD234", "#F2F26F", "#FFF7BD", "#8DECC5"]}
                    />
                </div>

                <div>
                    <div style={{
                        color: "white",
                        fontSize: "15px",
                        display: "flex",
                    }}>
                        {props.name}
                        {renderHot()}
                    </div>
                    <div style={{
                        color: "white",
                        fontSize: "12px"
                    }}>
                        {reg.test(srcModified) == true ? "近期热门飙升榜" : srcModified}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HotPiece