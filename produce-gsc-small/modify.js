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
  ne_110m_coastline: f => {
    f.tippecanoe = {
      layer: 'coastline',
      minzoom: 0,
      maxzoom: 5,
    };
    return f;
  },
  ne_110m_rivers_lake_centerlines: f => {
    f.tippecanoe = {
      layer: 'river_lake_centerline',
      minzoom: 0,
      maxzoom: 5,
    };
    return f;
  },
  ne_110m_land: f => {
    f.tippecanoe = {
      layer: 'land',
      minzoom: 0,
      maxzoom: 5,
    };
    return f;
  },
};

module.exports = f => {
  return postProcess(layerEdit[f.properties._table](preProcess(f)));
};
