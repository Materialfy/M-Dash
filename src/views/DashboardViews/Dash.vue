<template>
	<v-container fluid>
		<!-- First Row with header table card and basic tab cards -->
		<v-row class="d-flex align-center mb-2">
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
							class="elevation-1 primary"
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
			<!-- v-tab table card -->
			<v-col>
				<MaterialfyBasicCard :cardShowTitle="false">
					<template v-slot:crdOverline
						><v-tabs v-model="tabs" color="primary" slider-color="primary">
							<!-- v-tab-item -> v-tab , span is the card text span-->
							<span
								class="text-subtitle-1 mr-3 secondary"
								style="align-self: center"
							>
								Tasks:
							</span>
							<v-tab class="mr-3 secondary" eager>
								<v-icon class="mr-2"> mdi-bug </v-icon>
								Bugs
							</v-tab>
							<v-tab class="mr-3 secondary">
								<v-icon class="mr-2"> mdi-code-tags </v-icon>
								Website
							</v-tab>
							<v-tab class="secondary">
								<v-icon class="mr-2"> mdi-cloud </v-icon>
								Server
							</v-tab>
						</v-tabs>
					</template>
					<template #crdInner>
						<v-tabs-items v-model="tabs">
							<v-tab-item v-for="n in 3" :key="n">
								<v-list three-line>
									<v-list-item @click="complete(0)">
										<v-list-item-action>
											<v-checkbox :value="list[0]" color="green" />
										</v-list-item-action>
										<v-list-item-title>
											Sign contract for "What are afraid of?"
										</v-list-item-title>
										<div class="d-flex">
											<v-tooltip top content-class="top">
												<template #activator="{ on }">
													<v-btn
														class="v-btn--simple"
														color="success"
														icon
														v-on="on"
													>
														<v-icon color="primary"> mdi-pencil </v-icon>
													</v-btn>
												</template>
												<span>Edit</span>
											</v-tooltip>
											<v-tooltip top content-class="top">
												<template #activator="{ on }">
													<v-btn
														class="v-btn--simple"
														color="danger"
														icon
														v-on="on"
													>
														<v-icon color="error"> mdi-close </v-icon>
													</v-btn>
												</template>
												<span>Close</span>
											</v-tooltip>
										</div>
									</v-list-item>
									<v-divider />
									<v-list-item @click="complete(1)">
										<v-list-item-action>
											<v-checkbox :value="list[1]" color="success" />
										</v-list-item-action>
										<v-list-item-title>
											Lines From Great Russian Literature? Or E-mails From My
											Boss?
										</v-list-item-title>
										<div class="d-flex">
											<v-tooltip top content-class="top">
												<template #activator="{ on }">
													<v-btn
														class="v-btn--simple"
														color="success"
														icon
														v-on="on"
													>
														<v-icon color="primary"> mdi-pencil </v-icon>
													</v-btn>
												</template>
												<span>Edit</span>
											</v-tooltip>

											<v-tooltip top content-class="top">
												<template v-slot:activator="{ on }">
													<v-btn
														class="v-btn--simple"
														color="danger"
														icon
														v-on="on"
													>
														<v-icon color="error"> mdi-close </v-icon>
													</v-btn>
												</template>
												<span>Close</span>
											</v-tooltip>
										</div>
									</v-list-item>
									<v-divider />
									<v-list-item @click="complete(2)">
										<v-list-item-action>
											<v-checkbox :value="list[2]" color="success" />
										</v-list-item-action>
										<v-list-item-title>
											Flooded: One year later, assessing what was lost and what
											was found when a ravaging rain swept through metro Detroit
										</v-list-item-title>
										<div class="d-flex">
											<v-tooltip top content-class="top">
												<v-btn
													class="v-btn--simple"
													color="success"
													icon
													v-on="on"
												>
													<v-icon color="primary"> mdi-pencil </v-icon>
												</v-btn>
												<span>Edit</span>
											</v-tooltip>
											<v-tooltip top content-class="top">
												<v-btn
													class="v-btn--simple"
													color="danger"
													icon
													v-on="on"
												>
													<v-icon color="error"> mdi-close </v-icon>
												</v-btn>
												<span>Close</span>
											</v-tooltip>
										</div>
									</v-list-item>
								</v-list>
							</v-tab-item>
						</v-tabs-items>
					</template>
				</MaterialfyBasicCard>
			</v-col>
			<v-col>
				<MaterialfyHeaderCard />
			</v-col>
		</v-row>
		<!--  Second Row with basic color cards -->
		<!-- Used named slots and props to overide the default card content below -->
		<v-row class="d-flex align-center mb-2">
			<v-col>
				<MaterialfyColorCard />
			</v-col>
			<v-col>
				<MaterialfyColorCard
					cardMaxWidth="400"
					cardInnerText="User Engagement"
					:cardShowDivider="false"
					:cardShowActions="false"
					cardColor="accent"
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
		<!-- Third Row with header, color and basic cards -->
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
	}),
	methods: {
		complete(index) {
			this.list[index] = !this.list[index];
		},
	},
};
</script>

<style></style>
