<!-- @format -->

<template>
	<apexchart type="polarArea" height="250" :options="chartOptions" :series="series" />
</template>

<script>
	export default {
		name: 'ApexPolarMap',
		data() {
			return {
				series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
				chartOptions: {
					labels: [
						'GitHub',
						'Facebook',
						'Twitter',
						'WhatsApp',
						'Linkedin',
						'Messenger',
						'Bitbucket',
						'Hubstaff',
						'Jira',
					],
					title: {
						text: 'Polar Area',
						align: 'left',
						style: {
							color: '#FFF',
						},
					},
					chart: {
						type: 'polarArea',
						toolbar: {
							show: true,
							tools: {
								download: false,
							},
						},
					},
					stroke: {
						colors: ['#fff'],
					},
					legend: {
						labels: {
							colors: '#FFF',
						},
						offsetY: -1,
					},
					fill: {
						opacity: 0.8,
					},
					yaxis: {
						labels: {
							style: {
								colors: '#FFF',
							},
						},
					},
				},
			}
		},
	}
</script>
