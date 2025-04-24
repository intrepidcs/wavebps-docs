---
title: "FlexRay Dynamic Frame"
description: FlexRay dynamic frames enable flexible, event-based communication within time slots, allowing shared bandwidth and efficient data transfer in automotive networks.
keywords: [FlexRay dynamic frame, event-based messaging, FlexRay time slots, FlexRay communication, dynamic vs static frame, FlexRay bandwidth sharing]
sidebar_position: 29
sidebar_label: "FlexRay Dynamic Frame"
---

# FlexRay Dynamic Frame

While time deterministic messaging is a major goal of FlexRay, FlexRay also offers a less restrictive event based communication. Here dynamic frames serve a role and put the "Flex" into FlexRay. As part of the time division of the network the FlexRay network provides times at which dynamic frames can be sent.

Unlike a [static frame](../flexray-static-frame) which requires a reserved time, dynamic frames can be sent out when necessary and their reserved time is shared with other dynamic frames. Supporting dynamic frames is an optional feature of FlexRay and is up to the system designer.

#### [Picture of a dynamic frame](/example-waveforms/flexray-dynamic-frame)