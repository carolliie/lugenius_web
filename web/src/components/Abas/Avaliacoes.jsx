import { useEffect, useState } from "react"
import axios from 'axios';
import moment from 'moment';

export default function Avaliacoes() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:3000/comments').then((response) => {
            setComments(response.data)
        })

        // axios.post('http://127.0.0.1:3000/comments', {
        //     comment: "nwrin",
        //     rating: 123
        // })
    }, [])

    return (
        <div className="container flex flex-col items-start justify-center p-8 mt-8 max-sm:p-2">
            <h1 className="text-start text-3xl font-bold mb-12 max-sm:text-2xl max-sm:text-center">Comentários e Avaliações</h1>

            <div className="flex flex-col items-start">
                <div className="flex flex-row justify-center items-center py-12">
                    <h3 className="text-start text-xl font-bold">Avalição média:</h3>
                    <p className="mx-2">4,5 de 5 estrelas</p>
                </div>

                <div className="flex flex-col items-start py-12">
                    <h3 className="text-start text-xl font-bold">57 comentários </h3>
                    <p>gráfico</p>
                </div>
            </div>

            <div className="flex flex-col items-start">
                {
                    comments.map((comment) => (
                        <div className="flex flex-col items-start mb-12">
                            <div className="text-start mb-5">
                               <p>{comment.rating}</p>
                               <p className="text-[#BEBEBE]">{moment(comment?.createdAt).format('DD/MM/YYYY [às] HH:mm')}</p>
                            </div>
                            
                            <p className="p-4 bg-[#F5F5F5] rounded-md">{comment.comment}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}