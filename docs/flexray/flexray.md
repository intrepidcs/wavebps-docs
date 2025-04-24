---
title: "FlexRay"
description: FlexRay is a high-speed, time-deterministic automotive protocol ideal for safety-critical applications, offering precise timing, fault tolerance, and efficiency.
keywords: [FlexRay protocol, time deterministic network, automotive communication, FlexRay vs CAN FD, FlexRay wake up, FlexRay static dynamic frames, FlexRay advantages disadvantages]
sidebar_position: 28
sidebar_label: "FlexRay"
---

# FlexRay

FlexRay is a new protocol designed for time deterministic, high speed, and/or safety critical applications. FlexRay nodes can only transmit at very specific times according to the design of the network. FlexRay has the ability to absolutely guarantee latency using [static frames](flexray-static-frame) or offer more efficient bandwidth usage via [dynamic frames](../example-waveforms/flexray-dynamic-frame).

<div class="text--center">

<figure>

![image-4](../assets/image-4.png "image-4")
<figcaption>Here FlexRay Messages captured with Vehicle Spy show a <a href="https://en.wikipedia.org/wiki/Standard_deviation" target="_blank">standard deviation</a> of 0 on periodic rate transmission.</figcaption>
</figure>
</div>

Since all transmit in FlexRay is based on time everyone on the bus must have the same clock. Therefore a [startup procedure](flexray-startup) is defined that allows all nodes in the network to become synchronized. After startup, constant resyncronization takes place.

FlexRay also supports power management via a [wake up mechanism](flexray-wakeup-symbol). Sleeping nodes can wake up up on an external input and perform signaling on the FlexRay bus to wake up all other nodes.

The [FlexRay physical layer](flexray-physical-layer) signals 1's and 0's of the FlexRay protocol. It also offers a third state of idle bus.

[FlexRay has advantages over CAN / CAN FD and LIN](../compare-flexray-can-can-fd-bus-and-lin-bus) for fault tolerance, speed, and time determinism. FlexRay has disadvantages including complexity, cost, EMC, and the lack of experienced FlexRay engineers.

#### [Visit the FlexRay Consortium Website](http://www.flexray.com/)