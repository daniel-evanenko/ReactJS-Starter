import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const WATCHER_KEY = 'watcherDB'
_createWatchers()

export const watcherService = {
    query,
    get,
    remove,
    post,
}

function query() {
    return storageService.query(WATCHER_KEY)
}

function get(watcherId) {
    return storageService.get(WATCHER_KEY, watcherId)
}

function remove(watcherId) {
    return storageService.remove(WATCHER_KEY, watcherId)
}

function post(watcher) {
    return storageService.post(WATCHER_KEY, watcher)
}


function _createWatchers() {
    let watchers = utilService.loadFromStorage(WATCHER_KEY)
    if (!watchers || !watchers.length) {
         watchers = [{
                id: 'w101',
                fullname : 'Puki Ba',
                movies: ['Rambo', 'Rocky']
            },
            {
                id: 'w102',
                fullname : 'Muki Da',
                movies: ['Star wars', 'WALL-E']
            },
            {
                id: 'w103',
                fullname : 'Shuki Sa',
                movies: ['Scar face', 'Scary movie']
            }]
        utilService.saveToStorage(WATCHER_KEY, watchers)
    }
}

