import locationReducer, * as locations from './locations';
import errorReducer, * as errors from './errors';
import departmentReducer, * as departments from './departments';
import openHouseReducer, * as openHouses from './openHouses';

export default {
    locations: locationReducer,
    departments: departmentReducer,
    openHouses: openHouseReducer,
    errors: errorReducer,
};

export const isLocationsLoaded = state => locations.isLoaded(state.locations);

export const getAllLocations = state => locations.getAllLocations(state.locations);

export const getLocation = (state, id) => locations.getLocation(state.locations, id);

export const isDepartmentsLoaded = state => departments.isLoaded(state.departments);

export const getAllDepartments = state => departments.getAllDepartments(state.departments);

export const getDepartment = (state, id) => departments.getDepartment(state.departments, id);

export const getErrors = state => errors.getErrors(state.errors);

export const isOpenHousesLoaded = state => openHouses.isLoaded(state.openHouses);

export const getAllOpenHouses = state => openHouses.getAllOpenHouses(state.openHouses);

export const getOpenHouse = (state, id) => openHouses.getOpenHouse(state.openHouses, id);
