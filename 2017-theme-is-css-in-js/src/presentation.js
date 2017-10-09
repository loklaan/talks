/* eslint import/no-webpack-loader-syntax: off */

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
  Code,
  Image
} from "spectacle";

import CodeSlide from "spectacle-code-slide";
import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = [
  require("./assets/jquery.png"),
  require("./assets/vjeux-react-cssinjs.jpg"),
];
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

const ResourceLink = ({name, url, margin = "1.5rem 0 0 0", ...props}) => (
  <Fit>
    {name && <Heading margin={margin} size={6} textColor='quartenary' caps {...props}>
      {name}
    </Heading>}
    <Link textColor="secondary" href={url}>
      {url}
    </Link>
  </Fit>
);

const LayoutAbsoluteStyle = (top, right, bottom, left) => ({
  position: 'absolute',
  top: !top ? 0 : top === true ? '50vh' : top,
  right: !right ? 0 : right === true ? '50vw' : right,
  bottom: !bottom ? 0 : bottom === true ? '50vh' : bottom,
  left: !left ? 0 : left === true ? '50vw' : left,
  transform: `translate(${(top || bottom) ? '0, -50%' : (right || left) ? '-50%, 0' : ''})`
});
const LayoutAbsolute = ({ top, right, bottom, left, children }) =>
  <div style={LayoutAbsoluteStyle(top, right, bottom, left)}>
    {children}
  </div>;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme} progress="bar">
        <Slide transition={["slide"]} bgColor="quartenary" align="center center"
           notes={`<pre>
            <li>rex for past 3 years: web apps<br/>  – wordpress, knockout and react
            <li>css is powerful, but<br/>  – without discipline<br/>  – unmaintainable mess with FORC
            <li>following since css-in-js awhile
            <li>writing a theming library<br/>  – for react<br/>  – re-introduces controlled cascade<br/>  – enable "low level theming"
           </pre>`}
        >
          <Heading style={{letterSpacing: 8}} size={1} caps textColor="primary">
            The Theme is CSS in JS
          </Heading>

          <Text margin="10vh 0 0" textColor="primary" textFont="secondary" size={6}>
            <Link textColor="primary" bold href="https://twitter.com/loklaan">{"@loklaan"}</Link>
            {" "}
            <Link textColor="primary" bold href="https://github.com/rexlabsio">{"@rexlabsio"}</Link>
          </Text>
        </Slide>

        {/**/}

        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary"
               notes={`<pre>
            <li>bunch of people sad with css<br/>  – app devs (css at scale)<br/>  – anyone burned by global
            <li>automated modern css disciplines
            <li>the term stuck because of<br/>  – Chrisopher Chedeu (facebook)
           </pre>`}
        >
          <Heading size={3} textColor="primary" caps margin="0 0 5rem 0">Define, please.</Heading>

          <Heading size={6} textColor="quartenary" caps margin="0 0 0.7rem 0">"CSS in JS"</Heading>
          <Heading size={6} textColor="quartenary" caps margin="0 0 3rem 0">lots of tooling for beloved CSS</Heading>
          <Heading size={6} textColor="quartenary" caps margin="0 0 0rem 0">👌</Heading>
        </Slide>

        {/**/}

        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading size={3} textColor="primary" caps margin="0 0 5rem 0">Takeways</Heading>

          <List italic textColor="quartenary" padding="0 0 0 3rem">
            <ListItem>Appreciation for the "movement"</ListItem>
            <ListItem>Solutions (libs), and how they work</ListItem>
            <ListItem>App development needs CSS in JS</ListItem>
            <ListItem>That components are the best 😍</ListItem>
            <ListItem>How to do theming with this stuff</ListItem>
          </List>
        </Slide>

        {/**/}

        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
          <Heading size={3} textColor="secondary" caps margin="0 0 5rem 0">Approaches to<br />CSS in JS</Heading>

          <Heading size={6} bold textColor="#fff" margin="0 0 0.7rem 0" caps>Global CSS 😱</Heading>
          <Heading size={6} bold textColor="#fff" margin="0 0 0.7rem 0" caps>Inlined Styles 🔥</Heading>
          <Heading size={6} bold textColor="#fff" margin="0 0 0.7rem 0" caps>Generated Stylesheets 🙌</Heading>
        </Slide>

        {/**/}

        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary"
               notes={`<pre>
            <li>we've been doing "cssinjs" all along</li>
            <li>emberjs & angular suggest doing this</li>
            <li>templating langs sometimes bake in</li>
            <li>maintenance nightmare</li>
            <li>css was an implicit dependency</li>
            <li>FORC</li>
           </pre>`}
        >
          <Heading size={3} textColor="secondary" caps margin="0 0 1rem 0">The Beginning</Heading>

          <Image src={require("./assets/jquery.png")} height={'68vh'} style={{borderRadius: '6px'}} />
        </Slide>

        {/**/}

        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary"
               notes={`<pre>
            <li>globalness</li>
            <li>dependency management</li>
            <li>dead code elimination</li>
            <li>minification</li>
            <li>isolation</li>
           -------
            <li>this is where term started</li>
            <li><a href="https://github.com/marcohamersma/react-bem-helper">"the inbetween"</a></li>
           </pre>`}
        >
          <Heading size={3} textColor="secondary" caps margin="0 0 1rem 0">Going Mainstream</Heading>

          <ResourceLink url='https://speakerdeck.com/vjeux/react-css-in-js' />
          <Image src={require("./assets/vjeux-react-cssinjs.jpg")} height={'68vh'} style={{borderRadius: '6px'}} />
        </Slide>

        {/**/}

        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary"
               notes={`<pre>
            <li>partially solves dependencies</li>
            <li>needs pre-processors for their mixins etc</li>
            <li>FORC is gone</li>
            <li>may have been using this for some time now</li>
          </pre>`}
        >
          <Heading size={3} textColor="secondary" caps margin="0 0 1rem 0">Bundlers</Heading>
          <Heading size={6} bold textColor="#fff" margin="0 0 1rem 0" caps>Webpack / Browserify</Heading>

          <CodePane style={{ fontSize: '1.1rem', minWidth: '70%' }} lang='js' source={`
import 'assets/my-generic-component-classes.less'

function render (el) {
  el.innerHTML = css\`
    <div class="generic_component-container">
        <span class="generic_component-text"></span>
    </div>
  \`
}`.trim()} />

          <Text textColor="#fff" margin="1.4rem 0 1.6rem 0"><Code>css-loader</Code></Text>
          <Text textColor="#fff" margin="0 0 1.6rem 0"><Code>style-loader</Code></Text>
          <Text textColor="#fff" margin="0 0 1.6rem 0"><Code>extract-text-plugin</Code></Text>
        </Slide>

        {/**/}

        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary"
               notes={`<pre>
            <li><a href="https://medium.com/seek-blog/the-end-of-global-css-90d2a4a06284">seek article</a></li>
          </pre>`}
        >
          <Heading size={3} textColor="secondary" caps margin="0 0 1rem 0">CSS Modules</Heading>
          <ResourceLink url='https://github.com/css-modules/css-modules' />

          <CodePane style={{ fontSize: '1.1rem', marginTop: '1rem', minWidth: '70%' }} lang='js' source={`
import classes from 'assets/my-generic-component.css'

function render (el) {
  el.innerHTML = \`
    <div class="\${classes.container}">
        <span class="\${classes.text}"></span>
    </div>
  \`
}`.trim()} />

          <List bold textColor="#fff" padding="0 0 0 7rem">
            <ListItem>Automated BEM</ListItem>
            <ListItem>CSS familiarity</ListItem>
            <ListItem>Dependency Management</ListItem>
          </List>
        </Slide>

        {/**/}

        <Slide transition={["fade"]} bgColor="primary" textColor="quartenary"
               notes={`<pre>
            <li></li>
          </pre>`}
        >
          <Heading size={3} textColor="quartenary" caps margin="0 0 1rem 0">Flood of Libraries</Heading>
          <Image src={require("./assets/hype-cycle.png")} height={'68vh'} style={{borderRadius: '6px', backgroundColor: 'rgb(206, 255, 254)', padding: '1rem'}} />
        </Slide>

        {/**/}

        <Slide transition={["fade"]} bgColor="primary" textColor="quartenary">
          <ResourceLink name='glamor ' url='https://github.com/threepointone/glamor' />
          <ResourceLink name='jss ' url='https://github.com/cssinjs/jss' />
          <ResourceLink name='radium ' url='https://github.com/FormidableLabs/radium' />
          <ResourceLink name='styletron ' url='http://styletron.js.org/' />
        </Slide>

        {/**/}

        <Slide transition={["fade"]} bgColor="primary" textColor="quartenary">
          <ResourceLink name='style-components ' url='https://www.styled-components.com' />
          <ResourceLink name='vuejs : scoped-css' url='https://vue-loader.vuejs.org/en/features/scoped-css.html ' />
          <ResourceLink name='styled-jsx ' url='https://github.com/zeit/styled-jsx' />
          <ResourceLink name='emotion ' url='https://github.com/emotion-js/emotion' />
        </Slide>

        {/**/}

        <Slide transition={["fade"]} bgColor="primary" textColor="quartenary">
          <Heading italic size={3} textColor="quartenary" caps margin="0 0 3rem 0">Beyond the Web</Heading>

          <Heading size={6} textColor="quartenary" caps>React Native</Heading>
          <ResourceLink name='reactxp' url='https://microsoft.github.io/reactxp/' />
          <ResourceLink name=' weex' url='https://weex.incubator.apache.org/' />
          <ResourceLink name='react-sketchapp' url='http://airbnb.io/react-sketchapp/' />
        </Slide>

        {/**/}

        <Slide transition={["fade"]} bgColor="quartenary" textColor="secondary"
               notes={`<pre>
            <li><em>so, you're using css in js...</em></li>
            <li>people don't talk about this enough</li>
            <li>critical concern for reusable components</li>
            <li>dev's want two levels of theming<br/>  – high level variables like color<br/>  – low level style attributes for classes / elems</li>
          </pre>`}
        >
          <Heading size={1} textColor="primary" fit caps margin="0 0 3rem 0">Theming<br />w/ CSS in JS</Heading>

          <Heading italic size={6} textColor="secondary" caps>The let down...</Heading>
        </Slide>

        {/**/}

        <Slide transition={["fade"]} bgColor="quartenary" textColor="secondary">
          <Heading size={2} bold textColor="primary" margin="0 0 3rem 0" caps>Existing Solutions</Heading>

          <ResourceLink textColor='secondary' name='markdalgleish/react-themeable ' url='https://github.com/markdalgleish/react-themeable' />
          <ResourceLink textColor='secondary' name='airbnb/react-with-styles' url='https://github.com/airbnb/react-with-styles' />
          <ResourceLink textColor='secondary' name='styled-components ' url='https://www.styled-components.com/docs/advanced#theming' />
        </Slide>

        {/**/}

        <Slide transition={["fade"]} bgColor="quartenary" textColor="secondary"
               notes={`
         <li>
         `}
        >
          <Heading size={1} textColor="primary" fit caps margin="0 0 3rem 0">Live Coding</Heading>

          <ResourceLink
            italic
            textColor='primary'
            name="wish me luck"
            url="https://glitch.com/edit/#!/writing-themeable-components"
          />
        </Slide>

        {/**/}

        <Slide transition={["fade"]} bgColor="quartenary" align="center center">
          <Heading style={{letterSpacing: 8}} size={1} caps textColor="primary" margin="0 0 3rem 0">
            Finish!
          </Heading>

          <ResourceLink
            textColor='primary'
            name="This Talk"
            url="https://git.io/vdgaR"
          />
        </Slide>
      </Deck>
    );
  }
}
