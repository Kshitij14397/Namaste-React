# Namaste-React 🚀

# Structure OF Food Ordering App(ComponentS)
- Header
    - Logo
    - NavItems
- Body
    - Search
    - RestaurantContainer
        - RestaurantCard
            - Image
            - Name
            - Star Ratings
            - Cuisine
- Footer
    - Copyright
    - Links
    - Address
    - Contact

# Notes

- There are two types of imports and exports respectively.
- default exports and named exports.
- Named exports is used when you have to export multiple things from the same file.
- In one file, we can have only one default exports.

- Default Export/Import

export default Component
import Component from "path"

- Named Export/Import

export const Component
import {Component} from "path"


# React Hooks
- Normal JS functions
- useState(): Used to generate superpowerful state variables in react. They are superpowerful because React constantly keeps track on it. Whenever it updates, it triggers the React Fiber Algorithm.
- useEffect()

- The state variable keeps the UI sync with the data layer.
- Whenever the state variable updates, React re-renders the component.
- React is only good at DOM Manipulation (efficient)
- In React16, a new algorithm to update the DOM came out known as Reconciliation Algorithm (React Fiber) [Diff Algorithm and Updating the Actual DOM]
- Actual DOM is the html tags tree.
- Virtual DOM is the object representation of the Actual DOM.
- Virtual DOM is the Javascript object.
- Finding out the difference b/w two javascript objects is easier as compared to finding out the difference b/w two html codes.
- Whenever there is change in any state variable, React will find out the difference b/w Virtual DOMs(old and new), then it will re-render our component, i.e it will update the actual DOM.
- React has the Diff Algorithm to find out the difference b/w two Virtual DOMs.