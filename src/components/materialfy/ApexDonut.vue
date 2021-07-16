<!-- @format -->

<template>
	<apexchart type="donut" height="250" :options="chartOptions" :series="series" />
</template>

<script>
	export default {
		name: 'ApexDonut',
		data() {
			return {
				series: [44, 55, 41, 17, 15],
				chartOptions: {
					colors: ['#008FFB', '#00E396', '#FEB019'],
					animations: {
						enabled: true,
						easing: 'easeinout',
						speed: 1000,
					},
					fill: {
						type: 'gradient',
						gradient: {
							shade: 'dark',
							type: 'vertical',
							shadeIntensity: 0.05,
							inverseColors: false,
							opacityFrom: 1,
							opacityTo: 0.9,
							stops: [0, 100],
						},
					},
					chart: {
						toolbar: {
							show: false,
						},
					},
					title: {
						text: 'Donut',
						align: 'left',
						style: {
							color: '#FFF',
						},
					},
					labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Strawberry'],
					responsive: [
						{
							breakpoint: 480,
							options: {
								chart: {
									width: 250,
								},
								legend: {
									position: 'bottom',
								},
							},
						},
					],
					legend: {
						labels: {
							colors: '#FFF',
						},
					},
				},
			}
		},
	}
</script>
