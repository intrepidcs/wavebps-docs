---
title: "Advanced Analysis"
description: Leverage WaveBPS advanced analysis features to perform node-based statistical reporting with min, max, and mean measurements across entire waveform captures.
keywords: [WaveBPS advanced analysis, waveform node analysis, serial data measurement statistics, protocol diagnostics tool, waveform statistics by node, CAN FD node behavior, diff traffic waveform analysis, serial protocol analysis software, waveform min max mean, automatic measurement analysis, DWCAN traffic statistics, diagnostic waveform tool, embedded system debugging tool]
sidebar_position: 7
sidebar_label: "Advanced Analysis"
---

# Advanced Analysis

WaveBPS can do advanced analysis. [When a data base is enabled](/wavebps-basic-databases) you can do statistics on the entire capture according to node (Figure 1). WaveBPS will calculate the min, max, mean for every automatic measurement organized by node. An example node analysis performed on the "dwcan diff traffic" example waveform is [included here](./assets/NodeAnalysis.png) . This type of analysis quickly helps you find nodes that are acting badly.

import YouTubeEmbed from '@site/src/components/YouTubeEmbed';

<YouTubeEmbed videoId="7rItm_F8rj0" caption="Node Analysis Video" />

<div class="text--center">

<figure>

![image-67](./assets/image-67.png "image-67")
<figcaption>Figure 1- Node analysis will create a statistic report of all automatic measurements organized by node.</figcaption>
</figure>
</div>