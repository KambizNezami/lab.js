import { ensureHighResTime } from './timing'
import { Component } from '../core/component'

export const logTimestamp = (columnName: string) =>
  function (this: Component, e: InputEvent) {
    e.preventDefault()
    this.data[columnName] = ensureHighResTime(e.timeStamp)
  }
