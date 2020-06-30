const returnFirstTwoDrivers = function (array){return array.slice(0, 2)};

const returnLastTwoDrivers = function (array){return array.slice(-2, array.length)};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
    return function(fare){return int*fare};
};

const fareDoubler = function(fare){return createFareMultiplier(2)(fare)};

const fareTripler = function(fare){return createFareMultiplier(3)(fare)};

function selectDifferentDrivers(arr, variable){
    if (variable === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(arr);
    } else {
        return returnLastTwoDrivers(arr);
    };
};


