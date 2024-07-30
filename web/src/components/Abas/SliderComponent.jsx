import Slider from 'react-infinite-logo-slider';

import zullu from '../../assets/img/logos/zullu.svg';
import kBeauty from '../../assets/img/logos/K.BEAUTY.svg';
import oboticario from '../../assets/img/logos/OBOTICARIO.svg';
import barovi from '../../assets/img/logos/BAROVI.svg';
import silasSousa from '../../assets/img/logos/silas_sousa.svg';
import masa from '../../assets/img/logos/MASA.svg';
import henriqueTasca from '../../assets/img/logos/henrique_tasca.svg';
import leoSantos from '../../assets/img/logos/LEO&SANTOS.svg';
import mmMaster from '../../assets/img/logos/MM_MASTER.svg';
import tapajos from '../../assets/img/logos/TAPAJOS.svg';
import podium from '../../assets/img/logos/PODIUM.svg';
import cozinhaDoHumberto from '../../assets/img/logos/COZINHADOHUMBERTO.svg';
import evo from '../../assets/img/logos/EVO.svg';
import rcs from '../../assets/img/logos/RCS.svg';
import andreiLealAvel from '../../assets/img/logos/Andrei_Leal.svg';
import horizonteCapital from '../../assets/img/logos/HORIZONTECAPITAL.svg';
import burning from '../../assets/img/logos/BURNING.svg';
import horizontePark from '../../assets/img/logos/HORIZONTEPARK.svg';
import magiofer from '../../assets/img/logos/magiofer.svg';
import borilli from '../../assets/img/logos/BORILLI.svg';
import angelical from '../../assets/img/logos/ANGELICAL.svg';

const SliderComponent = () => {
    const logos = [
        { src: zullu, alt: "zullu", href: "https://zullubarbearia.com.br/" },
        { src: kBeauty, alt: "K.BEAUTY", href: "https://kbeautybrasil.com/" },
        { src: oboticario, alt: "OBOTICARIO", href: "#" },
        { src: barovi, alt: "BAROVI", href: "https://barovi.com.br" },
        { src: silasSousa, alt: "silas_sousa", href: "https://silassousabarbearia.com.br/" },
        { src: masa, alt: "MASA", href: "https://www.masadistribuidora.com.br/" },
        { src: henriqueTasca, alt: "henrique_tasca", href: "https://henriquetasca.com.br/" },
        { src: leoSantos, alt: "LEO&SANTOS", href: "https://leoesantos.com" },
        { src: mmMaster, alt: "MM_MASTER", href: "https://mmmasterbuild.com/" },
        { src: tapajos, alt: "TAPAJÓS", href: "https://tapajosskateshop.com.br/" },
        { src: podium, alt: "PODIUM", href: "https://podiumdriver.com.br/" },
        { src: cozinhaDoHumberto, alt: "COZINHADOHUMBERTO", href: "https://cozinhadohumberto.co.uk/" },
        { src: evo, alt: "EVO", href: "https://evoimobiliaria.com.br/" },
        { src: rcs, alt: "RCS", href: "https://rsixcontabilidade.com.br/" },
        { src: andreiLealAvel, alt: "Andrei_Leal_Ável", href: "https://andreileal.com.br/"},
        { src: horizonteCapital, alt: "HORIZONTECAPITAL", href: "https://hztcapital.com/" },
        { src: burning, alt: "BURNING", href: "https://burningfood.com.br" },
        { src: horizontePark, alt: "HORIZONTEPARK", href: "https://hzpark.com" },
        { src: magiofer, alt: "magiofer", href: "https://magioferhomecenter.com.br/" },
        { src: borilli, alt: "BORILLI", href: "https://borillicoffee.com/" },
        { src: angelical, alt: "ANGELICAL", href: "https://angelicalstore.com.br" }
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
