mapboxgl.accessToken =
  "pk.eyJ1IjoicGVuZ3Vpbmdpcmw0IiwiYSI6ImNsMnJ5dWhlODBjM2gzbW1oMmMwOGtocmMifQ.LH4Rmv66Y5JXpzYRZl4a9w";

const busStops = [
  [-71.09342, 42.35875],
  [-71.09478, 42.3601],
  [-71.09312, 42.36111],
  [-71.09116, 42.36197],
  [-71.08994, 42.36265],
  [-71.08799, 42.36255],
  [-71.08577, 42.36245],
  [-71.08129, 42.36211],
  [-71.07655, 42.36167],
  [-71.07276, 42.36135],
  [-71.06846, 42.36007],
  [-71.06655, 42.35867],
  [-71.06434, 42.35737],
  [-71.06242, 42.35635],
];

let map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-71.079, 42.35841],
  zoom: 14,
});

let marker = new mapboxgl.Marker()
  .setLngLat([-71.092761, 42.357575])
  .addTo(map);

let counter = 0;
function move() {
  setTimeout(() => {
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 1000);
}
