<template>
	<v-container fill-height fluid>
		<v-row>
			<v-col class="d-flex justify-center">
				<v-sheet color="background">
					<header>
						<span
							class="text-h3 text-uppercase d-flex text-center"
							style="color: #ffc107"
							>Materialfy Basic tables Examples</span
						>
						<article class="d-flex justify-center mt-2">
							<p class="text-center">
								These are about as basic as you get
							</p>
						</article>
					</header>
				</v-sheet>
			</v-col>
		</v-row>
		<v-row wrap>
			<v-col md6 class="justify-end" justify="center" offset-md="1">
				<materialfy-header-card
					cardTitle="Simple Table"
					text="Here is a subtitle for this table"
					cardMinWidth="250"
					:cardShowInnerList="false"
					:cardShowDivider="false"
				>
					<template v-slot:crdInner>
						<v-data-table
							:headers="headers"
							:items="items"
							:items-per-page="5"
							class="elevation-1 primary"
							:mobile-breakpoint="0"
						>
							<template slot="headerCell" slot-scope="{ header }">
								<span
									class="
										text-subtitle-1
										font-weight-light
										text-general text--darken-3
									"
									v-text="header.text"
								/>
							</template>
							<template slot="items" slot-scope="{ item }">
								<td>{{ item.name }}</td>
								<td>{{ item.country }}</td>
								<td>{{ item.city }}</td>
								<td class="text-right">
									{{ item.salary }}
								</td>
							</template>
						</v-data-table>
					</template>
					<template #crdActions>
						<v-btn color="tertiary" class="mb-2"> New Item </v-btn>
					</template>
				</materialfy-header-card>
			</v-col>

			<v-col md6>
				<materialfy-header-card
					color="general"
					flat
					full-width
					:cardShowInnerList="false"
					:cardShowActions="false"
					:cardShowDivider="false"
					cardTitle="Table on Plain Background"
					text="Here is a subtitle for this table"
				>
					<template v-slot:crdInner>
						<v-data-table
							:headers="headers"
							:items="items.slice(0, 7)"
							class="elevation-1 primary"
						>
							<template slot="headerCell" slot-scope="{ header }">
								<span
									class="
										text-subtitle-1
										font-weight-light
										text-general text--darken-3
									"
									v-text="header.text"
								/>
							</template>
							<template slot="items" slot-scope="{ item }">
								<td>{{ item.name }}</td>
								<td>{{ item.country }}</td>
								<td>{{ item.city }}</td>
								<td class="text-right">
									{{ item.salary }}
								</td>
							</template>
						</v-data-table>
					</template>
				</materialfy-header-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {
		data: () => ({
			headers: [
				{
					sortable: false,
					text: 'Name',
					value: 'name',
				},
				{
					sortable: false,
					text: 'Country',
					value: 'country',
				},
				{
					sortable: false,
					text: 'City',
					value: 'city',
				},
				{
					sortable: false,
					text: 'Salary',
					value: 'salary',
					align: 'right',
				},
			],
			items: [
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
				{
					name: 'Mason Porter',
					country: 'Chile',
					city: 'Gloucester',
					salary: '$78,615',
				},
			],
		}),
	}
</script>
<style>
	/* tbody tr:nth-of-type(even) {
    background-color: rgba(236, 237, 237);
  }

  tbody tr:nth-of-type(odd) {
    background-color: rgb(250 ,250, 250);
  }

  .v-data-table-header {
    background-color: rgba(182, 183, 187);
    color: white;
  }

  .v-data-footer {
    background-color: rgb(250 ,250, 250);
  }

  .theme--light.v-data-table thead tr th {
    color: white;
  } */
</style>
