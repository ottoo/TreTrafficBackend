# Tampere bus traffic backend

[![Dependency Status](https://david-dm.org/ottoo/TreTrafficBackend/status.svg)](https://david-dm.org/ottoo/TreTrafficBackend#info=dependencies) [![devDependency Status](https://david-dm.org/ottoo/TreTrafficBackend/dev-status.svg)](https://david-dm.org/ottoo/TreTrafficBackend#info=devDependencies)


A small backend proxy for providing Tampere (Finland) area bus traffic.

### Hosting OpenStreetMap Vector Tiles

This application hosts its own OpenStreetMap tiles and uses them to display the map via mapbox-gl
library. Due to the size of the tiles, they are not included in the repository, but can be downloaded
from [https://openmaptiles.com/downloads/planet/](https://openmaptiles.com/downloads/planet/).

The tileserver GUI can be accessed on `http://localhost:8080` after running docker-compose up in `/docker`
folder.


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
