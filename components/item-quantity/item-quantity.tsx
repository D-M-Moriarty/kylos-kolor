import MinusIcon from '@public/icon-minus.svg';
import PlusIcon from '@public/icon-plus.svg';
import Image from 'next/image'
import { useState } from 'react';

export interface ItemQuantityProps {
  quantity: number;
  handleProductIncrement(): void;
  handleProductDecrement(): void;
}

export function ItemQuantity(props: ItemQuantityProps) {
  return (
    <div className="flex pb-4">
      <button
        className="border-none rounded-none rounded-tl-lg rounded-bl-lg btn bg-light-grayish-blue w-1/4"
        onClick={props.handleProductDecrement}
      >
        <Image src={MinusIcon} alt="Minus icon" />
      </button>
      <input
        type="text"
        min={0}
        readOnly
        value={props.quantity}
        className="w-1/2 max-w-xs font-bold text-center border-8 border-none rounded-none input font-very-dark-blue bg-light-grayish-blue"
      />
      <button
        className="border-none rounded-none rounded-tr-lg rounded-br-lg btn bg-light-grayish-blue w-1/4"
        onClick={props.handleProductIncrement}
      >
        <Image src={PlusIcon} alt="Plus icon" />
      </button>
    </div>
  );
}

export default ItemQuantity;
