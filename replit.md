# LuminaHealth Hospital Website

## Overview
A modern healthcare hospital website built with React, TypeScript, and Vite. The website features a clean design with Tailwind CSS and includes pages for services, doctors, appointments, and more.

## Project Structure
- `/components` - Reusable React components (Navbar, Footer, AI Health Assistant)
- `/pages` - Page components (Home, About, Doctors, Appointments, Careers, Contact, Admin)
- `/services` - External service integrations (Firebase, EmailJS, Gemini AI)
- `App.tsx` - Main application with routing
- `index.tsx` - Application entry point
- `vite.config.ts` - Vite configuration

## Technologies
- React 19 with TypeScript
- Vite for bundling and dev server
- Tailwind CSS (via CDN) for styling
- React Router for navigation
- Firebase for data persistence
- EmailJS for contact forms
- Google Gemini AI for health assistant chatbot

## Environment Variables
The following environment variables can be configured:
- `GEMINI_API_KEY` or `API_KEY` - Google Gemini API key for AI Health Assistant feature

## Running the Application
The application runs on port 5000 with `npm run dev`.

## Features
- Home page with hero section and services overview
- About page with hospital information
- Doctors listing and individual doctor profiles
- Appointment booking system
- Careers page for job listings
- Contact page with form
- Admin dashboard with login
- AI Health Assistant chatbot (requires Gemini API key)
