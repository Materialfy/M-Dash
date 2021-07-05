<template>
<v-card
    class="mx-auto text-center"
    :dark="isDark"
    :min-width="cardMinWidth" 
		:max-width="cardMaxWidth"
    :min-height ="cardMinHeight"
		:color="cardColor"
  >
    <v-card-text>
      <slot :name='cardInner'>	
        <v-sheet color="rgba(0, 0, 0, .12)">
          <v-sparkline
            :value="value"
            color="rgba(255, 255, 255, .7)"
            height="100"
            padding="24"
            stroke-linecap="round"
            smooth
          >
            <template v-slot:label="item">
              ${{ item.value }}
            </template>
          </v-sparkline>
        </v-sheet>
      </slot>
    </v-card-text>

    <v-card-text>
      <slot :name='cardInnerText'>
        <div class="text-h4 font-weight-thin">
          Sales Last 24h
        </div>
      </slot>
    </v-card-text>
    <slot :name="cardDivider">
      <v-divider></v-divider>
    </slot>
    <v-card-actions class="justify-center">
      <slot :name='cardActions'>
        <v-btn
          block
          text
        >
          Go to Report
        </v-btn>
      </slot>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    name:'MaterialfyColorCard',
        data: () => ({
      value: [
        423,
        446,
        675,
        510,
        590,
        610,
        760,
      ],
    }),
    props: {
      cardMinHeight: {
        default: '100',
      }, 
      cardMinWidth: {
        default: '300',
      },
      cardMaxWidth: {
        default: '700',
      },
      cardTitle: {
        default: 'M-Dashboard Header Card',
      },
      cardIcon: {
        default: 'crdIcon',
      },
      cardInner: {
        default: 'crdInner',
      },
      cardInnerText: {
        default: 'crdInnerText',
      },
      cardActions: {
        default: 'crdActions',
      },
      cardColor: {
        default: 'tertiary',
      },
      isDark: {
        default: true,
      },
      cardDivider: {
        default: 'crdDivider',
      },
    },
}
</script>

<style>

</style>