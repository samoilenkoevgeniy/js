

const calc = {

	fields: [
		'credit_amount',
		'percentage',
		'period',
	],
	data: {},

	init() {
		this.fields.forEach(item => {
			document.getElementById(item).addEventListener('change', (e) => {
				this.data[item] = e.target.value;

				calc.calculate();
			})
		});

		this.data.__proto__.sum = () => {
			console.log(this);
		}
	},

	calculate() {
		let {credit_amount, percentage, period} = this.data;

		percentage = parseInt(percentage);

		const _per_month_percentage = (percentage / 100) / 12;

		const ann_pay_per_month = credit_amount *
			((_per_month_percentage * Math.pow((1 + _per_month_percentage), period)) /
				(Math.pow((1 + _per_month_percentage), period) - 1));
	}
};

calc.init();

var ctx = document.getElementById('chart').getContext('2d');
var chart = new Chart(ctx, {
	// The type of chart we want to create
	type: 'line',

	// The data for our dataset
	data: {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [{
			label: "My First dataset",
			backgroundColor: 'rgb(255, 99, 132)',
			borderColor: 'rgb(255, 99, 132)',
			data: [0, 10, 5, 2, 20, 30, 45],
		}]
	},

	// Configuration options go here
	options: {}
});