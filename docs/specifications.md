---
title: "Specifications"
description: Comprehensive WaveBPS specs including API support, acquisition modes, decoder details, export/import options, and protocol analysis for automotive bus systems.
keywords: [WaveBPS, waveform analysis, automotive bus tools, CAN decoder, LIN decoder, FlexRay decoder, UART decoder, J1850, SPI, I2C, signal analysis, protocol decoding, automotive diagnostics, waveform export, DLL import, Text API, cursor measurement, waveform capture, Vehicle Spy integration]
sidebar_position: 53
sidebar_label: "Specifications"
---

# Specifications

#### **WaveBPS Application**

* [TCP/IP Server Text API](/automated-test-with-wavebps) allows remote control of application via Windows Clients and Vehicle Spy Function Blocks
* [Open DLL import support](/loading-custom-data-into-wavebps) allowing importation of any waveform data from any source
* [Export support for raw analog waveforms](/exporting-waveforms-from-wavebps) including efficient binary formats ([fully open and documented](/wbps-binary-file-format/)) and CSV for both entire waveform or subset of waveform
* [Export](/exporting-waveforms-from-wavebps) to [Vehicle Spy](https://intrepidcs.com/products/software/vehicle-spy/) buffer format
* [Modification of waveform](/exporting-waveforms-from-wavebps) within software to create improper waveforms for error testing with Arbitrary Waveform Generators
* Import and Export WaveBPS XML configuration files
* [Node Analysis](/advanced-analysis) can prepare statistical analysis of all network nodes for all decoders and automatic measurements
* [Acquisition Modes include Single, Multiple, and Filter Match Capture](/live-capture-with-wavebps). Filter Match capture is a multiple capture that stops when there is a filter match.
* [Automatic buffer capture mode](/live-capture-with-wavebps) saves buffer every time a filter condition is matched
* [Automatic Wave file playing](/live-capture-with-wavebps) on a filter condition
* [Cursor Modes](/cursor-measurements) allow measurement of : Delta Time in Second, Delta Time in Bits, Frequency, Delta Volts, Absolute Volts, and Bus Utilization
* [High Resolution Cursor](/cursor-measurements) allows very fine cursor control for measure across large captures
* [Auto scroll waveform based](/navigation) on Bit rate or Event with programmable rate
* [Search, Browse and Filter](/navigation) based on any automatic measurement
* [Powerful Mouse wheel based](/navigation) waveform navigation with optional knob

#### **Hardware Support**

* Support of [PicoScope 5000, PicoScope 4000, Picoscope 3000, and PicoScope 2000](http://www.picotech.com/) series oscilloscopes: Programmable Capture and Depth, 4 Channel Support, Oscilloscope probes, Triggering, CAN / CAN FD Error Frame Trigger, External Trigger Modes, and Pre trigger depending on the scope model.
* Support of [neoVI FIRE](https://intrepidcs.com/products/vehicle-network-adapters/neovi-fire-2/) and [ValueCAN3](https://intrepidcs.com/products/vehicle-network-adapters/valuecan-4/) devices for advanced protocol triggering
* Support of [Space navigator 3D](https://3dconnexion.com/uk/product/spacenavigator/) six axis knob

#### **All Decoders**

* All Automatic Measurements include the time at which they were taken and clicking on the measurement will focus the zoom view on the times
* Automatic Measurements for every event: Time Start, Time Width, Inter frame Separation, Error Count, Warning Count, ID including message description, and Node Name
* [Database support](/wavebps-basic-databases) with import from Vehicle Spy software (UEF, DBC, VS3, LDF, FIBEX, etc...)
* [User specified Baud Rate](/setting-up-serial-decoding-in-wavebps) and thresholds including inversion
* [Decoder Templates](/setting-up-serial-decoding-in-wavebps) allow multiple customizations of each decoder with a custom description
* Supports [Math Operations](/setting-up-serial-decoding-in-wavebps) on multiple channels (A-B, A+B, C-D, C+D)

#### CAN / CAN FD **Decoder**

* Automatic Measurement for every message: CAN / CAN FD Remote Transmit Request, CAN / CAN FD Identifier Extension Bit, CAN / CAN FD Reserved Bit Zero, CAN / CAN FD Reserved Bit One, Single Wire CAN / CAN FD High Voltage Message, Single Wire CAN / CAN FD High Voltage Ack Bit, Single Wire CAN / CAN FD High Speed Mode Bit Rate, CAN / CAN FD Substitute Remote Request, Length (DLC), CAN / CAN FD CRC Delimiter, CAN / CAN FD Ack Slot, CAN / CAN FD Ack Delimter, CRC Checksum, CAN / CAN FD Stuff Bit Count, CAN / CAN FD Data Section, CAN / CAN FD Bitrate Tolerance , Minimum Frame Voltage, Maximum Frame Voltage, CAN / CAN FD Acknowledgement Bit Skew, CAN / CAN FD Acknowledgement Bit Width, Error Frame Bit Count, Percentage of Time Used For Data
* Error & Warning Detection for every message: SRR = 0 Error, RB0 = 1 Error, DLC > 8 Error, Invalid CRC Error, CRC Del = 0 Form Error, Ack Error, ACK Del = 0 Form Error, EOF = 0 Form Error,IFS = 0 Form Error,RB1 = 1 Error,RB0 = 1 Error, Bit Tolerance Limit Error, High Voltage Ack Bit warning, Partial Frame Decode Warning, Error Frame
* Automatic Measurements for entire waveform : Frame Count, Error Count, Idle Bus Mean Voltage, Max Frame Voltage, Min Frame Voltage, Bus Utilization, Error Frame Count
* GMW3110 [Single Wire CAN / CAN FD HighSpeed mode](/setting-up-serial-decoding-in-wavebps) transition decoding
* [Single Wire CAN / CAN FD High Voltage](/setting-up-serial-decoding-in-wavebps) Threshold setting
* [User settable Bit tolerance](/setting-up-serial-decoding-in-wavebps)
* Satisfies bit tolerance measurements as indicated in GMW14241 - GMLAN Device Test Specification

#### **LIN Decoder**

* Automatic Measurement for every message: LIN Sync Break In Bits, LIN Sync Waveform, LIN Slave Response Time, LIN Header Time, LIN Slave Message Time, LIN TMax Utilization, LIN Frame Length, LIN Check Sum,
* Data Error & Warning Detection for every message: TResponse Max Error, Message Length Error, TMax violation Error, Checksum Error, Slave Not Responding Error, Sync Error, THeader Max Error, ID Parity Error, Break Too Short, Break Too Long, Partial Frame Decode Warning
* Automatic Measurements for entire waveform : Frame Count, Error Count

#### **FlexRay Decoder**

* Automatic Measurement for every message: FlexRay Reserved Bit, FlexRay Payload Preamble Indicator, FlexRay Null Frame Indicator, FlexRay Sync Frame Indicator, FlexRay Startup Frame Indicator, FlexRay Channel, FlexRay Header CRC, FlexRay Cycle Count, CRC, FlexRay Transmission Start Sequence Length, FlexRay Is Dynamic Frame, Data Length in words, Data Section, Min Frame Voltage, Max Frame Voltage, Min Idle Voltage, Max Idle Voltage
* Error & Warning Detection for every message: Header CRC Error, CRC Error, Partial Frame Decode Warning
* Automatic Measurements for entire waveform : Frame Count, Error Count
* Automatic A-B channel detection or fixed channel setting for decoder

#### **UART Decoder**

* Automatic Measurement for every message: UART Break In Bits, UART Frame Length, Data Section, Data Section in ASCII
* Error & Warning Detection for every message: Partial Frame Decode Warning, Parity Error
* Automatic Measurements for entire waveform : Frame Count, Error Count
* Break UART Streams into messages based on IDLE bit times
* Supports programmable Bit Length, Parity, Stop Bits, Bit ordering, and ID length

#### J1850 VPW Decoder

* Automatic Measurement for every message: J1850 Start of Frame (SOF) Time in Microseconds, Frame Length, CRC, In-Frame Response Data, Data Section
* Error & Warning Detection for every message: CRC Error, Partial Frame Decode Warning
* Automatic Measurements for entire waveform : Frame Count, Error Count
* Programmable ID length (1 or 3 byte) setting for the decoder

#### SPI Decoder

* Automatic Measurement for every message: Length of Data, Data Section
* Error & Warning Detection for every message: Partial Frame Decode Warning
* Automatic Measurements for entire waveform : Frame Count, Error Count
* Programmeable SPI Mode, word length, ID length and endianess

#### I2C Decoder

* Automatic Measurement for every message: I2C Address Length, I2C Read Write Bit, I2C Address, Length of Data, Data Section
* Error & Warning Detection for every message: Ack Error, Partial Frame Decode Warning
* Automatic Measurements for entire waveform : Frame Count, Error Count