import { apiUrl } from "../../../setting";

export const pendingKotUrl = () => {
    return '/getPendingKot'
}
export const updateKotStatusUrl = () => {
    return '/updateKotStatus'
}

export const getAllKotUrl = () => {
    return `${apiUrl}/kotList`;
};