# openhouse-admin-ui | ![Build](https://github.com/uwo-openhouse/openhouse-admin-ui/workflows/Build/badge.svg) ![Lint](https://github.com/uwo-openhouse/openhouse-admin-ui/workflows/Lint/badge.svg) ![Deploy to Prod](https://github.com/uwo-openhouse/openhouse-admin-ui/workflows/Deploy%20to%20Prod/badge.svg) ![Deploy to Test](https://github.com/uwo-openhouse/openhouse-admin-ui/workflows/Deploy%20to%20Test/badge.svg)

A web app for Western U staff to create and edit the data that will be displayed in the 
[openhouse-app](https://github.com/uwo-openhouse/openhouse-app).

### Requirements

* NodeJS
* Yarn
* Git

### Setup

Setup the [openhouse-backend](https://github.com/uwo-openhouse/openhouse-backend).

[Create a google maps api key](https://developers.google.com/maps/documentation/javascript/get-api-key#get-the-api-key)
with the maps javascript api, places api, and the geocoding api enabled.

Create a development environment \(`.env.development.local`\)
and paste the following into it with your backend url, and api key
> REACT_APP_BACKEND_URL=Paste your backend url here
> REACT_APP_GOOGLE_MAPS_API_KEY=Paste your google maps api key here

Run `yarn install` to install all required dependencies.

Run `yarn run start` to run the application in development mode.

### Development

To run linting on the project 
run `yarn run lint:eslint` and `yarn run lint:stylelint`.

Anytime any code is pushed or a pull request is made github actions will run a build and linting pipeline.

### Deployment

Any code merged into [develop](https://github.com/uwo-openhouse/openhouse-admin-ui/tree/develop) will automatically be 
deployed to the test environment.

Any code merged into [master](https://github.com/uwo-openhouse/openhouse-admin-ui/) will automatically be 
deployed to the prod environment.
