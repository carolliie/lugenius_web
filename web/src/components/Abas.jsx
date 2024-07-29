import React, { useEffect, useState } from 'react';
import Funcionalidades from './Abas/Funcionalidades';
import FaQ from './Abas/FAQ';
import Avaliacoes from './Abas/Avaliacoes';


export default function Abas() {
    const [activeTab, setActiveTab] = useState('funcionalidade');

    useEffect(() => {
        if(activeTab === 'avaliacoes'){
            setTimeout(() => {
                document.getElementById(`styled-faq`).classList.add('hidden');
                document.getElementById('styled-funcionalidade').classList.add('hidden');
                document.getElementById('styled-avaliacoes').classList.remove('hidden');
            }, 1000);

            setTimeout(() => {
                document.getElementById(`styled-avaliacoes`).style.opacity = 1;
            }, 1200);

            document.getElementById(`styled-faq`).style.opacity = 0;
            document.getElementById(`styled-funcionalidade`).style.opacity = 0;
        
        }if(activeTab === 'funcionalidade'){
            setTimeout(() => {
                document.getElementById(`styled-faq`).classList.add('hidden');
                document.getElementById('styled-avaliacoes').classList.add('hidden');
                document.getElementById('styled-funcionalidade').classList.remove('hidden');
            }, 1000);

            setTimeout(() => {
                document.getElementById(`styled-funcionalidade`).style.opacity = 1;
            }, 1200);
            
            document.getElementById(`styled-faq`).style.opacity = 0;
            document.getElementById(`styled-avaliacoes`).style.opacity = 0;
        }
        if(activeTab === 'faq'){
            setTimeout(() => {
                document.getElementById('styled-funcionalidade').classList.add('hidden');
                document.getElementById('styled-avaliacoes').classList.add('hidden');
                document.getElementById('styled-faq').classList.remove('hidden');
            }, 1000);

            setTimeout(() => {
                document.getElementById(`styled-faq`).style.opacity = 1;
            }, 1200);

            document.getElementById(`styled-avaliacoes`).style.opacity = 0;
            document.getElementById(`styled-funcionalidade`).style.opacity = 0;
        }
    }, [activeTab]);

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
                <div  id="styled-funcionalidade"className='transition-all duration-1000' role="tabpanel" aria-labelledby="funcionalidade-tab">
                    <Funcionalidades/>
                </div>
                <div  id="styled-avaliacoes" className='transition-all duration-1000' role="tabpanel" aria-labelledby="avaliacoes-tab">
                    <Avaliacoes/>
                </div>
                <div  id="styled-faq" className='transition-all duration-1000'  role="tabpanel" aria-labelledby="avaliacoes-tab">
                    <FaQ/>
                </div>
            </div>
        </div>
    );
}
