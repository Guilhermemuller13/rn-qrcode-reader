# QR Code Scanner Component

A React Native component for scanning QR codes using the device camera. Built with Expo Camera for seamless QR code reading functionality.

## Overview

This component provides a simple interface for QR code scanning with the following features:

- Modal-based camera view
- Permission handling
- QR code detection
- Easy to use button interface

## Getting Started

### Prerequisites

- Node.js installed
- React Native development environment set up
- Expo CLI installed

### Installation

1. Clone this repository
```bash
git clone ...
```

2. Install dependencies:
```bash
yarn install
```

3. Start the development server:
```bash
yarn start
```

## Project Structure

app/
├── components/
│ └── Camera/
│ ├── index.tsx # Camera component
│ └── styles.ts # Component styles
├── hooks/
│ └── useQRScanner.ts # QR scanner logic


## Usage

The Camera component provides a button to open the QR scanner modal. When opened, it will:
1. Check for camera permissions
2. Request permissions if not granted
3. Open a full-screen camera view
4. Automatically detect and process QR codes
5. Allow closing the scanner via a button