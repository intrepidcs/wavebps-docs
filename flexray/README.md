# FlexRay

FlexRay is a new protocol designed for time deterministic, high speed, and/or safety critical applications. FlexRay nodes can only transmit at very specific times according to the design of the network. FlexRay has the ability to absolutely guarantee latency using [static frames](flexray-static-frame.md) or offer more efficient bandwidth usage via [dynamic frames](../example-waveforms/flexray-dynamic-frame.md).

<figure><img src="../.gitbook/assets/image (4).png" alt=""><figcaption><p>Here FlexRay Messages captured with Vehicle Spy show a <a href="https://en.wikipedia.org/wiki/Standard_deviation">standard deviation</a> of 0 on periodic rate transmission.</p></figcaption></figure>

Since all transmit in FlexRay is based on time everyone on the bus must have the same clock. Therefore a [startup procedure](flexray-startup.md) is defined that allows all nodes in the network to become synchronized. After startup, constant resyncronization takes place.

FlexRay also supports power management via a [wake up mechanism](flexray-wakeup-symbol.md). Sleeping nodes can wake up up on an external input and perform signaling on the FlexRay bus to wake up all other nodes.

The [FlexRay physical layer](flexray-physical-layer.md) signals 1's and 0's of the FlexRay protocol. It also offers a third state of idle bus.

[FlexRay has advantages over CAN / CAN FD and LIN](../compare-flexray-can-can-fd-bus-and-lin-bus.md) for fault tolerance, speed, and time determinism. FlexRay has disadvantages including complexity, cost, EMC, and the lack of experienced FlexRay engineers.

#### [Visit the FlexRay Consortium Website](http://www.flexray.com/)
