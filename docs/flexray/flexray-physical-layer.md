---
title: "FlexRay Physical Layer"
description: The FlexRay physical layer uses differential signaling with unique voltage levels for 0, 1, and idle, allowing precise, time-controlled communication.
keywords: [FlexRay physical layer, FlexRay differential signaling, FlexRay voltage levels, FlexRay bus idle, FlexRay waveform, FlexRay communication]
sidebar_position: 33
sidebar_label: "FlexRay Physical Layer"
---

# FlexRay Physical Layer

The FlexRay physical layer uses differential signaling to communicate flexray frames. Unlike CAN / CAN FD and LIN the FlexRay physical layer does not allow multiple nodes to drive the bus simultaneously. Also, in FlexRay, the bus voltages are different for a 0, 1, and idle bus.

<div class="text--center">

<figure>

![image-62](../assets/image-62.png "image-62")
<figcaption>The FlexRay Physical Layer uses a differental waveform to signal data.</figcaption>
</figure>
</div>