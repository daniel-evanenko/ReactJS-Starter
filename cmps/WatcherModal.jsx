
export function WatcherModal({watcherInfo,onClose}){    
    return (
        <section className="watcher-modal">
            <div className="watcher-info">
                <h2>{watcherInfo.fullname}</h2>
                <ul>
                {watcherInfo.movies.map(watcher =>
                    <li key={watcher.id}>
                        {watcher}
                    </li>
                )}
            </ul>
                <button onClick={() => onClose()}>close</button>
            </div>
        </section>
    );

}