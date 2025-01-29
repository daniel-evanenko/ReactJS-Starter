const { useState, useEffect, useRef } = React

export function CountDown({ startFrom, toTime, onDone }) {
    const [count, setCount] = useState(() => {
        const now = Date.now();
        return toTime ? Math.max(0, Math.floor((toTime - now) / 1000)) : startFrom;
    });

    const intervalRef = useRef(null); // ✅ Store interval ID

    useEffect(() => {
        if (count <= 0) {
            playSound();
            onDone();
            return;
        }

        // ✅ Create interval only once
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setCount(prev => {
                    const now = Date.now();
                    const remaining = toTime ? Math.max(0, Math.floor((toTime - now) / 1000)) : prev - 1;
                    if (remaining <= 0) {
                        clearInterval(intervalRef.current);
                        intervalRef.current = null; // Prevent multiple clears
                        playSound();
                        onDone();
                        return 0;
                    }
                    return remaining;
                });
            }, 1000);
        }

        return () => {
            clearInterval(intervalRef.current);
            intervalRef.current = null; // Clean up on unmount
        };
    }, []); // ✅ Effect runs only once when the component mounts

    function playSound() {
        const audio = new Audio('/assets/sound/alarm.mp3'); 
        audio.play().catch(err => console.error("Audio play failed:", err));
    }

    function formatTime(seconds) {
        if(toTime){
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            const secs = seconds % 60;
            return hours > 0
                ? `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
                : `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        }else{
            return seconds
        }

    }

    const warningClass = count <= 6 ? 'warning' : '';
    
    return (
        <section className="count-down">
            <div className="count-down-box">
                <h2 className={warningClass}>{formatTime(count)}</h2>
            </div>
        </section>
    );
}