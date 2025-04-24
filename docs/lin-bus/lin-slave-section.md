---
title: "LIN Slave Section"
description: Explore the LIN slave section, covering data bytes and checksum, including classic and enhanced checksum types used to verify data integrity in LIN frames.
keywords: [LIN slave section, LIN data bytes, LIN checksum, classic checksum, enhanced checksum, LIN frame, data integrity, UART protocol, LIN communication, automotive LIN]
sidebar_position: 45
sidebar_label: "LIN Slave Section"
---

# LIN Slave Section

The LIN Slave section includes the data of the LIN frame followed by the checksum. The slave section follows the [LIN Header](../lin-header) part of the [LIN Frame](../lin-frame).

<div class="text--center">

<figure>

![image-69](../assets/image-69.png "image-69")
<figcaption>The LIN Data section includes up to 8 data bytes</figcaption>
</figure>
</div>

After the data section is the checksum. The checksum will vary based on the LIN specification. LIN supports both a classic and enhanced checksum. The classic checksum uses all the databytes while the enhanced also includes the ID.


<div class="text--center">

<figure>

![image-71](../assets/image-71.png "image-71")
<figcaption>The LIN Checksum is the last part of the LIN frame.</figcaption>
</figure>
</div>