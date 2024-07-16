import './Timeline.css'

function Timeline() {
    return (
        <main classname="main">
            <h1>Timeline</h1>
            <div className="first">
                <p>This is one of our first pictures together from when we sat next to each other in APUSH</p>
                <p>August 2021</p>
                <img src={`${process.env.PUBLIC_URL}/images/IMG_2059.JPG`} width="300" height="300" alt="Hello" />
            </div>
            <div className="second">
                <p>This is when we went to prom together Junior year. Wish I made a move on you this night</p>
                <p>May 7th, 2022</p>
                <img src={`${process.env.PUBLIC_URL}/images/IMG_2060.JPG`} width="300" height="300" alt="Hello" />
            </div>
            <div className="third">
                <p>This is the first family party I went to after we started talking. This was also my favorite picture of your for awhile</p>
                <p>July 15th, 2023</p>
                <img src={`${process.env.PUBLIC_URL}/images/IMG_2061.JPG`} width="300" height="300" alt="Hello" />
            </div>
            <div className="fourth">
                <p>This is the day after we officialy started dating. We were hanging out at my house. Spending time together until I left.</p>
                <p>July 18th, 2023</p>
                <img src={`${process.env.PUBLIC_URL}/images/IMG_2062.JPG`} width="300" height="300" alt="Hello" />
            </div>
            <div className="fifth">
                <p>This was my last day in vegas. We spent it together and with my friends on top of Exploration Peak. Was a sad night.</p>
                <p>July 26th, 2023</p>
                <img src={`${process.env.PUBLIC_URL}/images/IMG_2063.JPG`} width="300" height="300" alt="Hello" />
            </div>
            <div className="sixth">
                <p>This was when you visited me in San Fransisco. We had a great time together exploring the city.</p>
                <p>September 8th, 2023</p>
                <img src={`${process.env.PUBLIC_URL}/images/FullSizeRender.JPG`} width="300" height="300" alt="Hello" />
            </div>
            <div className="seventh">
                <p>This was when I visited you for halloween and we attended Mikayla's Party. We had the best costumes.</p>
                <p>October 28th, 2023</p>
                <img src={`${process.env.PUBLIC_URL}/images/IMG_2066.JPG`} width="300" height="300" alt="Hello" />
            </div>
            <div className="eigth">
                <p>This was us at Thanksgiving where you attended one of my family parties for the first time.</p>
                <p>November 23rd, 2023</p>
                <img src={`${process.env.PUBLIC_URL}/images/IMG_9812.jpg`} alt="imag"></img>
            </div>
            <div className="ninth">
                <p>This is when we went to that Christmas Village with some of your family. So many good pics from this night.</p>
                <p>December 16th, 2023</p>
                <img src={`${process.env.PUBLIC_URL}/images/IMG_1725.jpeg`} alt="imag"></img>
            </div>
            <div className="tenth">
                <p>This is when we went to LA for your bday trip. I had one of the best chicken parms ever here.</p>
                <p>January 7th, 2024</p>
                <img src={`${process.env.PUBLIC_URL}/images/DSCN2674.JPG`} alt="imag"></img>
            </div>
            <div className="eleven">
                <p>This is where we went snowboarding for the first time ever together on your bday. Can't wait to go a million times more.</p>
                <p>January 12th, 2024</p>
                <img src={`${process.env.PUBLIC_URL}/images/IMG_0003.jpg`} alt="imag"></img>
            </div>
            <div className="twelve">
                <p>This is the second time you visited me in San Fransisco. We went to the museum and Ghiradelli's Square</p>
                <p>Febuary 8th, 2024</p>
                <img src={`${process.env.PUBLIC_URL}/images/IMG_4627.jpg`} alt="imag"></img>
            </div>
            <div className="thirteen">
                <p>This is when we went snowboarding again with a lot of your fam when I visited for spring break.</p>
                <p>March 9th, 2024</p>
                <img src={`${process.env.PUBLIC_URL}/images/01HRJSKN2FG6ADAQ5AQZY0PAD4-low-res-branded-.jpg`} alt="imag"></img>
            </div>
            <div className="fourteen">
                <p>This is when we went on my bday trip to san diego. It was so much fun.</p>
                <p>June 19th, 2024</p>
                <img src={`${process.env.PUBLIC_URL}/images/FullSizeRender 11.jpeg`} alt="imag"></img>
            </div>
        </main>
    )
}

export default Timeline