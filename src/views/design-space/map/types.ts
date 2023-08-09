import * as Cesium from 'cesium'
import type { InjectionKey, Ref } from 'vue'

export const viewerKey: InjectionKey<Ref<Cesium.Viewer>> = Symbol('mapViewer')
