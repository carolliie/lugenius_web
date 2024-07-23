export default function Banner() {
    return (
        <div className="flex flex-col justify-center items-center p-12 py-20 max-[640px]:p-5 max-[640px]:py-14">
            <img src="src/assets/img/logos/logo_preta.svg" alt="Logo preta" className="h-16 w-auto max-[640px]:h-10" />

            <div className="flex justify-center items-center">
                <h1 className="font-bold text-center text-5xl mt-2 w-2/3 max-[640px]:text-3xl max-[640px]:w-full">Sua loja on-line pronta para vender</h1>
            </div>

            <div className="flex flex-row space-x-6 mt-6 max-sm:hidden">
                <p className="flex flex-row items-center max-[640px]:flex-col max-[640px]:items-center max-[640px]:text-sm max-[640px]:text-center max-[640px]:justify-center max-[640px]:mt-2">
                    <img src="src/assets/img/icon.svg" alt="icon verde" className="h-8 mx-2 max-[640px]:h-6" />
                    Gestão completa
                </p>
                <p className="flex flex-row items-center max-[640px]:flex-col max-[640px]:items-center max-[640px]:text-sm max-[640px]:text-center max-[640px]:justify-center max-[640px]:mt-2">
                    <img src="src/assets/img/icon.svg" alt="icon verde" className="h-8 mx-2 max-[640px]:h-6" />
                    Fácil de usar
                </p>
                <p className="flex flex-row items-center max-[640px]:flex-col max-[640px]:items-center max-[640px]:text-sm max-[640px]:text-center max-[640px]:justify-center max-[640px]:mt-2">
                    <img src="src/assets/img/icon.svg" alt="icon verde" className="h-8 mx-2 max-[640px]:h-6" />
                    Pagamentos integrados
                </p>
            </div>

            <div className="container flex flex-col items-center text-center w-1/2 p-12 max-[640px]:text-sm max-[640px]:w-full max-[640px]:p-4">
                <p>Transforme sua ideia em uma <strong>loja virtual de sucesso</strong> com nossa solução completa de e-commerce. Nossa plataforma intuitiva permite que você crie e gerencie seu próprio site de forma rápida e fácil, mesmo sem <strong>experiência técnica</strong>.</p>
                <p>Desfrute de todas as ferramentas necessárias para impulsionar seu negócio: suporte a cartões de crédito, PIX e boletos, cálculo automático de envio, gestão eficiente de estoque, relatórios detalhados de vendas e um aplicativo móvel para controle total na palma da mão. Tudo isso para que você possa focar no que realmente importa: <strong>crescer e prosperar sua loja</strong>. Contrate nossa solução e descubra como é vantajoso simplificar a gestão do seu e-commerce!</p>
            </div>

            <div className="flex flex-row space-x-6 mt-6 mb-10 lg:hidden">
                <p className="flex flex-row items-center max-[640px]:flex-col max-[640px]:items-center max-[640px]:text-sm max-[640px]:text-center max-[640px]:justify-center max-[640px]:mt-2">
                    <img src="src/assets/img/icon.svg" alt="icon verde" className="h-8 mx-2 max-[640px]:h-6 max-sm:mb-2" />
                    Gestão completa
                </p>
                <p className="flex flex-row items-center max-[640px]:flex-col max-[640px]:items-center max-[640px]:text-sm max-[640px]:text-center max-[640px]:justify-center max-[640px]:mt-2">
                    <img src="src/assets/img/icon.svg" alt="icon verde" className="h-8 mx-2 max-[640px]:h-6 max-sm:mb-2" />
                    Fácil de usar
                </p>
                <p className="flex flex-row items-center max-[640px]:flex-col max-[640px]:items-center max-[640px]:text-sm max-[640px]:text-center max-[640px]:justify-center max-[640px]:mt-2">
                    <img src="src/assets/img/icon.svg" alt="icon verde" className="h-8 mx-2 max-[640px]:h-6 max-sm:mb-2" />
                    Pagamentos integrados
                </p>
            </div>

            <div className="flex flex-row space-x-4 max-[640px]:flex-col max-[640px]:items-center max-[640px]:space-x-0 max-[640px]:space-y-4">
                <a href="https://lugenius.com/produto/ecommerce-standard/" className="rounded-full bg-[#12D03C] p-4 px-12 transition duration-300 ease-in-out hover:bg-[#10B832] max-[640px]:text-sm max-[640px]:p-2 max-[640px]:px-16">Começar já</a>
                <a href="https://loja.lugenius.com/" className="rounded-full border border-black p-4 px-12 transition duration-300 ease-in-out hover:bg-black hover:text-white max-[640px]:text-sm max-[640px]:p-2 max-[640px]:px-16">Ver demo</a>
            </div>

            <div className="flex flex-row items-center p-12 space-x-8 relative max-[640px]:right-4">
                <img src="src/assets/img/vendas.webp" alt="vendas" className='h-48 max-[640px]:h-28 max-[640px]:absolute max-[640px]:top-20 max-[640px]:right-0' />
                <img src="src/assets/img/panel.webp" alt="painel" className='h-96 max-[640px]:hidden' />
                <img src="src/assets/img/loja.webp" alt="loja" className='h-64 max-[640px]:h-96 mx-auto' />
            </div>

        </div>
    );
}
