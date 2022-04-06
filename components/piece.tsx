import Avatar from "boring-avatars";

const Piece = (props: any) => {
    const src = props.src
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
                    style={{ borderRadius: '100px', marginRight: '16px' }}
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
                        fontSize: "15px"
                    }}>
                        {props.name}
                    </div>
                    <div style={{
                        color: "white",
                        fontSize: "12px"
                    }}>
                        {props.src}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Piece