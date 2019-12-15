import { Switch, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import SignedInLayout from './SignedInLayout';
import LocationEditList from '../containers/EditList/LocationEditList';


const Layout = () => (
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
        </Switch>
    </BrowserRouter>
);

export default Layout;
