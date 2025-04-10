# FlexRay Wakeup Symbol

FlexRay supports power management wakeup using the wakeup symbol. This wakeup symbol is repeated a fixed number of times. The wakeup symbol only pulls the bus in one direction and this avoids a possible contention that could occur if another node sent the pattern at the same time.

<figure><img src="../.gitbook/assets/image (52).png" alt=""><figcaption><p>The wakeup pulse is only one direction which allows possible collisions</p></figcaption></figure>

<figure><img src="../.gitbook/assets/image (13).png" alt=""><figcaption><p>The wakeup symbol is repeated a number of times as part of the FlexRay cluster configuration</p></figcaption></figure>

<figure><img src="../.gitbook/assets/image (3).png" alt=""><figcaption><p>Here the number of wakeup symbols is part of the FlexRay cluster configuration</p></figcaption></figure>
