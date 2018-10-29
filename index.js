// Code your solution in this file!
function logDriverNames (drivers) {
	drivers.forEach(function (el, i) {
		console.log(el.name)
	})
}

function logDriversByHometown (drivers, location) {
	drivers.forEach(function (driver){
		if (driver.hometown === location) {
			console.log(driver.name)
		}
	})
}

function driversByRevenue (drivers) {
	let newArr = drivers.slice().sort(function (d1, d2) {
		return d1.revenue - d2.revenue;
	})
	return newArr;
}

function driversByName (drivers) {
	return drivers.slice().sort((d1, d2) => d1.name.localeCompare(d2.name))
}

function totalRevenue (drivers) {
	return drivers.reduce( (agg, el) => agg + el.revenue, 0);
}

function averageRevenue (drivers) {
	return drivers.reduce( (agg, el) => agg + ( el.revenue/drivers.length ), 0);
}