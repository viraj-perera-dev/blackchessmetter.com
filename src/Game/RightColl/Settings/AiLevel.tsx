import { levelType } from 'js-chess-engine';
import { ChangeEventHandler, FC, useContext, useState } from 'react';
import { cxChessengine } from '../../../Chessengine';

/**
 * Setting AI level with simple select
 */
const AiLevel: FC = () => {
  const { setLevel, level } = useContext(cxChessengine);

  const [internalLevel, setInternalLevel] = useState<levelType>(level);
  const onChangeHandler: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setLevel(event.currentTarget.value as unknown as levelType);
    setInternalLevel(event.currentTarget.value as unknown as levelType);
  };
  return  (
    <select
      onChange={onChangeHandler}
      className="base text-center text-black"
      value={internalLevel}
      style={{ textAlign: 'center', textAlignLast: 'center' }}
    >
      <option className='bg-neutral-500 ' value="0">Easy</option>
      <option className='bg-neutral-500 ' value="1">Beginner</option>
      <option className='bg-neutral-500 ' value="2">Intermediate</option>
      <option className='bg-neutral-500 ' value="3">Advanced</option>
      <option value="4" className="bg-neutral-500 rounded-b-3xl">
        Experienced
      </option>
    </select>
  );
};

export default AiLevel;
