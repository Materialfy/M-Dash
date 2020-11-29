<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        md12
      >
        <div>
          <material-card
            color="general"
            title="User Groups Table"
            text="Such a classic table"
          >
            <v-spacer/>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Search"
              single-line
              hide-details/>
            <v-dialog
              v-model="dialog"
              max-width="500px">
              <template v-slot:activator="{ on }">
                <v-btn
                  color="general"
                  dark
                  class="mb-2"
                  v-on="on">New Tag</v-btn>
              </template>

              <v-card>
                <v-card-text>
                  <v-container grid-list-md >
                    <v-layout wrap>
                      <v-flex
                        xs12
                        sm6
                        md4>
                        <v-text-field
                          v-model="editedItem.name"
                          label="Name" />
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer/>
                  <v-btn
                    color="blue darken-1"
                    flat
                    @click="close">Cancel</v-btn>
                  <v-btn
                    color="blue darken-1"
                    flat
                    @click="save">Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-data-table
              :headers="headers"
              :items="itemsList"
              :rows-per-page-items ="rowsAmount"
              :search="search"
              class="elevation-1"
            >
              <!-- change table header background and text color(or other properties) -->
              <template
                slot="headerCell"
                slot-scope="{ header }"
              >
                <span
                  class="subheading font-weight-light text-general text--darken-3"
                  v-text="header.text"
                />
              </template>
              <template v-slot:items="props">
                <td>{{ props.item.id }}</td>
                <td class="justify-center ">
                  <v-icon
                    medium
                    class="mr-2"
                    @click="editItem(props.item)">edit</v-icon>
                  <v-icon
                    medium
                    @click="deleteItem(props.item)">delete</v-icon>
                </td>
                <td>
                  <v-edit-dialog
                    :return-value.sync="props.item.name"
                    large
                    lazy
                    persistent
                    @save="saveInline"
                    @cancel="cancelInline"
                    @open="openInline"
                    @close="closeInline"
                  >
                    <div>{{ props.item.name }}</div>
                    <template v-slot:input>
                      <v-text-field
                        v-model="props.item.name"
                        :rules="[max25chars]"
                        label="Edit"
                        single-line
                        counter
                        autofocus
                      />
                    </template>
                  </v-edit-dialog>
                </td>
              </template>
            </v-data-table>
            <v-snackbar
              v-model="snack"
              :timeout="3000"
              :color="snackColor">
              {{ snackText }}
              <v-btn
                flat
                @click="snack = false">Close</v-btn>
            </v-snackbar>
          </material-card>
        </div>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  import Component from './index.js'
  export default Component
</script>

<style>
table.v-table thead tr {
  color: red !important;
}
tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, .05);
}
</style>
