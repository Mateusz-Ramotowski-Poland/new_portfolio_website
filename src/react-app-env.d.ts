/// <reference types="react-scripts" />
declare module "*.pdf";
/* 
https://stackoverflow.com/questions/67262914/what-is-the-react-app-env-d-ts-in-a-react-typescript-project-for
This file references TypeScript types declarations that are specific to projects started with Create React App.
These type declarations add support for importing resource files such as bmp, gif, jpeg, jpg, png, webp, and svg.
 That means that the following import will work as expected without errors:
import logo from './logo.svg';
It also adds support for importing CSS Modules. This relates to import of files with .module.css,.module.scss, and .module.sass extensions. */
