import create from 'zustand';
import { persist } from 'zustand/middleware'

export const useStore = create(
    persist(
        (set) => ({
            baseCurrency: "USD",
            setBaseCurrency: (baseCurrency) => set((state) => ({ baseCurrency })),
        }),
        { name: 'state' }
    )
);