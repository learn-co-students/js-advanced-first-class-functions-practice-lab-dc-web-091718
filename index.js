const logDriverNames = function(drivers) {
  return drivers.map( driver => console.log(driver.name) )
}

const logDriversByHometown = function(drivers, hometown) {
  const matchingDrivers = drivers.filter( driver => driver.hometown === hometown);
  return logDriverNames(matchingDrivers);
}

const driversByRevenue = function(drivers) {
  return drivers.slice().sort(function(driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue
  });
}

const driversByName = function(drivers) {
  return drivers.slice().sort(function(driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name);
  })
}

const totalRevenue = function (drivers) {
  return drivers.reduce(function(total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
}

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
}