// Product.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Product from '@components/Product';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Product',
    component: Product,
} as ComponentMeta<typeof Product>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Product> = (args) => <Product {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
const product = <Product
    brand="Sneaker Company"
    description="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer."
    discount={50}
    id={1}
    images={[
        '../../assets/image-product-1.jpg',
        '../../assets/image-product-2.jpg',
        '../../assets/image-product-3.jpg', 
        '../../assets/image-product-4.jpg',
    ]}
    name="Fall Limited Edition Sneakers"
    price={250}
    quantity={0}
/>
Primary.args = product.props;
