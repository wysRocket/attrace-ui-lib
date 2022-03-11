import { Suspense, JSXElementConstructor } from 'react'

import Loader from 'components/loader'

export default function inject<TProps, TInjectedKeys extends keyof TProps>(
  Component: JSXElementConstructor<TProps>,
  injector?: Pick<TProps, TInjectedKeys>
) {
  return function Injected(props: Omit<TProps, TInjectedKeys>) {
    return (
      <Suspense fallback={<Loader />}>
        <Component {...(props as TProps)} {...injector} />
      </Suspense>
    )
  }
}
