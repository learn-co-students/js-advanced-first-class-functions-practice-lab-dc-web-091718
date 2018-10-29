const logDriverNames = driver => {
  driver.forEach(x => console.log(x.name));
}

const logDriversByHometown = (arr, location) => {
  arr.forEach(driver => {if (driver.hometown === location) {console.log(driver.name)}});
}

const driversByRevenue = driver => {
  const sortFunc = function (a, b) {return a.revenue - b.revenue};
  return driver.slice().sort(sortFunc);
}

const driversByName = driver => {
  const sortFunc = (a, b) => {
    return a.name.localeCompare(b.name);
  };
  return driver.slice().sort(sortFunc);
}

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};

const averageRevenue = drivers => {
  return totalRevenue(drivers) / drivers.length;
}
