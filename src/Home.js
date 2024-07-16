import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
    const navigate = useNavigate()

    return (
        <main>
            <h1>Welcome to our website Caitlyn!</h1>
            <h2>Click any of the boxes below</h2>
            <div className="buttons">
                <button type="submit" onClick={(e) => {
                        navigate('/timeline')
                    }}>Timeline</button>
                <button type="submit" onClick={(e) => {
                        navigate('/restaraunts')
                    }}>Restauraunts</button>
                <button tyoe="submit" onClick={(e) => {
                        navigate('/photos')
                    }}>Photo Gallery</button>
            </div>
        </main>
    );
}

export default Home