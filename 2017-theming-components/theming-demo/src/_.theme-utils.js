import Types from 'prop-types';
import React from 'react'
import { withContext, getContext, mapProps, compose } from 'recompose'

const THEME_CONTEXT_TYPES = { __THEME: Types.object }
const PassThrough = ({theme, ...props}) => <div {...props} />

/*
|-------------------------------------------------------------------------------
| Provider Component of the 'theme' context to consuming components
*/

export const ThemeProvider = withContext(
  THEME_CONTEXT_TYPES,
  ({ theme = {} }) => console.log(theme) || ({ __THEME: theme })
)(PassThrough)

/*
|-------------------------------------------------------------------------------
| HOC: Consumes the 'theme' context, given it as a prop to child
*/

export const themed = compose(
  getContext(THEME_CONTEXT_TYPES),
  mapProps(({ __THEME, ...props }) => console.log('__THEME', props) || ({ theme: __THEME, ...props }))
)

