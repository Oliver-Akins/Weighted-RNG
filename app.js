const app = new Vue({
	el: `#app`,
	data: {
		options: [],
		chosen: null,
	},
	computed: {
		totalWeight() {
			return this.options
				.filter(c => {
					try { parseInt(c.weight) }
					catch (e) { return false };
					return true;
				})
				.reduce(
					(p, c) => p + parseInt(c.weight),
					0
				);
		},
	},
	methods: {
		addOption() {
			this.options.push({
				name: ``,
				weight: ``,
				chance: ``,
			});
		},
		removeOption(i) {
			this.options.splice(i, 1);
			this.updateChanceValues();
		},
		pickAnOption() {
			let choice = Math.floor(Math.random() * this.totalWeight);

			let min = 0;
			for (const opt of this.options) {
				let max = min + parseInt(opt.weight);
				if (choice < max) {
					this.chosen = opt;
					return;
				};
				min = max;
			};
		},
		updateChanceValues() {
			for (const opt of this.options) {
				if (!opt.weight) {
					continue
				}
				opt.chance = Math.round(opt.weight / this.totalWeight * 100 );
			};
		},
	},
})