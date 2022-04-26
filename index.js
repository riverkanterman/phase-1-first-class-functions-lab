// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Claudia']

const returnFirstTwoDrivers = drivers => [drivers[0],drivers[1]]
const returnLastTwoDrivers = drivers => [drivers[2],drivers[3]]

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (x) => {
    return function(fare) {return x * fare}
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(drivers)
}