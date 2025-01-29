const { useState, useEffect } = React

export function SeasonClock() {
    const [date, setDate] = useState(new Date());
    const [isDark, setIsDark] = useState(false);
    const darkClass = isDark ? 'dark' : '';

    function getSeason() {
        switch (date.getMonth()) {
            case 11:
            case 0:
            case 1:
                return 'winter';
            case 2:
            case 3:
            case 4:
                return 'spring';
            case 5:
            case 6:
            case 7:
                return 'summer';
            case 8:
            case 9:
            case 10:
                return 'autumn';
            default:
                return 'Invalid month';
        }
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    function onToggleDark() {
        setIsDark(isDark => !isDark);
    }
    
    const time = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = date.toLocaleString('en-US', { weekday: 'long' });
    const season = getSeason();

    return (
        <section onClick={onToggleDark} className={`season-clock ${darkClass}`}>
            <h2>{season} ({month})</h2>
            <img src={`/assets/img/${season}.png`} alt={`${season} season`} />
            <h2>{day}</h2>
            <h2>{time}</h2>
        </section>
    );
}
