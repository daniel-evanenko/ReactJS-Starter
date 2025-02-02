const { useState, useEffect } = React


export function MouseMonitor() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isOn, setIsOn] = useState(true);

    useEffect(() => {
        if (isOn) {
            document.addEventListener("mousemove", updatePos);
        } 
        return () => {
            document.removeEventListener("mousemove", updatePos);
        };
    }, [isOn]); 

    function updatePos(event) {
        setMousePos({ x: event.clientX, y: event.clientY });
    }

    function addMouseListener() {
        setIsOn(true);
    }

    function removeMouseListener() {
        setIsOn(false);
    }

    return (
        <section className="mouse-monitor">
            <h2>Mouse Position</h2>
            <h3>X: {mousePos.x} , Y: {mousePos.y}</h3>
            <button disabled={!isOn} onClick={removeMouseListener}>Pause</button>
            <button disabled={isOn} onClick={addMouseListener}>Resume</button>
        </section>
    );
}