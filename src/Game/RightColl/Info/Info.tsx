import { FC, Fragment, useContext } from 'react';
import { cxChessdata, cxChessengine } from '../../../Chessengine';
import Title from '../Title';
import CustomInfo from './CustomInfo';

const gameState: Record<
  Parameters<typeof cxChessengine['Provider']>['0']['value']['playType'],
  string
> = {
  PLAY: 'You vs another you',
  VSAI: 'You vs AI',
};

/**
 * Info section
 */
const Info: FC = () => {
  const { data } = useContext(cxChessdata);
  if (data == null) return null;

  return (
    <>
      <Fragment>
        <div className='flex justify-center h-[2rem]'>
          <span className="text-black font-semibold text-xl uppercase font-roboto-slab">{data.turn.toLowerCase() !== 'black' && ('È il tuo turno!')}</span>
        </div>
        <CustomInfo data={data} />
      </Fragment>
    </>
  );
};

export default Info;
