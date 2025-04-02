import { Link } from 'react-router-dom';


function Home() {
    


    return (
        <>
            <h1 className='text-4xl font-bold bg-cyan-400 text-white rounded-b-3xl shadow-2xl shadow-cyan-900 p-5 text-center mb-3 border-x-2 border-b-2 border-cyan-600/50 rounded-t-sm'>React Practice</h1>
            <p className='text-2xl bg-cyan-500 text-white m-10 p-5 text-start border-0 rounded-2xl'>El proyecto consta de facilidades para entender el funcionamiento de los estados por medio de ejemplos comentados en el codigo()</p>

            <hr className='border-2 border-cyan-900 w-10/12 mx-auto my-5' />

            <div className='mx-auto my-10 space-x-5'>
                <Link to={"/atom"} className='border-emerald-400 py-2 px-4 rounded-2xl shadow-lg shadow-emerald-600 bg-emerald-300 cursor-pointer'>
                    Atom
                </Link>
                <Link to={"/contadores"} className='border-amber-400 py-2 px-4 rounded-2xl shadow-lg shadow-amber-600 bg-amber-300 cursor-pointer' >
                    Contadores
                </Link>
            </div>
        </>
    )
}

export default Home;
