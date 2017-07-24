import { StyleSheet } from '@rexlabs/styling'
import _ from 'lodash'

function mapObject (obj, fn) {
  return Object.keys(obj).reduce((accum, key) => {
    const value = fn(obj[key], key, obj)
    accum[key] = value
    return accum
  }, {})
}

const defaults = _.defaultsDeep

export { StyleSheet, mapObject, defaults }
