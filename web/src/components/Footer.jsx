import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <div>
            <div className="bg-[#E7FAEA] flex flex-col justify-center items-center p-20">
                <img src="src/assets/img/logos/logo_preta.svg" alt="logo lugenius" href="lugenius.com" />
                <h1 className="font-bold text-5xl w-1/2 text-center mt-5 mb-8">Eaí, vamos começar
                    a vender on-line?</h1>
                <p className="w-1/2 text-center">Você já conhece todas as vantagens da nossa plataforma de e-commerce. Agora, só falta dar o primeiro passo para transformar sua ideia em um negócio de sucesso. Crie sua loja online de forma rápida e eficiente e comece a vender hoje mesmo.</p>

                <div className="flex flex-row space-x-4 mt-10">
                <a href="https://lugenius.com/produto/ecommerce-standard/" className="rounded-full bg-[#12D03C] p-4 px-12 transition duration-300 ease-in-out hover:bg-[#10B832]">Começar já</a>
                <a href="https://loja.lugenius.com/" className="rounded-full border border-black p-4 px-12 transition duration-300 ease-in-out hover:bg-black hover:text-white">Ver demo</a>
                </div>
            </div>
            <div className="flex flex-row bg-[#12D03C] p-6 justify-around items-center space-x-6">
                <a href="https://lugenius.com">
                    <img src="src/assets/img/logos/logo_branca.svg" alt="logo branca" className="h-14" />
                </a>

                <div className="flex flex-row space-x-8 text-white">
                    <a href="https://wa.me/+5593991497528" className="flex items-center space-x-2">
                        <FaWhatsapp className="text-white" size={24} />
                        <span>WhatsApp</span>
                    </a>
                    <span>|</span>
                    <a href="https://instagram.com/lugenius_" className="flex items-center space-x-2">
                        <FaInstagram className="text-white" size={24} />
                        <span>Instagram</span>
                    </a>
                    <span>|</span>
                    <a href="mailto:contato@lugenius.com" className="flex items-center space-x-2">
                        <FaEnvelope className="text-white" size={24} />
                        <span>Email</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
