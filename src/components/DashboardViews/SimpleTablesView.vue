<template>
  <v-container
    fill-height
    container--fluid
    grid-list-xl
  >
    <v-layout
      justify-center
      wrap
    >
      <v-flex md12>
        <material-card
          color="general"
          title="Simple Table"
          text="Here is a subtitle for this table"
        >
          <v-btn
            color="general"
            class="mb-2"
          >
            New Item
          </v-btn>
          <v-data-table
            :headers="headers"
            :items="items"
            hide-default-footer
          >
            <template
              slot="headerCell"
              slot-scope="{ header }"
            >
              <span
                class="
									text-subtitle-1
									font-weight-light
									text-general text--darken-3
								"
                v-text="header.text"
              />
            </template>
            <template
              slot="items"
              slot-scope="{ item }"
            >
              <td>{{ item.name }}</td>
              <td>{{ item.country }}</td>
              <td>{{ item.city }}</td>
              <td class="text-right">
                {{ item.salary }}
              </td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>

      <v-flex md12>
        <material-card
          color="general"
          flat
          full-width
          title="Table on Plain Background"
          text="Here is a subtitle for this table"
        >
          <v-data-table
            :headers="headers"
            :items="items.slice(0, 7)"
            hide-default-footer
          >
            <template
              slot="headerCell"
              slot-scope="{ header }"
            >
              <span
                class="
									text-subtitle-1
									font-weight-light
									text-general text--darken-3
								"
                v-text="header.text"
              />
            </template>
            <template
              slot="items"
              slot-scope="{ item }"
            >
              <td>{{ item.name }}</td>
              <td>{{ item.country }}</td>
              <td>{{ item.city }}</td>
              <td class="text-right">
                {{ item.salary }}
              </td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
	export default {
		data: () => ({
			headers: [
				{
					sortable: false,
					text: "Name",
					value: "name",
				},
				{
					sortable: false,
					text: "Country",
					value: "country",
				},
				{
					sortable: false,
					text: "City",
					value: "city",
				},
				{
					sortable: false,
					text: "Salary",
					value: "salary",
					align: "right",
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
				{
					name: "Mason Porter",
					country: "Chile",
					city: "Gloucester",
					salary: "$78,615",
				},
			],
		}),
	};
</script>
