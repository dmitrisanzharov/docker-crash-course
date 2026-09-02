import React, { useEffect, useState } from 'react';

function App() {
    const [blogs, setBlogs] = useState<any>([]);
    useEffect(() => {
        fetch('http://localhost:4000/')
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);

    return (
        <div className='App'>
            <header className='App-header'>
                <h1>all blogs</h1>
                <ul>
                    {!blogs && <p>Loading...</p>}
                    {blogs && blogs.map((blog: any) => <li key={blog.id}>{blog.title}</li>)}
                </ul>
            </header>
        </div>
    );
}

export default App;
