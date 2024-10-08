import perguntaImg from '../../../src/assets/img/pergunta.svg'
import respostaImg from '../../../src/assets/img/resposta.svg'

export default function FaQ() {
    return (
        <div className="container flex flex-col items-center justify-center p-8 mt-8 max-sm:p-5">
            <h1 className="text-start text-3xl font-bold mb-12 max-sm:text-2xl max-sm:text-center">Perguntas Frequentes</h1>

            <div className="flex flex-col space-y-8 w-full max-w-4xl p-14 justify-center max-sm:p-0 max-sm:space-y-4 max-sm:mb-12">
                <div className="flex items-center space-x-4 max-sm:space-x-3">
                    <img src={perguntaImg} alt="Pergunta" className="h-12 max-sm:h-8" />
                    <h2 className="font-bold text-lg max-sm:text-sm max-sm:text-start">Is it an annual or one-time fee?</h2>
                </div>
                <div className="flex items-start text-start space-x-4 max-sm:space-x-3">
                    <img src={respostaImg} alt="Resposta" className="h-12 max-sm:h-8" />
                    <p className="text-gray-600 max-sm:text-xs">It’s an annual fee that ensures you always get product updates and priority support. However, the license expiration does not affect the functionality of the plugin. You may use the plugin with an expired license and renew it whenever you need an update or support.</p>
                </div>
            </div>

            <div className="flex flex-col space-y-8 w-full max-w-4xl p-14 justify-center max-sm:p-0 max-sm:space-y-4 max-sm:mb-12">
                <div className="flex items-center space-x-4 max-sm:space-x-3">
                    <img src={perguntaImg} alt="Pergunta" className="h-12 max-sm:h-8" />
                    <h2 className="font-bold text-lg max-sm:text-sm max-sm:text-start text-start">How much will I need to pay after my annual license expires?</h2>
                </div>
                <div className="flex items-start text-start space-x-4 max-sm:space-x-3">
                    <img src={respostaImg} alt="Resposta" className="h-12 max-sm:h-8" />
                    <p className="text-gray-600 max-sm:text-xs">In a year, you’ll need to pay the full annual product cost. We recommend using automatic subscription to ensure any possible price rise doesn’t affect the cost of your renewal.</p>
                </div>
            </div>

            <div className="flex flex-col space-y-8 w-full max-w-4xl p-14 justify-center max-sm:p-0 max-sm:space-y-4 max-sm:mb-12">
                <div className="flex items-center space-x-4 max-sm:space-x-3">
                    <img src={perguntaImg} alt="Pergunta" className="h-12 max-sm:h-8" />
                    <h2 className="font-bold text-lg max-sm:text-sm max-sm:text-start">Will I be charged automatically each year?</h2>
                </div>
                <div className="flex items-start text-start space-x-4 max-sm:space-x-3">
                    <img src={respostaImg} alt="Resposta" className="h-12 max-sm:h-8" />
                    <p className="text-gray-600 max-sm:text-xs">There is an option to enable automatic renewal on the checkout page. You can activate it if you wish to renew the license automatically. You can also cancel your subscription in your account at any time.</p>
                </div>
            </div>

            <div className="flex flex-col space-y-8 w-full max-w-4xl p-14 justify-center max-sm:p-0 max-sm:space-y-4 max-sm:mb-12">
                <div className="flex items-center space-x-4 max-sm:space-x-3">
                    <img src={perguntaImg} alt="Pergunta" className="h-12 max-sm:h-8" />
                    <h2 className="font-bold text-lg max-sm:text-sm max-sm:text-start">What are the possible ways to confirm the reservation?</h2>
                </div>
                <div className="flex items-start text-start space-x-4 max-sm:space-x-3">
                    <img src={respostaImg} alt="Resposta" className="h-12 max-sm:h-8" />
                    <p className="text-gray-600 max-sm:text-xs">The Hotel Booking plugin can be used to build property rental sites either for single or for multiple properties of a single owner, for example. Those include hotel room types, apartments, houses, hostels (beds and rooms), bungalows, cabins, bed and breakfast, inns, yachts, pet boarding hotels, and other types of rentals. Anything that can be rented out for a minimum of 1 night.</p>
                </div>
            </div>

            <div className="flex flex-col space-y-8 w-full max-w-4xl p-14 justify-center max-sm:p-0 max-sm:space-y-4 max-sm:mb-12">
                <div className="flex items-center space-x-4 max-sm:space-x-3">
                    <img src={perguntaImg} alt="Pergunta" className="h-12 max-sm:h-8" />
                    <h2 className="font-bold text-lg max-sm:text-sm max-sm:text-start">How do I update the plugin?</h2>
                </div>
                <div className="flex items-start text-start space-x-4 max-sm:space-x-3">
                    <img src={respostaImg} alt="Resposta" className="h-12 max-sm:h-8" />
                    <p className="text-gray-600 max-sm:text-xs">You will need to activate your license key on your site to get automatic updates.</p>
                </div>
            </div>
        </div>
    );
}
