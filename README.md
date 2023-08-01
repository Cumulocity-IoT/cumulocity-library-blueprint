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

## Build lib and import it

You can individually build a library by running the command `ng build {{library-name}}`. This will create a build for the respective library, which gets stored in the `dist` directory (e.g. for utils it is `/dist/utils`). A build can then be packaged by running the command `npm pack` inside the dist folder of the library. This will create a tarball (*.tgz) for the corresponding library. The tarball can be copied and imported to other projects, which want to use the library.

Create a new folder `/libs/` in your Cumulocity Angular application. Copy your libraries (the tarballs `*.tgz`), which you want to use in the application into the `/libs/` directory. Install a library by running the command: `npm install ./libs/{{library-name}}.tgz`.

Then go ahead and use that library by e.g. adding a module like import {{lib-name}}/lib-module.ts

______________________
These tools are provided as-is and without warranty or support. They do not constitute part of the Software AG product suite. Users are free to use, fork and modify them, subject to the license agreement. While Software AG welcomes contributions, we cannot guarantee to include every contribution in the master project.
