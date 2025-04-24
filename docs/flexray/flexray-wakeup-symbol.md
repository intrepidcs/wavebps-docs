---
title: "FlexRay Wakeup Symbol"
description: The FlexRay wakeup symbol enables power-efficient communication by waking sleeping nodes with unidirectional pulses repeated per cluster configuration.
keywords: [FlexRay wakeup symbol, FlexRay power management, wakeup pulse, FlexRay cluster configuration, FlexRay unidirectional signaling, FlexRay sleep mode]
sidebar_position: 32
sidebar_label: "FlexRay Wakeup Symbol"
---

# FlexRay Wakeup Symbol

FlexRay supports power management wakeup using the wakeup symbol. This wakeup symbol is repeated a fixed number of times. The wakeup symbol only pulls the bus in one direction and this avoids a possible contention that could occur if another node sent the pattern at the same time.

<div class="text--center">

<figure>

![image-52](../assets/image-52.png "image-52")
<figcaption>The wakeup pulse is only one direction which allows possible collisions</figcaption>
</figure>
</div>

<div class="text--center">

<figure>

![image-13](../assets/image-13.png "image-13")
<figcaption>The wakeup symbol is repeated a number of times as part of the FlexRay cluster configuration</figcaption>
</figure>
</div>

<div class="text--center">

<figure>

![image-3](../assets/image-3.png "image-3")
<figcaption>Here the number of wakeup symbols is part of the FlexRay cluster configuration</figcaption>
</figure>
</div>