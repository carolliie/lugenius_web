import { useSprings, useSpring, animated } from '@react-spring/web';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import vendasImg from '../assets/img/vendas.webp';
import panelImg from '../assets/img/panel.webp';
import panelImg2 from '../assets/img/segunda_imagem_home.webp';
import panelImg3 from '../assets/img/terceira_imagem_home.webp';
import panelImg4 from '../assets/img/quarta_imagem_home.webp';
import panelImg5 from '../assets/img/quinta_imagem_home.webp';
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
        { src: vendasImg, alt: 'vendas', className: 'lg:h-48 max-[640px]:h-28 max-[640px]:absolute max-[640px]:top-16 max-[640px]:right-0 max-sm:-mx-8 z-10 md:h-24' },
        { src: panelImg, alt: 'painel', className: 'lg:h-96 md:h-60' },
        { src: panelImg2, alt: 'painel2', className: 'lg:h-96 md:h-60' },
        { src: panelImg3, alt: 'painel3', className: 'lg:h-96 md:h-60' },
        { src: panelImg4, alt: 'painel4', className: 'lg:h-96 md:h-60' },
        { src: panelImg5, alt: 'painel5', className: 'lg:h-96 md:h-60' },
        { src: lojaImg, alt: 'loja', className: 'lg:h-64 max-[640px]:h-96 mx-auto md:h-52' }
    ];

    const springs = useSprings(
        2, // We only need springs for vendasImg and lojaImg
        [
            { src: vendasImg, alt: 'vendas', className: 'lg:h-48 max-[640px]:h-28 max-[640px]:absolute max-[640px]:top-16 max-[640px]:right-0 max-sm:-mx-8 z-10 md:h-24' },
            { src: lojaImg, alt: 'loja', className: 'lg:h-64 max-[640px]:h-96 mx-auto md:h-52' }
        ].map((image, i) => ({
            from: { transform: 'scale(1)', opacity: 0.8 },
            to: async (next) => {
                while (true) {
                    await next({ transform: 'scale(1.05)', opacity: 1 });
                    await next({ transform: 'scale(1)', opacity: 1 });
                    await new Promise(resolve => setTimeout(resolve, 1500));
                }
            },
            config: { duration: 1500 },
            delay: i * 1500
        }))
    );

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        dotsClass: "slick-dots custom-dots", // Adicionando uma classe customizada
    };

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
                        <a href="https://lugenius.com/produto/ecommerce-standard/" class="rounded-full bg-[#12D03C] p-4 px-12 transition-transform duration-300 ease-in-out transform hover:scale-105 max-[640px]:text-sm max-[640px]:p-2 max-[640px]:px-16">Começar já</a>

                        <a href="https://loja.lugenius.com/" className="rounded-full border border-black p-4 px-12 transition duration-300 ease-in-out hover:bg-black hover:text-white max-[640px]:text-sm max-[640px]:p-2 max-[640px]:px-16">Ver demo</a>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-center items-center mb-32'>
                <div className="flex flex-row items-center lg:p-12 lg:space-x-8 relative max-[640px]:-right-56 max-sm:-mt-32 max-sm:mb-10 md:space-x-4 md:p-12">
                    <animated.img src={vendasImg} alt="vendas" className="lg:h-48 max-[640px]:h-24 z-10 md:h-24" style={springs[0]} />
                </div>

                <div className="w-full lg:w-1/2 md:w-full max-[640px]:hidden my-8">
                    <Slider {...carouselSettings}>
                        {[panelImg, panelImg2, panelImg3, panelImg4, panelImg5].map((src, i) => (
                            <div key={i}>
                                <img src={src} alt={`painel${i + 1}`} className="w-full h-auto lg:h-96 md:h-60" />
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="flex flex-row items-center lg:p-12 lg:space-x-8 relative max-[640px]:right-12 max-sm:mt-20 max-sm:mb-10 md:space-x-4 md:p-12">
                    <animated.img src={lojaImg} alt="loja" className="lg:h-64 max-[640px]:h-96 mx-auto md:h-52" style={springs[1]} />
                </div>
            </div>

        </animated.div>
    );
}