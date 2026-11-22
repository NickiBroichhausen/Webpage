---
title: "Projects"
description: "Selected projects in space systems, robotics and computer vision"
---

## PRELUDE: satellite project with JAXA

Nihon University, Tokyo (05/2025 – 10/2025)

{{< figure src="Prelude-probe.png" alt="PCB boards" caption="Assembled Mission OBC" figureClass="fig-l" >}}

A joint satellite project with JAXA, carried out during a semester abroad in a CubeSat laboratory. I was responsible for the assembly and verification of a high-frequency plasma measurement instrument (soldering, wiring, bus communication analysis) and led the satellite's onboard software development for data acquisition and processing, advancing the system from TRL 1 to TRL 5.

## FloatSat: star-map stitching and learned attitude control

University of Würzburg

{{< figure src="Star-Sift-1.png" alt="Image of Stars with information Overlay" caption="Example of a Feature Descriptor Based on Star Formations" figureClass="fig-m" >}}

{{< figure src="Star-Sift-2.png" alt="Image of Stars with information Overlay" caption="Example of All Star Formations in an Image" figureClass="fig-m" >}}

{{< figure src="Star-Sift-3.png" alt="Image of Stars with information Overlay" caption="Example of Feature Matching Between Two Images" figureClass="fig-l" >}}

{{< figure src="Star-Sift-4.png" alt="Image of Stars with information Overlay" caption="Estimate of Current Position Within the Panorama Star Map" >}}

{{< figure src="Floatsat-controller.png" alt="Graph with control inputs" caption="Example of Satellite Position and Control Input Over Time" figureClass="fig-m">}}

I designed a new feature matching algorithm for star-map stitching, used for pose estimation on a 1-DoF satellite testbed. I also trained a SAC reinforcement learning attitude controller and deployed it for real-time inference on a Raspberry Pi.

## Safe emergency-landing zones from aerial imagery

Research Summer Camp on Autonomous Flight, Fraunhofer IVI, Ingolstadt (09/2024)

{{< figure src="Landingsite-architecture.png" alt="Software Architecture" caption="Code Architecture Overview" >}}

{{< figure src="Landingsite-example.png" alt="Aerial Image with Overlay" caption="Landing Spot Detection Based on Image Segmentation" >}}

I fine-tuned an ML model for semantic segmentation of self-recorded aerial imagery to find safe emergency-landing zones, and integrated it into Python software using ROS and OpenCV to run in real time on a Jetson Orin.

## Earthquake detection from seismic spectrograms

NASA Space Apps Challenge, local winner (10/2024)

{{< figure src="Space-apps-challange.png" alt="Spectogram" caption="Example of Input Data and Predicted Anomaly" >}}

I trained a CNN on spectrograms of seismic data to detect earthquakes.

## CubeSat mission Phase 0 study

ESA CubeSat Summer School, ESEC-Galaxia (08/2024)

Selected for the ESA summer school, where our team carried out its own Phase 0 analysis for a CubeSat mission. I was responsible for the design of the command and data handling subsystem.

## Agile project management: Scrum project with an industry partner

AuditTAP MITRE ATT&CK heatmap for FB Pro GmbH, TH Bingen (2023)

A six-person student project in which we learned and applied project management with Scrum, working for a real client. I was product owner in the first sprints, representing the client's needs and setting priorities for the team. We compared two design mockups, delivered a working prototype within a few weeks, and improved it iteratively. The result was used in the an upcoming release of FB Pro's hardening audit tool AuditTAP. [Project report (in German)](https://www.fb-pro.com/audittap-heatmap-studierenden-projekt/)

---

More code is on [GitHub](https://github.com/NickiBroichhausen).
