import { FC, Fragment } from 'react';
import AiLevel from './AiLevel';
import PlayButton from './PlayButton';

/**
 * Settings section
 */
const Settings: FC = () => {
  return (
    <Fragment>
      <AiLevel />
      <PlayButton vsAi />
      <div className="my-4 px-4 text-white">
        <p className="italic text-xl font-roboto-slab">
        "Si dice che gli scacchi, come tutti i grandi giochi, abbiano avuto una nascita leggendaria. Un giorno, il geniale rivoluzionario degli scacchi, Viraj Perera, mentre sorseggiava un caffè e rifletteva sulla vita, si chiese: 'Perché non iniziare una partita con il pezzo nero?' La risposta, ovviamente, arrivò come una folgorazione: il nero rappresenta il mistero, l'intrigo e una strategia astuta che mette subito alla prova il giocatore. Era chiaro, il primo movimento doveva essere audace!"
        </p>
      </div>
    </Fragment>
  );
};

export default Settings;
