# Use Fetch by @goldenjayr

> This hook uses **axios** under the hood.

```jsx
    import useFetch from '@goldenjayr/use-fetch'

    function Todos() {
      const options = {} // these options accept all native `axios` options
      // the last argument below [] means it will fire onMount (GET by default)
      const { loading, error, data = [] } = useFetch({ url: 'https://example.com/todos', options })
      return (
        <>
          {error && 'Error!'}
          {loading && 'Loading...'}
          {data.map(todo => (
            <div key={todo.id}>{todo.title}</div>
          )}
        </>
      )
    }
```