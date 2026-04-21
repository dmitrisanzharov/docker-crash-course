import React, { useState, useEffect } from "react";

function App() {
    const [blogs, setBlogs] = useState<any>([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>all blogs</h1>
                <ul>
                  {!blogs && <p>Loading...</p>}
                    {blogs &&
                        blogs.map((blog: any) => (
                            <li key={blog.id}>{blog.title}</li>
                        ))}
                </ul>
            </header>
        </div>
    );
}

export default App;
