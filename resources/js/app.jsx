/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

import './bootstrap';

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import React from "react";
import ReactDom from 'react-dom';
import { createRoot } from 'react-dom/client';
import RequestForEmployee from './components/RequestForEmployee';
import MetersForm from "./components/MetersForm";
import Questions from "./components/Questions";
import Reviews from "./components/Reviews";
import Watch from "./components/Watch";
import About from "./components/About";
import ListCards from "./components/ListCards/ListCards";
import Video from "./components/Video";
import {Employees} from "./components/admin/Employees";
import UserCards from "./components/UserCards";
import HousesList from "./components/HousesList";
import Contacts from "./components/Contacts";
import Rates from "./components/Rates";
import Navigation from "./components/Navigation";

if (document.getElementById('questions')) {
    const root = createRoot(document.getElementById('questions'));
    root.render(<Questions/>);
}

if (document.getElementById('request')) {
    const root = createRoot(document.getElementById('request'));
    root.render(<RequestForEmployee />);
    // ReactDom.render(<RequestForEmployee />, document.getElementById('request'));
}

if (document.getElementById('meters')) {
    const root = createRoot(document.getElementById('meters'));
    root.render(<MetersForm />);
   //  ReactDom.render(<MetersForm />, document.getElementById('meters'));
}

if (document.getElementById('reviews')) {
    const root = createRoot(document.getElementById('reviews'));
    root.render(<Reviews />);
}

if (document.getElementById('usercards')){
    const root=createRoot(document.getElementById('usercards'));
    root.render(<UserCards/>);
}

if (document.getElementById('watch')) {
    const root = createRoot(document.getElementById('watch'));
    root.render(<Watch />);
}

if (document.getElementById('about')) {
    const root = createRoot(document.getElementById('about'));
    root.render(<About />);
}

if (document.getElementById('listCards')) {
    const root = createRoot(document.getElementById('listCards'));
    root.render(<ListCards />);
}

if (document.getElementById('video')) {
    const root = createRoot(document.getElementById('video'));
    root.render(<Video />);
}

if (document.getElementById('employees')){
    const root=createRoot(document.getElementById('employees'));
    root.render(<Employees/>);
}

if (document.getElementById('contacts')){
    const root=createRoot(document.getElementById('contacts'));
    root.render(<Contacts />);
}

if (document.getElementById('rates')){
    const root=createRoot(document.getElementById('rates'));
    root.render(<Rates />);
}

if (document.getElementById('housesList')){
    const root=createRoot(document.getElementById('housesList'));
    root.render(<HousesList />);
}

if (document.getElementById('navigation')){
    const root=createRoot(document.getElementById('navigation'));
    root.render(<Navigation />);
}






