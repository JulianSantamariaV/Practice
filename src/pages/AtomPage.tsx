import { useState } from "react";

import { Race } from "../components/Race";
import Atom from "../components/Atom";

function AtomPage() {
    const [countE, setCountE] = useState(0);
    const [countP, setCountP] = useState(0);
    const [countN, setCountN] = useState(0);
    const [name, setName] = useState("");

    return (
        <div>


            <div className="flex-col justify-center items-center h-screen bg-gray-100">
                <h2 className="text-2xl p-10">Este seria el funcionamiento normal, el usuario final no puede interactuar activamente con los datos, para modificarlo se debe hacer desde el codigo </h2>
                <div className="flex justify-center items-center m-10 ">
                    <Atom protons={6} neutrons={6} electrons={6} />
                </div>
            </div>
            <hr className="w-full border-gray-300" />
            <div className='flex-col justify-center items-center h-screen bg-gray-100 '>

                <h2 className="text-2xl p-10">Este seria el funcionamiento Reactivo, el usuario final puede interactuar activamente con los datos</h2>

                <div className="gap-4 flex justify-center items-center ">
                    <button className="border-amber-400 py-2 px-4 rounded-2xl shadow-amber-600 bg-red-300 cursor-pointer" onClick={() => setCountP((countP) => countP + 1)}>
                        +Protons: {countP}
                    </button>
                    <button className="border-amber-400 py-2 px-4 rounded-2xl shadow-amber-600 bg-red-300 cursor-pointer" onClick={() => setCountP((countP) => countP - 1)}>
                        -Protons: {countP}
                    </button>
                    <button className="border-amber-400 py-2 px-4 rounded-2xl shadow-amber-600 bg-zinc-300 cursor-pointer" onClick={() => setCountN((countN) => countN + 1)}>
                        Neutrons: {countN}
                    </button>
                    <button className="border-amber-400 py-2 px-4 rounded-2xl shadow-amber-600 bg-zinc-300 cursor-pointer" onClick={() => setCountN((countN) => countN - 1)}>
                        -Neutrons: {countN}
                    </button>
                    <button className="border-amber-400 py-2 px-4 rounded-2xl shadow-amber-600 bg-blue-300 cursor-pointer" onClick={() => setCountE((countE) => countE + 1)}>
                        Electrons: {countE}
                    </button>
                    <button className="border-amber-400 py-2 px-4 rounded-2xl shadow-amber-600 bg-blue-300 cursor-pointer" onClick={() => setCountE((countE) => countE - 1)}>
                        -Electrons: {countE}
                    </button>
                </div>

                <div className="flex justify-center items-center h-screen bg-gray-100">
                    <Race protons={countP} neutrons={countN} electrons={countE} />
                </div>

            </div>

            <hr className="w-full border-gray-300" />

            <div className='flex flex-col items-center justify-center h-screen bg-gray-100 pt-10'>

                <h1 className='text-center text-2xl font-bold text-amber-600 mb-4'>{name}</h1>

                <input
                    className='border-2 border-gray-400 rounded-lg p-2 text-zinc-600 mx-8'
                    placeholder='nombre'
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
        </div>
    );
};

export default AtomPage;
