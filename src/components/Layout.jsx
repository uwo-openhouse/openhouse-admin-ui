import { Switch, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import SignedInLayout from './SignedInLayout';
import LocationEditList from '../containers/Location/LocationEditList';
import DepartmentEditList from '../containers/Department/DepartmentEditList';
import ErrorList from '../containers/ErrorList/ErrorList';
import OpenHouseEditList from '../containers/Open House/OpenHouseEditList';
import EventEditList from '../containers/Events/EventEditList';


const Layout = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <SignedInLayout>
                        <div />
                    </SignedInLayout>
                </Route>
                <Route path="/locations" exact>
                    <SignedInLayout>
                        <LocationEditList />
                    </SignedInLayout>
                </Route>
                <Route path="/departments" exact>
                    <SignedInLayout>
                        <DepartmentEditList />
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
            </Switch>
        </BrowserRouter>
        <ErrorList />
    </>
);

export default Layout;
