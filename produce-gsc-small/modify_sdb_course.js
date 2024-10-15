const preProcess = f => {
  f.tippecanoe = {
    layer: 'other',
    minzoom: 15,
    maxzoom: 15,
  };
  return f;
};

const postProcess = f => {
  delete f.properties['_database'];
  delete f.properties['_table'];
  return f;
};

const layerEdit = {
  baea_nests: f => {
    f.tippecanoe = {
      layer: 'testLayer1-point',
      minzoom: 3,
      maxzoom: 6,
    };
    return f;
  },
  linear_projects: f => {
    f.tippecanoe = {
      layer: 'testLayer2-line',
      minzoom: 4,
      maxzoom: 5,
    };
    return f;
  },
};

module.exports = f => {
  return postProcess(layerEdit[f.properties._table](preProcess(f)));
};
