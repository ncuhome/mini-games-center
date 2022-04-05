const Piece = (props: any) => {

    return (
        <>
            <p>{props.name}</p>
            <img src={props.image} alt={props.name} />
            <p>{props.src}</p>
        </>
    )
}

export default Piece