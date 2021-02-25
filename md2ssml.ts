import marked from 'marked'
import {ssmlRenderer} from './ssmlRenderer'

export function md2ssml(md: string):string {
  marked.use({ renderer: ssmlRenderer });
  return marked(md)
}