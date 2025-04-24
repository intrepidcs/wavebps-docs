---
title: "Getting Data into WaveBPS"
description: Load waveform files from PicoScope or LeCroy into WaveBPS for decoding, analysis, and event tracking. Supports config import/export and custom plug-ins
keywords: [WaveBPS import, waveform file decoder, load PicoScope data, load LeCroy waveform, open waveform in WaveBPS, waveform decoding, protocol analysis tool, serial data viewer, event tracking, oscilloscope waveform import, protocol decoder setup, wavebps defaults.xml, WaveBPS plug-in, import/export configuration, visual C++ plugin, test automation, USB oscilloscope software]
sidebar_position: 3
sidebar_label: "Getting Data into WaveBPS"
---

# Getting Data into WaveBPS

Besides capturing [live data from a USB oscilliscope,](/live-capture-with-wavebps) you can load data into **WaveBPS** from a saved data file. First you pick a decoder and click "Open Waveform" (figure 1). After doing this the waveform will be plotted and decoded. The zoomed waveform view will then show the first event in the data.

import YouTubeEmbed from '@site/src/components/YouTubeEmbed';

<YouTubeEmbed videoId="meTjOEeCTEE" caption="Importing Data Video" />

You can also click the refresh button to decode the current waveform again. This maybe useful if you want to update the view with a new decoding or thresholds. Finally when you start again a button will appear allowing you to open the last waveform file you looked at.

<div class="text--center">

<figure>

![import_tb](../assets/import_tb.png "import_tb")
<figcaption>Figure 1 - you can open waveforms from a file by clicking "Open Waveform</figcaption>
</figure>
</div>

**WaveBPS** supports waveforms from Lecroy and Picoscope oscilloscopes. [Also you can write a simple import plug-in using Visual C++](/loading-custom-data-into-wavebps) using the sample project provided. Please [contact us](http://www.intrepidcs.com) to write an import for your capture device.

WaveBPS automatically stores your current setup when you close the application. This setup resides in a file called "wavebps defaults.xml" stored in the applications directory. You can save or load a previous setup at anytime by clicking the application configuration tab and selecting import or export configuration. You can also load these remotely using the [Text API](/automated-test-with-wavebps).

<div class="text--center">

<figure>

![config_wavebps](../assets/config_wavebps.png "config_wavebps")
<figcaption>Figure 2 - you can import and export the current wavebps configuration.</figcaption>
</figure>
</div>