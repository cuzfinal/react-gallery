import { ComponentClass, StatelessComponent } from 'react'
import Loadable from 'react-loadable'
import { Loading } from '../components/Loading'

export const CompLoadable = (wrapComp: () => Promise<any>) => {
  return Loadable({
    loader: wrapComp,
    loading: Loading,
    delay: 300,
    timeout: 5000,
  })
}