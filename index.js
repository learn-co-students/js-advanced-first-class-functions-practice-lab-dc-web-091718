const logDriverNames = function(collection){collection.forEach(element => console.log(element.name))}
const logDriversByHometown = function(collection,hometownToMatch){collection.filter(element => {element.hometown == hometownToMatch ? console.log(element.name) : 0})}
const driversByRevenue = function(collection){
	arr = [...collection]
	arr.sort((element , element2)=> element.revenue - element2.revenue)
	return arr
}

const driversByName = function(collection){
	arr = [...collection]
	arr.sort((a , b) => a.name.localeCompare(b.name))
	return arr
}
const totalRevenue = collection => collection.reduce((accumulator, currentValue) => accumulator + currentValue.revenue,0);

const averageRevenue = drivers =>  totalRevenue(drivers) /drivers.length 
	 