export default function Ajuda() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="container grid grid-cols-2 gap-8 p-8">
                <div className="flex flex-col justify-center">
                    <h1 className="text-start font-bold text-4xl mb-4 w-96">Precisa de ajuda? Nossa equipe pode auxiliar você</h1>
                    <p className="text-start mb-4 w-3/5">Estamos prontos para ajudar você a resolver qualquer dúvida ou problema. Entre em contato conosco para
                        aproveitar ao máximo sua plataforma de e-commerce.</p>
                    <div className="text-start py-4">
                        <p className="flex flex-row items-center mb-6">
                            <img src="src/assets/img/icon.svg" alt="icon verde" className="h-6 mx-2" />
                            Assistência especializada para resolver problemas técnicos
                        </p>
                        <p className="flex flex-row items-center mb-6">
                            <img src="src/assets/img/icon.svg" alt="icon verde" className="h-6 mx-2" />
                            Explicações detalhadas sobre como utilizar cada recurso
                        </p>
                        <p className="flex flex-row items-center mb-6">
                            <img src="src/assets/img/icon.svg" alt="icon verde" className="h-6 mx-2" />
                            Dicas e estratégias para otimizar sua loja on-line
                        </p>
                        <button className="rounded-full border border-black p-4 px-12 transition duration-300 ease-in-out hover:bg-black hover:text-white mt-12">
                            Entrar em contato
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <img src="src/assets/img/ilustracao2.svg" alt="ilustração" className="h-96" />
                </div>
            </div>
        </div>
    )
}
