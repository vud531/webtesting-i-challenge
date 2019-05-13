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

  if (oldEnhancement > 16) {
    return { ...item, enhancement: oldEnhancement - 1 };
  }

  else if (oldEnhancement < 15) {
    return { ...item, durability: oldDurability - 5 };
  }

  else if (oldEnhancement >= 15) {
    return { ...item, durability: oldDurability - 10 };
  }

  return newItem
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
