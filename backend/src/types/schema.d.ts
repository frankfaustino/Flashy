// tslint:disable
// graphql typescript definitions

declare namespace GQL {
  interface IGraphQLResponseRoot {
    data?: IQuery | IMutation;
    errors?: Array<IGraphQLResponseError>;
  }

  interface IGraphQLResponseError {
    /** Required for all errors */
    message: string;
    locations?: Array<IGraphQLResponseErrorLocation>;
    /** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
    [propName: string]: any;
  }

  interface IGraphQLResponseErrorLocation {
    line: number;
    column: number;
  }

  interface IQuery {
    __typename: 'Query';
    me: IUser | null;
    users: Array<IUser | null> | null;
    user: IUser | null;
  }

  interface IUserOnQueryArguments {
    id?: string | null;
  }

  interface IUser {
    __typename: 'User';
    id: string;
    name: string;
    email: string;
    password: string;
    permissions: Array<Permission>;
  }

  const enum Permission {
    ADMIN = 'ADMIN',
    USER = 'USER'
  }

  interface IMutation {
    __typename: 'Mutation';
    signUp: IAuthPayload;
    logIn: IAuthPayload;
    logOut: ISuccessPayload | null;
    deleteMe: IUser | null;
    deleteManyUsers: IBatchPayload | null;
  }

  interface ISignUpOnMutationArguments {
    name: string;
    email: string;
    password: string;
  }

  interface ILogInOnMutationArguments {
    email: string;
    password: string;
  }

  interface IAuthPayload {
    __typename: 'AuthPayload';
    id: string | null;
    name: string | null;
    email: string | null;
    token: string | null;
    errors: Array<IError | null> | null;
  }

  interface IError {
    __typename: 'Error';
    path: string;
    message: string;
  }

  interface ISuccessPayload {
    __typename: 'SuccessPayload';
    message: string | null;
  }

  interface IBatchPayload {
    __typename: 'BatchPayload';
    count: number | null;
  }
}

// tslint:enable
