// Code your solution in this file!
//had to look at the solution
const logDriverNames = function(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name);
  });
};
//had to refer to the solution but everything was right except I didnt put the if statement in parethesis.
const logDriversByHometown = function(drivers,location){
  drivers.forEach(function(driver){
    if (driver.hometown === location){
      console.log(driver.name);
    };
  });
};
//had to look at solution...slice was used to non-destructively re-order the object by creating a new object instead of overwritting the original.
const driversByRevenue = function(drivers){
  return drivers.slice().sort(function(a, b){
    return a.revenue - b.revenue;
  })
}
//used combination of previous exampled combined with the previous readme and made a good guess.
const driversByName = function(drivers){
  return drivers.slice().sort(function(a, b){
    return a.name.localeCompare(b.name);
  })
}

const totalRevenue = function(drivers){
  let total = 0;

  drivers.forEach(function(driver){
    total +=driver.revenue;
  });
  return total;
};

const averageRevenue =
function(drivers){
  let total = 0;
  let count = 0;

  drivers.forEach(function(driver){
    total +=driver.revenue;
    count++
  });
  return total/count;
};
