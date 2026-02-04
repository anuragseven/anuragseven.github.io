---
title: "Beat The Culprit"
description: "A Python CLI application using OpenCV and Azure Face API to detect and identify criminals from video streams in real-time."
tech: ["Python", "OpenCV", "Azure Face API", "Twilio SMS", "CLI"]
demo: "https://youtu.be/WIN6d3oFrq8"
github: "https://github.com/anuragseven/beat-the-culprit"
featured: true
---

## Overview

Beat The Culprit is a command-line application that combines computer vision with cloud-based facial recognition to identify potential criminals from live video feeds. When a match is found, authorities are immediately notified via SMS, enabling rapid response to security threats.

What makes this project special? The entire application was built in just **200 lines of code**, demonstrating that powerful security solutions don't always require complex implementations.

## How It Works

The application follows a streamlined pipeline:

1. **Video Capture**: OpenCV captures frames from a video stream (webcam or video file)
2. **Face Detection**: Each frame is analyzed to detect human faces using OpenCV's face detection algorithms
3. **Face Recognition**: Detected faces are sent to Azure Face API for identification against a database of known criminals
4. **Alert System**: If a match is found, the system triggers an SMS alert to notify responsible authorities via Twilio

## Key Features

- **Real-Time Processing**: Continuously monitors video streams for faces
- **Cloud-Powered Recognition**: Leverages Azure's powerful Face API for accurate identification
- **Instant Notifications**: SMS alerts ensure authorities are notified immediately
- **Lightweight Design**: Minimal dependencies and simple architecture
- **Command-Line Interface**: Easy to deploy and integrate with existing systems

## Technical Stack

| Component | Technology |
|-----------|------------|
| Video Processing | OpenCV |
| Face Detection | OpenCV Haar Cascades |
| Face Recognition | Azure Face API |
| SMS Notifications | Twilio API |
| Runtime | Python 3.x |

## Architecture

```
Video Stream → Face Detection → Azure Face API → Match Found? → SMS Alert
                    ↓                                ↓
              No Face Found                    No Match
                    ↓                                ↓
            Continue Monitoring              Continue Monitoring
```

## Use Cases

- **Security Checkpoints**: Monitor entry points for known offenders
- **Public Venues**: Enhance security at events, malls, and transportation hubs
- **Law Enforcement**: Assist police in identifying suspects
- **Access Control**: Prevent unauthorized individuals from entering restricted areas

## What I Learned

Building this project was a fantastic learning experience. It taught me:
- How to work with real-time video processing using OpenCV
- Integration with cloud-based AI services (Azure Cognitive Services)
- Building notification systems with Twilio
- Writing clean, efficient code that does a lot with minimal complexity

The challenge of keeping the codebase under 200 lines forced me to think carefully about architecture and avoid unnecessary abstractions.
