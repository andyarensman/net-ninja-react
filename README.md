Reviewing more React with the Net Ninja YouTube Channel.

To start the json server, use the following command:

    npx json-server --watch data/db.json --port 8000

## useEffect

    useEffect(() => {}, []) //only runs the function once/only initial render when the second argument is an empty array - []

## Conditionally Output Data

In order to avoid a component loading before the data has loaded, use a conditional like this:

    {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>}
