import React, { useState, useEffect, useRef } from 'react';
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';
import logoPreta from '../assets/img/logos/logo_preta.svg';
import logoBranca from '../assets/img/logos/logo_branca.svg';

export default function Footer() {

    const TypingEffect = ({ text, speed }) => {
        const [displayedText, setDisplayedText] = useState('');
        const [index, setIndex] = useState(0);
        const [isFooterVisible, setIsFooterVisible] = useState(false);
        const footerRef = useRef();
    
        useEffect(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setIsFooterVisible(true);
                            observer.disconnect();
                        }
                    });
                },
                { threshold: 0.1 }
            );
    
            if (footerRef.current) {
                observer.observe(footerRef.current);
            }
    
            return () => observer.disconnect();
        }, []);
    
        useEffect(() => {
            if (isFooterVisible && index < text.length) {
                const timeout = setTimeout(() => {
                    setDisplayedText((prev) => prev + text[index]);
                    setIndex(index + 1);
                }, speed);
                return () => clearTimeout(timeout);
            }
        }, [index, text, speed, isFooterVisible]);
    
        return (
            <div>
                <span>{displayedText}</span>
                <div ref={footerRef}></div>
            </div>
        );
    };

    return (
        <div>
            <div className="bg-[#E7FAEA] flex flex-col justify-center items-center p-20 max-sm:p-8 max-sm:py-12">
                <img src={logoPreta} alt="logo lugenius" href="lugenius.com" className='max-sm:h-12' />
                <h1 className="font-bold text-5xl w-2/5 text-center mt-5 mb-8 max-sm:text-3xl max-sm:w-full h-20 max-md:h-24 max-md:w-3/4">
                    <TypingEffect text="Eaí, vamos começar a vender on-line?" speed={100} />
                </h1>
                <p className="w-1/2 text-center max-sm:w-full max-sm:text-sm max-md:w-full">Você já conhece todas as vantagens da nossa plataforma de e-commerce. Agora, só falta dar o primeiro passo para transformar sua ideia em um negócio de sucesso. Crie sua loja online de forma rápida e eficiente e comece a vender hoje mesmo.</p>

                <div className="flex flex-row space-x-4 mt-10 max-sm:flex-col max-sm:items-center max-sm:space-x-0 max-sm:space-y-4">
                    <a href="https://lugenius.com/produto/ecommerce-standard/" className="rounded-full bg-[#12D03C] p-4 px-12 transition duration-300 ease-in-out hover:bg-[#10B832] max-[640px]:text-sm max-[640px]:p-2 max-[640px]:px-16">Começar já</a>
                    <a href="https://loja.lugenius.com/" className="rounded-full border border-black p-4 px-12 transition duration-300 ease-in-out hover:bg-black hover:text-white max-[640px]:text-sm max-[640px]:p-2 max-[640px]:px-16">Ver demo</a>
                </div>
            </div>
            <div className="flex flex-row bg-[#12D03C] p-6 justify-around items-center space-x-6 max-sm:flex-col max-sm:space-x-0">
                <a href="https://lugenius.com">
                    <img src={logoBranca} alt="logo branca" className="h-14 max-sm:mb-8" />
                </a>

                <div className="flex flex-row space-x-8 text-white max-sm:text-xs max-sm:justify-center max-sm:items-center max-sm:flex-wrap max-sm:space-x-2">
                    <a href="https://wa.me/+5593991497528" className="flex items-center space-x-2">
                        <FaWhatsapp className="text-white max-sm:h-6" size={24} />
                        <span>WhatsApp</span>
                    </a>
                    <span className="max-sm:inline">|</span>
                    <a href="https://instagram.com/lugenius_" className="flex items-center space-x-2">
                        <FaInstagram className="text-white max-sm:h-6" size={24} />
                        <span>Instagram</span>
                    </a>
                    <span className="max-sm:inline">|</span>
                    <a href="mailto:contato@lugenius.com" className="flex items-center space-x-2">
                        <FaEnvelope className="text-white max-sm:h-6" size={24} />
                        <span>Email</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
