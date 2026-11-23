---
title: "Projects"
description: "Selected projects in space systems, robotics and computer vision"
---

## PRELUDE: satellite project with JAXA

Nihon University, Tokyo (05/2025 – 10/2025), [Code on GitHub](https://github.com/PRELUDE-Project)

{{< figure src="Prelude-probe.png" alt="PCB boards" caption="Assembled Mission OBC" figureClass="fig-l" >}}

A joint satellite project with JAXA, carried out during a semester abroad in a CubeSat laboratory. I was responsible for the assembly and verification of a high-frequency plasma measurement instrument (soldering, wiring, bus communication analysis) and led the satellite's onboard software development for data acquisition and processing, advancing the system from TRL 1 to TRL 5.

## FloatSat: star-map stitching

University of Würzburg, [Code on GitHub](https://github.com/NickiBroichhausen/FloatSat_AI_Controller)

{{< figure src="Star-Sift-1.png" alt="Image of Stars with information Overlay" caption="Example of a Feature Descriptor Based on Star Formations" figureClass="fig-m" >}}

{{< figure src="Star-Sift-2.png" alt="Image of Stars with information Overlay" caption="Example of All Star Formations in an Image" figureClass="fig-m" >}}

{{< figure src="Star-Sift-3.png" alt="Image of Stars with information Overlay" caption="Example of Feature Matching Between Two Images" figureClass="fig-l" >}}

{{< figure src="Star-Sift-4.png" alt="Image of Stars with information Overlay" caption="Estimate of Current Position Within the Panorama Star Map" >}}

I designed a new feature matching algorithm for star-map stitching, used for pose estimation on the 1-DoF satellite testbed [Floatsat](https://www.informatik.uni-wuerzburg.de/aerospaceinfo/main/projekte/floatsat/). 

## FloatSat: learned attitude control

University of Würzburg, [Code on GitHub](https://github.com/NickiBroichhausen/starmapper)

{{< figure src="Floatsat-controller.png" alt="Graph with control inputs" caption="Example of Satellite Position and Control Input Over Time" figureClass="fig-m">}}

For the Floatsat project, I also trained a SAC reinforcement learning attitude controller and deployed it for real-time inference on a Raspberry Pi. For this I built my own satellite simulation in [basilisk](https://github.com/AVSLab/basilisk/), which I used as a [gym](https://github.com/openai/gym) environment for training.

## Safe emergency-landing zones from aerial imagery

Research Summer Camp on Autonomous Flight, Fraunhofer IVI, Ingolstadt (09/2024)

{{< figure src="Landingsite-architecture.png" alt="Software Architecture" caption="Code Architecture Overview" >}}

{{< figure src="Landingsite-example.png" alt="Aerial Image with Overlay" caption="Landing Spot Detection Based on Image Segmentation" >}}

I fine-tuned an ML model for semantic segmentation of self-recorded aerial imagery to find safe emergency-landing zones, and integrated it into Python software using ROS and OpenCV to run in real time on a Jetson Orin.

## Earthquake detection from seismic spectrograms

NASA Space Apps Challenge, local winner (10/2024), [Code on GitHub](https://github.com/NickiBroichhausen/NASASpaceAppChallange24/blob/main/Seismic_ML.ipynb)

{{< figure src="Space-apps-challange.png" alt="Spectogram" caption="Example of Input Data and Predicted Anomaly" >}}

I trained a CNN on spectrograms of seismic data to detect earthquakes.

<!-- ## CubeSat mission Phase 0 study

ESA CubeSat Summer School, ESEC-Galaxia (08/2024)

Selected for the ESA summer school, where our team carried out its own Phase 0 analysis for a CubeSat mission. I was responsible for the design of the command and data handling subsystem. -->

## Agile project management: Scrum project with an industry partner

AuditTAP MITRE ATT&CK heatmap for FB Pro GmbH, TH Bingen (2023)

A six-person student project in which we learned and applied project management with Scrum, working for a real client. I was product owner in the first sprints, representing the client's needs and setting priorities for the team. We compared two design mockups, delivered a working prototype within a few weeks, and improved it iteratively. The result was used in the an upcoming release of FB Pro's hardening audit tool AuditTAP. [Project report (in German)](https://www.fb-pro.com/audittap-heatmap-studierenden-projekt/)


## Automated flight scripts for Kerbal Space Program (kOS)

Personal project (2022), [Code on GitHub](https://github.com/NickiBroichhausen/Script)

I wrote scripts that fly rockets in Kerbal Space Program using kOS. During this project I dove deep into orbital mechanics and math based programming. The goal was for each script to work in many situations: it shouldn't be tied to one rocket or one planet. So I hardcode as few values as possible and let the script calculate them. I used only parameters available to real rockets and avoided the game's maneuver nodes, so the approach would carry over to real spacecraft.

**Automated launch.** The script launches a rocket from any body into a stable, circular orbit using as little delta-V as possible. It uses a gravity turn during which it optimizes thrust to minimize drag and gravity losses. Then it executes a orbital injection burn to reach a circular orbit at a given altitude. It includes several quality of life features like launching automatically, stages automatically, deploys the fairing at a safe altitude, deploys solar panels and antennas, and handles timewarp and map view.

{{< video src="kosLaunch.mp4" caption="Automated launch into orbit" >}}

**Transfer window.** Given two vessels, the script computes the period of a Hohmann transfer orbit with Kepler's third law, derives the required phase angle from it, and timewarps until that angle is reached. The current angle comes from the vessels' xyz coordinates and the dot product. It always finds the common parent body, so for two moons of different planets it automatically plans the transfer between the planets around the sun.

**Transfer to a target.** Building on the transfer-window script, it warps to a good window and burns at full thrust until the trajectory crosses the target planet's sphere of influence. The player fine-tunes the final orbit by burning prograde.


## Motorcycle lean-angle sensor (Arduino)

Personal project (2021), [Code on GitHub](https://github.com/NickiBroichhausen/Arduino)

To get started with Arduino, I worked through a tutorial, then took on a bigger project: measuring the lean angle of my motorcycle while riding. With this project I gained my first experience with sensor data processing and state estimation. The sensor is an MPU6050, which combines an accelerometer and a gyroscope. My first prototype read and processed its readings and used them to calculate an artificial horizon which is visualized using a servo motor.

{{< video src="arduinoPrototype.mp4" caption="First prototype: the sensor's tilt drives a servo" >}}

To use it on a motorcycle, the prototype had to become more compact and stable, and the code had to cope with constant vibration and tell the centrifugal force in a corner apart from gravity. The code contians filtering out of those misleading values, while still maintaining a high update rate on the lean angle. I also added an LED bar to display the acceleration.

{{< video src="arduinoTest.mp4" caption="Test of the improved version with the LED bar" >}}


