import YoutubeEmbed from './YoutubeEmbed';
import Ajuda from './Ajuda';
import Sobre from './Sobre';
import icone1 from '../../../src/assets/img/icone1.svg';
import icone2 from '../../../src/assets/img/icone2.svg';
import icone3 from '../../../src/assets/img/icone3.svg';
import icone4 from '../../../src/assets/img/icone4.svg';
import icone5 from '../../../src/assets/img/icone5.svg';
import icone6 from '../../../src/assets/img/icone6.svg';
import icone7 from '../../../src/assets/img/icone7.svg';

export default function Funcionalidades() {
    return (
        <div className="flex flex-col items-center justify-between space-y-8 mt-12">
            <div className="flex flex-col lg:flex-row items-center justify-center w-3/5 mb-20 space-y-8 lg:space-y-0 lg:space-x-36 max-[640px]:px-6 max-sm:mb-4">
                <img src={icone1} alt="laptop" className="h-80 max-sm:mx-auto max-sm:h-56 max-sm:mt-8" />
                <div className="w-full lg:w-1/2 text-center lg:text-left max-[640px]:text-start">
                    <h2 className="text-3xl font-bold mb-4 max-[640px]:text-lg">Criação fácil, intuitiva e sem complicações</h2>
                    <p className="text-black max-[640px]:text-sm">
                        A plataforma foi desenvolvida para ser extremamente fácil de usar, permitindo que você <strong>crie e gerencie seu e-commerce sem a necessidade de conhecimentos técnicos</strong>. Com uma interface amigável, você pode configurar seu site de maneira rápida e eficiente. Adicione produtos e integre métodos de pagamento com poucos cliques.
                        Tudo é feito para que você tenha autonomia total, podendo ajustar e atualizar seu site conforme necessário, sem depender de terceiros. <strong>Economize tempo e dinheiro, focando no que realmente importa:</strong> expandir seu negócio. Com nossa solução, você estará pronto para vender online em questão de horas, garantindo um início rápido e sem complicações.
                    </p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center w-3/5 mb-20 space-y-8 lg:space-y-0 lg:space-x-36 max-[640px]:px-6 max-sm:mb-4">
                <div className="w-full lg:w-1/2 text-center lg:text-left lg:order-first max-[640px]:text-start">
                    <img src={icone2} alt="laptop" className="h-80 max-sm:mx-auto max-sm:h-56 lg:hidden max-sm:mt-8 max-md:mx-auto max-md:mb-6" />
                    <h2 className="text-3xl font-bold mb-4 max-[640px]:text-lg">Diversas opções para receber pagamentos</h2>
                    <p className="text-black max-[640px]:text-sm">
                        Oferecemos suporte a uma ampla gama de métodos de pagamento, garantindo que você possa atender a todos os seus clientes com facilidade. <strong>Aceite cartões de crédito, PIX e boletos</strong>, proporcionando conveniência e flexibilidade na hora de fechar a compra.
                        Essa variedade de opções aumenta suas chances de conversão, pois atende às preferências de pagamento dos seus clientes. Com a integração simples e rápida desses métodos, <strong>você oferece uma experiência de compra segura e eficiente</strong>, essencial para conquistar e fidelizar sua clientela. Simplifique o processo de pagamento e aumente suas vendas com nossa solução abrangente de e-commerce.
                    </p>
                </div>
                <img src={icone2} alt="laptop" className="h-80 max-sm:mx-auto max-sm:h-56 max-[640px]:hidden max-md:hidden" />
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center w-3/5 mb-20 space-y-8 lg:space-y-0 lg:space-x-36 max-[640px]:px-6 max-sm:mb-4">
                <img src={icone3} alt="laptop" className="h-80 max-sm:mx-auto max-sm:h-56 max-sm:mt-8" />
                <div className="w-full lg:w-1/2 text-center lg:text-left max-[640px]:text-start">
                    <h2 className="text-3xl font-bold mb-4 max-[640px]:text-lg">Cálculo de envio automático</h2>
                    <p className="text-black max-[640px]:text-sm">
                        Facilite a logística do seu e-commerce com um sistema de cálculo de envio automatizado. Calculamos automaticamente os custos de envio com base no peso, dimensões e destino dos produtos, oferecendo aos seus clientes uma <strong>estimativa precisa e imediata dos custos de entrega.</strong>
                        Essa funcionalidade elimina a necessidade de cálculos manuais, <strong>reduzindo erros</strong> e garantindo que seus clientes tenham uma experiência de compra transparente e sem surpresas. Ao fornecer informações claras e precisas sobre o frete, você melhora a confiança do cliente e aumenta as chances de conversão. Simplifique a gestão de envios e ofereça um serviço eficiente e profissional com nossa solução de e-commerce.
                    </p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center w-3/5 mb-20 space-y-8 lg:space-y-0 lg:space-x-36 max-[640px]:px-6 max-sm:mb-4">
                <div className="w-full lg:w-1/2 text-center lg:text-left lg:order-first max-[640px]:text-start">
                    <img src={icone4} alt="laptop" className="h-80 max-sm:mx-auto max-sm:h-56 lg:hidden max-sm:mt-8 max-sm:mb-6 max-md:mx-auto max-md:mb-6" />
                    <h2 className="text-3xl font-bold mb-4 max-[640px]:text-lg">Relatório de vendas detalhados</h2>
                    <p className="text-black max-[640px]:text-sm">
                        Mantenha-se informado e <strong>tome decisões estratégicas</strong> com nossos relatórios de vendas detalhados. Nossa plataforma oferece análises abrangentes do desempenho do seu e-commerce, permitindo que você acompanhe as vendas, identifique tendências e entenda o comportamento dos clientes.
                        Com gráficos intuitivos e dados precisos, você pode facilmente monitorar o progresso do seu negócio, ajustar suas estratégias e maximizar suas oportunidades de crescimento. Os relatórios incluem informações sobre produtos mais vendidos, receita gerada, e padrões de compra, fornecendo insights valiosos para aprimorar suas operações e campanhas de marketing. <strong>Transforme dados em ações concretas</strong> e impulsione o sucesso do seu e-commerce com nossa solução.
                    </p>
                </div>
                <img src={icone4} alt="laptop" className="h-80 max-sm:mx-auto max-sm:h-56 max-[640px]:hidden max-md:hidden" />
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center w-3/5 mb-20 space-y-8 lg:space-y-0 lg:space-x-36 max-[640px]:px-6 max-sm:mb-4">
                <img src={icone5} alt="laptop" className="h-80 max-sm:mx-auto max-sm:h-56 max-sm:mt-8 max-md:mt-12" />
                <div className="w-full lg:w-1/2 text-center lg:text-left max-[640px]:text-start">
                    <h2 className="text-3xl font-bold mb-4 max-[640px]:text-lg">Promoções e cupons de desconto</h2>
                    <p className="text-black max-[640px]:text-sm">
                        Atraia e retenha clientes com nossa funcionalidade de promoções e cupons de desconto. A plataforma permite que você <strong>crie e gerencie promoções especiais e códigos de desconto de maneira fácil e eficaz.</strong> Personalize suas ofertas para diferentes campanhas, produtos ou períodos específicos, incentivando compras e aumentando a fidelidade do cliente.
                        Com a flexibilidade para ajustar descontos e promoções conforme suas estratégias de marketing, você pode direcionar vendas e aumentar o engajamento dos clientes. Ofereça descontos exclusivos para novos clientes, recompense os clientes fiéis com cupons de fidelidade, e aumente as vendas durante períodos sazonais com promoções atrativas. Maximize suas oportunidades de vendas e <strong>melhore a satisfação do cliente</strong> com nossa solução dinâmica de e-commerce.
                    </p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center w-3/5 mb-20 space-y-8 lg:space-y-0 lg:space-x-36 max-[640px]:px-6 max-sm:mb-4">
                <div className="w-full lg:w-1/2 text-center lg:text-left lg:order-first max-[640px]:text-start">
                    <img src={icone6} alt="laptop" className="h-80 max-sm:mx-auto max-sm:h-56 lg:hidden max-sm:mt-8 max-sm:mb-6 max-md:mx-auto max-md:mb-6 max-md:mt-6" />
                    <h2 className="text-3xl font-bold mb-4 max-[640px]:text-lg">Gestão completa do seu E-commerce</h2>
                    <p className="text-black max-[640px]:text-sm">
                        Simplifique a administração do seu negócio com uma solução de gestão completa. <strong>lntegramos todas as ferramentas essenciais para gerenciar vendas, estoque e contas de clientes em um único lugar.</strong> Controle suas operações de maneira eficiente, economizando tempo e reduzindo a complexidade da gestão do seu loja on-line.
                        Com a gestão de vendas, <strong>você pode acompanhar pedidos, processar pagamentos e monitorar o status de entrega com facilidade.</strong> A gestão de estoque permite que você mantenha um controle preciso dos seus produtos. Além disso, gerencie as contas dos seus clientes, facilitando o acompanhamento de históricos de compra e preferências.
                        Nossa solução oferece tudo o que você precisa para operar seu e-commerce de forma integrada e eficiente, permitindo que você se concentre no crescimento do seu negócio.
                    </p>
                </div>
                <img src={icone6} alt="laptop" className="h-80 max-sm:mx-auto max-sm:h-56 max-[640px]:hidden max-md:hidden" />
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center w-3/5 space-y-8 lg:space-y-0 lg:space-x-36 max-[640px]:px-6 max-sm:mb-4">
                <img src={icone7} alt="laptop" className="h-80 max-sm:mx-auto max-sm:h-56 max-sm:mt-8 max-sm:mb-4 max-md:mt-6" />
                <div className="w-full lg:w-1/2 text-center lg:text-left max-[640px]:text-start">
                    <h2 className="text-3xl font-bold mb-4 max-[640px]:text-lg">Aplicativo no celular para gerenciamento</h2>
                    <p className="text-black max-[640px]:text-sm">
                        Controle seu e-commerce na palma da mão com um aplicativo móvel de gestão. Com ele, <strong>você pode gerenciar todas as operações do seu negócio de qualquer lugar e a qualquer hora.</strong> Acompanhe vendas, atualize o estoque, processe pedidos e acesse relatórios detalhados diretamente do seu smartphone ou tablet.
                        O aplicativo oferece uma interface amigável e funcionalidades completas, garantindo que você tenha toda a flexibilidade necessária para administrar seu e-commerce enquanto está em movimento. Receba notificações em tempo real sobre novas vendas, pedidos e atualizações importantes, permitindo que você tome decisões rápidas e informadas.
                        Dessa forma, <strong>você nunca perde o controle do seu negócio</strong>, podendo gerenciar tudo de maneira eficiente e conveniente, onde quer que esteja. Maximize sua produtividade e mantenha-se conectado a sua loja com nosso aplicativo de gestão.
                    </p>
                </div>
            </div>

            <div className='w-full'>
                <div className="flex flex-col items-center justify-center min-h-screen w-full p-20 bg-[#E7FAEA] mt-20 max-md:p-10">
                    <h1 className="text-5xl font-bold mb-5 max-[640px]:text-3xl">Vídeos e Tutoriais</h1>
                    <p className="text-base text-center w-1/2 max-[640px]:text-xs max-[640px]:w-full max-[640px]:px-16 md:w-3/4">
                        Deseja entender melhor? Confira nossos vídeos sobre a solução e tutoriais que mostram como
                        configurar e usar nossa plataforma de e-commerce. Desde a criação do site até a gestão de vendas, veja como é fácil e rápido dominar todas as funcionalidades e tirar o máximo proveito da nossa
                        solução. Além disso, respondemos às dúvidas mais frequentes para garantir que você tenha todas
                        as informações necessárias.
                    </p>
                    <div className="grid grid-cols-3 gap-20 p-20 max-[640px]:flex max-[640px]:flex-col max-md:p-0 max-md:gap-8 max-md:mt-12">
                        <YoutubeEmbed embedId="RY0tUGKtr_s" />
                        <YoutubeEmbed embedId="RY0tUGKtr_s" />
                        <YoutubeEmbed embedId="RY0tUGKtr_s" />
                        <YoutubeEmbed embedId="RY0tUGKtr_s" />
                        <YoutubeEmbed embedId="RY0tUGKtr_s" />
                        <YoutubeEmbed embedId="RY0tUGKtr_s" />
                    </div>
                </div>
            </div>

            <Ajuda />
            <Sobre />
        </div>
    );
}
