mapKey = mapKey;
const map = new maplibregl.Map({
  container: "map",
  style: `https://api.maptiler.com/maps/basic-v2/style.json?key=${mapKey}`,
  center: listing.geometry.coordinates, // Delhi
  zoom: 12,
});

const popup = new maplibregl.Popup({ offset: 25 }).setHTML(
  `<h5>${listing.title}</h5><p>Exact location will be provided after booking</p>`
);

const marker = new maplibregl.Marker({
  color: "red",
})
  .setLngLat(listing.geometry.coordinates)
  .setPopup(popup)
  .addTo(map);
