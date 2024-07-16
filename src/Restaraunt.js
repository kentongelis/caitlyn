import Space from './Space.js'
import './Restaraunt.css';
import { useState } from 'react'
import data from './res-data.js'

console.log(data)

function Restaraunt() {
  const [query, setQuery ] = useState('')
  const spaces = data
  .filter(obj => obj.name.toLowerCase().includes(query.toLowerCase()) || obj.address.toLowerCase().includes(query.toLowerCase()))
  .map(( { id, name, address, image } ) => {

    return (
      <Space
        id={id}
        name={name}
        address={address}
        image={image}
      />
    )
  })

  return (
    <main className='search'>
      <h1>Restaraunts</h1>
      <form>
        <input type="search"
            value={query}
            placeholder='search'
            onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <aside className="List">
      { spaces }
      </aside>
    </main>
  )
}

export default Restaraunt