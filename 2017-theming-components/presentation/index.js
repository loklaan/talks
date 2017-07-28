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
import CodeSlide from "@loklaan/spectacle-code-slide";
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
        <Slide transition={["slide"]} bgColor="primary" align="center center">
          <Heading style={{letterSpacing: 8}} size={1} caps textColor="quartenary">
            Theming Components
          </Heading>

          <Text margin="10vh 0 0" textColor="tertiary" textFont="secondary" size={6}>
            <Link textColor="tertiary" bold href="https://twitter.com/loklaan">{"@loklaan"}</Link>
            {" "}
            <Link textColor="tertiary" bold href="https://twitter.com/rexsoftware">{"@rexsoftware"}</Link>
          </Text>
          <br />
          <Appear>
            <Text textColor="tertiary" textFont="secondary" size={6} bold>
              Drunk proposal <S type="bold" textColor="tertiary">#3/3 😎</S>
            </Text>
          </Appear>
        </Slide>

        {/**/}

        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary"
          notes={`
          <li>Easy because they can be "correct"
          <li>Hard because they can't often be "correct" when ment for broad audiences
          `}
        >
          <Heading size={4} textColor="primary" caps margin="0 0 5rem 0">Package "Reusablility"</Heading>

          <Heading size={6} textColor="quartenary" caps margin="0 0 0.5rem 0">Easy to encapsulate</Heading>
          <List textColor="quartenary" bgColor="secondary" padding="0rem 0rem 2rem 9rem" style={{borderRadius: 5}}>
            <ListItem>Internal functionality</ListItem>
            <ListItem>Platform semantics</ListItem>
          </List>
          <Heading size={6} textColor="quartenary" caps margin="0 0 0.5rem 0">💀 Hard 💀</Heading>
          <List textColor="quartenary" bgColor="secondary" padding="0rem 0rem 2rem 8.3rem" style={{listStyle: 'none', borderRadius: 5}}>
            <ListItem>☠&nbsp;&nbsp;Styling️</ListItem>
          </List>
        </Slide>

        {/**/}

        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary"
         notes={`
         <li>
         `}
        >
          <Heading size={2} textColor="quartenary" caps margin="0 0 5rem 0">Split "Theming"</Heading>
          <Heading size={6} textColor="primary" caps margin="0 0 2rem 0">Devs want two things:</Heading>
          <List ordered textColor="primary" padding="0 9rem 1rem" style={{borderRadius: 5}}>
            <ListItem>Apending style primitives️</ListItem>
            <ListItem>Overriding design rules</ListItem>
          </List>
        </Slide>

        {/**/}

        <Slide transition={["fade"]} bgColor="quartenary" textColor="secondary"
         notes={`
         <li>
         `}
        >
          <Heading size={1} textColor="primary" fit caps margin="0 0 3rem 0">Live Coding</Heading>

          <ResourceLink
            name="~Live Example~"
            url="https://glitch.com/edit/#!/writing-themeable-components"
          />
        </Slide>

        {/**/}

        <Slide transition={["fade"]} bgColor="quartenary" textColor="secondary">
          <Heading size={3} style={{fontSize: "4.5rem"}} textColor="secondary" margin="0 0 3rem 0">CSS-in-JS</Heading>
          <Heading fit bold textColor="primary" margin="0 0 1.8rem 0" caps>Existing Theming Solutions</Heading>
          <List padding="0rem 0rem 1rem 7rem" textColor="primary" bold>
            <ListItem margin="0 0 1rem 0">markdalgleish/react-themeable</ListItem>
            <ListItem margin="0 0 1rem 0">airbnb/react-with-styles</ListItem>
            <ListItem margin="0 0 1rem 0">styles-components</ListItem>
            <ListItem margin="0 0 1rem 0">glamorous</ListItem>
            <ListItem margin="0 0 1rem 0">...list goes on</ListItem>
          </List>
        </Slide>

        {/**/}

        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={2} textColor="primary" caps margin="0 0 3rem 0">Future Thinking</Heading>
          <List padding="0rem 0rem 1rem 5rem" textColor="quartenary" textFont="secondary" bold>
            <ListItem margin="0 0 1rem 0">Unifying Styling System</ListItem>
            <ListItem margin="0 0 1rem 0">ENABLING HYPER REUSABILITY</ListItem>
          </List>
        </Slide>

        {/**/}

        <Slide transition={["fade"]} bgColor="primary" align="center center">
          <Heading style={{letterSpacing: 8}} size={1} caps textColor="secondary" margin="0 0 3rem 0">
            Finish!
          </Heading>

          <ResourceLink
            name="Code Examples"
            url="https://github.com/loklaan/writing-themed-components"
          />
        </Slide>
      </Deck>
    );
  }
}
