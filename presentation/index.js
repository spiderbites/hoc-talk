// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary"
          notes="<ul><li>Can think of HoCs as a design pattern that's become pretty popular
          <li>They're commonly talked about as a replacement for React Mixins which have been deprecated
          <li>I think of using them when there's some behaviour i want to share between components and this behaviour isn't tied to a specific type of data or a specific piece of UI
          <li>Have used them in a few places in conductor in the blind and kimberfire</ul>">
            <Heading size={1} lineHeight={1} textColor="black">
              Higher-Order Components
            </Heading>        
          </Slide>
          <Slide transition={["fade"]} bgColor="black" notes="HoC's are just functions">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/hoc1.example")}
              margin="20px auto"
              style={{fontSize: '20px'}}
            />
          </Slide>
          <Slide transition={["fade"]} bgColor="black" notes="That take a component as an argument">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/hoc2.example")}
              margin="20px auto"
              style={{fontSize: '20px'}}
            />
          </Slide>
          <Slide transition={["fade"]} bgColor="black" notes="and return a new component... component in, component out">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/hoc3.example")}
              margin="20px auto"
              style={{fontSize: '20px'}}
            />
          </Slide>     
          <Slide transition={["fade"]} bgColor="black" notes="HoCs are not a feature of React. They are just functions that take a component as their argument and return components that wrap them.">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/hoc4.example")}
              margin="20px auto"
              style={{fontSize: '20px'}}
            />
          </Slide>
          <Slide transition={["fade"]} bgColor="black" align="center flex-start"
            notes="- an example of an HoC to handle authentication that we're using in CITB.
            <br> - we hook into some lifecycle methods to simply check whether we have a logged in user and handle redirection here.
            <br> - we also prevent the the WrappedComponent from being rendered if we don't have a logged in user">
            <Heading size={6} lineHeight={3} textColor="white">Auth example</Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/auth1.example")}
              margin="5px auto"
              style={{fontSize: '15px'}}
            />
          </Slide>
          <Slide transition={["fade"]} bgColor="black" align="center flex-start"
            notes="- then in our routes we wrap the requiresAuth HoC around our logged in layout">
            <Heading size={6} lineHeight={3} textColor="white">Auth example - routes</Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/auth2.example")}
              margin="5px auto"
              style={{fontSize: '15px'}}
            />
          </Slide>
          <Slide transition={["fade"]} bgColor="black" align="center flex-start"
            notes="<ul><li>HoCs can also take additional arguments<li>
            <li>we can also add some more logic to it to help us deal with different user roles
            <li>here we're adding an optional parameter to specify whether a user role required
            <li>putting this logic in an HoC gives us a nice separation of concerns
            <li>And we differentiate the rendering logic so if the user's logged in, but doesn't have the right role, we render a Not Found / 404 component</ul>">
            <Heading size={6} lineHeight={3} textColor="white">Auth example - with different user roles</Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/auth3.example")}
              margin="5px auto"
              style={{fontSize: '15px'}}
            />
          </Slide>
          <Slide transition={["fade"]} bgColor="black" align="center flex-start"
          notes="<ul><li>and then we can define a set of routes that only a user with with a 'host' role has access to
            <li>- note we could definitely put this auth logic in a plain component and nest our routes to get the same behaviour
            <li>- but i like the HoC pattern because it's very clear that requiresAuth is some behaviour that we can clearly associate with certain components">
            <Heading size={6} lineHeight={3} textColor="white">Auth example - routes with user roles</Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/auth4.example")}
              margin="5px auto"
              style={{fontSize: '15px'}}
            />
          </Slide>
          <Slide transition={["fade"]} bgColor="black" align="center flex-start"
          notes="<ul><li>here's an HoC that takes care of rendering a spinner while a container is fetching data
          <li>it also times how long the fetching takes and then passes that time as a prop to the wrapped component</ul>">
            <Heading size={6} lineHeight={3} textColor="white">Loading example</Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/loading1.example")}
              margin="5px auto"
              style={{fontSize: '15px'}}
            />
          </Slide>
          <Slide transition={["fade"]} bgColor="black" align="center flex-start"
          notes="<ul><li>here's a component responsible for fetching a bunch of images and then rendering them
          <li>when we export the ImageList component we wrap it with the the 'withLoader' HoC
          <li>and we specify the prop that the HoC should pay attention to, so a simple boolean that we maybe set in the course of our fetching actions that says whether we are still fetching
          <li>and we also have access to the loadingTime prop that was passed thru the HoC</ul>">
            <Heading size={6} lineHeight={3} textColor="white">Loading example</Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/loading2.example")}
              margin="5px auto"
              style={{fontSize: '15px'}}
            />
          </Slide>                    
          <Slide>
            <Heading size={4} textColor="secondary" margin={40}>HoCs you're already using...</Heading>
            <CodePane lang="js" margin="20px auto" source={require("raw!../assets/redux.example")} />
            <CodePane lang="js" margin="20px auto" source={require("raw!../assets/react-router.example")} />
            <CodePane lang="js" margin="20px auto" source={require("raw!../assets/redux-form.example")} />
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
