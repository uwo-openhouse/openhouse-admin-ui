import locationReducer, * as locations from './locations';
import errorReducer from './errors';

export default {
    locations: locationReducer,
    errors: errorReducer,
};

export const isLocationsLoaded = state => locations.isLoaded(state.locations);

export const getAllLocations = state => locations.getAllLocations(state.locations);

export const getLocation = (state, id) => locations.getLocation(state.locations, id);
