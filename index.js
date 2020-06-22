// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => arr.slice(0,2)

const returnLastTwoDrivers = (arr) => arr.slice(arr.length-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (mult) => function(fair) { return fair * mult }

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (driverArr, func) => func(driverArr)