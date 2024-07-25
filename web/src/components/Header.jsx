import React, { useEffect, useState } from 'react';
export default function Header() {

    const TypingEffect = ({ text, speed }) => {
        const [displayedText, setDisplayedText] = useState('');
        const [index, setIndex] = useState(0);

        useEffect(() => {
            if (index < text.length) {
                const timeout = setTimeout(() => {
                    setDisplayedText(displayedText + text[index]);
                    setIndex(index + 1);
                }, speed);
                return () => clearTimeout(timeout);
            }
        }, [index, text, speed, displayedText]);

        return <span>{displayedText}</span>;
    };

    return (
        <header className="w-full fixed top-0 bg-[#12D03C] z-10">
            <div className="flex justify-center items-center h-10">
                <p className="text-white text-center font-poppins font-medium max-[640px]:text-xs">
                    <TypingEffect text="Criamos harmonia entre tecnologia, pessoas e negócios" speed={100} />
                </p>
            </div>
        </header>
    )
}