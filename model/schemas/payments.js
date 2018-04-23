/**
 * this schema defines the payment schema in the database
 * @author gaurav sharma
 * @since 11th April 2018
 */
import { Schema } from 'mongoose';

const Payment = new Schema({
	ref: String, // corresponds to the user id
	stripeId: String,
	defaultSource: String, // the default card type
	deleted: Boolean,
	stripeCustomer: {},
});

export default Payment;
