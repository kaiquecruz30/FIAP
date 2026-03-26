import Link from 'next/link'
import '../app/conteudo/CSS/tailwindcss/index.css'

const Nav = () => {
    return (
        <div>

            <header className='flex top-0 bg-black border-b-red-500 border-b-8'>
                <div className='container flex justify-items-center p-3'>
                    <h1><Link className='font-Big-Shoulders flex-2 text-3xl px-2 text-white hover:text-red-500' href='/'>Home</Link></h1>
                    <h1 className='flex-4 p-5'></h1>
                    <h1><Link className='font-Big-Shoulders-Stencil flex-1 text-2xl px-2 text-gray-500 hover:text-gray-300' href='/conteudo/Numeros'>Números</Link></h1>
                    <h1><Link className='font-Big-Shoulders-Stencil flex-1 text-2xl px-2 text-gray-500 hover:text-gray-300' href='/conteudo/Mais_informacoes'>Mais informações</Link></h1>
                    <h1><Link className='font-Big-Shoulders-Stencil flex-1 text-2xl px-2 text-gray-500 hover:text-gray-300' href='/conteudo/Experimentacao'>Experimentação</Link></h1>
                    <h1><Link className='font-Big-Shoulders-Stencil flex-1 text-2xl px-2 text-gray-500 hover:text-gray-300' href='/conteudo/Formulario'>Formulário</Link></h1>
                    <h1><Link className='font-Big-Shoulders-Stencil flex-1 text-2xl px-2 text-gray-500 hover:text-gray-300' href='/conteudo/exemploAPI'>API</Link></h1>
                </div>
            </header>

            <script src='/cor.js'></script>
        </div>
    )
}

export default Nav
