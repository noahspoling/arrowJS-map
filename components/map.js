import {reactive, html, watch} from 'https://esm.sh/@arrow-js/core'
import { Map, TileLayer } from 'leaflet'



//Contraint values on marker's range
const latitudeRange = 90
const longitudeRange = 180
var latitude, longitude

//map component states

//for input values of points for creating markers
export const point = reactive({
    latitude: 0,
    longitude: 0,
})

//checks value for latitude
if (latitude > latitudeRange) {
    latitude = latitudeRange
} else if (latitude < (latitudeRange * -1)) {
    latitude = latitudeRange * -1;
} 

//checks value for longitude
if (longitude > longitudeRange) {
    longitude = longitudeRange
} else if (longitude < (longitudeRange * -1)) {
    longitude = longitudeRange * -1;
}
/*
const map = L.map('map').setView([50, 50], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map); */

export const addMenu = html`
    <div class="addMenuContainer">
        <form class="form-container">
            <div class="form-row">
                <label for="markerName">Marker Name</label>
                <input class="form-input" type="text" name="markerLatitude" id="markerName">
            </div>
            <div class="form-row">
                <label for="markerLatitude">Marker Latitude</label>
                <input class="form-input" type="text" name="markerLatitude" id="markerLatitude">
            </div>
            <div class="form-row">
                <label for="markerLongitude">Marker Longitude</label>
                <input class="form-input" type="text" name="markerLongitude" id="markerLongitude">
            </div>
            <div>
                <input class="button-submit" type="submit">
                <input class="button-clear" type="button" value="clear">
            </div>
        </form>
    </div>
`
const controlMenu = html`

`

const importMenu = html`
`

const map = html`
    <div class="map"></div>
`
const mapComponent = () => {
    const mapContainer = document.querySelector("map")
    mapContainer.style = 'height: 100%;'

    const map = new Map(mapContainer, {
        center: [0, 0],
        zoom: 3,
    })

    const tileLayer = new TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org">OpenStreetMap</a> contributors'
      })

      tileLayer.addTo(map)


}


const mapInstance = mapComponent()

export const tabManager = reactive({
    tabs: [
        {
            name: "Add Data",
            icon: "",
            element: addMenu
        },
        {
            name: "View Control",
            icon: "",
            element: controlMenu
        },
        {
            name: "Import Data",
            icon: "",
            element: importMenu
        },
    ]
})


/* Parent Component to Export */
mapComponent()
export const mapApp = html`
    <div class="appContainer">
        ${addMenu}
        ${map}
    </div>
`

