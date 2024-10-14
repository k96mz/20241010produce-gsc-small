const tilebelt = require('@mapbox/tilebelt');

const tile = [10, 15, 8]; // x,y,z
const bbox = tilebelt.tileToBBOX(tile);
console.log(bbox);
