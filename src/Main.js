import { useState } from "react"; 
import { useNavigate } from 'react-router-dom'
import "./Main.css"

function Main() {
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const checkPassword = () => {
        if(password === 'merp') {
            return (
                <button type="submit" onClick={(e) => {
                    navigate('/home')
                }}>Let's Go!</button>
            )
        } else { 
            return (
            <p>Hint = The first place we ever stargazed</p>
            )
        }
    }

    return (
            <body>
                <img src={`${process.env.PUBLIC_URL}/images/FullSizeRender.jpg`} alt="imag"></img>
                <div class="Home">
                    <h1>Welcome to a very special site...</h1>
                    <h2>For a very special girl...</h2>
                    <h3>For a very special day...</h3>
                    <br></br>
                    <form>
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <br></br>
                        { checkPassword() }
                    </form>
                </div>
                <img src={`${process.env.PUBLIC_URL}/images/IMG_9812.jpg`} alt="imag"></img>
            </body>
    )
}

export default Main