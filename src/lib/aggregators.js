export const sum = (data, category, field, type) => {
  let map = new Map();
  data.forEach((entry) => {
    const d = entry.data;
    const value = parseFloat(d[field]);
    if (map.has(d[category])) {
      map.set(d[category], map.get(d[category]) + value);
    } else map.set(d[category], value);
  });

  let pairs = [];
  map.forEach((value, key) => {
    pairs.push({ x: key, y: dataParser(value) });
  });
  return { name: `Sum ${field}`, data: pairs, type: type };
};

const dataParser = (value) => {
  const type = typeof value;
  switch (type) {
    case "number":
      return Number(value.toFixed(3));
    default:
      return value;
  }
};

export const count = (data, category, field, type) => {
  let map = new Map();
  data.forEach((entry) => {
    const d = entry.data;
    if (map.has(d[category])) {
      map.set(d[category], map.get(d[category]) + 1);
    } else map.set(d[category], 1);
  });
  let pairs = [];
  map.forEach((value, key) => {
    pairs.push({ x: key, y: dataParser(value) });
  });
  return { name: `Count ${field}`, data: pairs, type: type };
};

export const countMap = (data, category, field) => {
  let map = new Map();
  data.forEach((entry) => {
    const d = entry.data;
    if (map.has(d[category])) {
      map.set(d[category], map.get(d[category]) + 1);
    } else map.set(d[category], 1);
  });
  return map;
};

export const mean = (data, category, field, type) => {
  let map = new Map();
  data.forEach((entry) => {
    const d = entry.data;
    const value = parseFloat(d[field]);
    if (map.has(d[category])) {
      map.set(d[category], map.get(d[category]) + value);
    } else map.set(d[category], value);
  });

  const counts = countMap(data, category, field);

  let pairs = [];
  map.forEach((value, key) => {
    pairs.push({ x: key, y: dataParser(value / counts.get(key)) });
  });
  return { name: `Mean ${field}`, data: pairs, type: type };
};

export const min = (data, category, field, type) => {
  let map = new Map();
  data.forEach((entry) => {
    const d = entry.data;
    const value = parseFloat(d[field]);
    if (map.has(d[category])) {
      const currentMin = map.get(d[category]);
      map.set(d[category], value < currentMin ? value : currentMin);
    } else map.set(d[category], value);
  });

  let pairs = [];
  map.forEach((value, key) => {
    pairs.push({ x: key, y: dataParser(value) });
  });
  return { name: `Min ${field}`, data: pairs, type: type };
};

export const max = (data, category, field, type) => {
  let map = new Map();
  data.forEach((entry) => {
    const d = entry.data;
    const value = parseFloat(d[field]);
    if (map.has(d[category])) {
      const currentMax = map.get(d[category]);
      map.set(d[category], value > currentMax ? value : currentMax);
    } else map.set(d[category], value);
  });

  let pairs = [];
  map.forEach((value, key) => {
    pairs.push({ x: key, y: dataParser(value) });
  });
  return { name: `Max ${field}`, data: pairs, type: type };
};

export const noAggregation = (data, category, field, type) => {
  let pairs = [];
  data.forEach((entry) => {
    const d = entry.data;
    const value = parseFloat(d[field]);
    pairs.push({
      x: dataParser(parseFloat(d[category])),
      y: dataParser(value),
    });
  });
  return { name: field, data: pairs, type: type };
};
