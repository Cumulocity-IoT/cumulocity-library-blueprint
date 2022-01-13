# cumulocity-library-blueprint

## Prerequisites
Make sure to have the following versions installed:
node v 14.x (check via node -v)
angular-cli v 12.x (check via ng -v)

## How it works
This projects purpose is to provide a basic setup to develop, build and release libraries for the WebSDK.
This is done by using the AngularCLI and using a multi-projects workspace (or monorepo model).
This workspace contains a library called c8y-utils and a demo application which uses this library in order to test its functionality.
## Steps taken to create this project
ng new workspace --create-application false (yes on routing, use less for styling)
cd workspace
ng generate application demo
cd projects/demo
ng add @c8y/cli@1011.75.0
cd ../..
ng generate library c8y-utils
ln -s /yourpath/to/workspace/projects/demo/src /yourpath/to/workspace (required for demo app to start)
## Startup
npm i
ng build c8y-utils (library needs to be build, before it can be used from the demo project)
ng serve (configure proxy.conf to your needs)