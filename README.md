Reviewing more React with the Net Ninja YouTube Channel.

To start the json server, use the following command:

    npx json-server --watch data/db.json --port 8000

## useEffect

    useEffect(() => {}, []) //only runs the function once/only initial render when the second argument is an empty array - []

## Conditionally Output Data

In order to avoid a component loading before the data has loaded, use a conditional like this:

    {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>}

##react-router-dom

He uses version 5 in the tutorial, however this version does not work with the newest version of React, so I had to update to version 6 and change a few things in the code. 'Switch' is now 'Routes'.

https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md

In version 6, useHistory is replaced by useNavigate. [See this documentation for more info on the differences](https://reactrouter.com/docs/en/v6/upgrading/v5).

To go back by one page, you use `navigate(-1)` instead of `history.go(-1)`.
