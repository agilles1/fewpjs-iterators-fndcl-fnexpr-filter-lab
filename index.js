// Code your solution here
function findMatching(drivers, string){
    let matches = drivers.filter(driver => {
        if (driver.toLowerCase() == string.toLowerCase()){
            return driver
        }
    })
    return matches
}

function fuzzyMatch(drivers, string){
    let matches = drivers.filter(driver => {
        if (driver.charAt(0).toLowerCase() == string.charAt(0).toLowerCase()){
            return driver
        }
    })
    return matches
}

function matchName(drivers, string){
    let matches = drivers.filter(driver => {
        if (driver.name== string){
            return driver}
    })
    return matches
}