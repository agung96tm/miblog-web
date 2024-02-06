
export const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2 className="sidebar-title">Newest Members</h2>

            <div className="columns is-multiline">
                <div className="user-card">
                    <div className="card-image">
                        <figure className="image is-96x96">
                            <img src="https://placekitten.com/96/96" alt="User 1" />
                        </figure>
                    </div>
                    <div className="card-content">
                        <p className="title is-6">User 1</p>
                    </div>
                </div>
            </div>
        </div>
    )
}