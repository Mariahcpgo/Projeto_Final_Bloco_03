import { ChangeEvent, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { atualizar, cadastrar, listar } from "../../../services/Service";

function FormCategoria() {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await listar(`/categorias/${id}`, setCategoria)
    } catch (error: any) {
      alert('Categoria não encontrada!')
      retornar();
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria)

        alert('Categoria atualizado com sucesso')

      } catch (error: any) {
        alert('Erro ao atualizar o Categoria')
      }

    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria)

        alert('Categoria cadastrada com sucesso')

      } catch (error: any) {
        alert('Erro ao cadastrar a Categoria')
      }
    }

    setIsLoading(false)
    retornar();

  }

  function retornar() {
    navigate("/categorias")
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto pb-60">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
      </h1>

      <form className="w-1/2 flex flex-col gap-4"
        onSubmit={gerarNovaCategoria}
      >
        <div className="flex flex-col gap-2 ">
          <label htmlFor="categoria">Categoria</label>
          <input
            type="text"
            placeholder="Categoria"
            name='nome'
            className="border-2 border-slate-700 rounded p-2 utral-800"
            required
            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="w-full text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-indigo-950 flex items-center justify-center py-2 rounded-full"
          type="submit"
        >
          {isLoading ?
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            /> :
            <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
          }
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;