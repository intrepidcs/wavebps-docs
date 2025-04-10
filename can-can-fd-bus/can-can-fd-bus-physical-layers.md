# CAN / CAN FD Bus Physical Layers

The CAN / CAN FD protocol describes how 1s and 0s are used to communicate. The CAN / CAN FD protocol does not describe an electrical way to signal these 1s and 0s. This is what CAN / CAN FD physical layers are for.

The most prevalent physical layer is called the dual wire physical layer. This physical layer uses two wires CAN / CAN FD H and CAN / CAN FD L. These wires send the same 1 or 0 just in different voltage directions (differential signalling).

Two other physical layers were introduced for specific automotive low speed applications. They are single wire can and low speed fault tolerant CAN / CAN FD. The low speed fault tolerant bus provides fault tolerance if one line breaks. The [single wire CAN / CAN FD bus](single-wire-can-can-fd.md) provides CAN / CAN FD over a single wire and provides a unique wakeup mechanism where a subset of nodes can communicate without waking up sleeping nodes.

