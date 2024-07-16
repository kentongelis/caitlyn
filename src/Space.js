import './Space.css'

function Space(props) {
    const { name, address, image} = props
    return (
        <article className="Space">
            <img src={`${process.env.PUBLIC_URL}/rimages/${image}`} width="300" height="300" alt="Hello" />
            <h1 className="title">
                {name}
            </h1>
            <figcaption classname='info'>
                <div classname="address">{address}</div>
            </figcaption>
        </article>
    )
}

export default Space