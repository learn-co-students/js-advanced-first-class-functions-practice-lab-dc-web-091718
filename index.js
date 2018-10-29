// Code your solution in this file!
function logDriverNames(drivers) {
  function printMe (obj) {
    console.log(obj.name)
  }
  drivers.forEach(printMe)
}

function logDriversByHometown(drivers, hometown) {
  const filteredDrivers = drivers.filter( function(driver){
    return driver.hometown === hometown
  })

  const names = filteredDrivers.map ( driver => driver.name)
  debugger
  for (const name of names) {
    console.log(name)
  }
}

function driversByRevenue(drivers){
  return drivers.slice().sort(function(a, b) {
    return a.revenue - b.revenue
  })
}

function driversByName(drivers) {
  return drivers.slice().sort(function(a, b){
    return a.name.localeCompare(b.name)
  })
}

function totalRevenue(drivers){
  let initialValue = 0
  let sum = drivers.reduce(function(acc, cv) {
    return acc + cv.revenue
  }, initialValue)

  return sum
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
