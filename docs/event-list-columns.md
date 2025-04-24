---
title: "Event List Columns"
description: WaveBPS Event List columns provide automatic measurements such as timing, voltage, errors, and protocol-specific metrics for CAN, LIN, FlexRay, UART, J1850, and I2C. Clickable entries enhance waveform navigation and diagnostics.
keywords: [WaveBPS event list, CAN event columns, FlexRay measurements, LIN protocol analyzer, UART event decoder, I2C waveform analysis, automotive protocol diagnostics, WaveBPS error count, transmission width measurement, CAN FD Ack Skew, node name database, protocol-specific measurement tools, event timing in WaveBPS, waveform protocol columns]
sidebar_position: 11
sidebar_label: "Event List Columns"
---

# Event List Columns

Each column in the event list represents an automatic measurement. This document describes each column present. Different decoders support different automatic measurements. Clicking on any automatic measurement will change zoom view to the time that measurement was made.

**Table 1 - General Columns**

| Name   | Description                                                                                                    | Notes                                                                                                                   |
| ------ | -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| TStart | Start time of the event. The icon signifies the channel and if there are any warnings or errors in this event. |                                                                                                                         |
| TWidth | The width of the event in time.                                                                                |                                                                                                                         |
| T-IFS  | The time since the last event.                                                                                 | Use for testing diagnostic response messaging which requires specific delays.                                           |
| ErCnt  | Indicates how many errors this event has                                                                       | Use with filter to quickly find events that have errors                                                                 |
| WrnCnt | Indicates how many warnings this event has                                                                     |                                                                                                                         |
| ID     |                                                                                                                |                                                                                                                         |
| Node   | Name of the node sending this event (requires a data base)                                                     | When enabled with a data base this enables statistical [node analysis on automatic measurements](/advanced-analysis).   |
| Data   | shows the data for the event                                                                                   |                                                                                                                         |

**Table 2 - FlexRay Columns**

| Name       | Description                                     | Notes |
| ---------- | ----------------------------------------------- | ----- |
| Res        | The FlexRay reserved bit                        |       |
| PPI        | Payload preamble indicator bit                  |       |
| Null       | Null frame bit                                  |       |
| Sync       | sync frame bit                                  |       |
| Start      | startup frame bit                               |       |
| Ch         | the flexray channel a or b                      |       |
| H-CRC      | the header crc                                  |       |
| CycCount   | the current cycle count                         |       |
| CRC        | the CRC - will be different for channel a and b |       |
| TSS (bits) | transmission start sequence measurement in bits |       |
| Dyn        | indicates whether this is a dynamic frame       |       |
| Len        | Length of the data section in words             |       |

**Table 3 - CAN / CAN FD** **Columns**

| Name               | Description                                                                                                                                                         | Notes |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| RTR                | Remote transmit request bit                                                                                                                                         |       |
| IDE                | Identifier extension bit                                                                                                                                            |       |
| RB0                | reserve bit 0                                                                                                                                                       |       |
| RB1                | reserve bit 1                                                                                                                                                       |       |
| HiV (SWCAN ONLY)   | For single wire can this indicates the transmitter of the message is using the transceiver's High voltage mode                                                      |       |
| HiAck (SWCAN ONLY) | For single wire can this indicates the ack bit is high voltage meaning at least one receiver is using the high voltage mode of the transceiver                      |       |
| HiSpd (SWCAN only) | for single wire can this indicate the a high speed transition has occurred and is operating at the high bit rate                                                    |       |
| SRR                | Standard frame remote request bit                                                                                                                                   |       |
| Len                | Length of data frame in bytes                                                                                                                                       |       |
| CRCDel             | The CRC Delimiter space                                                                                                                                             |       |
| Ack                | The acknowledgement bit                                                                                                                                             |       |
| AckDel             | the acknowledgement delimiter bit                                                                                                                                   |       |
| CRC                | The 15 bit CRC checksum                                                                                                                                             |       |
| Stuffs             | how many stuff bits are present in the CAN / CAN FD message                                                                                                         |       |
| BitTol             | The bit tolerance. The bits controlled only by the transmitter are measured between two recessive to dominant edges. This time is compared with the ideal bit time. |       |
| MinV               | Here a minimum voltage is measured across the bits controlled by the transmitter (after the ID and before the Ack bit)                                              |       |
| MaxV               | Here a maximum voltage is measured across the bits controlled by the transmitter (after the ID and before the Ack bit)                                              |       |
| AckSkew            | The measures the time difference between the ideal starting ack position and the actual one                                                                         |       |
| AckWidth           | This measures the width of the ack bit                                                                                                                              |       |
| DataPercent        | This measures the payload percentage of the message. This is how much data was sent compared to how long the entire frame requires.                                 |       |

**Table 4 - LIN Columns**

| Name      | Description                                                                                       | Notes |
| --------- | ------------------------------------------------------------------------------------------------- | ----- |
| Brk(bits) | Length of sync break in bits                                                                      |       |
| Sync      | value of the sync byte                                                                            |       |
| TSlvRsp   | Time between the master header and the slave response                                             |       |
| THeader   | Length of the master header in time                                                               |       |
| TResponse | Length of the entire slave response                                                               |       |
| TMaxUtil  | This the length of the frame compared to the ideal length \* 40% allowed by the LIN specification |       |
| Len       | This is the length of the frames data section.                                                    |       |
| ChkSum    | This is the checksum of the LIN message. Both standard and enhanced are calculated.               |       |

**Table 5 - J1850 VPW Columns**

| Name | Description                                           | Notes |
| ---- | ----------------------------------------------------- | ----- |
| SOF  | The length of the start of frame symbol in time       |       |
| Len  | the length of the message in bytes                    |       |
| CRC  | The CRC check sum                                     |       |
| IFR  | In-frame response data (chrysler implementation only) |       |

**Table 6 - UART Columns**

| Name         | Description                                      | Notes |
| ------------ | ------------------------------------------------ | ----- |
| Brk(bits)    | the number of bits of a UART break if present    |       |
| Len          | the length of the data section                   |       |
| Data (ASCII) | The data section represented as ascii characters |       |

**Table 6 - I2C Columns**

| Name    | Description                                       | Notes |
| ------- | ------------------------------------------------- | ----- |
| AddrLen | The length of the I2C address either 7 or 10 bits |       |
| R/W     | This indicates if it is an I2C write or read      |       |
| Address | This is the address of the message                |       |
| Len     | This is the length of the data                    |       |