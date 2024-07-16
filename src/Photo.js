import './Photo.css'

function Photo() {

    const images = require.context("../public/images")
    const imageList = images.keys().map(image => images(image));

    return (
        <main>
            <h1>Photo Gallery</h1>
            <h2>Here we keep a collection of all of our pictures. We can add some or delete them if we want.</h2>
            <div className="gallery">
                {imageList.map((image, index) => (
                    <img key={index} src={`${process.env.PUBLIC_URL}${image}`} alt="two people"/>
                ))};
            </div>
        </main>
    )
}

export default Photo