




function logDriverNames(drivers) {
  const logname = function(driver) {
    console.log(driver.name)
  }
  drivers.forEach(logname)
}
function logDriversByHometown(drivers,town) {
  const logname = function(driver) {
    console.log(driver.name)
  }

  const d = (drivers.filter(function(driver) {return driver.hometown === town;}))
  d.forEach(logname)
}


function driversByRevenue(drivers) {
  return [...drivers].sort(function (driverOne, driverTwo) {
      return driverOne.revenue > driverTwo.revenue;
    });
}
function driversByName(drivers) {
  return [...drivers].sort(function (driverOne, driverTwo) {
      return driverOne.name> driverTwo.name;
    });
}
function totalRevenue(drivers) {
  return drivers.reduce(function (t, d) {
      return d.revenue + t;
    }, 0);
}
function averageRevenue(drivers) {
  return totalRevenue(drivers)/(drivers.length)
}
