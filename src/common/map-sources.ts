export interface MapSources {
  type: string
  value: {
    [key: string]: {
      id: string
      name: string
      url: string
      imageryType: string
      altitudeType: string
      terrainType: string
      position: {
        longitude: number
        latitude: number
        altitude: number
      }
      feature: {
        markerSize: number
        markerColor: string
        stroke: string
        strokeWidth: number
        fill: string
        clampToGround: boolean
      }
      special: {
        icon: string
        label: string
        width: number
        clampToGround: boolean
      }
    }
  }
}

const mapSources: MapSources[] = [
  {
    type: 'IMAGE_SERVICE',
    value: {
      B4ZT5FYYfwTA5BwpZDlRf: {
        id: 'B4ZT5FYYfwTA5BwpZDlRf',
        name: '影像服务',
        url: 'http://127.0.0.1:8080/huairou-imagery',
        imageryType: 'tileMapServer',
        altitudeType: 'ON_TERRAIN',
        terrainType: 'CesiumTerrain',
        position: {
          longitude: 116.411161,
          latitude: 39.90607,
          altitude: 2300
        },
        feature: {
          markerSize: 6,
          markerColor: '#ffbe76',
          stroke: '#130f40',
          strokeWidth: 2,
          fill: '#3498db',
          clampToGround: true
        },
        special: {
          icon: '',
          label: '',
          width: 24,
          clampToGround: true
        }
      }
    }
  },
  {
    type: 'TERRAIN_SERVICE',
    value: {
      B4ZT5FYYfwTA5BwpZDl: {
        id: 'V5ul6jXpYr6Qv1S6e7_03',
        name: '地形服务',
        url: 'http://127.0.0.1:8080/huairou-terrain',
        imageryType: 'tileMapServer',
        altitudeType: 'ON_TERRAIN',
        terrainType: 'CesiumTerrain',
        position: {
          longitude: 116.411161,
          latitude: 39.90607,
          altitude: 2300
        },
        feature: {
          markerSize: 6,
          markerColor: '#ffbe76',
          stroke: '#130f40',
          strokeWidth: 2,
          fill: '#3498db',
          clampToGround: true
        },
        special: {
          icon: '',
          label: '',
          width: 24,
          clampToGround: true
        }
      }
    }
  },
  {
    type: 'TILE_SET',
    value: {
      'Wif-BLfKXJ7qurrpXAV-q': {
        id: 'Wif-BLfKXJ7qurrpXAV-q',
        name: '倾斜模型',
        url: 'http://resource.dvgis.cn/data/3dtiles/dayanta/tileset.json',
        imageryType: 'tileMapServer',
        altitudeType: 'ON_TERRAIN',
        terrainType: 'CesiumTerrain',
        position: {
          longitude: 116.411161,
          latitude: 39.90607,
          altitude: 2300
        },
        feature: {
          markerSize: 6,
          markerColor: '#ffbe76',
          stroke: '#130f40',
          strokeWidth: 2,
          fill: '#3498db',
          clampToGround: true
        },
        special: {
          icon: '',
          label: '',
          width: 24,
          clampToGround: true
        }
      }
    }
  },
  {
    type: 'GLTF_MODEL',
    value: {
      _fiESatt4yUariXgjN98r: {
        id: '_fiESatt4yUariXgjN98r',
        name: '三维模型',
        url: 'http://127.0.0.1:8080/building.glb',
        imageryType: 'tileMapServer',
        altitudeType: 'ON_TERRAIN',
        terrainType: 'CesiumTerrain',
        position: {
          longitude: 116.411161,
          latitude: 39.90607,
          altitude: 2300
        },
        feature: {
          markerSize: 6,
          markerColor: '#ffbe76',
          stroke: '#130f40',
          strokeWidth: 2,
          fill: '#3498db',
          clampToGround: true
        },
        special: {
          icon: '',
          label: '',
          width: 24,
          clampToGround: true
        }
      }
    }
  },
  {
    type: 'FEATURE',
    value: {
      '1fYdnkQvF6aSBuMRhiHCO': {
        id: '1fYdnkQvF6aSBuMRhiHCO',
        name: '矢量服务',
        url: 'http://127.0.0.1:8080/怀柔区.json',
        imageryType: 'tileMapServer',
        altitudeType: 'ON_TERRAIN',
        terrainType: 'CesiumTerrain',
        position: {
          longitude: 116.411161,
          latitude: 39.90607,
          altitude: 2300
        },
        feature: {
          markerSize: 6,
          markerColor: '#ffbe76',
          stroke: '#130f40',
          strokeWidth: 2,
          fill: '#3498db',
          clampToGround: true
        },
        special: {
          icon: '',
          label: '',
          width: 24,
          clampToGround: true
        }
      }
    }
  },
  {
    type: 'SPECIAL_SUBJECT',
    value: {
      'e-2Fo6iY2Q4S6yt433yxJ': {
        id: 'e-2Fo6iY2Q4S6yt433yxJ',
        name: '专题服务',
        url: 'http://127.0.0.1:8080/points.json',
        imageryType: 'tileMapServer',
        altitudeType: 'ON_TERRAIN',
        terrainType: 'CesiumTerrain',
        position: {
          longitude: 116.411161,
          latitude: 39.90607,
          altitude: 2300
        },
        feature: {
          markerSize: 6,
          markerColor: '#ffbe76',
          stroke: '#130f40',
          strokeWidth: 2,
          fill: '#3498db',
          clampToGround: true
        },
        special: {
          icon: 'http://127.0.0.1:8080/icon.png',
          label: 'id',
          width: 24,
          clampToGround: true
        }
      }
    }
  }
]

export default mapSources
