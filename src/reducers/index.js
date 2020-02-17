import locationReducer, * as locations from './locations';
import errorReducer, * as errors from './errors';
import areaReducer, * as areas from './areas';
import openHouseReducer, * as openHouses from './openHouses';
import eventReducer, * as events from './events';
import eateryReducer, * as eateries from './eateries';
import authReducer, * as auth from './auth';

export default {
    locations: locationReducer,
    areas: areaReducer,
    openHouses: openHouseReducer,
    events: eventReducer,
    errors: errorReducer,
    eateries: eateryReducer,
    auth: authReducer,
};

export const isLocationsLoaded = state => locations.isLoaded(state.locations);

export const getAllLocations = state => locations.getAllLocations(state.locations);

export const getLocation = (state, id) => locations.getLocation(state.locations, id);

export const isAreasLoaded = state => areas.isLoaded(state.areas);

export const getAllAreas = state => areas.getAllAreas(state.areas);

export const getArea = (state, id) => areas.getArea(state.areas, id);

export const getErrors = state => errors.getErrors(state.errors);

export const isOpenHousesLoaded = state => openHouses.isLoaded(state.openHouses);

export const getAllOpenHouses = state => openHouses.getAllOpenHouses(state.openHouses);

export const getOpenHouse = (state, id) => openHouses.getOpenHouse(state.openHouses, id);

export const isEventsLoaded = state => events.isLoaded(state.events);

export const getAllEvents = state => events.getAllEvents(state.events);

export const getEvent = (state, id) => events.getEvent(state.events, id);

export const isEateriesLoaded = state => eateries.isLoaded(state.eateries);

export const getAllEateries = state => eateries.getAllEateries(state.eateries);

export const getEatery = (state, id) => eateries.getEatery(state.eateries, id);

export const hasToken = state => auth.hasToken(state.auth);

export const getToken = state => auth.getToken(state.auth);
