import ilustracao2 from '../../../src/assets/img/ilustracao2.svg';
import iconImg from '../../../src/assets/img/icon.svg';

export default function Ajuda() {
    return (
        <div className="container flex items-center justify-center min-h-screen px-40 py-30 max-sm:px-20 max-sm:py-6 max-md:py-20 max-md:px-2">
            <div className="grid grid-cols-2 gap-8 p-8 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:py-2">
                <div className="flex flex-col justify-start max-sm:items-center max-sm:text-center max-sm:w-3/4">
                    <h1 className="text-start font-bold text-4xl mb-4 w-96 max-sm:text-3xl max-sm:w-full">Precisa de ajuda? Nossa equipe pode auxiliar você</h1>
                    <p className="text-start mb-4 w-3/5 max-sm:text-sm max-sm:w-full max-md:w-3/4">Estamos prontos para ajudar você a resolver qualquer dúvida ou problema. Entre em contato conosco para
                        aproveitar ao máximo sua plataforma de e-commerce.</p>
                    <div className="text-start py-4 max-sm:text-center">
                        <div className="flex flex-row items-center mb-6 max-sm:justify-center">
                            <img src={iconImg} alt="icon verde" className="h-6" />
                            <p className="mx-2 max-sm:text-xs max-sm:w-full max-sm:text-start">
                                Assistência especializada para resolver problemas técnicos
                            </p>
                        </div>

                        <div className="flex flex-row items-center mb-6 max-sm:justify-center">
                            <img src={iconImg} alt="icon verde" className="h-6" />
                            <p className="mx-2 max-sm:text-xs max-sm:w-full max-sm:text-start">
                                Explicações detalhadas sobre como utilizar cada recurso
                            </p>
                        </div>

                        <div className="flex flex-row items-center mb-16 max-sm:justify-center">
                            <img src={iconImg} alt="icon verde" className="h-6" />
                            <p className="mx-2 max-sm:text-xs max-sm:w-full max-sm:text-start">
                                Dicas e estratégias para otimizar sua loja on-line
                            </p>
                        </div>

                        <a href="https://wa.me/+5593991497528" className="rounded-full border border-black p-4 px-12 transition duration-300 ease-in-out hover:bg-black hover:text-white max-sm:text-sm max-sm:px-16 max-sm:p-2">
                            Entrar em contato
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <img src={ilustracao2} alt="ilustração" className="h-96 max-sm:h-60" />
                </div>
            </div>
        </div>
    )
}
