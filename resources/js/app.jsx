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
import ListCards from "./components/ListCards";

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








