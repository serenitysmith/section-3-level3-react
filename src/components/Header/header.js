
import troll from './Troll Face.png'


export default function Header() {
    return (
        <header className='header'>
            <span><img src={troll} className="troll" alt="meh"></img>
            <h2 className='meme'> Meme Generator</h2> <h4 className='react'>React Course - Project</h4></span>
        </header>
    )
}