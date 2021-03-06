import { Switch, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import LocationEditList from '../containers/Location/LocationEditList';
import AreaEditList from '../containers/Area/AreaEditList';
import ErrorList from '../containers/ErrorList/ErrorList';
import OpenHouseEditList from '../containers/Open House/OpenHouseEditList';
import EventEditList from '../containers/Events/EventEditList';
import EateryEditList from '../containers/Eateries/EateryEditList';
import AttendanceList from '../containers/Attendance/AttendanceList';
import SignedInLayout from '../containers/SignedInLayout';


const Layout = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <SignedInLayout>
                        <AttendanceList />
                    </SignedInLayout>
                </Route>
                <Route path="/locations" exact>
                    <SignedInLayout>
                        <LocationEditList />
                    </SignedInLayout>
                </Route>
                <Route path="/areas" exact>
                    <SignedInLayout>
                        <AreaEditList />
                    </SignedInLayout>
                </Route>
                <Route path="/openhouses" exact>
                    <SignedInLayout>
                        <OpenHouseEditList />
                    </SignedInLayout>
                </Route>
                <Route path="/events" exact>
                    <SignedInLayout>
                        <EventEditList />
                    </SignedInLayout>
                </Route>
                <Route path="/eateries" exact>
                    <SignedInLayout>
                        <EateryEditList />
                    </SignedInLayout>
                </Route>
            </Switch>
        </BrowserRouter>
        <ErrorList />
    </>
);

export default Layout;
