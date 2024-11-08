import type { configObj } from 'js-chess-engine';
import { FC } from 'react';
import { PiecePoint } from '../../../Chessengine';
import Timer from './Timer';
import { FaChessPawn } from "react-icons/fa";


type input = {
  data: configObj;
};
const CustomInfo: FC<input> = ({ data }) => {
  let white: number = 0;
  let black: number = 0;
  for (const piece in data.pieces) {
    const FenLetter = data.pieces[piece];
    const value = PiecePoint[FenLetter];
    if (FenLetter === FenLetter.toUpperCase()) white += value;
    else black += value;
  }

  return (
    <div className="mb-5 flex justify-center text-center">
      <p className='flex items-center'><FaChessPawn className='text-white me-2'/> {white - black}</p>
      <p className='flex ms-10 items-center'><FaChessPawn className='text-black me-2'/>{black - white}</p>
    </div>
  );
};

export default CustomInfo;
