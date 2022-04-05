import { generateFromString } from 'generate-avatar'

const Piece = (props: any) => {
    const src = props.src
    return (
        <>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: "12px",
                margin: "12px",
                borderRadius: "16px",
                backgroundColor: "#EF6E6E"
            }}
                onClick={() => window.location.href = src}>
                <img
                    src={`data:image/svg+xml;utf8,${generateFromString(props.name)}`}
                    alt={props.name}
                    width="40px"
                    height="40px"
                    style={{ borderRadius: '100px', marginRight: '16px' }}
                />
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