import MinusIcon from '@public/icon-minus.svg';
import PlusIcon from '@public/icon-plus.svg';
import Image from 'next/image'

export interface ItemQuantityProps {
  quantity: number;
  handleProductIncrement(): void;
  handleProductDecrement(): void;
}

export function ItemQuantity(props: ItemQuantityProps) {
  return (
    <div className="flex pb-4 w-1/6" >
      <button
        className="border-none rounded-none rounded-tl-lg rounded-bl-lg btn bg-light-grayish-blue"
        onClick={props.handleProductDecrement}
      >
        <Image
          src={MinusIcon}
          alt="Minus icon" />
      </button>
      <input
        type="text"
        min={0}
        defaultValue={props.quantity}
        className="w-full max-w-xs font-bold text-center border-none rounded-none input font-very-dark-blue bg-light-grayish-blue"
      />
      <button
        className="border-none rounded-none rounded-tr-lg rounded-br-lg btn bg-light-grayish-blue"
        onClick={props.handleProductIncrement}
      >
        <Image
          src={PlusIcon}
          alt="Plus icon" />
      </button>
    </div >
  );
}

export default ItemQuantity;
