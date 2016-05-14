# Tampere bus traffic backend proxy

A small backend proxy for providing Tampere (Finland) area bus traffic. Currently
only provider information about the bus lines.


> HapiJS


To run the app, first do

```
npm install
```

To run the server and watch for changes (you need to have nodemon installed), run

```
npm run server:watch
```

To run just the server, run

```
npm run server
```

Mock data can be found from

```
http://[hostname]:[port]/api/mocks
```

Real traffic data can be accessed from where ```lineRef``` takes a comma separated
string of lines. If no lines are specified, returns all the available traffic.

```
http://[hostname]:[port]/api/lines?lineRef=3,4,12
```
