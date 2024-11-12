import confetti from 'canvas-confetti';
import type { configObj } from 'js-chess-engine';
import {
  FC,
  memo,
  MouseEventHandler,
  useContext,
  useEffect,
  useState
} from 'react';
import { useCatchKeyboardPress } from '../Hooks';
import { cxChessdata } from './Chessdata';
import Modal from './Modal';

const ModalFinishGame: FC = () => {
  const { data } = useContext(cxChessdata);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (data == null) return;
    let openModal = data.isFinished && data.fullMove > 1;
    setOpen(openModal);
    if (openModal) {
      confetti({});
    }
  }, [data]);

  const onCloseHandler: MouseEventHandler<HTMLButtonElement> = () => {
    setOpen(false);
  };
  useCatchKeyboardPress(() => {
    if (!open) return null;
    setOpen(false);
  }, ['Escape']);

  if (!open) return null;
  let winner: configObj['turn'] = !data!.checkMate
    ? data!.turn
    : data!.turn === 'white'
    ? 'white'
    : 'black';
    const title = `${winner.charAt(0).toUpperCase() + winner.slice(1)} wins`;
    const body = `${winner.charAt(0).toUpperCase() + winner.slice(1)} wins the game in ${data?.fullMove} moves`;
        return <Modal onCloseHandler={onCloseHandler} body={body} title={title} />;
};

export default memo(ModalFinishGame);
