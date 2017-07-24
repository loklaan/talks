import React from 'react';
import ButtonDefault from './1.default-styles-only';
import ButtonUser from './2.user-styles-too';
import ButtonThemed from './3.themed-styles';
import { ThemeProvider, themed } from './_.theme-utils'

const ConnectedButton = themed(ButtonThemed)

export default ({storiesOf}) => {
  storiesOf('Impressive Button')
    .alignStories()
    .addStory({
      name: '1. Default styles only',
      story: () => <ButtonDefault>I'm all business</ButtonDefault>
    })
    .addStory({
      name: '2. User styles too',
      story: () => {
        const userStyles = {
          content: {
            fontSize: '20px',
            lineHeight: '18px',
            fontFamily: 'serif',
            color: 'royalblue',
            textDecoration: 'underline'
          }
        }
        return <ButtonUser userStyles={userStyles}>I'm friendly</ButtonUser>
      }
    })
    .addStory({
      name: '3. Theme values only',
      story: () => {
        const userTheme = {
          PRIMARY: 'tomato',
          SECONDARY: 'papayawhip',
          SPACING: '15px',
          BORDER: '2px',
          RADIUS: '50px',
          TEXT: { fontSize: '20px', lineHeight: '18px' }
        }
        return <ButtonThemed prefix='💖' suffix='💖' theme={userTheme}>Designer dreams</ButtonThemed>
      }
    })
    .addStory({
      name: '4. Inject theme values',
      story: () => {
        const userTheme = {
          PRIMARY: '#118AB2',
          SECONDARY: '#CEFFFE',
          SPACING: '5px',
          BORDER: '3px',
          RADIUS: '1px',
          TEXT: { fontSize: '24px', fontWeight: '700', textDecoration: 'underline', lineHeight: '22px' }
        }

        return (
          <ThemeProvider theme={userTheme}>
            <div>
              <span>
                <ConnectedButton prefix='🔥' suffix='🔥'>Oh wow</ConnectedButton>
              </span>
            </div>
          </ThemeProvider>
        )
      }
    })
}
