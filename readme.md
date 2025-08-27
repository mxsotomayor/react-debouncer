# ⏲️ React Debouncer

A custom React hook for debouncing function execution, helping you optimize performance by limiting how often a function is called in response to rapid user actions.

## What is debouncing

Debouncing postpones a function’s execution until after a pause in activity, ensuring it runs only once after rapid, repeated calls stop.


## Installing & Using

``` cmd
npm install @maxwellsr/react-debouncer
```

Suppose you want to implement an instant search feature, similar to how Google suggests results as you type. You don't want to trigger an API call with every keystroke, as this would be inefficient and could overload your backend. 

Instead, you can debounce the text input's change event so that the search function is only called after the user has stopped typing for a short period.

``` typescript
// import the debouncer
import { debouncer } from "@maxwellsr/react-debouncer";

...
// this is your component
const MyComponent = () => {

    // instance the debouncer, this function accept and integer value
    // for delaying function call, delay=500 by default
    const debounce = debouncer();

    return (
        <section>
          <SearchInput
            onChange={(value) => {
              // call our debouncer with every key pressed
              debounce(() => {
                // function that you will really debounce
                performSearch(value);
              });
            }}
          />
        </section>
    )

}
```
