---
title: "Live Capture with WaveBPS"
description: Learn how to use WaveBPS for live waveform capture via PicoScope, including capture modes, trigger settings, filter match, and analog signal customization.
keywords: [WaveBPS live capture, live waveform capture, PicoScope with WaveBPS, serial data oscilloscope, analog signal capture, CAN FD trigger, WaveBPS capture modes, filter match capture, real-time waveform decode, WaveBPS settings, oscilloscope protocol analysis, waveform trigger settings, multiple capture mode, serial protocol diagnostics, waveform troubleshooting tool]
sidebar_position: 5
sidebar_label: "Live Capture with WaveBPS"
---

# Live Capture with WaveBPS

WaveBPS can capture data in real time from a [Picoscope USB oscilloscope](http://www.picotech.com/oscilloscope-specifications.html) (Figure 2). WaveBPS includes 3 capture modes including single capture, multiple capture, and a filter based multi capture. The filter based capture can be used to capture events based on the decoded information.

If you have the correct oscilliscope series selected WaveBPS will automatically connect to the PicoScope when it starts. After the PicoScope is configured you can click start on the capture toolbar (figure 1). The capture toolbar also lets you select the capture mode and displays capture and decode progress.

import YouTubeEmbed from '@site/src/components/YouTubeEmbed';

<YouTubeEmbed videoId="lmivOdDwMqE" caption="Live Capture Video" />

Table 1 - Live Capture Modes

| Capture Mode  | Description                                                                               |
| ------------- | ----------------------------------------------------------------------------------------- |
| Single        | Captures and decodes a single buffer                                                      |
| Multiple      | Repeated captures and decodes buffers                                                     |
| Filter Match  | Repeated captures and decodes buffers until at least one decoded event matches the filter |

<div class="text--center">

<figure>

![image (56)](./assets/image-56.png "image (56)")
<figcaption>Figure 1 - You can start the capture and select the capture mode from the capture toolbar.</figcaption>
</figure>
</div>

WaveBPS is a fully capable oscilloscope application allowing you to capture regular analog signals along with serial data. Therefore, WaveBPS has the same settings you are accustomed to on a traditional oscilloscope.

<div class="text--center">

<figure>

![image (41)](./assets/image-41.png "image (41)")
<figcaption>Figure 2 - You can purchase WaveBPS with the PicoScope.</figcaption>
</figure>
</div>

You can customize your capture in many ways (figure 3). First, you can select how many channels you wish to acquire (Part B). Next, for each channel you can specify the probe type, voltage range and electrical coupling (Part C). For serial data, recommended settings are 10x probes, +/-20 V or lower range depending on the protocol, and DC coupling.

Next you can set up the capture rate and length (Part D). First you pick how many samples you want to capture. Depending on the PicoScope, you can capture up to 128 mega samples. Next you can pick your sample rate as either samples per second or microseconds per sample. When you change your sample rate or sample length the total capture time display will update with how long your capture will last.

Trigger setup is next (Part E). The Oscilloscope uses the trigger specification to determine when to capture data. Here you can pick the source (Channel A, Channel B, Channel C, Channel D, or External). You can also specify a timeout - this is how long WaveBPS waits for a trigger before auto triggering. For the trigger channel you can specify the signal transition that must occur according to voltage, transition direction and hysteresis.

WaveBPS supports a CAN / CAN FD error frame trigger on selected oscilliscopes (pulse width advanded trigger). The error frame must occur on the trigger channel you selected. For this the trigger must be above the threshold for the proper number of bit times to qualify as an error frame. To enable this choose the CAN / CAN FD error frame special trigger and enter the bit rate of the CAN / CAN FD bus.

The trigger supports pre-trigger data. This means you can capture a percentage of your buffer before the actual trigger condition. This is set in percent of your total capture length.

For the filter match capture mode there are additional options (Part E). First, when a filter match occurs after a decode WaveBPS can play a wave audio file. Next, WaveBPS can also automatically save the file. Finally, WaveBPS can also automatically restart the filter match capture to look for the next event.

<div class="text--center">

<figure>

![image (50)](./assets/image-50.png "image (50)")
<figcaption>Figure 3 - There are many options to customize your analog capture.</figcaption>
</figure>
</div>