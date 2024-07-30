import { useSprings, useSpring, animated } from '@react-spring/web';
import vendasImg from '../assets/img/vendas.webp';
import panelImg from '../assets/img/panel.webp';
import lojaImg from '../assets/img/loja.webp';
import logoPretaImg from '../assets/img/logos/logo_preta.svg';
import iconImg from '../assets/img/icon.svg';

export default function Banner() {
    const [props, api] = useSpring(
        () => ({
            from: { transform: 'translateY(50px)', opacity: 0 },
            to: { transform: 'translateY(0)', opacity: 1 },
            config: { duration: 1000 },
        }),
        []
    );

    const images = [
        { src: vendasImg, alt: 'vendas', className: 'lg:h-48 max-[640px]:h-28 max-[640px]:absolute max-[640px]:top-20 max-[640px]:right-0 z-10 md:h-24' },
        { src: panelImg, alt: 'painel', className: 'lg:h-96 max-[640px]:hidden md:h-60' },
        { src: lojaImg, alt: 'loja', className: 'lg:h-64 max-[640px]:h-96 mx-auto md:h-52' }
    ];

    const springs = useSprings(
        images.length,
        images.map((_, i) => ({
            from: { transform: 'scale(1)', opacity: 0.8 },
            to: async (next) => {
                while (true) {
                    await next({ transform: 'scale(1.05)', opacity: 1 });
                    await next({ transform: 'scale(1)', opacity: 1 });
                    await new Promise(resolve => setTimeout(resolve, (images.length - 1) * 1500));
                }
            },
            config: { duration: 1500 },
            delay: i * 1500
        }))
    );

    return (
        <animated.div style={props}>
            <div className="flex flex-col justify-center items-center lg:p-12 lg:py-20 max-[640px]:p-5 max-[640px]:py-14 md:p-8 md:py-20">
                <div className='flex flex-col justify-center items-center'>
                    <img src={logoPretaImg} alt="Logo preta" className="h-12 w-auto max-[640px]:h-10 mx-auto" />
                    <div className="flex justify-center items-center">
                        <h1 className="font-bold text-center text-5xl mt-2 w-2/3 max-[640px]:text-3xl max-[640px]:w-full">Sua loja on-line pronta para vender</h1>
                    </div>
                    <div className="flex flex-row space-x-6 mt-6 max-sm:hidden">
                        <p className="flex flex-row items-center max-[640px]:flex-col max-[640px]:items-center max-[640px]:text-sm max-[640px]:text-center max-[640px]:justify-center max-[640px]:mt-2">
                            <img src={iconImg} alt="icon verde" className="h-8 mx-2 max-[640px]:h-6" />
                            Gestão completa
                        </p>
                        <p className="flex flex-row items-center max-[640px]:flex-col max-[640px]:items-center max-[640px]:text-sm max-[640px]:text-center max-[640px]:justify-center max-[640px]:mt-2">
                            <img src={iconImg} alt="icon verde" className="h-8 mx-2 max-[640px]:h-6" />
                            Fácil de usar
                        </p>
                        <p className="flex flex-row items-center max-[640px]:flex-col max-[640px]:items-center max-[640px]:text-sm max-[640px]:text-center max-[640px]:justify-center max-[640px]:mt-2">
                            <img src={iconImg} alt="icon verde" className="h-8 mx-2 max-[640px]:h-6" />
                            Pagamentos integrados
                        </p>
                    </div>
                    <div className="container flex flex-col items-center text-center lg:w-4/6 lg:p-12 max-[640px]:text-sm max-[640px]:w-full max-[640px]:p-4 md:w-full md:p-6">
                        <p>Transforme sua ideia em uma <strong>loja virtual de sucesso</strong> com nossa solução completa de e-commerce. Nossa plataforma intuitiva permite que você crie e gerencie seu próprio site de forma rápida e fácil, mesmo sem <strong>experiência técnica</strong>.</p>
                        <p className="mt-6">Desfrute de todas as ferramentas necessárias para impulsionar seu negócio: suporte a cartões de crédito, PIX e boletos, cálculo automático de envio, gestão eficiente de estoque, relatórios detalhados de vendas e um aplicativo móvel para controle total na palma da mão. Tudo isso para que você possa focar no que realmente importa: <strong>crescer e prosperar sua loja</strong>. Contrate nossa solução e descubra como é vantajoso simplificar a gestão do seu e-commerce!</p>
                    </div>
                    <div className="flex flex-row space-x-6 mt-6 mb-10 lg:hidden md:hidden">
                        <p className="flex flex-row items-center max-[640px]:flex-col max-[640px]:items-center max-[640px]:text-sm max-[640px]:text-center max-[640px]:justify-center max-[640px]:mt-2">
                            <img src={iconImg} alt="icon verde" className="h-8 mx-2 max-[640px]:h-6 max-sm:mb-2" />
                            Gestão completa
                        </p>
                        <p className="flex flex-row items-center max-[640px]:flex-col max-[640px]:items-center max-[640px]:text-sm max-[640px]:text-center max-[640px]:justify-center max-[640px]:mt-2">
                            <img src={iconImg} alt="icon verde" className="h-8 mx-2 max-[640px]:h-6 max-sm:mb-2" />
                            Fácil de usar
                        </p>
                        <p className="flex flex-row items-center max-[640px]:flex-col max-[640px]:items-center max-[640px]:text-sm max-[640px]:text-center max-[640px]:justify-center max-[640px]:mt-2">
                            <img src={iconImg} alt="icon verde" className="h-8 mx-2 max-[640px]:h-6 max-sm:mb-2" />
                            Pagamentos integrados
                        </p>
                    </div>
                    <div className="flex flex-row space-x-4 max-[640px]:flex-col max-[640px]:items-center max-[640px]:space-x-0 max-[640px]:space-y-4">
                        <a href="https://lugenius.com/produto/ecommerce-standard/" className="rounded-full bg-[#12D03C] p-4 px-12 transition duration-300 ease-in-out hover:bg-[#10B832] max-[640px]:text-sm max-[640px]:p-2 max-[640px]:px-16">Começar já</a>
                        <a href="https://loja.lugenius.com/" className="rounded-full border border-black p-4 px-12 transition duration-300 ease-in-out hover:bg-black hover:text-white max-[640px]:text-sm max-[640px]:p-2 max-[640px]:px-16">Ver demo</a>
                    </div>
                </div>
                <div className="flex flex-row items-center lg:p-12 lg:space-x-8 relative max-[640px]:right-4 md:space-x-4 md:p-12">
                    {springs.map((props, i) => (
                        <animated.img key={i} src={images[i].src} alt={images[i].alt} className={images[i].className} style={props} />
                    ))}
                </div>
            </div>
        </animated.div>
    );
}
