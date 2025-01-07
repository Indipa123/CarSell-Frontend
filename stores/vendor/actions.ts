// stores/vendor/actions.ts
import type { VendorState } from './state'

export const vendorActions = {
    setCompanyName(state: VendorState, companyName: string) {
        state.companyName = companyName
    },
    toggleActiveStatus(state: VendorState) {
        state.isActive = !state.isActive
    }
}

