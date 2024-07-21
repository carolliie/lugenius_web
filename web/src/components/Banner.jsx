import React from 'react';

export default function Banner() {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <img src="src/assets/img/logo_preta.svg" alt="Logo preta" className="h-16 w-auto" />
            
            <div className="flex justify-center items-center">
                <h1 className="font-bold text-center text-5xl mt-2 w-2/3">Sua loja on-line pronta para vender</h1>
            </div>

            <div className="flex flex-row space-x-6 mt-6">
                <p className="flex flex-row items-center">
                    <img src="src/assets/img/icon.svg" alt="icon verde" className="h-8 mx-2"/>
                    Gestão completa
                </p>
                <p className="flex flex-row items-center">
                    <img src="src/assets/img/icon.svg" alt="icon verde" className="h-8 mx-2"/>
                    Fácil de usar
                </p>
                <p className="flex flex-row items-center">
                    <img src="src/assets/img/icon.svg" alt="icon verde" className="h-8 mx-2"/>
                    Pagamentos integrados
                </p>
            </div>

            <div className="container flex flex-col items-center text-center w-1/2 p-12">
                <p>Transforme sua ideia em uma <strong>loja virtual de sucesso</strong> com nossa solução completa de e-commerce. Nossa plataforma intuitiva permite que você crie e gerencie seu próprio site de forma rápida e fácil, mesmo sem <strong>experiência técnica</strong>.</p>
                <p>Desfrute de todas as ferramentas necessárias para impulsionar seu negócio: suporte a cartões de crédito, PIX e boletos, cálculo automático de envio, gestão eficiente de estoque, relatórios detalhados de vendas e um aplicativo móvel para controle total na palma da mão. Tudo isso para que você possa focar no que realmente importa: <strong>crescer e prosperar sua loja</strong>. Contrate nossa solução e descubra como é vantajoso simplificar a gestão do seu e-commerce!</p>
            </div>

            <div className="flex flex-row space-x-4">
                <button className="rounded-full bg-[#12D03C] p-4 px-12 transition duration-300 ease-in-out hover:bg-[#10B832]">Começar já</button>
                <button className="rounded-full border border-black p-4 px-12 transition duration-300 ease-in-out hover:bg-black hover:text-white">Ver demo</button>
            </div>
        </div>
    );
}
