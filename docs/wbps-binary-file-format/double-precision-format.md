---
title: "Double Precision Format"
description: Explore WaveBPS's double precision floating point file format for waveform data with time, channel values, and trigger metadata for advanced signal analysis.
keywords: [WaveBPS double precision, waveform file format, wbps float format, trigger metadata, waveform timestamp, channel voltage data, wbps structure, waveform decoder format]
sidebar_position: 18
sidebar_label: "Double Precision Format"
---

# Double Precision Format

## WaveBPS "wbps" Double Precision Floating Point Type

After the number of channels described in the [parent topic](/wbps-binary-file-format). The floating point format includes a 4 byte integer describing the offset to the data (Table 1). You can use the offset to set the file position to the start of the data. Using the offset, the number of raw data samples in the file can be calculated with this equation. (You probably want to cast each item in the equation to an \_\_int64 considering the files sizes can be very large)

```cpp
NumberOfDataValues = (SizeOfFile() - m_iOffsetToTheData) / (sizeof(double) * (1+m_iNumberOfChannels))
```

**Table 1 - Offset to the data**

| Type                   | Header              |
| ---------------------- | ------------------- |
| Unsigned int (32 bits) | m\_iOffsetToTheData |

At the offset there is one double precision float (8 byte value) describing the time, and then one double precision float for each channel at that time. This repeats for every data sample. The time is in microsecond units while the channel data is in volts.

For reading the wbps format the above information is the minimum needed to use the format. For writing the format you must have the following information as well.

After the offset integer are two parameters that describe the trigger (Table 2). First is a unsigned integer that indicates whether there is a trigger location present in the file. This will be either 0 meaning no trigger or 1 meaning a trigger is present. Following the trigger is a double precision parameter indicating where in microseconds the trigger exists (this must be present if a trigger is valid or not).

**Table 2 - Trigger Information in File**

| Type                                      | Header                            |
| ----------------------------------------- | --------------------------------- |
| Unsigned int (32 bits)                    | m\_iHasTriggerLocation            |
| Double Precision Floating Point (8 bytes) | m\_dTriggerLocationInMicroseconds |

Following the trigger is information about the decoders used when the file is saved. The decoder is stored as a convenience in the wbps file so when it is loaded it will be properly displayed (very useful when sharing waveforms).

The file format for the decoders will not be described here. For readers of the file format this data can simply be ignored. For writers of this format, you can write a signed integer equal to -1 for each channel and WaveBPS will simply ignore the decoder section when it reads the file (Table 3).

**Table 3 - Decoder Ignore Sequence (repeat for each channel)**

| Type                 | Header                   |
| -------------------- | ------------------------ |
| Signed int (32 bits) | iDecoderType (set to -1) |