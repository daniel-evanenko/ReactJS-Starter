import { WatcherModal } from "./watcherModal.jsx";
const { useState } = React

export function WatcherList({watchers,onRemove}){    
    const [selectedWatcher, setSelectedWatcher] = useState(null);

    function onSelectWatcher(watcher){
        setSelectedWatcher(watcher)
    }

    function onCloseWatcher(){
        setSelectedWatcher(null);
    }

    return (
        <section className="watcher-list">
        {watchers.map(watcher => (
        <div className="watcher-div"  key={watcher.id}>
            <img className="user-img" src={`/assets/img/user.png`} alt={`user avatar`} />
            <h2>{watcher.fullname}</h2>
            <hr></hr>
            <div>
            <button onClick={() => 
            {onCloseWatcher()
            onRemove(watcher.id)}
            }>x</button>
            <button onClick={() => onSelectWatcher(watcher)}>select</button>
            </div>
        </div>
        ))}
        {selectedWatcher && <WatcherModal watcherInfo={selectedWatcher} onClose={onCloseWatcher} />}
        </section>
    );

}