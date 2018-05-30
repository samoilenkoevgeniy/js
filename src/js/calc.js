const calc = {

	ctx: document.getElementById('chart').getContext('2d'),
	chart: null,
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

		this.chart = new Chart(this.ctx, {
			type: 'pie',
			data: {},
			options: {}
		});
	},

	calculate() {
		let {credit_amount, percentage, period} = this.data;

		percentage = parseInt(percentage);

		const _per_month_percentage = (percentage / 100) / 12;

		const _ann_pay_per_month = credit_amount *
			((_per_month_percentage * Math.pow((1 + _per_month_percentage), period)) /
				(Math.pow((1 + _per_month_percentage), period) - 1));

		const _all_pays = _ann_pay_per_month * period;

		const _overpay = _all_pays - credit_amount;

		this.chart.data = {
			labels: [
				"Сумма займа", "Переплата"
			],
			datasets: [{
				label: '',
				data: [credit_amount, _overpay],
				backgroundColor: [
					'#ff6384',
					'#36a2eb'
				]
			}]
		};
		this.chart.update();
	}
};

calc.init();