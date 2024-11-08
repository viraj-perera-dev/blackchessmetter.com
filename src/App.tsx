import { FC } from 'react';
import { Chessengine } from './Chessengine';
import { Chessboard, RightColl } from './Game';
import Info from './Game/RightColl/Info';

const App: FC = () => {
  return (
    <>
    <div className="mx-auto flex w-full flex-col flex-wrap lg:flex-row">
      <Chessengine>
        <div className="mx-5 mb-5 shrink grow-[2]">
          <div className='flex justify-center my-6'>
            <p className='text-white font-semibold text-2xl uppercase font-roboto-slab'>black chess metter!</p>
          </div>
          <Chessboard />
        </div>
        <div className="mb-10 lg:mt-10 shrink grow">
          <RightColl />
        </div>
      </Chessengine>
    </div>
    </>
  );
};

export default App;
