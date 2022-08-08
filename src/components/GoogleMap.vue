<template>
  <section id="googleMap">
    <GmapMap
      :center="ShopCoordinates"
      :zoom="15"
      :options="mapStyle"
      style="width: 100%; height: 400px"
      ref="mapRef"
      @dragend="handleDrag"
    >
      <gmap-marker
        :position="ShopCoordinates"
        @click="center = ShopCoordinates"
      ></gmap-marker>
    </GmapMap>
  </section>
</template>

<script>
export default {
  data() {
    return {
      map: null,
      ShopCoordinates: {
        lat: 47.74295,
        lng: 18.1253163,
      },
      zoom: 6,
      mapStyle: {
        styles: [
          {
            featureType: "all",
            elementType: "labels",
            stylers: [
              {
                visibility: "on",
              },
            ],
          },
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [
              {
                saturation: 36,
              },
              {
                color: "#000000",
              },
              {
                lightness: 40,
              },
            ],
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [
              {
                visibility: "on",
              },
              {
                color: "#000000",
              },
              {
                lightness: 16,
              },
            ],
          },
          {
            featureType: "all",
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 20,
              },
            ],
          },
          {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 17,
              },
              {
                weight: 1.2,
              },
            ],
          },
          {
            featureType: "administrative.country",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#aa923b",
              },
            ],
          },
          {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#c4c4c4",
              },
            ],
          },
          {
            featureType: "administrative.neighborhood",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#e5c163",
              },
            ],
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 20,
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 21,
              },
              {
                visibility: "on",
              },
            ],
          },
          {
            featureType: "poi.business",
            elementType: "geometry",
            stylers: [
              {
                visibility: "on",
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#aa923b",
              },
              {
                lightness: "0",
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#000000",
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#e5c163",
              },
            ],
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 18,
              },
            ],
          },
          {
            featureType: "road.arterial",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#575757",
              },
            ],
          },
          {
            featureType: "road.arterial",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#ffffff",
              },
            ],
          },
          {
            featureType: "road.arterial",
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#2c2c2c",
              },
            ],
          },
          {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 16,
              },
            ],
          },
          {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#999999",
              },
            ],
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 19,
              },
            ],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [
              {
                color: "#000000",
              },
              {
                lightness: 17,
              },
            ],
          },
        ],
      },
    };
  },
  mounted() {
    this.$refs.mapRef.$mapPromise.then((map) => {
      this.map = map;
    });
  },
  methods: {
    handleDrag() {
      const center = {
        lat: this.map.getCenter().lat(),
        lng: this.map.getCenter().lng(),
      };
      const zoom = this.map.getZoom();

      localStorage.center = JSON.stringify(center);
      localStorage.zoom = zoom;
    },
  },
  computed: {
    mapCoordinates() {
      if (!this.map) {
        return {
          lat: 47.74295,
          lng: 18.1253163,
        };
      }
      return {
        lat: this.map.getCenter().lat().toFixed(4),
        lng: this.map.getCenter().lng().toFixed(4),
      };
    },
  },
};
</script>

<style>
</style>