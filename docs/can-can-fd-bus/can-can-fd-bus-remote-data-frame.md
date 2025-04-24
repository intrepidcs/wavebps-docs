---
title: "CAN / CAN FD Bus Remote Data Frame"
description: Understand CAN / CAN FD Remote Frames—optional frames used to request data without carrying any, identified by the RTR bit. Rare in automotive use.
keywords: [CAN FD remote frame, CAN RTR bit, remote data request, CAN bus RTR, CAN FD no data frame, automotive CAN FD, optional CAN frame]
sidebar_position: 26
sidebar_label: "CAN / CAN FD Bus Remote Data Frame"
---

# CAN / CAN FD Bus Remote Data Frame

CAN / CAN FD bus remote frames are optional frames used to request data. Remote frames contain no data section even though the data length code can be greater than zero. You can determine if a frame is a remote frame from the state of the RTR bit (RTR=1). Remote frames are typically not used in automotive applications.

<div class="text--center">

<figure>

![image-27](../assets/image-27.png "image-27")
<figcaption>Here a remote frame is shown on a CAN / CAN FD L waveform</figcaption>
</figure>
</div>