export default class AdminApiService {

    static deleteRowsByIds(link, ids) {
        if (ids.length === 0) {
            return Promise.reject('Delete error: no selected items');
        }

        return fetch(link, {
            method: 'delete',
            dataType: 'json',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ids: ids
            })
        })
    }
}