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

# Episode 9: Optimizing Our App
- Single Responsibility Principle: It means whether an entity is a class or a function or something else, it should have the single responsibility only.
- Modular: It means we break our big code into small modules, so that it can be maintainable and testable and resuable.
- By ensuring Single Responsibility Principle for every Component, Component becomes Modular, Testable, Maintainable and Reusable.
- Creating a custom hook is not a mandatory thing. But it is a good thing because that will make your code look more readable, modular, reusable. So that is the use of creating custom hooks.
- Hooks are utility/helper functions given to us by React.
- Single Responsibility Principle makes Components light-weight.
- Steps to create a custom hook:
    i) Finalize the contract i.e what should be the input and what should be the output/return data of that hook.
- The main job of Parcel is to do bundling.
- Bundling: Parcel takes all the files of our App and bundles them into one single file most probably Javascript file.
- But this can be an issue when you scale your App. Suppose there are lot of components in our App, then in that case, after bundling our single JS file can become very large.
- If we avoid Bundling, then if we have lot of components in our App, then in that case, no of JS files will be quite huge which is also an issue.
- So what should we do in that case to optimize our App? We should make smaller logical bundles of our App. It is known as Chunking/Code Splitting/Dynamic Bundling/Lazy Loading/On Demand Loading/Dynamic Import.
- Suppose we have our Food Ordering App which also sells Groceries. We will make two logical bundles out of it. One for Restaurants and another for Groceries.
- When we open our Food Ordering App initially, then only one bundle will be loaded on the browser which is for Restaurants. The code for Groceries will not be there in the browser. When you go to Groceries through a link, then only bundle for that Groceries will also be loaded on the browser. That's why it is also known as Lazy Loading. We will not load everthing related to our App directly. We will do Lazy Loading when required. 
- Initially when you lazy load your Grocery Component without Suspense Component, then it will through error. It is because, Groceries bundle takes some time to load, and during that loading time, React will try to find Grocery Component code which will be not there since bundle is not loaded yet. So due to this it will suspend the rendering of Grocery Component and hence error will be thrown.
- To avoid such error, we wrap our Grocery Component with Suspense Component.
- Suspense Component will have a fallback prop which takes JSX as an input, so that while bundle is being not loaded, that JSX will be shown on that page.

# Episode 10: Jo Dikhta Hai, Vo Bikta Hai
- There are many ways to add css in our App:
    i) External CSS/Internal CSS/Inline CSS.
    ii) SASS and SCSS: We can write CSS with some super powers. It is not recommended way.
    iii) Styled Components: One of the recommended ways.
    iv) Material UI: Provides built in UI Components.
    v) BootStrap: Provides built in UI Components.
    vi) Chakra UI
    vii) Ant Design
    viii) Tailwind CSS: Most popular and trending library or framework.
- .postcssrc is a config file used by parcel to understand tailwind. 
- Tailwind uses postcss tool behind the scenes to transform CSS with Javascript.
- Tailwindcss works very differently than normal css.
- Tailwindcss gives you classnames automatically for every css that you would want to write it in our App.
- Tailwind Pros: 
    i) Does not have to move b/w files. Write css in jsx file in one go.
    ii) Tailwind is light-weight. What parcel and tailwind will do, all the unused classes and duplicate classes of tailwind will not be included in the build. Redundant css will be removed.
    iii) Pre-defined Components.
    iv) Provides different css for different devices.
- Tailwind Cons: 
    i) To much css in JSX makes the code ugly.

# Episode 11: Data is the new Oil
- Higher Order Component is a function that takes a component and returns a component.
- It takes that component, returns another component which is an enhanced version of the inputted component.
- When we write Higher Order Components they are pure functions. 
- Pure Function means, it will not modify the input, in our case a component. It will not modify the codebase of the component. It will either enhance the UI/UX or pass some extra props in that component.
- An important part of a React Application is to manage its data. All the React Applications has two layers: UI layer and Data layer. This UI layer is powered by Data layer. 
- This Data layer consists of your state, props, local variables etc. The major part is to handle this Data layer.
- The UI layer consists of JSX.
- Controlled and Uncontrolled Components
- Sometimes we have to lift the state up to control our children components.
- React Context is a powerful way to manage data. 
- When writing React code, you must have observe, React is a one-way data stream.
- Prop Drilling: Suppose there is a big React Application which has like deep level of nesting of like 7-8 levels and you want to pass data from 1st level component to 7th level component, then you have to pass that data through itermediate parent components with the help of props. This concept is known as Props Drilling. This is not a good way. You cannot directly pass that data from 1st component to 7th component. Suppose if we have to pass in data to 1 or 2 levels props drilling is still ok.
- What if our data is present somewhere and we want to access it somewhere else. How would I do that. And in a large application this is a very common scenario where sometimes we need to have some kind of a global data that I can access anywhere in my app where ever I am, whatever nested level I am. for this we have a super power given to us by React known as React Context.
- React Context removes the props drilling issue. 
- React Context is kind of like a global space where our data is kept and anybody can access it from anywhere.
- Think of some data which can be needed anywhere in our application: LoggedIn User, Theme(Dark/Bright) etc.
- We can say Context is like a global object. Not to say this in interview.
- We can have as many Contexts as we want in our React Application. 
- If all of our data of our application is in React Context then we don't require props, but it should not be the case.
- Only the data which you are using at multiple places or you feel that it can be used in multiple places that is where you will use your React Context. Don't put all data inside React Context.
- useContext() and <UserContext.Consumer/> component.
- UserContext.Provider component replaces the default value of React Context. I can use this component for a specific portion of our app.
- React Context is very performant.
- Redux is a state/data management library. It is not inside React.
- When creating small-sized or medium size React Applications prefer using React Context.
- When creating large-sized React Applications prefer using Redux.

