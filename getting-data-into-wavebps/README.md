# Getting Data into WaveBPS

Besides capturing [live data from a USB oscilliscope,](../live-capture-with-wavebps.md) you can load data into **WaveBPS** from a saved data file. First you pick a decoder and click "Open Waveform" (figure 1). After doing this the waveform will be plotted and decoded. The zoomed waveform view will then show the first event in the data.

{% embed url="https://youtu.be/meTjOEeCTEE" %}
Importing Data Video
{% endembed %}

You can also click the refresh button to decode the current waveform again. This maybe useful if you want to update the view with a new decoding or thresholds. Finally when you start again a button will appear allowing you to open the last waveform file you looked at.

<figure><img src="../.gitbook/assets/import_tb.png" alt=""><figcaption><p>Figure 1 - you can open waveforms from a file by clicking "Open Waveform"</p></figcaption></figure>

**WaveBPS** supports waveforms from Lecroy and Picoscope oscilloscopes. [Also you can write a simple import plug-in using Visual C++](../loading-custom-data-into-wavebps.md) using the sample project provided. Please [contact us](http://www.intrepidcs.com) to write an import for your capture device.

WaveBPS automatically stores your current setup when you close the application. This setup resides in a file called "wavebps defaults.xml" stored in the applications directory. You can save or load a previous setup at anytime by clicking the application configuration tab and selecting import or export configuration. You can also load these remotely using the [Text API](../automated-test-with-wavebps.md).

<figure><img src="../.gitbook/assets/config_wavebps.png" alt=""><figcaption><p>Figure 2 - you can import and export the current wavebps configuration.</p></figcaption></figure>
