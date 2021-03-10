## Description

⚠️  Warning - only for Android. Please feel free to add a pull request for iOS

Sets the debug host for a React Native app. This can be set using Ctrl/Cmd+M, selecting "Settings", then typing it into the "Debug server host & port for device" popup.

This can get tedious if you find yourself continuously restarting an emulator with a server on the non-default port, especially if you're running multiple emulators

## Installation

```
npm i react-native-debug-address
```

## Usage

You can do this via two environment variables, `DEBUG_HOST` (default: `127.0.0.1`) and `DEBUG_PORT` (default: `8081`). 

`DEBUG_HOST` can be used to set both the address and the port (e.g., `127.0.0.1:8081`).

You can also get and set the debug address programmatically:

```
import {getDebugAddress, setDebugAddress} from 'react-native-debug-address';

await setDebugAddress('127.0.0.1'); // Port defaults to `8081` 
await setDebugAddress('127.0.0.1', '8765');
await setDebugAddress('127.0.0.1:8765');

const debugAddress = await getDebugAddress();
console.log(debugAddress); // Outputs `127.0.0.1:8765`
```

