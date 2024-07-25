import Slider from 'react-infinite-logo-slider';

const SliderComponent = () => {
    const logos = [
        { src: "src/assets/img/logos/zullu.svg", alt: "zullu", href: "https://zullubarbearia.com.br/" },
        { src: "src/assets/img/logos/K.BEAUTY.svg", alt: "K.BEAUTY", href: "https://kbeautybrasil.com/" },
        { src: "src/assets/img/logos/OBOTICARIO.svg", alt: "OBOTICARIO", href: "#" },
        { src: "src/assets/img/logos/BAROVI.svg", alt: "BAROVI", href: "https://barovi.com.br" },
        { src: "src/assets/img/logos/silas_sousa.svg", alt: "silas_sousa", href: "https://silassousabarbearia.com.br/" },
        { src: "src/assets/img/logos/MASA.svg", alt: "MASA", href: "https://www.masadistribuidora.com.br/" },
        { src: "src/assets/img/logos/henrique_tasca.svg", alt: "henrique_tasca", href: "https://henriquetasca.com.br/" },
        { src: "src/assets/img/logos/LEO&SANTOS.svg", alt: "LEO&SANTOS", href: "https://leoesantos.com" },
        { src: "src/assets/img/logos/MM_MASTER.svg", alt: "MM_MASTER", href: "https://mmmasterbuild.com/" },
        { src: "src/assets/img/logos/TAPAJÓS.svg", alt: "TAPAJÓS", href: "https://tapajosskateshop.com.br/" },
        { src: "src/assets/img/logos/PODIUM.svg", alt: "PODIUM", href: "https://podiumdriver.com.br/" },
        { src: "src/assets/img/logos/COZINHADOHUMBERTO.svg", alt: "COZINHADOHUMBERTO", href: "https://cozinhadohumberto.co.uk/" },
        { src: "src/assets/img/logos/EVO.svg", alt: "EVO", href: "https://evoimobiliaria.com.br/" },
        { src: "src/assets/img/logos/RCS.svg", alt: "RCS", href: "https://rsixcontabilidade.com.br/" },
        { src: "src/assets/img/logos/Andrei_Leal_Ável.svg", alt: "Andrei_Leal_Ável", href: "https://andreileal.com.br/"},
        { src: "src/assets/img/logos/HORIZONTECAPITAL.svg", alt: "HORIZONTECAPITAL", href: "https://hztcapital.com/" },
        { src: "src/assets/img/logos/BURNING.svg", alt: "BURNING", href: "https://burningfood.com.br" },
        { src: "src/assets/img/logos/HORIZONTEPARK.svg", alt: "HORIZONTEPARK", href: "https://hzpark.com" },
        { src: "src/assets/img/logos/magiofer.svg", alt: "magiofer", href: "https://magioferhomecenter.com.br/" },
        { src: "src/assets/img/logos/BORILLI.svg", alt: "BORILLI", href: "https://borillicoffee.com/" },
        { src: "src/assets/img/logos/ANGELICAL.svg", alt: "ANGELICAL", href: "https://angelicalstore.com.br" }
    ];

    return (
        <div className="grid grid-rows-3 gap-6 max-sm:gap-4">
            {[0, 1, 2].map(row => (
                <Slider
                    key={row}
                    width="250px"
                    duration={40}
                    pauseOnHover={true}
                    blurBorders={false}
                    blurBoderColor={'#fff'}
                    hover={'#8B8DBA'}
                >
                    {logos.slice(row * 7, (row + 1) * 7).map((logo, index) => (
                        <Slider.Slide key={index}>
                            <a href={logo.href} target="_blank" rel="noopener noreferrer">
                                <img src={logo.src} alt={logo.alt} className="w-26 h-26 mx-auto" />
                            </a>
                        </Slider.Slide>
                    ))}
                </Slider>
            ))}
        </div>
    );
}

export default SliderComponent;
