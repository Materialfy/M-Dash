<template>
	<v-container fluid>
		<!-- FIRST ROW with header table card and basic tab cards -->
		<v-row class="d-flex align-center mb-2">
			<!-- First DATA TABLE Card -->
			<v-col>
				<MaterialfyHeaderCard
					cardTitle="Employee Stats"
					:cardShowInnerList="false"
					:cardShowActions="false"
					:cardShowDivider="false"
				>
					<!-- mobile-breakpoint =0 disables the table wrapping on mobile like in tables page -->
					<template #crdInner>
						<v-data-table
							:headers="headers"
							:items="items"
							hide-default-footer
							:mobile-breakpoint="0"
							class="primary"
						>
							<template slot="headerCell" slot-scope="{ header }">
								<span
									class="
										font-weight-light
										text-warning text--darken-3 text--red
									"
									v-text="header.text"
								/>
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
			<v-col>
				<MaterialfyBasicCard :cardShowTitle="false">
					<!-- HEader -->
					<template v-slot:crdSubHeader
						><v-tabs v-model="tab" align-with-title background-color="tertiary">
							<v-tabs-slider color="yellow"></v-tabs-slider>

							<v-tab v-for="item in items2" :key="item">
								<v-icon>mdi-phone</v-icon>
								{{ item }}
							</v-tab>
						</v-tabs>
					</template>
					<!-- Card inner area for tab content -->
					<template #crdInner>
						<v-tabs-items v-model="tab">
							<v-tab-item v-for="item in items2" :key="item">
								<v-card flat>
									<v-card-text v-text="text"></v-card-text>
								</v-card>
							</v-tab-item>
						</v-tabs-items>
					</template>
				</MaterialfyBasicCard>
			</v-col>
			<!-- LAST CARD -->
			<v-col>
				<MaterialfyHeaderCard />
			</v-col>
		</v-row>
		<!-- SECOND ROW with basic color cards -->
		<!-- Used named slots and props to overide the default card content below -->
		<v-row class="d-flex align-center mb-2">
			<!-- FIRST COLOR CARD with default content -->
			<v-col>
				<MaterialfyColorCard />
			</v-col>
			<!-- SECOND COLOR CARD with secondary color -->
			<v-col>
				<MaterialfyColorCard
					cardMaxWidth="400"
					cardInnerText="User Engagement"
					:cardShowDivider="false"
					:cardShowActions="false"
					cardColor="secondary"
				>
					<template v-slot:crdInner>
						<v-sheet color="rgba(0, 0, 0, .12)">
							<v-sparkline
								:value="value2"
								:gradient="gradient"
								:smooth="radius || false"
								:padding="padding"
								:line-width="width"
								:stroke-linecap="lineCap"
								:gradient-direction="gradientDirection"
								:fill="fill"
								:type="type"
								:auto-line-width="autoLineWidth"
								auto-draw
								height="150"
							/>
						</v-sheet>
					</template>
				</MaterialfyColorCard>
			</v-col>
		</v-row>
		<!-- THIRD ROW with header, color and basic cards -->
		<!-- Used named slots and props to overide the default card content below -->
		<v-row class="ma-3 d-flex align-center">
			<v-col>
				<MaterialfyBasicCard />
			</v-col>
			<v-col>
				<MaterialfyHeaderCard
					cardTitle="Users Monthly Logins"
					cardIcon="mdi-access-point-plus"
					:cardShowDivider="false"
					:cardShowActions="false"
				>
					<template v-slot:crdInnerList>
						<v-sheet
							class="v-sheet--offset mx-auto mt-2"
							color="tertiary"
							elevation="4"
							max-width="calc(100% - 32px)"
						>
							<v-sparkline
								:labels="labels"
								label-size="12"
								:value="value"
								color="white"
								line-width="4"
								padding="16"
								height="150"
							/>
						</v-sheet>
					</template>
				</MaterialfyHeaderCard>
			</v-col>
			<v-col>
				<MaterialfyColorCard cardColor="grey">
					<template v-slot:crdInner>
						<v-list-item three-line>
							<v-list-item-content>
								<div class="text-overline mb-4">OVERLINE</div>
								<v-list-item-title class="text-h5 mb-1">
									Headline 5
								</v-list-item-title>
								<v-list-item-subtitle
									>Greyhound divisely hello coldly
									fonwderfully</v-list-item-subtitle
								>
							</v-list-item-content>
						</v-list-item>
					</template>
					<template v-slot:crdActions>
						<v-btn outlined rounded text> Button </v-btn>
					</template>
				</MaterialfyColorCard>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
const gradients = [
	["#222"],
	["#42b3f4"],
	["red", "orange", "yellow"],
	["purple", "violet"],
	["#00c6ff", "#F0F", "#FF0"],
	["#f72047", "#ffd200", "#1feaea"],
];
export default {
	data: () => ({
		labels: ["Feb", "March", "April", "420", "May", "June", "July", "Aug"],
		value: [200, 300, 410, 390, 420, 460, 420, 420],
		width: 2,
		radius: 10,
		padding: 8,
		lineCap: "round",
		gradient: gradients[5],
		value2: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 10],
		gradientDirection: "top",
		gradients,
		fill: false,
		type: "trend",
		autoLineWidth: false,
		headers: [
			{
				sortable: false,
				text: "ID",
				value: "id",
				class: "tertiary--text text-h6",
			},
			{
				sortable: false,
				text: "Name",
				value: "name",
				class: "tertiary--text text-h6",
			},
			{
				sortable: false,
				text: "Salary",
				value: "salary",
				align: "float-right",
				class: "tertiary--text text-h6",
			},
			{
				sortable: false,
				text: "Country",
				value: "country",
				align: "float-right",
				class: "tertiary--text text-h6",
			},
			{
				sortable: false,
				text: "City",
				value: "city",
				align: "float-right",
				class: "tertiary--text text-h6",
			},
		],
		items: [
			{
				name: "Dakota Rice",
				country: "Niger",
				city: "Oud-Tunrhout",
				salary: "$35,738",
			},
			{
				name: "Minerva Hooper",
				country: "Curaçao",
				city: "Sinaai-Waas",
				salary: "$23,738",
			},
			{
				name: "Sage Rodriguez",
				country: "Netherlands",
				city: "Overland Park",
				salary: "$56,142",
			},
			{
				name: "Philip Chanley",
				country: "Korea, South",
				city: "Gloucester",
				salary: "$38,735",
			},
			{
				name: "Doris Greene",
				country: "Malawi",
				city: "Feldkirchen in Kārnten",
				salary: "$63,542",
			},
		],
		tabs: 0,
		list: {
			0: false,
			1: false,
			2: false,
		},
		tab: null,
		items2: ["web", "shopping", "videos", "images", "news"],
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempmmodo consequat.",
	}),
};
</script>

<style></style>
