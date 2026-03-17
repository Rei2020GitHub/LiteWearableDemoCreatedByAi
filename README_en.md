# Huawei Lite Wearable Demo: Vital & Posture Monitor

## Overview
This project is a demo application designed to lower the barrier to entry for Huawei Lite Wearable (ArkUI.Lite) development. It helps system engineers and programmers intuitively understand the development process.

The app utilizes heart rate and accelerometer sensors to provide real-time vital monitoring and a posture advisor function.

## Background & Objectives
Currently, Lite Wearable app development is primarily targeted at the B2B sector, resulting in a scarcity of information for individual developers.
This project was created to prove that any engineer with JavaScript knowledge can build a functional wearable app in a short time by leveraging **Generative AI**, even with zero prior experience in Lite Wearable development.

## Features
- **Real-time Heart Rate Monitoring**: Instantly reflects values retrieved from the sensor.
- **Posture Logic**: An advisor function that determines arm posture using accelerometer data.
- **Device-Specific Permission Handling**: Implementation of user guidance for wearable-specific permission errors (e.g., Code 602).
- **Multi-screen Navigation**: Implementation of wearable routing.

## Key Insight: Leveraging Generative AI
The most significant aspect of this project is that **even without prior Lite Wearable experience, a prototype was completed in a short period by using Generative AI as a "copilot."**

- Calling complex sensor APIs
- Managing wearable-specific lifecycles
- Auto-generating layouts (HML/CSS)
- Troubleshooting error codes (e.g., 602)

All these challenges were solved through dialogue with AI, demonstrating that jumping into a new platform is now easier than ever for engineers.

## Requirements
- **IDE**: DevEco Studio 3.0 or later
- **Supported Devices**: Huawei Watch GT series and other Lite Wearable devices
- **Language**: JavaScript (ArkUI.Lite paradigm)

## Project Structure
- `pages/index`: Main screen (Heart rate & Accelerometer display)
- `pages/detail`: Detail screen (Posture Advisor)
- `common`: Image resources (heart.png, ok_mark.png, warning_mark.png)