const { useState, useEffect, useRef } = React
import { utilService } from "../services/util.service.js";
import { watcherService } from "../services/watcher.service.js";
import { AddWatcherModal } from "./AddWatcherModal.jsx";
import { WatcherList } from "./WatcherList.jsx";
export function WatcherIndex() {

    const [watchers, setWatchers] = useState([]);
    const modalRef = useRef(null);


    useEffect(() => {
        fetchWatchers();
    }, []); 

    function openDialog()  {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };

    async function onSaveWatcher(newWatcher) {
        try {
            newWatcher.id = utilService.makeId();
            await watcherService.post(newWatcher)
            setWatchers(prev => [...prev, newWatcher]); 
        } catch (error) {
            console.log(error);
        }
        finally{
            modalRef.current.close();
        }
    };

    async function fetchWatchers() {
        try {
            const watchersList = await watcherService.query();
            setWatchers(watchersList); 
        } catch (error) {
            console.log("Failed to fetch watchers:", error);
        }
    }
    
    async function onRemoveWatcher(watcherId) {
        try {
            await watcherService.remove(watcherId);
            setWatchers(prevWatchers => prevWatchers.filter(watcher => watcher.id !== watcherId));
        } catch (error) {
            console.error("Failed to fetch watchers:", error);
        }
    }


    return (
        <section className="watcher">
        <h2>Watcher App</h2>
        <button onClick={openDialog}>+ Add Watcher</button>
        <AddWatcherModal modalRef={modalRef} onSave={onSaveWatcher} />
        <WatcherList  watchers={watchers} onRemove={onRemoveWatcher}/>
        </section>
    );

}