import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};


export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type Mutation = {
  createOneOrder: Order;
  createOneProduct: Product;
  deleteOneProduct?: Maybe<Product>;
};


export type MutationCreateOneOrderArgs = {
  data: OrderCreateInput;
};


export type MutationCreateOneProductArgs = {
  data: ProductCreateInput;
};


export type MutationDeleteOneProductArgs = {
  where: ProductWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type Order = {
  id: Scalars['String'];
  email: Scalars['String'];
  subtotal: Scalars['Int'];
  tax: Scalars['Int'];
  total: Scalars['Int'];
  created: Scalars['DateTime'];
  items: Array<OrderItem>;
};


export type OrderItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<OrderItemWhereUniqueInput>;
  after?: Maybe<OrderItemWhereUniqueInput>;
};

export type OrderCreateInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  subtotal: Scalars['Int'];
  tax: Scalars['Int'];
  total: Scalars['Int'];
  created?: Maybe<Scalars['DateTime']>;
  items?: Maybe<OrderItemCreateNestedManyWithoutOrderInput>;
};

export type OrderCreateNestedOneWithoutItemsInput = {
  create?: Maybe<OrderCreateWithoutItemsInput>;
  connectOrCreate?: Maybe<OrderCreateOrConnectWithoutItemsInput>;
  connect?: Maybe<OrderWhereUniqueInput>;
};

export type OrderCreateOrConnectWithoutItemsInput = {
  where: OrderWhereUniqueInput;
  create: OrderCreateWithoutItemsInput;
};

export type OrderCreateWithoutItemsInput = {
  id?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  subtotal: Scalars['Int'];
  tax: Scalars['Int'];
  total: Scalars['Int'];
  created?: Maybe<Scalars['DateTime']>;
};

export type OrderItem = {
  id: Scalars['String'];
  price: Scalars['Int'];
  product: Product;
  order: Order;
};

export type OrderItemCreateNestedManyWithoutOrderInput = {
  create?: Maybe<Array<OrderItemCreateWithoutOrderInput>>;
  connectOrCreate?: Maybe<Array<OrderItemCreateOrConnectWithoutOrderInput>>;
  connect?: Maybe<Array<OrderItemWhereUniqueInput>>;
};

export type OrderItemCreateNestedManyWithoutProductInput = {
  create?: Maybe<Array<OrderItemCreateWithoutProductInput>>;
  connectOrCreate?: Maybe<Array<OrderItemCreateOrConnectWithoutProductInput>>;
  connect?: Maybe<Array<OrderItemWhereUniqueInput>>;
};

export type OrderItemCreateOrConnectWithoutOrderInput = {
  where: OrderItemWhereUniqueInput;
  create: OrderItemCreateWithoutOrderInput;
};

export type OrderItemCreateOrConnectWithoutProductInput = {
  where: OrderItemWhereUniqueInput;
  create: OrderItemCreateWithoutProductInput;
};

export type OrderItemCreateWithoutOrderInput = {
  id?: Maybe<Scalars['String']>;
  price: Scalars['Int'];
  itemCount: Scalars['Int'];
  product: ProductCreateNestedOneWithoutOrderItemsInput;
};

export type OrderItemCreateWithoutProductInput = {
  id?: Maybe<Scalars['String']>;
  price: Scalars['Int'];
  itemCount: Scalars['Int'];
  order: OrderCreateNestedOneWithoutItemsInput;
};

export type OrderItemListRelationFilter = {
  every?: Maybe<OrderItemWhereInput>;
  some?: Maybe<OrderItemWhereInput>;
  none?: Maybe<OrderItemWhereInput>;
};

export type OrderItemWhereInput = {
  AND?: Maybe<Array<OrderItemWhereInput>>;
  OR?: Maybe<Array<OrderItemWhereInput>>;
  NOT?: Maybe<Array<OrderItemWhereInput>>;
  id?: Maybe<StringFilter>;
  price?: Maybe<IntFilter>;
  itemCount?: Maybe<IntFilter>;
  orderId?: Maybe<StringFilter>;
  productId?: Maybe<StringFilter>;
  product?: Maybe<ProductWhereInput>;
  order?: Maybe<OrderWhereInput>;
};

