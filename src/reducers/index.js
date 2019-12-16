import locationReducer, * as locations from './locations';
import errorReducer from './errors';
import departmentReducer, * as departments from './departments';

export default {
    locations: locationReducer,
    departments: departmentReducer,
    errors: errorReducer,
};

export const isLocationsLoaded = state => locations.isLoaded(state.locations);

export const getAllLocations = state => locations.getAllLocations(state.locations);

export const getLocation = (state, id) => locations.getLocation(state.locations, id);

export const isDepartmentsLoaded = state => departments.isLoaded(state.departments);

export const getAllDepartments = state => departments.getAllDepartments(state.departments);

export const getDepartment = (state, id) => departments.getDepartment(state.departments, id);
