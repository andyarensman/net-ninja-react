import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    console.log('use effect ran');
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json()
      })
      .then((data) => {
        setBlogs(data);
      })
  }, []) //only runs the function once/only initial render when the second argument is an empty array - []

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      {/*<button onClick={() => setName('Luigi')}>change name</button>
      <p>{name}</p>
       <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" handleDelete={handleDelete}/> */}
    </div>
  );
}

export default Home;
