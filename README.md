# Use Fetch by @goldenjayr

> This hook uses **axios** under the hood.
> This hook makes good use of React Suspense

```jsx
    import useFetch from '@goldenjayr/use-fetch'
    import { Suspense } from 'react'

    function Todos() {
      const options = {} // these options accept all native `axios` options
      // the last argument below [] means it will fire onMount (GET by default)
      const data = useFetch({ url: 'https://example.com/todos', options })
      return (
        <>
          {data}
        </>
      )
    }


    function App() {
      return (
        // you need to wrap your component in suspense
        <Suspense>
          <Todo />
        </Suspense>
      )
    }
```