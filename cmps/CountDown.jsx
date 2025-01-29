const { useState, useEffect, useRef } = React

export function CountDown({startFrom, onDone }) {
    const [count, setCount] = useState(startFrom);
    const intervalIdRef = useRef(null);
    const warning = count <= 6 ? 'warning' : '';
    useEffect(() => {
        intervalIdRef.current = setInterval(() => {
            setCount(prevCount => {
                if (prevCount <= 1) {
                    clearInterval(intervalIdRef.current);
                    onDone(); 
                    return 0;  
                }
                return prevCount - 1;
            });
        }, 1000);
        return () => clearInterval(intervalIdRef.current);
    }, []); 

    return (
        <section className="count-down">
            <div className="count-down-box">
                <h2 className={warning}>{count}</h2>
            </div>
        </section>
    );
}
