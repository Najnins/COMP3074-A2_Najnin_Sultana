# Welcome Currency Converter app 👋

Developed by: Najnin Sultana
Student ID: 101336862
Course: Mobile Application Development (Assignment 2)

## Overview

This React Native (Expo) application allows users to convert an amount from one currency to another using real-time foreign exchange rates from the FreeCurrencyAPI.

## The app includes:

✔ A main currency converter screen

✔ An About screen showing student info

✔ Input validation

✔ Live API fetching + loading indicator

✔ Error handling for missing/invalid currencies, network failure, or invalid API key

✔ A reusable input component

✔ Clean UI and responsive layout

## Technologies Used

✔ React Native (Expo)

✔ Expo Router

✔ TypeScript

✔ FreeCurrencyAPI

✔ Android Studio Emulator or Expo Go on a physical device

## Features
✔  Currency Converter

## User enters:
✔  Base currency (e.g., CAD)
✔  Target currency (e.g., USD)
✔ Amount to convert

## Performs validation:
✔  3-letter uppercase ISO currency codes
✔  Positive numeric amounts

## API Integration
Fetches latest exchange rates from:
https://api.freecurrencyapi.com/v1/latest

## Displays:
Converted amount
Exchange rate used
Handles errors such as:
Invalid API key
Missing currency
Network issues

## About Screen Shows:
Full Name
Student ID
Short description of the app


## Installation & Setup
✔ Install dependencies
npm install

✔ Add your FreeCurrencyAPI key
Open app/index.tsx and update:
const API_KEY = "YOUR_KEY_HERE";

✔ Start the app
npx expo start

✔ Run on your device or emulator
Press a → open on Android emulator
Press w → open in web browser
Scan QR code → open in Expo Go app

## Testing the API
Confirm the API key works:
https://api.freecurrencyapi.com/v1/latest?apikey=YOUR_KEY&base_currency=CAD&currencies=USD

If your key is correct, you will receive JSON data with exchange rates.