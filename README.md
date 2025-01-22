# ESP32 Partition Builder Web Application

The web application is [here](https://thelastoutpostworkshop.github.io/microcontroller_devkit/esp32partitionbuilder/).

## Youtube Tutorial
[<img src="https://github.com/thelastoutpostworkshop/images/blob/main/Custom%20Partitions.png" width="300">](https://youtu.be/EuHxodrye6E)


## Troubleshooting
When using a custum partition, you may need to adjust the maximum upload size in your boards definition.  
The IDE has no way to read the custom partition, see this [issue](https://github.com/espressif/arduino-esp32/issues/9831). 

By default many of the custom paritions in boards definition have a 16MB max upload size, so if your board has less than 16MB flash memory, for example 4MB is typical, the compiler will report a wrong space occupied by your sketch.

To fix this, you have to edit the Espressif boards.txt file, which is normally located in 
`[your drive]\[your name]\AppData\Local\Arduino15\packages\esp32\hardware\esp32\[esp32 core version]`

This is a very large file and you need to search for your specific board and change the line (here for the ESP32S3 Dev Module) :
`esp32s3.menu.PartitionScheme.custom.upload.maximum_size=16777216`
to
`esp32s3.menu.PartitionScheme.custom.upload.maximum_size=4194304`
for a microcontroller with 4MB flash memory

## Contributors

Contributors are welcomed! If you want to submit pull requests, [here is how you can do it](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project).

**Recommended IDE Setup**
The recommended IDE setup is [Visual Studio Code](https://code.visualstudio.com/) + [Vue - Official extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar). 

**Project Setup**

```sh
npm install
```

**Compile and Hot-Reload for Development**

```sh
npm run dev
```
