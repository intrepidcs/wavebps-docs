---
title: "Unsigned short Format"
description: Understand WaveBPS's unsigned short binary file format using compact 16-bit values, time/voltage multipliers, and trigger info for waveform signal data storage.
keywords: [WaveBPS unsigned short format, wbps short type, waveform binary format, 16-bit waveform data, volts per count, sample rate, trigger location, wbps decoder data]
sidebar_position: 19
sidebar_label: "Unsigned short Format"
---

# Unsigned short Format

## **WaveBPS "wbps" unsigned short**

After the number of channels described in the [parent topic](/wbps-binary-file-format), the short type includes the multipliers for each channel and the sample rates at which the data was captured. This is repeated for each channel (Table 1).

**Table 1 - Multipliers for Time and Voltage (repeated for each channel)**

| Type                             | Header                       |
| -------------------------------- | ---------------------------- |
| Double Precision Float (8 bytes) | m\_dSampleRateInMicroseconds |
| Double Precision Float (8 bytes) | m\_dVoltsPerCount            |

After the multipliers, a 4 byte integer describing the offset to the data (Table 2). You can use the offset to set the file position to the start of the data. Using the offset, the number of raw data samples in the file can be calculated with this equation. (You probably want to cast each item in the equation to an \_\_int64 considering the file's size can be very large)

```cpp
Numbered = (SizeOfFile() - m_iOffsetToTheData) / (sizeof(short) * (m_iNumberOfChannels))
```

**Table 2 - Offset to the data**

| Type                   | Header              |
| ---------------------- | ------------------- |
| Unsigned int (32 bits) | m\_iOffsetToTheData |

At the offset there is one short (2 byte value) for each channel. This repeats for every data sample. The time is in microsecond units multiplied by the offset.

**Table 3 - Voltage and Time for each sample**

| Type                   | Header                                                    |
| ---------------------- | --------------------------------------------------------- |
| Time (in microseconds) | m\_dSampleRateInMicroseconds \* ((double) iIndexOfSample) |
| Voltage (in volts)     | m\_dVoltsPerCount \* ((double) iShortData)                |

For reading the wbps format the above information is the minimum needed to use the format. For writing the format you must have the following information as well.

After the offset integer are two parameters that describe the trigger (Table 4). First is a unsigned integer that indicates whether there is a trigger location present in the file. This will be either 0 meaning no trigger or 1 meaning a trigger is present. Following the trigger is a double precision parameter indicating where in microseconds the trigger exists.

**Table 4 - Trigger Information in File**

| Type                                      | Header                            |
| ----------------------------------------- | --------------------------------- |
| Unsigned int (32 bits)                    | m\_iHasTriggerLocation            |
| Double Precision Floating Point (8 bytes) | m\_dTriggerLocationInMicroseconds |

Following the trigger is information about the decoders used when the file is saved. The decoder is stored as a convenience in the wbps file so when it is loaded it will be properly displayed. This feature is very useful when sharing waveforms.

The file format for the decoders will not be described here. For readers of the file format this data can simply be ignored. For writers of this format, you can write a signed integer equal to -1 for each channel and WaveBPS will simply ignore the decoder section when it reads the file (Table 5).

**Table 5 - Decoder Ignore Sequence (repeat for each channel)**

| Type                 | Header                   |
| -------------------- | ------------------------ |
| Signed int (32 bits) | iDecoderType (set to -1) |