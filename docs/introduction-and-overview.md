---
title: "Introducing WaveBPS: Portable Low level analog serial data analysis"
description: WaveBPS captures and decodes analog waveforms like CAN, LIN, UART, SPI, and I2C for in-depth protocol analysis, debugging, and test automation.
keywords: [WaveBPS, analog waveform analysis, protocol decoding tool, CAN waveform, LIN analysis, UART debugging, SPI decode, I2C oscilloscope, FlexRay analysis, PicoScope software, USB oscilloscope, serial protocol capture, Vehicle Spy scripting, protocol timing violations, GMLAN 3110, CAN FD errors, waveform export, statistical node analysis, TCP/IP API, Intrepid Control Systems]
sidebar_position: 2
sidebar_label: "Introducing WaveBPS: Portable Low level analog serial data analysis"
---

# Introducing WaveBPS: Portable Low level analog serial data analysis

Often in the real world things go wrong to the point where protocol tools do not show enough information - you have to understand what is going on at a lower level.

Intrepid Control Systems, Inc. is proud to introduce WaveBPS - an advanced tool for capturing and analyzing digital protocolanalog waveforms like [SPI](/other-buses/spi-bus), [I2C](/other-buses/i2c-or-smbus), [CAN / CAN FD Bus](/can-can-fd-bus/), [UART ](/other-buses/uart-k-line-j1708-iso9141-gm-cgi-rs232)(RS232, J1708, K-Line, SCI, GM CGI), [J1850](/other-buses/j1850), [FlexRay ](/flexray/)or [LIN Bus](/lin-bus/).

Besides general purpose monitoring, WaveBPS can quickly capture infrequent or intermittent protocol violations. For example, you can track down the error frames that may occur intermittently. Another application is verifying there are no timing violations on software based protocol implementations.

The trial version of the software is available for [download](https://intrepidcs.com/support/contact-support/) and is useable for training and learning these protocols. The standard and professional versions of WaveBPS are available for [purchase](/licensing-wavebps).

<div class="text--center">

<figure>

![WaveBPS-Overview](./assets/CAN_bus_decode.png "WaveBPS-Overview")
<figcaption></figcaption>
</figure>
</div>

import CardGrid from '@site/src/components/CardGrid';

<CardGrid
  cards={[
    {
      title: 'FlexRay Waveforms',
      text: 'These are 10Mbit FlexRay static slot frames.',
      //img: '/assets/flexray.png',
      link: '/example-waveforms/flexray-frame-decode',
    }, 
    {
      title: 'CAN / CAN FD bus Waveform',
      text: 'This is a 500Kbit DW CAN Bus standard frame.',
      //img: '/assets/can.png',
      link: '/example-waveforms/can-can-fd-bus-waveform-decoding',
    },
    {
      title: 'LIN bus Waveform',
      text: 'These are 10.41 Kbit LIN Bus frames',
      //img: '/assets/intrepid.png',
      link: '/example-waveforms/lin-bus-decode',
    },
    {
      title: 'Overview Video',
      //text: 'Visit Intrepid Control Systems main website for more tools.',
      img: '/img/overview-image.jpg',
      link: 'https://www.youtube.com/watch?v=ROJswJmeXnE',
    },
    {
      title: 'Specifications',
      //text: 'Visit Intrepid Control Systems main website for more tools.',
      //img: '/assets/intrepid.png',
      link: '/specifications',
    },
    {
    title: 'Buy Now',
    link: '/licensing-wavebps',
    },
        {
    title: 'Product Sales Sheet',
    link: 'https://guide.intrepidcs.com/brochures/icsusa/wavebps.pdf',
    },
  ]}
/>

<br/>

<div class="text--center custom-img">

<figure>

![picoscope5000-best](./assets/picoscope5000-best.png "picoscope5000-best")
<figcaption></figcaption>
</figure>
</div>

### USB Oscilloscope Features

[WaveBPS directly captures](/live-capture-with-wavebps) data directly from a [PicoScope USB Oscilloscope](http://www.picotech.com/oscilloscope-specifications.html). Depending on the model WaveBPS supports up to 4 channels, 1 GS/s sampling and a memory depth of 128 Mega samples. For hardware triggering the scope offers a CAN / CAN FD error trigger, standard scope analog triggering, and CAN / CAN FD, LIN script based triggering with an Intrepid ValueCAN3 or neoVI FIRE. Also, WaveBPS can load waveform files captured from [popular oscilloscopes](/getting-data-into-wavebps/).

### WaveBPS Productivity Features

Usability is one of the best features of WaveBPS. WaveBPS understands the waveforms you are looking at so you can [quickly navigate and find events and errors](/navigation). Full mouse and keyboard support allows you to quickly find the information you are looking for. [Powerful cursor measurements](/cursor-measurements) allow you to quickly determine time, voltage and bus utilization.

### Export Support

After determining the parts of the waveform of interest the user can [export the waveform subset](/exporting-waveforms-from-wavebps) for other users to view.

### Serial Data Decode Support

WaveBPS supports serial decode on FlexRay, CAN Bus, UART (J1708, K-Line, SCI, RS232, GM CGI), J1850, SPI, I2C or LIN Bus. [The baud rate, thresholds and other settings for these protocols is completely configurable by the user in case of specialty probes (ie. current or differential)](/setting-up-serial-decoding-in-wavebps) modify the expected voltage ranges of the waveforms. WaveBPS also supports GMLAN 3110 high speed mode switch for single wire CAN / CAN FD.

### Test Automation

WaveBPS has a [TCP/IP software API](/automated-test-with-wavebps) allowing remote control and analysis from other applications. This includes the ability to control WaveBPS with Vehicle Spy scripting.

### Powerful Analysis

WaveBPS can also perform [statistical node analysis](/advanced-analysis) where each automatic measurement is grouped by node and exported to a spreadsheet file.