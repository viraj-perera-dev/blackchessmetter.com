import { FC, memo, MouseEventHandler, useContext, useRef } from 'react';
import { cxChessengine } from '../../Chessengine';
import { useOnClickOutside } from '../../Hooks';
import PrintHelper from './PrintHelper';
import PrintPiece from './PrintPiece';

const Chessboard: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { setSelectedCell } = useContext(cxChessengine);
  const onClickHandler: MouseEventHandler = () => {
    setSelectedCell();
  };
  useOnClickOutside(ref, () => {
    setSelectedCell();
  });

  return (
    <>
    <div
      className="relative mx-auto h-vw-5 w-vw-5 border-2 border-solid border-black shadow-xl rounded-lg bg-white bg-Chessboard-1 bg-contain bg-no-repeat lg:h-vh-5 lg:max-h-[42rem] lg:min-h-[28rem] lg:w-vh-5 lg:min-w-[28rem] lg:max-w-[42rem] xl:max-h-[62rem] xl:max-w-[62rem] "
      ref={ref}
      onClick={onClickHandler}
    >
      <PrintHelper />
      <PrintPiece />
    </div>
    </>
  );
};

export default memo(Chessboard);
