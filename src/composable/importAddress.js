
import localAddressInfo from '@address'
import { zkRow, snRow } from './tableRow';

export const initZKAddress = () => {
    const localAddress = localAddressInfo.ZK;
    return localAddress.map(item => {
        return {
            ...zkRow,
            ...item,
            key: item.address,
        }
    })
}

export const initSNAddress = () => {
    const localAddress = localAddressInfo.StarkNet;
    return localAddress.map(item => {
        return {
            ...snRow,
            ...item,
            key: item.address,
        }
    })
}