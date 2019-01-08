const dgram = require( 'dgram' )
const server = dgram.createSocket( 'udp4' )
const osc = require( 'osc' )

const ORCA_PORT = 49160
const TIDAL_PORT = 6010

const udpPort = new osc.UDPPort( {
    localAddress: '127.0.0.1',
    localPort: TIDAL_PORT + 1,
    remoteAddress: '127.0.0.1',
    remotePort: TIDAL_PORT,
    metadata: true
} )

udpPort.open()

server.on( 'error', err => {
    console.log( `server error:\n${ err.stack }` )
    server.close()
} )

server.on( 'message', ( msg, rinfo ) => {
    console.log( `server got: ${ msg }` )

    const split = ( '' + msg ).split( '.' )
    const key = split[ 0 ]
    const type = split[ 1 ].includes( 'f' ) ? 'f' : 'i'
    const value = type === 'f' ? parseInt( split[ 1 ] ) / 10 : split[ 1 ]
    const newMsg = {
        address: `/ctrl`,
        args: [
            {
                type: 's',
                value: key
            },
            {
                type,
                value
            }
        ]
    }

    console.log( `/ctrl s${ type } ${ key } ${ value } -> localhost:${ TIDAL_PORT }` ) // Send to Tidal
    udpPort.send( newMsg )
} )

server.on( 'listening', () => {
    const address = server.address()
    console.log( `server listening ${ address.address }:${ address.port }` )
} )

server.bind( ORCA_PORT ) // Listen for ORCA
