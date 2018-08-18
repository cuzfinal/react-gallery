import React, { StatelessComponent } from 'react'

export const Loading: StatelessComponent<{
  isLoading: boolean;
  pastDelay: boolean;
  timedOut: boolean;
  error: any;
  retry: () => void;
}> = props => {
  const {isLoading, pastDelay, timedOut, error, retry} = props
  let text = 'Loading...'
  if(timedOut)
    text = 'Loading TimeOut!'
  if(error)
    text = error
  return <div>{text}</div>
}