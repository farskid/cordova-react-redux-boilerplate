
import {toJson, fromJson} from './json'

export function get(lbl) {
  return fromJson(localStorage.getItem(lbl))
}

export function set(lbl, data) {
  localStorage.setItem(lbl, toJson(data))
}

export function remove(lbl) {
  localStorage.removeItem(lbl)
}
