import React from 'react'
import { StyleSheet, mapObject } from './_.util'

const defaultStyles = StyleSheet({
  container: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    background: 'white',
    border: 'solid 1px black',
    boxShadow: '1px 1px 0px black',
    borderRadius: '3px',
    padding: '8px',
    transition: 'transform 250ms, box-shadow 250ms',
    '&:hover': {
      transform: 'translate(-2px, -2px)',
      boxShadow: '3px 3px 0px black',
    }
  },
  prefix: {
    marginRight: '8px',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    flex: '1 1 auto',
    userSelect: 'none',
    fontFamily: '"Proxima Nova", sans-serif',
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '12px'
  },
  suffix: {
    marginLeft: '8px',
  },
})

const withDefaultStyles = (styles) => {
  const userStylesheet = StyleSheet(styles)
  const mergedStyles = mapObject(defaultStyles, (defaultClassName, name) => {
    const userClassName = userStylesheet[name]
    return Boolean(userStylesheet[name])
      ? `${defaultClassName} ${userClassName}`
      : defaultClassName
  })
  return mergedStyles
}

const Button = ({
  children,
  prefix,
  suffix,
  userStyles,
}) => {
  const styles = withDefaultStyles(userStyles)
  return (
    <div className={styles.container}>
      {prefix && <span className={styles.prefix}>{prefix}</span>}

      <span className={styles.content}>{children}</span>

      {suffix && <span className={styles.suffix}>{suffix}</span>}
    </div>
  )
}

export default Button
