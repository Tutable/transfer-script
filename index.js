/**
 * This module will handle the money transfers to the teacher account
 * from the stripe account.
 * The script is a cron script that checks for the due payments that have been received since
 * 7 days,
 * @author gaurav sharma
 * @since 16th April 2018
 */
import { CronJob } from 'cron';
import PaymentTransactions from './model/payments/transaction';
import PaymentPayout from './model/payments/payout';

const processData = ({ page = 1, limit = 30 }) => new Promise(async (resolve, reject) => {
	// this will list out all the transactions whose payouts is pending.
	const transactions = await PaymentTransactions({ page, limit});
	if (transactions && transactions.data.length) {
		/**
		 * @todo functionality
		 */
		transactions.data.map(async (transaction, index) => {
			/**
			 * @todo check if the payoff due date has crossed the current time
			 */
			const { _doc: { payoutDue } } = transaction;
			// the payoutDue must be less than the current date
			// it should've passed.
			if (payoutDue <= Date.now()) {
				// due date have passed.
				// process payment now
				try {
					const payout = await PaymentPayout({ id: transaction._doc._id });
				} catch (err) {
					throw new Error('Error');
				}
			}
			if (index === transactions.data.length - 1) {
				await processData({ page: page + 1, limit });
			}
		});
	} else {
		resolve();
	}
});

/**
 * @todo this is every minute script right now.
 * Handle this for every weekend
 */
const cron = new CronJob('0 * * * * *', async () => {
	await processData({});
	console.log('paid off all due amounts');
}, null, true, 'America/Los_Angeles');
