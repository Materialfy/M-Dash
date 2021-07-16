<!-- @format -->

<template>
	<apexchart ref="realtimeChart" type="line" height="200" :options="chartOptions" :series="series" />
</template>

<script>
	export default {
		name: 'ApexLine',
		data() {
			return {
				series: [
					{
						name: 'Desktops',
						data: [10, 41, 35, 51, 49, 62, 69, 91, 99],
					},
				],
				chartOptions: {
					colors: ['#FCCF31', '#17ead9', '#f02fc2'],
					animations: {
						enabled: true,
						easing: 'easeinout',
						speed: 1000,
					},
					chart: {
						height: 350,
						type: 'line',
					},
					grid: {
						show: true,
						strokeDashArray: 0,
						xaxis: {
							lines: {
								show: true,
							},
						},
					},
					stroke: {
						curve: 'smooth',
					},
					dropShadow: {
						enabled: true,
						opacity: 0.3,
						blur: 5,
						left: -7,
						top: 22,
					},
					dataLabels: {
						enabled: false,
					},
					title: {
						text: 'Line Real Time',
						align: 'left',
						style: {
							color: '#FFF',
						},
					},
					xaxis: {
						categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
						labels: {
							style: {
								colors: '#fff',
							},
						},
					},
					yaxis: {
						labels: {
							style: {
								colors: '#fff',
							},
						},
					},
				},
			}
		},
		mounted() {
			this.setDataLineChart()
		},
		methods: {
			getRandomArbitrary() {
				return Math.floor(Math.random() * 99)
			},
			setDataLineChart() {
				setInterval(() => {
					this.series[0].data.splice(0, 1)
					this.series[0].data.push(this.getRandomArbitrary(0, 99))
					this.updateSeriesLine()
				}, 3000)
			},
			updateSeriesLine() {
				// eslint-disable-next-line no-use-before-define
				this.$refs.realtimeChart.updateSeries(
					[
						{
							data: this.series[0].data,
						},
					],
					false,
					true
				)
			},
		},
	}
</script>
