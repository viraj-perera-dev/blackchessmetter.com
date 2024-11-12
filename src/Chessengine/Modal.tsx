import { FC, MouseEventHandler } from 'react';
import { SolidXMark } from '../ComponentIcon';

type input = {
  title: string;
  body: string;
  onCloseHandler: MouseEventHandler<HTMLButtonElement>;
};
const Modal: FC<input> = ({ title, body, onCloseHandler }) => {
  return (
    <div className="absolute top-0 left-0 z-50 h-screen w-screen glassmorphism">
      <div className="relative mx-auto mt-10 h-fit w-fit  p-4 ">
        <div className="rounded-lg bg-white shadow">
          <div className="flex justify-between p-4 align-middle">
            <h3 className="text-xl font-semibold uppercase text-black">
              {title}
            </h3>
            <button
              onClick={onCloseHandler}
              className="rounded-lg border border-transparent bg-transparent px-2 py-1 text-sm hover:border-gray-400 hover:bg-gray-600 hover:text-black "
            >
              <SolidXMark size="1x" />
            </button>
          </div>
          <div className="space-y-6 p-6 text-black">
            <p className="first-letter:uppercase ">{body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