export type OrderItemWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type OrderWhereInput = {
  AND?: Maybe<Array<OrderWhereInput>>;
  OR?: Maybe<Array<OrderWhereInput>>;
  NOT?: Maybe<Array<OrderWhereInput>>;
  id?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  subtotal?: Maybe<IntFilter>;
  tax?: Maybe<IntFilter>;
  total?: Maybe<IntFilter>;
  created?: Maybe<DateTimeFilter>;
  items?: Maybe<OrderItemListRelationFilter>;
};

export type OrderWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Product = {
  id: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Int'];
  image: Scalars['String'];
};

export type ProductCreateInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Int'];
  image: Scalars['String'];
  likes?: Maybe<Scalars['Int']>;
  orderItems?: Maybe<OrderItemCreateNestedManyWithoutProductInput>;
};

export type ProductCreateNestedOneWithoutOrderItemsInput = {
  create?: Maybe<ProductCreateWithoutOrderItemsInput>;
  connectOrCreate?: Maybe<ProductCreateOrConnectWithoutOrderItemsInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
};

export type ProductCreateOrConnectWithoutOrderItemsInput = {
  where: ProductWhereUniqueInput;
  create: ProductCreateWithoutOrderItemsInput;
};

export type ProductCreateWithoutOrderItemsInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Int'];
  image: Scalars['String'];
  likes?: Maybe<Scalars['Int']>;
};

export type ProductWhereInput = {
  AND?: Maybe<Array<ProductWhereInput>>;
  OR?: Maybe<Array<ProductWhereInput>>;
  NOT?: Maybe<Array<ProductWhereInput>>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  price?: Maybe<IntFilter>;
  image?: Maybe<StringFilter>;
  likes?: Maybe<IntFilter>;
  orderItems?: Maybe<OrderItemListRelationFilter>;
};

export type ProductWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Query = {
  order?: Maybe<Order>;
  orders: Array<Order>;
  product?: Maybe<Product>;
  products: Array<Product>;
};


export type QueryOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type QueryOrdersArgs = {
  where?: Maybe<OrderWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<OrderWhereUniqueInput>;
  after?: Maybe<OrderWhereUniqueInput>;
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryProductsArgs = {
  where?: Maybe<ProductWhereInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<ProductWhereUniqueInput>;
  after?: Maybe<ProductWhereUniqueInput>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type CreateOrderMutationVariables = Exact<{
  order: OrderCreateInput;
}>;


export type CreateOrderMutation = { createOneOrder: { id: string, email: string, subtotal: number, tax: number, total: number, created: any, items: Array<{ id: string, price: number, product: { id: string, name: string } }> } };

export type OrderQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type OrderQuery = { order?: Maybe<{ id: string, email: string, subtotal: number, tax: number, total: number, created: any }> };

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { products: Array<{ id: string, name: string, image: string, price: number }> };

export const namedOperations = {
  Query: {
    Order: 'Order',
    Products: 'Products'
  },
  Mutation: {
    CreateOrder: 'CreateOrder'
  }
}

export const CreateOrderDocument = gql`
    mutation CreateOrder($order: OrderCreateInput!) {
  createOneOrder(data: $order) {
    id
    email
    subtotal
    tax
    total
    created
    items {
      id
      price
      product {
        id
        name
      }
    }
  }
}
    `;
export type CreateOrderMutationFn = Apollo.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      order: // value for 'order'
 *   },
 * });
 */
export function useCreateOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument, options);
      }
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;
export const OrderDocument = gql`
    query Order($id: String!) {
  order(where: {id: $id}) {
    id
    email
    subtotal
    tax
    total
    created
  }
}
    `;

/**
 * __useOrderQuery__
 *
 * To run a query within a React component, call `useOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOrderQuery(baseOptions: Apollo.QueryHookOptions<OrderQuery, OrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrderQuery, OrderQueryVariables>(OrderDocument, options);
      }
export function useOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrderQuery, OrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrderQuery, OrderQueryVariables>(OrderDocument, options);
        }
export type OrderQueryHookResult = ReturnType<typeof useOrderQuery>;
export type OrderLazyQueryHookResult = ReturnType<typeof useOrderLazyQuery>;
export type OrderQueryResult = Apollo.QueryResult<OrderQuery, OrderQueryVariables>;
export const ProductsDocument = gql`
    query Products {
  products {
    id
    name
    image
    price
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    