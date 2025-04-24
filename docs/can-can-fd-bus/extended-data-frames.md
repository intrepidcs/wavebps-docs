---
title: "Extended Data Frames"
description: Learn how extended CAN / CAN FD frames use a 29-bit identifier for advanced networking, including protocols like J1939 and GMLAN.
keywords: [CAN FD extended ID, 29-bit CAN identifier, J1939 ID format, GMLAN CAN ID, extended CAN frame, CAN ID segmentation, CAN FD overhead, long CAN IDs]
sidebar_position: 24
sidebar_label: "Extended Data Frames"
---

# Extended Data Frames

Extended identifier CAN / CAN FD Frames use 29 bits for identification purposes instead of 11 for the [standard can frame](../can-can-fd-bus-data-frame). Because this extra ID space adds 20 bits of overhead (18 ID and 2 reserved) it is usually not used by networks which want the highest performance.

In the J1939 and GMLAN protocols, the larger ID is segmented into different parts with each part having meaning. For example the least significant 8 ID bits for both J1939 and GMLAN indicate a node's source address.

<div class="text--center">

<figure>

![image-28](../assets/image-28.png "image-28")
<figcaption>This [Single Wire CAN / CAN FD](../single-wire-can-can-fd) extended ID is 29 bits long (not counting the [stuff bits](../can-can-fd-bus-bit-stuffing)). Many system designers do not use this ID length because of all the overhead it requres.</figcaption>
</figure>
</div>