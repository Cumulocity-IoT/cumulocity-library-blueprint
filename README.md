# cumulocity-library-blueprint

## Prerequisites

Make sure to have the following versions installed:
[node](https://nodejs.org/en/download/) v 14.x (check via node -v)
[Angular CLI](https://github.com/angular/angular-cli) v 12 (check via ng -v)

## How it works

This projects purpose is to provide a basic setup to develop, build and release libraries for the WebSDK.
This is done by using the AngularCLI and using a multi-projects workspace (or monorepo model).
This workspace contains a library called c8y-utils and a demo application which uses this library in order to test its functionality.
## Steps taken to create this project

`ng new workspace --create-application false` (yes on routing, use less for styling)

`cd workspace`

`ng generate application demo`

`cd projects/demo`

`add @c8y/cli@1011.75.0`

`cd ../..`

`ng generate library c8y-utils`

`ln -s /yourpath/to/workspace/projects/demo/src /yourpath/to/workspace` (required for demo app to start)
## Startup

Install dependencies `npm i`

Build the library so the demo project can use it `ng build c8y-utils`

Configure proxy.conf.json to target your tenant and start using `ng serve`