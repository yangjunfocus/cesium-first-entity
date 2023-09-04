// The URL on your server where CesiumJS's static files are hosted.
window.CESIUM_BASE_URL = '/static/Cesium/'

import { Cartesian3, Ion, Color, Viewer } from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'

// Your access token can be found at: https://ion.cesium.com/tokens.
// Replace `your_access_token` with your Cesium ion access token.

Ion.defaultAccessToken = 'your_access_token'
const viewer = new Viewer('cesiumContainer')

const wyoming = viewer.entities.add({
  polygon: {
    hierarchy: Cartesian3.fromDegreesArray([
      -109.080842, 45.002073, -105.91517, 45.002073, -104.058488, 44.996596,
      -104.053011, 43.002989, -104.053011, 41.003906, -105.728954, 40.998429,
      -107.919731, 41.003906, -109.04798, 40.998429, -111.047063, 40.998429,
      -111.047063, 42.000709, -111.047063, 44.476286, -111.05254, 45.002073
    ]),
    height: 0,
    material: Color.RED.withAlpha(0.5),
    outline: true,
    outlineColor: Color.BLACK
  }
})

viewer.zoomTo(wyoming)
