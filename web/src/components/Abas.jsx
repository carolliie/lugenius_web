import React, { useState } from 'react';
import Funcionalidades from './Abas/Funcionalidades';
import FaQ from './Abas/FAQ';


export default function Abas() {
    const [activeTab, setActiveTab] = useState('funcionalidade');

    return (
        <div className="flex flex-col items-center justify-center text-center">
            <ul className="text-sm font-medium text-center text-black rounded-lg shadow sm:flex">
                <li className="w-56">
                    <button
                        className={`inline-block w-full p-4 text-black ${activeTab === 'funcionalidade' ? 'bg-[#80EEB5] transition duration-150 ease-in-out' : 'bg-white'} border-r border-gray-200 rounded-s-lg max-[640px]:rounded-e-lg max-[640px]:rounded-b-none hover:bg-[#80EEB5] transition duration-150 ease-in-out`}
                        onClick={() => setActiveTab('funcionalidade')}
                        aria-current={activeTab === 'funcionalidade' ? 'page' : undefined}
                    >
                        Funcionalidade
                    </button>
                </li>
                <li className="w-56">
                    <button
                        className={`inline-block w-full p-4 text-black ${activeTab === 'avaliacoes' ? 'bg-[#80EEB5] transition duration-150 ease-in-out' : 'bg-white'} border-r border-gray-200 hover:bg-[#80EEB5] transition duration-150 ease-in-out`}
                        onClick={() => setActiveTab('avaliacoes')}
                        aria-current={activeTab === 'avaliacoes' ? 'page' : undefined}
                    >
                        Avaliações
                    </button>
                </li>
                <li className="w-56">
                    <button
                        className={`inline-block w-full p-4 text-black ${activeTab === 'faq' ? 'bg-[#80EEB5]' : 'bg-white'} border-gray-200 rounded-e-lg max-[640px]:rounded-e-none max-[640px]:rounded-b-lg hover:bg-[#80EEB5] transition duration-150 ease-in-out`}
                        onClick={() => setActiveTab('faq')}
                        aria-current={activeTab === 'faq' ? 'page' : undefined}
                    >
                        FAQ
                    </button>
                </li>
            </ul>
            <div id="flex flex-row default-styled-tab-content">
                <div className={` ${activeTab === 'funcionalidade' ? 'block' : 'hidden'}`} id="styled-funcionalidade" role="tabpanel" aria-labelledby="funcionalidade-tab">
                    <Funcionalidades/>
                </div>
                <div className={`p-4 ${activeTab === 'avaliacoes' ? 'block' : 'hidden'}`} id="styled-avaliacoes" role="tabpanel" aria-labelledby="avaliacoes-tab">
                    <p className="text-sm text-gray-500">Este é o conteúdo da aba <strong className="font-medium text-gray-800">Avaliações</strong>.</p>
                </div>
                <div className={`p-4 ${activeTab === 'faq' ? 'block' : 'hidden'}`} id="styled-faq" role="tabpanel" aria-labelledby="faq-tab">
                    <FaQ/>
                </div>
            </div>
        </div>
    );
}
