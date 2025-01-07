// stores/vendor/state.ts
export const vendorState = () => ({
    companyName: 'ABC Traders',
    location: 'Colombo',
    isActive: true
})

export type VendorState = ReturnType<typeof vendorState>