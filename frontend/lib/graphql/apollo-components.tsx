import * as ReactApollo from 'react-apollo'
import * as React from 'react'
import gql from 'graphql-tag'
import { ME_QUERY } from './queries'

export type UserInfoFragment = {
  __typename?: 'User'
  id: string
  name: string
  email: string
  token: Maybe<string>
}

export type Maybe<T> = T | null

export type MeMe = UserInfoFragment

export type MeQuery = {
  __typename?: 'Query'
  me: Maybe<MeMe>
}

export type MeVariables = {}

export const UserInfoFragmentDoc = gql`
  fragment UserInfo on User {
    id
    name
  }
`


export class MeComponent extends React.Component<
  Partial<ReactApollo.QueryProps<MeQuery, MeVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<MeQuery, MeVariables>
        query={ME_QUERY}
        {...(this as any)['props'] as any}
      />
    )
  }
}

export type MeProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<MeQuery, MeVariables>
> &
  TChildProps
export function MeHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        MeQuery,
        MeVariables,
        MeProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    MeQuery,
    MeVariables,
    MeProps<TChildProps>
  >(ME_QUERY, operationOptions)
}
