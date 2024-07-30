import SliderComponent from "./SliderComponent"

export default function Sobre() {
    return (
        <div className="flex flex-col justify-center items-center mx-auto max-sm:px-10">
            <div className="text-center lg:w-3/5 md:w-3/4">
                <h1 className="text-4xl font-bold mb-5 max-[640px]:text-3xl">Sobre nós</h1>
                <p className="mb-10 max-sm:text-sm">A Lugenius é uma empresa dedicada à produção de tecnologia proprietária para diversas empresas, focando em integrações, automações e inovação no mercado. Atuamos como facilitadores de processos, simplificando
                    e aprimorando as operações dos nossos clientes para que possam alcançar seus objetivos com eficiência.
                </p>
                <p className="max-sm:text-sm">Nossos pilares fundamentais são Inovação, Integração e Automação, e estamos comprometidos em criar
                    harmonia entre tecnologia e negócios. Nossa missão é garantir que nossos parceiros se mantenham na
                    liderança digital, competindo nos seus mercados com soluções inovadoras e de alta qualidade.
                </p>
            </div>

            <div className="grid grid-cols-1 justify-center items-center py-20">
                <SliderComponent/>
            </div>
        </div>
    )
}
