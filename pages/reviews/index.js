import NavBar from '../../components/NavBar'
import Link from 'next/link'

function listaDeFilmes() {
  return (
    <>
      <NavBar></NavBar>
      <div>
        <ul>
          <li>
            <Link href="./reviews/filme1"> filme 1</Link>
          </li>
          <li>
            <Link href="./reviews/filme2"> filme 2</Link>
          </li>
          <li>
            <Link href="./reviews/filme3"> filme 3</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default listaDeFilmes
