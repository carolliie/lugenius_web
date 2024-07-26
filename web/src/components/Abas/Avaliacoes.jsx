import { FaStar } from 'react-icons/fa';
import ApexChart from './ApexChart';
import moment from "moment";
import userPhoto from '../../../src/assets/img/userPhoto.svg';

export default function Avaliacoes() {
    const comments = [
        { userPhoto: userPhoto, username: "usuario1", rating: "5", date: "08/12/2004", comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 1" },
        { userPhoto: userPhoto, username: "usuario2", rating: "4", date: "08/12/2004", comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 2" },
        { userPhoto: userPhoto, username: "usuario3", rating: "3", date: "08/12/2004", comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 3" },
        { userPhoto: userPhoto, username: "usuario4", rating: "5", date: "08/12/2004", comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 4" },
        { userPhoto: userPhoto, username: "usuario5", rating: "2", date: "08/12/2004", comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 5" },
        { userPhoto: userPhoto, username: "usuario6", rating: "4", date: "08/12/2004", comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 6" },
        { userPhoto: userPhoto, username: "usuario7", rating: "5", date: "08/12/2004", comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 7" },
        { userPhoto: userPhoto, username: "usuario8", rating: "5", date: "08/12/2004", comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 8" },
    ];

    const averageRating = comments.reduce((acc, curr) => acc + parseFloat(curr.rating), 0) / comments.length;
    const ratingsCount = [0, 0, 0, 0, 0];
    comments.forEach(comment => {
        const rating = parseInt(comment.rating);
        ratingsCount[rating - 1]++;
    });

    const starColors = {
        filled: "#12D03C",
        empty: "#BEBEBE"
    };

    return (
        <div className="container mx-auto flex flex-col items-center justify-center p-8 mt-8 max-sm:p-6">
            <h1 className="text-center text-3xl font-bold mb-12 max-sm:text-2xl">Comentários e Avaliações</h1>

            <div className="w-full max-w-2xl">
                <div className="flex flex-row justify-start items-center py-12">
                    <h3 className="text-lg font-bold mx-2">Avaliação média:</h3>
                    <p className="mx-2">{averageRating.toFixed(1)} de 5 estrelas</p>
                </div>

                <div className="flex flex-col justify-start items-start py-12">
                    <h3 className="text-lg font-bold mx-2">{comments.length} comentários</h3>
                    <ApexChart ratingsCount={ratingsCount} />
                </div>
            </div>

            <div className="w-full max-w-2xl flex flex-col items-start">
                {
                    comments.map((comment, index) => (
                        <div key={index} className="w-full mb-12">
                            <div className="flex flex-row items-start mb-4">
                                <img src={comment.userPhoto} alt='user photo' className="w-12 h-12" />
                                <div className="flex flex-col ml-4">
                                    <div className="flex flex-row items-center">
                                        <h3 className="text-lg font-bold">{comment.username}</h3>
                                        <div className="flex flex-row items-center ml-2">
                                            {
                                                Array(5).fill(0).map((_, starIndex) => (
                                                    <FaStar
                                                        key={starIndex}
                                                        size={16}
                                                        color={starIndex < comment.rating ? starColors.filled : starColors.empty}
                                                    />
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <p className="text-[#BEBEBE] text-start">{moment(comment.date).format('MMMM DD, YYYY')}</p>
                                </div>
                            </div>
                            <p className="p-4 bg-[#F5F5F5] rounded-md text-start">{comment.comment}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
