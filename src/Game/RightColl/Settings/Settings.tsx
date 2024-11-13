import { FC, Fragment } from 'react';
import AiLevel from './AiLevel';
import PlayButton from './PlayButton';
import { FaCoffee } from 'react-icons/fa';

/**
 * Settings section
 */
const Settings: FC = () => {
  return (
    <Fragment>
      <AiLevel />
      <PlayButton vsAi />
      <div className="my-4 px-4 text-black">
        <p className="italic text-xl font-roboto-slab">
        "Si dice che gli scacchi, come tutti i grandi giochi, abbiano avuto una nascita leggendaria. Un giorno, il geniale rivoluzionario degli scacchi, Viraj Perera, mentre sorseggiava un caffè e rifletteva sulla vita, si chiese: 'Perché non iniziare una partita con il pezzo nero?' La risposta, ovviamente, arrivò come una folgorazione: il nero rappresenta il mistero, l'intrigo e una strategia astuta che mette subito alla prova il giocatore. Era chiaro, il primo movimento doveva essere audace!"
        </p>
      </div>
      {/* Support the Project Section */}
      <div className="my-6 p-4 text-center bg-yellow-50 border border-yellow-200 rounded-lg shadow-md">
        <p className="text-lg font-semibold text-gray-800 mb-2">
          Se ti piace questo progetto e vuoi supportarlo, considera di offrirmi un caffè! ☕️
        </p>
        <a
          href="https://buymeacoffee.com/virajperera"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 mt-2 font-bold text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 transition"
        >
          <span className="mr-2">Buy Me a Coffee</span>
          {/* Use React Icon here */}
          <FaCoffee className="w-6 h-6" />
        </a>
      </div>
    </Fragment>
  );
};

export default Settings;
