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

      {/* Subsection: Difficulty Level */}
      <section className="my-6">
        <h3 className="text-2xl font-semibold mb-4">Scegli il Livello di Difficoltà</h3>
        <AiLevel />
      </section>

      {/* Subsection: Play Button */}
      <section className="my-6">
        <h2 className="text-2xl font-semibold mb-4">Inizia la Partita</h2>
        <PlayButton vsAi />
      </section>

      {/* Subsection: Quote */}
      <section className="my-6 text-black">
        {/* Main Heading */}
        <h1 className="text-2xl font-bold text-start">
          Gioca a Scacchi con il Nero!
        </h1>
        <h2 className="text-xl font-semibold mb-2">
          La Rivoluzione degli Scacchi
        </h2>
        <p className="italic font-roboto-slab">
          "Si dice che gli scacchi, come tutti i grandi giochi, abbiano avuto una nascita leggendaria. 
          Un giorno, il geniale rivoluzionario degli scacchi, Viraj Perera, mentre sorseggiava un caffè 
          e rifletteva sulla vita, si chiese: 'Perché non iniziare una partita con il pezzo nero?' 
          La risposta, ovviamente, arrivò come una folgorazione: il nero rappresenta il mistero, 
          l'intrigo e una strategia astuta che mette subito alla prova il giocatore. Era chiaro, il 
          primo movimento doveva essere audace!"
        </p>
      </section>

      {/* Support Section */}
      <section className="my-6 p-4 text-center bg-yellow-50 rounded-lg shadow-md">
        <h4 className="text-2xl font-medium mb-4 font-roboto-slab text-yellow-950">Supporta il Progetto!</h4>
        <p className="text-lg text-gray-800 mb-4">
          Se apprezzi questo progetto e vuoi darci una mano, offrici un caffè per le lunghe notti insonni passate per realizzare tutto questo! ☕️
        </p>
        <a
          href="https://buymeacoffee.com/virajperera"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 font-bold text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 transition border border-yellow-950 border-2"
        >
          <span className="mr-2 text-yellow-950">Buy Me a Coffee</span>
          <FaCoffee className="w-6 h-6 text-yellow-950" />
        </a>
      </section>
    </Fragment>
  );
};

export default Settings;
