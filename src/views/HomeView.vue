<template>
  <div style="height: 640px; width: 96%; margin-top:2%; margin-left:2%">
    <l-map
      :minZoom="1" :maxZoom="256" :zoomSnap="0" :zoomDelta="0.25"
      v-model="zoom"
      v-model:zoom="zoom"
      :center = "[2.7206954, 102.192041]"
    >
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="markerLatLng"></l-marker>
      <l-marker :lat-lng="markerLatLng0"></l-marker>
      <l-marker :lat-lng="markerLatLng1"></l-marker>
      <l-marker :lat-lng="markerLatLng2"></l-marker>
    </l-map>
  </div>
</template>

<script>

import {
  LMap,
  LTileLayer,
  LMarker,
} from '@vue-leaflet/vue-leaflet';

export default {
  name: 'HomeView',
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      zoom: 8,
      markerLatLng: [25.017407550071717, 121.53974879713891],
      markerLatLng0: [2.8076954, 101.522041],
      markerLatLng1: [4.0892568, 100.567415],
      markerLatLng2: [1.3521340, 103.816667],
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    };
  },
};

</script>
