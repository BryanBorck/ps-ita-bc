import { Player } from '@lottiefiles/react-lottie-player';
import Animation from '../assets/congrats_animation.json';
import { useNavigate } from 'react-router-dom';

export default function Success() {

    const navigator = useNavigate();

    return (
        <div className="w-[100vw] h-[100vh] p-6">
        <div className="flex flex-col justify-center align-center space-y-8 mt-8 px-[25%]">
            <Player
                    src={Animation}
                    className="player w-48 h-48"
                    loop
                    autoplay
                />
            <h1 className="text-xl font-bold text-center text-primary-600">NFT minted</h1>
            <button className="px-4 py-2 my-2 bg-yellow-500 text-white rounded-lg shadow focus:outline-none hover:bg-primary-600 mx-12" onClick={() => navigator('/')}>
                Go back to Home
            </button>
        </div>
        </div>
    );
}