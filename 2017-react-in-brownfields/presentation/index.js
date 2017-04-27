import React from "react";
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Markdown,
  Layout,
  Fit,
  Fill,
  Appear,
  Link,
  S,
  CodePane,
  Code
} from "spectacle";
import CodeSlide from '@loklaan/spectacle-code-slide';
import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";

require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  green: require("../assets/greenfields.png"),
  brown: require("../assets/brownfields.jpg")
};
preloader(images);
const theme = createTheme({
  primary: "#262323",
  secondary: "#118AB2",
  tertiary: "#80CED7",
  quartenary: "#CEFFFE"
}, {
  primary: { name: "Montserrat", googleFont: true, styles: ["600"] },
  secondary: { name: "Nunito Sans", googleFont: true, styles: ["400"] },
  tertiary: { name: "Space Mono", googleFont: true, styles: ["400"] }
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme} progress="bar">
        <Slide transition={["fade"]} bgColor="primary" align="center center">
          <Heading style={{letterSpacing: 8}} size={1} caps textColor="secondary">
            React in Brownfields
          </Heading>

          <Text margin="10vh 0 0" textColor="tertiary" textFont="secondary" size={6}>
            <Link textColor="tertiary" bold href="https://twitter.com/loklaan">{"@loklaan"}</Link>
            {" "}
            <Link textColor="tertiary" bold href="https://twitter.com/rexsoftware">{"@rexsoftware"}</Link>
          </Text>
          <br />
          <Appear>
            <Text textColor="tertiary" textFont="secondary" size={6} bold>
              Drunk proposal <S type="bold" textColor="tertiary">#1/3</S>
            </Text>
          </Appear>
        </Slide>

        {/**/}

        <Slide transition={["fade"]} bgColor="primary" bgImage={images.green}
         notes={`
         <li>new products and projects
         <li>what most people want to work on
         `}
        >
          <Appear>
            <List textColor="quartenary" bgColor="secondary" padding="4rem 5rem" style={{borderRadius: 10}}>
              <Heading size={2} textColor="tertiary" margin="0 0 2rem 0">Greenfields</Heading>
              <ListItem>New product</ListItem>
              <ListItem>Fresh design & code</ListItem>
              <ListItem>Limited features</ListItem>
              <ListItem>Unlimited possibilities</ListItem>
            </List>
          </Appear>
        </Slide>

        {/**/}

        <Slide transition={["fade"]} bgColor="primary" bgImage={images.brown}
         notes={`
         <li>existing products
         <li>existing clients
         <li>makes money
         <li>in javascript, age shows
         <h1>HANDS UP<br />"who wants to use react in brownfields"<br />this talk is for you
         `}
        >
          <Appear>
            <List textColor="quartenary" bgColor="secondary" padding="4rem 5rem" style={{borderRadius: 5}}>
              <Heading size={2} textColor="tertiary" margin="0 0 2rem 0">Brownfields</Heading>
              <ListItem>Been around for awhile</ListItem>
              <ListItem>Many features in the wild</ListItem>
              <ListItem>Made a killing by now</ListItem>
              <ListItem>Still has resources improving it</ListItem>
              <ListItem>Difficult to change early choices</ListItem>
              <ListItem><S type="bold">Not using React</S> *</ListItem>
            </List>
          </Appear>
        </Slide>

        {/**/}

        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary"
         notes={`
         <li>i came across...
         <strong>stop before 'convincing'</strong>
         <li>at the time was seeing problems...
             <ul><li>repeated patterns
             <li>unexpected bugs from coupled UI state
             <li>disconnect in product team
                 <ul><li>designers weren't falling back on patterns consistently
                 <li>product manager tableflipping estimates</ul></ul>
         <li>saw components as a way to solve that first problem
         <li>bosses on board to write new features in rex in react
         <li>going forward, all products
         <li>this is where we are now. eg pocket
         <li>it's solved most of the problems mentioned
         <li>brought dev inline with ux/design
         `}
        >
          <Heading size={2} textColor="primary" caps margin="0 0 1rem 0">Rex</Heading>
          <Heading size={6} textColor="quartenary" caps margin="0 0 2rem 0">meets react</Heading>
        </Slide>

        {/**/}

        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary"
         notes={`
         <li>before <strong>convincing anyone to react in brownfields</strong>
         <li>ui stack
             <ul><li>view libraries and data models</ul>
         <li>module bundling
             <ul><li>react and vanillajs
             <li>third party packages</ul>
         <li>nice to future self and others
             <ul><li>explain your choices
             <li>guides</ul>
         `}
        >
          <Heading size={1} textColor="quartenary" fit caps margin="0 0 3rem 0">Placing React with care</Heading>
          <Heading size={3} style={{fontSize: "4.5rem"}} textColor="primary" margin="0 0 1.8rem 0">Integrating your UI stack</Heading>
          <Heading size={3} style={{fontSize: "3.8rem"}} textColor="primary" margin="0 0 1.8rem 0">Building modern javascript</Heading>
          <Heading size={3} style={{fontSize: "3.2rem"}} textColor="primary">Establishing guidelines</Heading>
        </Slide>

        {/**/}

        <Slide transition={["fade"]} bgColor="quartenary" textColor="secondary"
         notes={`
         <li>dom elements in your view
         <li>call <code>React.render(Component, element)</code>
         <li>call <code>React.unmountComponentAtNode(element)</code> to cleanup
         `}
        >
          <Heading size={3} style={{fontSize: "4.5rem"}} textColor="secondary" margin="0 0 3rem 0">Integrating your UI stack</Heading>
          <Heading fit bold textColor="primary" margin="0 0 1.8rem 0" caps>Embedding React Components</Heading>
        </Slide>

        {/**/}

        <CodeSlide
          transition={["slide"]}
          maxWidth={1280}
          lang="html"
          code={require('raw-loader!./view.example.html')}
          ranges={[
            { loc: [ 0, 0 ], title: <Heading textColor="tertiary" size={2}>But first, a Knockout Demo 😱</Heading> },
            { loc: [ 0, 8 ], note: "simple knockout \"view\"" },
            { loc: [ 10, 14 ], note: "simple knockout \"viewmodel\" (observable state)" },
            { loc: [ 15, 20 ], note: "apply viewmodel to dom element tree" },
            { loc: [ 0, 1 ], note: "binding templates are found and processed" },
          ]}
        />

        {/**/}

        <CodeSlide
          transition={["slide"]}
          maxWidth={1280}
          lang="html"
          code={require('raw-loader!./react-binding.example.html')}
          ranges={[
            { loc: [ 0, 0 ], title: <Heading textColor="tertiary" size={2}>Embedding React in Knockout</Heading> },
            { loc: [ 0, 7 ] },
            { loc: [ 9, 17 ] },
            { loc: [ 18, 25 ], note: "create a binding template called \"react\"" },
            { loc: [ 26, 38 ], note: "handle the render events" },
            { loc: [ 27, 30 ], note: "access the given component and props" },
            { loc: [ 1, 3 ], note: "access the given component and props" },
            { loc: [ 27, 30 ], note: "access the given component and props" },
            { loc: [ 30, 35 ], note: "render them to the view's dom element" },
            { loc: [ 40, 44 ], note: "cleanup react" }
          ]}
        />

        {/**/}

        <Slide transition={["fade"]} bgColor="quartenary" textColor="secondary"
         notes={`
         <li>subscribe to changes in your data model
         <li>feed them into <code>React.render(Component, element)</code>
         `}
        >
          <Heading size={3} style={{fontSize: "4.5rem"}} textColor="secondary" margin="0 0 3rem 0">Integrating your UI stack</Heading>
          <Heading fit bold textColor="primary" margin="0 0 1.8rem 0" caps>Syncing State</Heading>
        </Slide>

        {/**/}

        <CodeSlide
          transition={["slide"]}
          maxWidth={1280}
          lang="html"
          code={require('raw-loader!./react-binding.example.html')}
          ranges={[
            { loc: [ 40, 44 ] },
            { loc: [ 46, 51 ], note: "apply data model to the view" },
            { loc: [ 0, 0 ], title: <span><Heading textColor="quartenary" size={5}>MyTodo is rendered with items</Heading><S textColor="quartenary" type="italic">trust me</S></span> },
            { loc: [ 52, 56 ], note: <span>update <Code textColor="white" style={{  fontSize: 'inherit'}}>todoProps</Code> with empty list</span> },
            { loc: [ 0, 0 ], title: <span><Heading textColor="quartenary" size={5}>MyTodo re-rendered without items</Heading><S textColor="quartenary" type="italic">trust me again</S></span> },
            { loc: [ 28, 29 ], note: "subscribe to data changes" },
            { loc: [ 20, 21 ], note: "subscribe to data changes" },
            { loc: [ 20, 21 ], note: "re-render component with new props" },
            { loc: [ 30, 35 ], note: "re-render component with new props" }
          ]}
        />

        {/**/}

        <Slide transition={["fade"]} bgColor="quartenary" textColor="secondary">
          <Heading size={3} style={{fontSize: "4.5rem"}} textColor="secondary" margin="0 0 3rem 0">Integrating your UI stack</Heading>
          <Heading fit bold textColor="primary" margin="0 0 1.8rem 0" caps>Difficulty will vary.</Heading>
          <Heading size={6} bold textColor="primary" margin="0 0 1.8rem 0" caps>(use google / github)</Heading>
        </Slide>

        {/**/}

        <Slide transition={["fade"]} bgColor="quartenary" textColor="secondary">
          <Heading size={3} style={{fontSize: "4.5rem"}} textColor="secondary" margin="0 0 3rem 0">Integrating your UI stack</Heading>
          <Heading fit bold textColor="primary" margin="0 0 1.8rem 0" caps>Styling</Heading>
          <List textColor="primary" bold>
            <ListItem margin="0 0 1rem 0">Continue using current strategies</ListItem>
            <ListItem margin="0 0 1rem 0">Research and appreciate options</ListItem>
            <ListItem margin="0 0 1rem 0">Wait for my next talk, wink</ListItem>
            <ListItem margin="0 0 1rem 0">Make an informed decision</ListItem>
          </List>
        </Slide>

        {/**/}

        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={2} textColor="primary" caps margin="0 0 1rem 0">Your Build Pipeline</Heading>
          <Heading size={6} textColor="quartenary" caps margin="0 0 2rem 0">is probably old</Heading>
          <Heading style={{fontSize: "1rem"}} textColor="quartenary" caps>javascript fatigue amirite?</Heading>
        </Slide>

        {/**/}

        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={2} textColor="primary" caps margin="0 0 3rem 0">Rex CRM</Heading>
          <List textColor="quartenary" textFont="secondary" bold>
            <ListItem margin="0 0 1rem 0">PHP asset pipeline (all server-side)</ListItem>
            <ListItem margin="0 0 1rem 0">No webpack / browserify</ListItem>
            <ListItem margin="0 0 1rem 0">But, codesplitting!</ListItem>
            <ListItem margin="0 0 1rem 0">And static dependency graphs!</ListItem>
          </List>
        </Slide>

        {/**/}

        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={2} textColor="primary" caps margin="0 0 1rem 0">Rex CRM</Heading>
          <Heading size={6} textColor="quartenary" caps margin="0 0 3rem 0">Pipeline Rehaul</Heading>
          <List textColor="quartenary" textFont="secondary" bold>
            <ListItem margin="0 0 1rem 0">New code: browserify & babel</ListItem>
            <ListItem margin="0 0 1rem 0">Old code: old pipeline logic ported to gulp</ListItem>
            <ListItem margin="0 0 1rem 0">New Modules exposed on window</ListItem>
            <ListItem margin="0 0 1rem 0">And still, codesplitting!</ListItem>
            <ListItem margin="0 0 1rem 0">Also a faster development experience</ListItem>
          </List>
        </Slide>

        {/**/}

        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary"
         notes={`
         <li>developers are bad at commenting
         <li>not doing this is 1 million time worse
         `}
        >
          <Heading size={1} textColor="quartenary" fit caps margin="0 0 4rem 0">Establishing guidelines</Heading>
          <Heading size={3} style={{fontSize: "4rem"}} textColor="primary" margin="0 0 3.5rem 0">Document everything</Heading>
          <Heading size={3} style={{fontSize: "3.6rem"}} textColor="primary">Write guides</Heading>
        </Slide>

        {/**/}

        <Slide transition={["fade"]} bgColor="primary" align="center center">
          <Heading style={{letterSpacing: 8}} size={1} caps textColor="secondary" margin="0 0 3rem 0">
            Resources
          </Heading>

          <Heading margin="1.5rem 0 0 0" size={6} textColor="quartenary" caps>
            Basic React installation
          </Heading>
          <Link textColor="secondary" href="https://facebook.github.io/react/docs/installation.html">
            https://facebook.github.io/react/docs/installation.html
          </Link>
          <Heading margin="1.5rem 0 0 0" size={6} textColor="quartenary" caps>
            Integrating React in thirdy party libraries
          </Heading>
          <Link textColor="secondary" href="https://facebook.github.io/react/docs/integrating-with-other-libraries.html">
            https://facebook.github.io/react/docs/integrating-with-other-libraries
          </Link>
          <Heading margin="1.5rem 0 0 0" size={6} textColor="quartenary" caps>
            Airbnb, React Native in Brownfields
          </Heading>
          <Link textColor="secondary" href="https://www.youtube.com/watch?v=tWitQoPgs8w">
            https://www.youtube.com/watch?v=tWitQoPgs8w
          </Link>
        </Slide>
      </Deck>
    );
  }
}
