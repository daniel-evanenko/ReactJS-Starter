
const { useState } = React


export function AddWatcherModal({ modalRef, onSave }) {
    const [formData, setFormData] = useState({fullname: "",movies: [""]});


    function resetForm(){
        setFormData({ fullname: "", movies: [""] });
    }

    function onChange(ev, index = null) {
        const { name, value } = ev.target;
        if (name === "movies") {
            const updatedMovies = [...formData.movies];
            updatedMovies[index] = value;
            setFormData({ ...formData, movies: updatedMovies });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };


    function onAddMovie(){
        setFormData({ ...formData, movies: [...formData.movies, ""] });
    };


    function onSubmit(ev) {
        ev.preventDefault();
        if (!formData.fullname.trim()) {
            alert("Full name is required!");
            return;
        }
        const newWatcher = {
            fullname: formData.fullname,
            movies: formData.movies.filter(movie => movie.trim() !== "")
        };
        onSave(newWatcher);
        resetForm();
        modalRef.current.close(); 
    };

    function onCancelModal(){
        resetForm()
        modalRef.current.close()
    }
    return (
        <section className="add-watcher-modal">
             <dialog ref={modalRef} >
            <form onSubmit={onSubmit}>
                <h2>Add Watcher</h2>
                <label>Full Name:</label>
                <input
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={onChange}
                    placeholder="Enter full name"
                    required
                />
                <label>Movies:</label>
                {formData.movies.map((movie, index) => (
                    <input className="movie-input"
                        key={index}
                        type="text"
                        name="movies"
                        value={movie}
                        onChange={(ev) => onChange(ev, index)}
                        placeholder={`Movie ${index + 1}`}
                        required
                    />
                ))}
                <button type="button" onClick={onAddMovie}>+ Add Movie</button>
                <div>                
                <button type="submit">Save Watcher</button>
                <button type="button" onClick={onCancelModal}>Cancel</button>
                </div>
            </form>
        </dialog>
        </section>
       
    );
}