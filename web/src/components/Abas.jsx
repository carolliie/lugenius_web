import React, { useState } from 'react';
import Funcionalidades from './Abas/Funcionalidades';
import FaQ from './Abas/FAQ';
import Tutoriais from './Abas/Tutoriais';

export default function Abas() {
    const [activeTab, setActiveTab] = useState('funcionalidade');

    return (
        <div className="flex flex-col items-center justify-center text-center">
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">Selecione sua aba</label>
                <select
                    id="tabs"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    value={activeTab}
                    onChange={(e) => setActiveTab(e.target.value)}
                >
                    <option value="funcionalidade">Funcionalidade</option>
                    <option value="avaliacoes">Avaliações</option>
                    <option value="faq">FAQ</option>
                </select>
            </div>
            <ul className="hidden text-sm font-medium text-center text-black rounded-lg shadow sm:flex">
                <li className="w-56">
                    <button
                        className={`inline-block w-full p-4 text-black ${activeTab === 'funcionalidade' ? 'bg-[#80EEB5]' : 'bg-white'} border-r border-gray-200 rounded-s-lg hover:bg-[#80EEB5]`}
                        onClick={() => setActiveTab('funcionalidade')}
                        aria-current={activeTab === 'funcionalidade' ? 'page' : undefined}
                    >
                        Funcionalidade
                    </button>
                </li>
                <li className="w-56">
                    <button
                        className={`inline-block w-full p-4 text-black ${activeTab === 'avaliacoes' ? 'bg-[#80EEB5]' : 'bg-white'} border-r border-gray-200 hover:bg-[#80EEB5]`}
                        onClick={() => setActiveTab('avaliacoes')}
                        aria-current={activeTab === 'avaliacoes' ? 'page' : undefined}
                    >
                        Avaliações
                    </button>
                </li>
                <li className="w-56">
                    <button
                        className={`inline-block w-full p-4 text-black ${activeTab === 'faq' ? 'bg-[#80EEB5]' : 'bg-white'} border-gray-200 rounded-e-lg hover:bg-[#80EEB5]`}
                        onClick={() => setActiveTab('faq')}
                        aria-current={activeTab === 'faq' ? 'page' : undefined}
                    >
                        FAQ
                    </button>
                </li>
            </ul>
            <div id="flex flex-row default-styled-tab-content">
                <div className={`p-4 ${activeTab === 'funcionalidade' ? 'block' : 'hidden'}`} id="styled-funcionalidade" role="tabpanel" aria-labelledby="funcionalidade-tab">
                    <Funcionalidades/>
                    <Tutoriais/>
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
