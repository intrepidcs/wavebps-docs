---
title: "WBPS Binary File Format"
description: Learn about the WaveBPS “wbps” binary file format for efficient waveform storage using floating point or 16-bit short formats in big endian byte order.
keywords: [WaveBPS file format, wbps binary format, waveform data storage, unsigned short format, floating point waveform, big endian waveform file, WaveBPS header format]
sidebar_position: 17
sidebar_label: "WBPS Binary File Format"
---

# WBPS Binary File Format

## **WaveBPS "wbps" binary file format**

**WaveBPS** uses a binary file format to efficiently store its raw waveform files. This document describes the file format enough for third parties to read and write the files. These files have the extension "wbps". These formats are created in Intel big endian byte order.

Internally, the WaveBPS wbps file is actually two main formats. First is the floating point format and the other uses an unsigned short (16 bits). The unsigned short is considerably smaller and is used when possible. When not possible, such as when a waveform was originally loaded from a csv file, the floating point format is used. The parser for the wavebps file can determine which file type it is by reading the file header. The short format is always used when capturing from an oscilloscope.

The file header is always 16 bytes. The header will be one of the two following possibilities (Table 1):

**Table 1 - Possible 16 byte headers**

| Type                            | Header                                                                       |
|---------------------------------|------------------------------------------------------------------------------|
| Double Precision Floating Point | `char szverion5 [] = {'w','a','v','e','b','p','s','5','0','0',0,0,0,0,0,0};` |
| Unsigned Short (16 bits)        | `char szverion6 [] = {'w','a','v','e','b','p','s','6','0','0',0,0,0,0,0,0};` |


Following the header is a 4 byte integer describing the number of channels (Table 2). This is the same for both formats.

**Table 2 - Number of Channels**

| Type                   | Header               |
| ---------------------- | -------------------- |
| Unsigned int (32 bits) | m\_iNumberOfChannels |

After the number of channels, the file formats diverge and are described in separate topics.

Follow this link for the [double precision floating point topic](./double-precision-format).

Follow this link for the [unsigned short topic](./unsigned-short-format).