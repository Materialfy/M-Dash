<!-- @format -->

<template>
	<v-container fluid :style="$vuetify.breakpoint.mdAndUp ? 'width: 1660px' : 'width: 100%' ">
		<!-- FIRST ROW with header table card and basic tab cards -->
		<v-row class="d-flex align-start mb-1">
			<!-- First DATA TABLE Card -->
			<v-col col md="4">
				<MaterialfyHeaderCard
					cardTitle="Employee Stats"
					:cardShowInnerList="false"
					:cardShowActions="false"
					:cardShowDivider="false"
				>
					<!-- mobile-breakpoint =0 disables the table cells wrapping on mobile like in tables page -->
					<template #crdInner>
						<v-data-table
							:headers="tableHeaders"
							:items="tableItems"
							hide-default-footer
							:mobile-breakpoint="0"
							class="primary"
						>
							<template slot="headerCell" slot-scope="{ header }">
								<span class="font-weight-light text-warning text--darken-3 text--red" v-text="header.text" />
							</template>
							<!-- use a scoped slot to send data to child to be processed and returned -->
							<template slot="items" slot-scope="{ index, item }">
								<td>{{ index + 1 }}</td>
								<td>{{ item.name }}</td>
								<td class="text-right">
									{{ item.salary }}
								</td>
								<td class="text-right">
									{{ item.country }}
								</td>
								<td class="text-right">
									{{ item.city }}
								</td>
							</template>
						</v-data-table>
					</template>
				</MaterialfyHeaderCard>
			</v-col>
			<!-- V-TAB TO-DO CARD -->
			<v-col col md="3">
				<MaterialfyBasicCard :cardShowTitle="false">
					<!-- Header -->
					<template v-slot:crdSubHeader>
						<!-- add new tabs under -->
						<v-tabs
							v-model="tab"
							align-with-title
							background-color="tertiary"
							class="elevation-3 mb-1"
							center-active
						>
							<span class="text-subtitle-1 mr-1 d-flex align-center">
								<v-icon class="ma-1">mdi-ballot</v-icon> Tasks:
							</span>
							<v-tabs-slider color="secondary"></v-tabs-slider>

							<v-tab v-for="item in tabItems" :key="item.tab">
								<v-icon class="ma-1">{{ item.icon }}</v-icon>
								{{ item.tab }}
							</v-tab>
						</v-tabs>
					</template>
					<!-- Card inner area for tab content -->
					<template #crdInner>
						<v-tabs-items v-model="tab">
							<v-tab-item v-for="item in tabItems" :key="item.tab">
								<template v-for="(tabText, index) in textList">
									<v-card flat color="primary" :key="index" class="my-3">
										<v-row wrap>
											<v-list-item :class="index % 2 ? 'background' : 'secondary'"
												><v-list-item-title>{{
													index + 1 + '.' + '  ' + tabText
												}}</v-list-item-title></v-list-item
											>
										</v-row>
									</v-card>
								</template>
							</v-tab-item>
						</v-tabs-items>
					</template>
				</MaterialfyBasicCard>
			</v-col>
			<!-- LAST CARD -->
			<v-col  md="5">
				<MaterialfyDataTable />
			</v-col>
		</v-row>
		<!-- SECOND ROW  -->
		<!-- Used named slots and props to overide the default card content below -->
		<v-row class="d-flex align-start justify-center mb-2">
			<!-- FIRST COLOR CARD with default content -->
			<v-col md="4" class="my-2">
				<MaterialfyColorCard
					cardMaxWidth="500"
					cardInnerText="Horse Power"
					:cardShowDivider="false"
					:cardShowActions="false"
					cardColor="tertiary"
				>
					<template v-slot:crdInner>
						<materialfy-apex-polar-map />
					</template>
				</MaterialfyColorCard>
			</v-col>
			<!-- SECOND COLOR CARD with secondary color -->
			<v-col md="4">
				<MaterialfyColorCard
					cardMaxWidth="500"
					cardInnerText="Users Usering"
					:cardShowDivider="false"
					:cardShowActions="false"
					cardColor="primary"
				>
					<template v-slot:crdInner>
						<materialfy-apex-donut />
					</template>
				</MaterialfyColorCard>
			</v-col>
			<v-col md="4">
				<MaterialfyColorCard
					cardMaxWidth="500"
					cardInnerText="User Engagement"
					:cardShowDivider="false"
					:cardShowActions="false"
					:cardShowInnerText="false"
					cardColor="accent"
				>
					<template v-slot:crdInner>
						<materialfy-apex-multiple-radial-bars />
					</template>
				</MaterialfyColorCard>
			</v-col>
		</v-row>

		<!-- THIRD ROW -->
		<!-- Used named slots and props to overide the default card content below -->
		<v-row class="d-flex align-start mb-2">
			<v-col>
				<MaterialfyColorCard cardInnerText="$$$$$$$ emoji" :cardShowDivider="false" :cardShowActions="false">
					<template v-slot:crdInner>
						<materialfy-apex-y-axis />
					</template>
				</MaterialfyColorCard>
			</v-col>
			<v-col>
				<MaterialfyColorCard
					cardInnerText="User Engagement"
					:cardShowDivider="false"
					:cardShowActions="false"
					cardColor="secondary"
				>
					<template v-slot:crdInner>
						<materialfy-apex-line-graph />
					</template>
				</MaterialfyColorCard>
			</v-col>
		</v-row>
		<!-- FOURTH ROW with calendar -->
		<v-row class="ma-3 d-flex align-start justify-center">
			<v-col md="9">
				<v-responsive :aspect-ratio="16 / 9">
					<MaterialfyCalendar />
				</v-responsive>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	// this is where the line chart sparkline gets its colors
	const gradients = [
		['#222'],
		['#42b3f4'],
		['red', 'orange', 'yellow'],
		['purple', 'violet'],
		['#00c6ff', '#F0F', '#FF0'],
		['#f72047', '#ffd200', '#1feaea'],
	]
	export default {
		data: () => ({
			labels: ['Feb', 'March', 'April', '420', 'May', 'June', 'July', 'Aug'],
			sparklineValue: [200, 300, 410, 390, 420, 460, 420, 420],
			width: 2,
			radius: 10,
			padding: 8,
			lineCap: 'round',
			gradient: gradients[5],
			sparklineValue2: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 10],
			gradientDirection: 'top',
			gradients,
			fill: false,
			type: 'trend',
			autoLineWidth: false,
			tableHeaders: [
				{
					sortable: false,
					text: 'ID',
					value: 'id',
					class: 'tertiary--text text-h6',
				},
				{
					sortable: false,
					text: 'Name',
					value: 'name',
					class: 'tertiary--text text-h6',
				},
				{
					sortable: false,
					text: 'Salary',
					value: 'salary',
					align: 'float-right',
					class: 'tertiary--text text-h6',
				},
				{
					sortable: false,
					text: 'Country',
					value: 'country',
					align: 'float-right',
					class: 'tertiary--text text-h6',
				},
				{
					sortable: false,
					text: 'City',
					value: 'city',
					align: 'float-right',
					class: 'tertiary--text text-h6',
				},
			],
			tableItems: [
				{
					name: 'Dakota Rice',
					country: 'Niger',
					city: 'Oud-Tunrhout',
					salary: '$35,738',
				},
				{
					name: 'Minerva Hooper',
					country: 'Curaçao',
					city: 'Sinaai-Waas',
					salary: '$23,738',
				},
				{
					name: 'Sage Rodriguez',
					country: 'Netherlands',
					city: 'Overland Park',
					salary: '$56,142',
				},
				{
					name: 'Philip Chanley',
					country: 'Korea, South',
					city: 'Gloucester',
					salary: '$38,735',
				},
				{
					name: 'Doris Greene',
					country: 'Malawi',
					city: 'Feldkirchen in Kārnten',
					salary: '$63,542',
				},
			],
			tab: null,
			tabItems: [
				{ tab: 'Bugs', icon: 'mdi-bug' },
				{ tab: 'Server Issues', icon: 'mdi-cloud' },
				{ tab: 'Tickets', icon: 'mdi-alert' },
				{ tab: 'New Issues', icon: 'mdi-access-point' },
				{ tab: 'To-Do', icon: 'mdi-alert-box-outline' },
			],
			textList: [
				'You just read a sentence',
				'Second sentence with a lot of merit',
				'Fix bugs',
				'Look at Pull Requests',
				'Hope pull request fix bugs?',
				'Figure out some other text to put here',
			],
		}),
		methods: {
			throwError: function () {
				throw new Error('Sentry Error')
			},
		},
	}
</script>

<style>
@media only screen and (min-width: map-get($grid-breakpoints, 'xl')) {
.container {
max-width: 1440px !important;
}
}
</style>
