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

const images = {};
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

const ResourceLink = ({name, url}) => (
  <Fit>
    <Heading margin="1.5rem 0 0 0" size={6} textColor="quartenary" caps>
      {name}
    </Heading>
    <Link textColor="secondary" href={url}>
      {url}
    </Link>
  </Fit>
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme} progress="bar">
        <Slide transition={["fade"]} bgColor="primary" align="center center">
          <Heading style={{ letterSpacing: 8 }} size={1} caps textColor="secondary">
            State of Styling
          </Heading>
          <Heading textColor="secondary" size={4} caps>
            (in React)
          </Heading>

          <Text margin="10vh 0 0" textColor="tertiary" textFont="secondary" size={6}>
            <Link textColor="tertiary" bold href="https://twitter.com/loklaan">{"@loklaan"}</Link>
            {" "}
            <Link textColor="tertiary" bold href="https://twitter.com/rexsoftware">{"@rexsoftware"}</Link>
          </Text>
          <br />
          <Appear>
            <Text textColor="tertiary" textFont="secondary" size={6} bold>
              <S type="bold" textColor="quartenary">Drunk proposal <S type="bold">#2/3</S></S><br /><br />
              <S type="italic">P.S. Let's focus on the Web</S>
            </Text>
          </Appear>
        </Slide>

        {/**/}

        <Slide transition={["slide"]} bgColor="secondary" textColor="tertiary">
          <Heading size={2} textColor="primary" caps margin="0 0 1rem 0">CSS-in-JS</Heading>
          <Heading size={6} textColor="quartenary" caps margin="0 0 2rem 0">Just do it, if you're:</Heading>
          <List ordered textColor="quartenary" bgColor="secondary" padding="4rem 5rem" style={{borderRadius: 5}}>
            <ListItem>Writing non-trivial applications</ListItem>
            <ListItem>Writing UI elements in JavaScript</ListItem>
          </List>
        </Slide>

        {/**/}

        <Slide transition={["slide"]} bgColor="tertiary" textColor="secondary">
          <Heading size={1} textColor="quartenary" fit caps margin="0 0 3rem 0">Imposed Problems</Heading>
          <Heading size={3} style={{fontSize: "3.2rem"}} textColor="secondary" margin="0 0 1.9rem 0">Our CSS pipeline</Heading>
          <Heading size={3} style={{fontSize: "3.2rem"}} textColor="secondary" margin="0 0 1.9rem 0">JS parsing performance</Heading>
          <Heading size={3} style={{fontSize: "3.2rem"}} textColor="secondary">Distributing JS components</Heading>
        </Slide>

        {/**/}

        <Slide transition={["fade"]} bgColor="quartenary" textColor="secondary">
          <Heading size={3} style={{fontSize: "4.5rem"}} textColor="secondary" margin="0 0 3rem 0">
            Fundemental Approaches
          </Heading>
          <Heading size={4} bold textColor="primary" margin="0 0 1.8rem 0" caps>Global CSS 😱</Heading>
          <Heading size={4} bold textColor="primary" margin="0 0 1.8rem 0" caps>Inline & Reinvent 🔥</Heading>
          <Heading size={4} bold textColor="primary" margin="0 0 1.8rem 0" caps>Runtime injection 🤔</Heading>
          <Heading size={4} bold textColor="primary" margin="0 0 1.8rem 0" caps>Extract & reference 🙌</Heading>
        </Slide>

        {/**/}

        <Slide transition={["fade"]} bgColor="quartenary" textColor="secondary">
          <Heading size={3} style={{fontSize: "4.5rem"}} textColor="secondary" margin="0 0 3rem 0">
            Enough.
          </Heading>
          <Heading size={3} style={{fontSize: "4.5rem"}} textColor="secondary" margin="0 0 3rem 0">
            Solution, please?
          </Heading>
          <Appear>
            <Heading size={4} bold textColor="primary" margin="0 0 1.8rem 0" caps>Sorry, nope 😓</Heading>
          </Appear>
        </Slide>

        {/**/}

        <Slide transition={["slide"]} bgColor="tertiary" textColor="secondary">
          <Heading size={1} textColor="quartenary" fit caps margin="0 0 3rem 0">Why isn't it simple? 💁</Heading>
          <Appear>
            <Fit>
              <Heading size={3} style={{ fontSize: "3.2rem" }} textColor="secondary" margin="0 0 1.9rem 0">Theming</Heading>
              <Heading size={3} style={{ fontSize: "3.2rem" }} textColor="secondary" margin="0 0 1.9rem 0">Packaging</Heading>
              <Heading size={3} style={{ fontSize: "3.2rem" }} textColor="secondary" margin="0 0 1.9rem 0">Server rendering</Heading>
              <Heading size={3} style={{ fontSize: "3.2rem" }} textColor="secondary" margin="0 0 1.9rem 0">Cross-platformness</Heading>
              <Heading size={3} style={{ fontSize: "3.2rem" }} textColor="secondary" margin="0 0 1.9rem 0">Subtle technical opinions</Heading>
            </Fit>
          </Appear>
        </Slide>

        {/**/}

        <Slide transition={["fade"]} bgColor="quartenary" textColor="secondary">
          <Heading size={3} style={{fontSize: "4.5rem"}} textColor="secondary" margin="0 0 3.9rem 0">Library Suggestions</Heading>
          <Heading size={4} style={{ fontSize: "2.7rem" }} bold textColor="primary" margin="0 0 1.8rem 0" caps>{"<Opinion>"}</Heading>
          <List textColor="primary" bold>
            <ListItem margin="0 0 1rem 0">For React: <Code>styled-jsx</Code></ListItem>
            <ListItem margin="0 0 1rem 0">For Freedom: <Code>glamor / fela</Code></ListItem>
            <ListItem margin="0 0 1rem 0">For You: <S type="underline"><Code>???</Code></S></ListItem>
          </List>
          <Heading size={4} style={{ fontSize: "2.7rem" }} bold textColor="primary" margin="0 0 1.8rem 0" caps>{"</Opinion>"}</Heading>
        </Slide>

        {/**/}

        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={2} textColor="primary" caps margin="0 0 1rem 0">Questions?</Heading>
          <Heading size={6} textColor="quartenary" caps>resources coming up</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" align="center center">
          <Heading style={{letterSpacing: 8}} size={1} caps textColor="secondary" margin="0 0 3rem 0">
            Resources
          </Heading>

          <ResourceLink
            name="CSS in your JS, 'Original' concept talk"
            url="http://blog.vjeux.com/2014/javascript/react-css-in-js-nationjs.html"
          />
          <ResourceLink
            name="Comparison of +49 css-in-js libraries"
            url="https://github.com/MicheleBertoli/css-in-js"
          />
          <ResourceLink
            name="Compare NPM installs"
            url="http://npmcharts.com/compare/glamor,radium,styled-components,css-modules,styled-jsx,css-modules,jss,fela"
          />

          <Heading margin="1.5rem 0 0 0" size={6} textColor="quartenary" caps>
            ...ask me for more
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
