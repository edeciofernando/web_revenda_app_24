import { useForm } from "react-hook-form"
import './NovoFilme.css'
import { toast } from "sonner"

function NovoFilme({filmes, setFilmes}) {
  const { register, handleSubmit, reset } = useForm()

  function cadastraFilme(dados) {
    const filmes2 = [...filmes]
    filmes2.push({
      titulo: dados.titulo,
      genero: dados.genero,
      duracao: dados.duracao,
      foto: dados.foto,
      sinopse: dados.sinopse,
      nota: 0,
      comentario: ""
    })
    setFilmes(filmes2)
    reset()
    localStorage.setItem("filmes", JSON.stringify(filmes2))
    toast.success("Ok! Filme Cadastrado com Sucesso!")
  }

  return (
    <div>
      <h2>Inclusão de Filmes</h2>
      <form onSubmit={handleSubmit(cadastraFilme)}>
        <p>
          <label htmlFor="titulo">Título do Filme</label>
          <input type="text" id="titulo" required size={40}
            {...register("titulo")} />
        </p>
        <p>
          <label htmlFor="genero">Gênero</label>
          <input type="text" id="genero" required size={30}
            {...register("genero")} />
        </p>
        <p>
          <label htmlFor="duracao">Duração (min)</label>
          <input type="number" id="duracao" required size={20}
            {...register("duracao")} />
        </p>
        <p>
          <label htmlFor="foto">URL da Foto</label>
          <input type="text" id="foto" required size={60}
            {...register("foto")} />
        </p>
        <p>
          <label htmlFor="sinopse" className="sinopse">
            Sinopse
          </label>
          <textarea id="sinopse" required cols={60} rows={3}
            {...register("sinopse")}></textarea>
        </p>
        <input type="submit" value="Cadastrar" />
      </form>
    </div>
  )
}

export default NovoFilme