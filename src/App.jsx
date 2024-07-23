import Titulo from "./components/Titulo"
import ItemLista from "./components/ItemLista"
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'

import './App.css'
import { useEffect, useState } from "react"
import NovoFilme from "./components/NovoFilme"
import { Toaster } from "sonner"

function App() {
  const [filmes, setFilmes] = useState([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("filmes")) {
      const filmes2 = JSON.parse(localStorage.getItem("filmes"))
      setFilmes(filmes2)
    }
  }, [])

  const listaFilmes = filmes.map(filme => (
    <ItemLista key={filme.titulo} filme={filme} 
       filmes={filmes} setFilmes={setFilmes} />
  ))

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      <Titulo />
      <div className="container">
        <div className="lista-botao">
          <h1>Lista dos Filmes Cadastrados</h1>
          <button className="bt-novo" onClick={onOpenModal}>
            Novo Filme
          </button>
        </div>
        <Modal open={open} onClose={onCloseModal} center>
          <NovoFilme filmes={filmes} setFilmes={setFilmes} />
        </Modal>
        <div className="grid-container">
          {listaFilmes}
        </div>
      </div>
      <Toaster richColors position="top-right" />
    </>
  )
}

export default App
