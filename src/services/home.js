import * as fetchs from '../utils/fetch';
export async function Gethome(params) {
    return fetchs.read("/api/users")
}