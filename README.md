# ORCA2Tidal
NodeJS utility to convert [ORCA](https://wiki.xxiivv.com/#orca)'s UDP Output to OSC messages for [Tidal](https://tidalcycles.org/index.php/Welcome)

Depends on [OSC.js](https://www.npmjs.com/package/osc)


### Installation
```
git clone https://github.com/MAKIO135/ORCA2Tidal.git
cd ORCA2Tidal
npm install
```


### Usage
- Launch Tidal
- `cd ORCA2Tidal && node index.js`
- in ORCA:  
    use the UDP Operator `;` with `PARAM_NAME.VALUE`, for example: `4;p1.5` -> in Tidal `(cI 10 "p1")`  
    can also send float value params by adding `f`, for example: `5;p1.5f` -> in Tidal `(cF 1 "p1")`


### Based on:
- [ORCA - UDP Output](https://github.com/hundredrabbits/Orca#midi-output)  
    > The [UDP](https://nodejs.org/api/dgram.html#dgram_socket_send_msg_offset_length_port_address_callback) operator `;`, takes one haste input that is a string length and locks the eastwardly ports. It sends the message on bang to the port `49160`. You can use the [listener.js](https://github.com/hundredrabbits/Orca/blob/master/listener.js) to test UDP messages. See it in action with [udp.orca](https://github.com/hundredrabbits/Orca/blob/master/examples/_udp.orca).
- [Tidal - Controller Input](https://tidalcycles.org/index.php/Controller_Input)  
    > With version 1.0.0 installed and configured, then by default Tidal will automatically listen for external control messages over the OSC (Open Sound Control) network protocol, on localhost (127.0.0.1), port 6010.
- [OSC.js](https://www.npmjs.com/package/osc)  
    [@colinbdclark's osc.js-examples/send-to-supercollider](https://github.com/colinbdclark/osc.js-examples/blob/master/send-to-supercollider/index.js)


### Tidal Resources
- https://github.com/musikinformatik/SuperDirt/blob/master/superdirt_startup.scd
- http://blog.tidalcycles.org/
- http://blog.tidalcycles.org/six-months-of-tidal/
- https://github.com/yaxu/tidal-workshop