# Episode 12: Let's Build Our Store
- Redux is not mandatory.
- React and Redux and different libraries.
- Redux is used for handling states in our application.
- Redux offers easy debugging.
- Redux is not the only library available. We can also use Zustand for managing data in React application.
- Redux store is a big object which is kept in a central global place.
- We have parts of our Redux store known as Slices. You can assume Slice to be a small portion of our Redux store.
- Logical partitions of our app can become slices of Redux store.
- When you want to update or add something in a slice, an action will be dispatched. That action will call a function which is known as reducer. That reducer will actually modify the slice.
- We use selector to read data from our store. This phenomenon is known as subscribing to the store. Basically it means the components are synced with the store. If the data inside my store changes, my components will update automatically. How do you subscribe, using a selector.
- Components are subscribed to the store using selector.

- Redux Toolkit
1) Install @reduxjs/toolkit and react-redux
2) Build our store
3) Connect our store to our app
4) Slice(cartSlice)
5) dispatch(action)
6) Selector

- Each Slice will have its own Reducer.
- Redux store will have its one big Reducer which is for our whole App. This reducer contains small reducers of each slice.
- When Redux store is updated, the components which are subscribed to that store will be re-rendered. //Not true Read it.
- Only those components will be re-rendered which is using that data of a slice which has been updated.
- Never subscribe your component to whole store. If anything changes in store, even though it has no relation with your component but your component still will re-render since it has subscribe to the whole store. So use useSelector() very carefully for becoming performant.
- Subscribe your component to only that portion of your store which is require by that component.
- Redux uses the immer library. So Redux Toolkit allows us to mutate the existing state. But behind the scenes, Redux Toolkit is following logic of Old Vanilla Redux where mutating the state was not allowed. Behind the scenes old logic is followed. Redux Toolkit does this with the help of immer.
- Immer is a library that allows you to work with immutable state in a more convenient way.
- Redux Devtools is a way for Debugging and look into RTK.
- RTK's Redux Devtools keeps track of all the actions dispatched. We can also simulate the behaviour of users. It works on the Data Layer of React Application.
- RTK Query/Redux Thunks/Redux Middlewares study it.
- Basically suppose if you want to make an API call and want to store the data inside redux store, so there used to be a design pattern or coding pattern which use middlewares and thunks in old Vanilla Redux.
Now with RTK, we have new something known as RTK Query.

# Episode 13: Time For Test
- There are two types of Testing that developers can perform:
    i) Manual Testing: Testing the feature or any part of the application by himself.
    ii) Testing by writing code(Test cases + some code) that will test the application.
- In the second scenario we have 3 more types of Testing:
    i) Unit Testing: You test your React Components in isolation. Only that React Component will be rendered and tested.
    ii) Integration Testing: There are multiple components and they are talking to each other and we will develop a flow of an action in our React Application, that we will test.
    iii) End To End Testing - e2e Testing: Testing the React Application as soon as the user lands on the website to the user leaves the website and we will test all the flows(Testing your whole application flow). It's kind of simulating what the user will do throughout the App.
- End to End Testing requires different types of tools like Selenium etc.
- React Testing Library is built on top of DOM Testing Library.
- React Testing Library uses something known as Jest behind the scenes.
- Jest uses Babel behind the scenes.

# Setting up Testing in our app
- Install React Testing Library
- Installed Jest
- Installed Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- Jest configuration: npx jest --init
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- Install @testing-library/jest-dom 

- "--" is known as dunder.
- In every test case you will render something, query something and assert something.
- test and it are both the same thing.
- jsdom environment understands JSX code. It does not understand redux code.
- Every test case has an isolated render, query and assert in it.
- jsdom is browser like environment.