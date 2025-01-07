// stores/vendor/index.ts
import { defineStore } from 'pinia'
import { vendorState } from './state'
import { vendorActions } from './actions'

export const useVendorStore = defineStore('vendor', {
    state: vendorState,
    actions: vendorActions
})