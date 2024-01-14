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
- There is a very core concept which industries uses nowadays which is Config-Driven UI which means on the basis of config(API based data) UI changes or gets rendered.

- When same type of components are on the same level in DOM, ex Restaurant Cards inside Restaurant Container, then unique key     should be assigned to them so that in case of infinite scrolling or re-rendering, if any new Restaurant Card comes in the API, then React understands that this Card is a new one, rest Cards are old ones. So will render only that new Card, rest Cards will not be re-rendered.

- In case unique keys are not assigned, then, in case new Restaurant Card comes in, React will not be able to understand, which Cards are new ones and which are old ones. In that case, React will re-render all the Cards.

- So assigning unique keys to these Cards is an optimization in render cycle of React.

- It is not recommended to use indexes(Array Indexes) as keys. In case of sorting or any processing, order of data in API will change and then all Cards will be re-rendered.



