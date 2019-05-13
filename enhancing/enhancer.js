module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  const { enhancement: oldEnhancement } = item
  
  const enhancement = oldEnhancement == 20 ? oldEnhancement : oldEnhancement + 1
  
  return { 
    ...item,
    enhancement
  };
}

function fail(item) {
  const { enhancement: oldEnhancement, durability: oldDurability } = item
  let newItem = {}
  if (oldEnhancement < 15) {
    newItem = { ...item, durability: oldDurability - 5 };
  }

  if (oldEnhancement >= 15) {
    newItem = { ...item, durability: oldDurability - 10 };
  }

  if (oldEnhancement > 16) {
    newItem = { ...newItem, enhancement: oldEnhancement - 1 };
  }
  return newItem
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
