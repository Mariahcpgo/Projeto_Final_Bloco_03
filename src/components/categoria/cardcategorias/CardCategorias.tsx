import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'


interface CardCategoriassProps{
    categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriassProps) {
    return (
        <div className='shadow-2xl shadow-black border flex flex-col rounded-3xl overflow-hidden justify-between font-poppins text-center m-4 mb-40'>
            <header className='py-2 px-6 bg-white text-black text-lg font-semibold border border-silve'>
                Categoria
            </header>
            <p className='p-10 text-2xl bg-white h-full font-semibold'>{categoria.nome}</p>
            <div className="flex flex-col p-2 px-2 bg-white">
                <div className='p-1'>
                <Link to={`/editarcategoria/${categoria.id}`}
                    className='w-full text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-indigo-950 flex items-center justify-center py-2 rounded-full'>
                    <button>Editar</button>
                </Link>
                </div>
                <div className='p-1'>
                <Link to={`/deletarcategoria/${categoria.id}`}
                    className='text-white bg-gradient-to-r from-red-400 to-red-600 hover:from-indigo-950 w-full flex items-center justify-center py-2 rounded-full'>
                    <button>Deletar</button>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default CardCategorias