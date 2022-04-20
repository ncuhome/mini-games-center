// import Avatar from "boring-avatars";
import Image from "next/image"
import hot from '../public/hot.svg'

const HotPiece = (props: any) => {
    const prefix = 'https://galactus.ncuos.com/?url='
    const src = props.src
    const srcModified = ` ${src}`.replace(`${prefix}`, '')

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

    // onClick={() => window.location.href = src}
    // { props.name }
    // { renderHot() }
    // { reg.test(srcModified) == true ? "入选近期热门飙升榜" : srcModified }
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'center',
                marginTop: "16px",
                marginBottom: "24px",
                paddingBottom: "8px",
                borderRadius: "16px",
                height: "440px",
                backgroundImage: "-webkit-linear-gradient(120.14deg, #6AAA64 -4.18%, #E5E5E5 103.11%)",
            }}
                onClick={() => window.location.href = src}
            >
                <div style={{
                    display: 'flex',
                    // alignItems: 'center',
                    borderRadius: "16px 16px 0 0",
                    height: "90%",
                    width: "100%",
                    backgroundSize: "contain",
                    backgroundImage: `url(${props.image})`,
                }}
                >
                </div>
                <div
                    style={{
                        display: 'flex',
                        borderRadius: '100px',
                        marginTop: "4px",
                        color: "#ffffff",
                        fontSize: "16px",
                        fontWeight: "bold",
                        justifyContent: "center",
                    }}
                >
                    {renderHot()}
                    {props.name}
                </div>
                <div
                    style={{
                        display: 'flex',
                        borderRadius: '100px',
                        marginTop: "4px",
                        color: "#ffffff",
                        fontSize: "14px",
                        fontWeight: "400",
                        justifyContent: "center",
                    }}
                >
                    {props.detail}
                </div>
            </div>
        </>
    )
}

export default HotPiece