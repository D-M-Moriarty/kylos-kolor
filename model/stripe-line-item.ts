import Stripe from "stripe";

export interface StripeLineItem extends Stripe.LineItem {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'item';
    /**
     * Total discount amount applied. If no discounts were applied, defaults to 0.
     */
    amount_discount?: number;
    /**
     * Total before any discounts or taxes are applied.
     */
    amount_subtotal: number;
    /**
     * Total tax amount applied. If no tax was applied, defaults to 0.
     */
    amount_tax?: number;
    /**
     * Total after discounts and taxes.
     */
    amount_total: number;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
    /**
     * An arbitrary string attached to the object. Often useful for displaying to users. Defaults to product name.
     */
    description: string;
    /**
     * The discounts applied to the line item.
     */
    discounts?: Array<Stripe.LineItem.Discount>;
    /**
     * The price used to generate the line item.
     */
    price: Stripe.Price | null;
    /**
     * The ID of the product for this line item.
     *
     * This will always be the same as `price.product`.
     */
    product?: string | Stripe.Product | Stripe.DeletedProduct;
    /**
     * The quantity of products being purchased.
     */
    quantity: number | null;
}
