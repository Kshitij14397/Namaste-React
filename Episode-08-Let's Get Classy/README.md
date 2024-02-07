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

# Episode 6: Exploring The World
- React has fast Render Cycle.
- useEffect(): If you have to do something after rendering the component, you write it in the useEffect's callback function argument.
- Error: Calling Swiggy's API from localhost is normally blocked by CORS policy. Our browser is not allowing us to call Swiggy's API from localhost(from one origin to another origin). If there is a origin mismatch, then browser blocks that API call. That is a CORS policy.
- Shimmer UI is like we load fake page UI until we get actual data from the API. This is much better user experience as compared to showing spinning loader.
- Whenever state variable changes, React will trigger the Reconciliation Cycle(re-renders the component in which that state variable is defined)

# Episode 7: Finding The Path
- The actual definition of useEffect() is everytime a component is rendered, useEffect() will be called.
- If no dependency array => useEffect is called on every render.
- If dependency array is empty = [] => useEffect is called on initial render(just once).
- If dependency array is [btnNameReact] => useEffect is called everytime btnNameReact is updated. Also it will be called on initial render.
- useState() is used to create super powerful state variables inside your component.
- Do Not's about useState or Hooks in general: i) Never use useState outside your component. It will give an error.
                                               ii) Use useState at the top inside your component.
                                               iii) Never use useState inside if-else, for-loops, function expression/function statements. 
- Whenever we have to develop routes, we have to create Routing Configuration at the Root Component.
- createBrowserRouter creates the Routing Configuration.
- RouterProvider is a component which provides the Routing Configuration to our App.
- rafce automatically creates a Boilerplate Functional Component for us.
- useRouteError() gives more information about the error, when path does not matches or exist. With the help of this we can easily create a custom Error Page and gives more information about the error to the user in UI.
- Children Routes
- Outlet: It is a component. Whenever there is a change in the path so this Outlet will be filled with the children according to the path on what page we are. Outlet component will be replaced with the component according to the path.
- We can have multiple parents and multiple childrens and according to the routes it will render.
- When you are using React, and you want to route through some other page, never use an anchor tag. When you do this, then whole page gets refreshed.
- There is a magic that can happen in React, I do not want to refresh my whole page, but still I move to a new route. We can navigate to a new page without reloading the whole page.
-  Link: It is a super power component which is given to us by react-router-dom. It works exactly the same as anchor tag. So whenever you are navigating to a new route, use Link component, so that whole page did not get refreshed/reloaded. It just refreshes the component. Behind the scenes its using anchor tag. Link is a wrapper over anchor tag. React Router DOM keeps tracks of these special links.
- There is a difference b/w reloading a page and refreshing a component and that is where our React Applications are known as Single Page Applications.
- Its a whole single page (AppLayout Component) and all the routings, all the new pages are just components interchanging themselves. Everything is a component in React. Only one page, if I go a new route also, its just changing the component, its not reloading a new page.
- Traditionally in older days how it used to happen, we used to have different html pages(index.html, about-us.html, contact-us.html etc) and we have a anchor tag and if I click on that about-us page, then whole page is loaded once again. But now with React, you don't have to change/refreshes/reloades the page. Page is same, only component interchanges.
- There are two types of Routing that we can have in our Web Applications:
    i) Client Side Routing: In current web application we are developing, here Client Side Routing is used. We are not making any network calls while moving towards a new page or route because all the components are already loaded into our app. When I load the app for the first time, it already has the code for about-us page, when I go to that about-us page, it just loads that component. The only network call is made when I fetch data from an API. I am not fetching a new page.
    ii) Server Side Routing: You have a index.html, about-us.html, contact-us.html, If I click on my anchor tag of /about, it reloades the whole page, it sends a network call to about-us.html, fetches that html and renders it onto the webapage, thats how websites used to work. You make a network call and the page about-us.html is coming from the server.


# Episode 8: Let's get Classy
- Class Based Components: It is a javascript class which has render() in it. That render() returns some JSX.
- When you call super() inside child class constructor without passing props, then parent class constructor is called. Now if we use this.props inside and outside child class constructor, then inside constrcutor, this.props will be undefined but outside it this.props value exist.
- When you call super(props) inside child class constructor, then parent class constructor is called. Now if we use this.props inside and outside child class constructor, then inside constrcutor, this.props value exist and outside it this.props value also exist.
- super() is neccessary to call with or without arguments otherwise error will come.
- Invoking/Calling a Functional Component means loading/mounting that component on webpage.
- Loading/Mounting a Class Based Component means I am creating an instance of that class.
- When an instance of a class is created, state is created. So constructors are the best place to receive props and create state variables.
- this.state is a hugh object where we will create all the state variables in class based components.
- In our functional component, behind the scenes React uses a big one object to keep multiple states.
- Never update state variables directly in class based components. It can lead to inconsistency.
- Suppose you have three state variables in class based components and you update only one state variable using this.setState(), then React will re-render the class based component, i.e basically call the render() again. Instance of that class is not created again(constructor not called again). React will not touch the other two state variables.
- When a class based component loads or mounts then, instance of the class is created i.e contructor is called. After that render() is called. Then componentDidMount() is being called.
- The order of calling is different in Parent-Child-Grand Child as compared to Parent-Child1-Child2-Child3.
- componentDidMount() is used for making API calls. We can also make it async.
- Unmount means when the component disappears from html or we are leaving the page where this component is being used to call.
- Never ever compare React's Life Cycle methods with Functional Components.
- There are lots of things we need to clear when we are leaving the page.
- Single Page Applications has some cons in it.
- setInterval() and setTimeout() will keep hanging and plus new calls to them will be made when changing the pages. Because here pages are not reloading, only components are interchanged.
- In that case, componentWillUnmount() is used for cleaning up setInterval() or setTimeout().
- How do we do cleanup in case of Functional Components, if someone used setInterval() in useEffect. We can return a function from a useEffect callback function argument. That returning function will be called when component unmounts.
- Search this one: Why we can make componentDidMount() async and callback function in useEffect() not async?
