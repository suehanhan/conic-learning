
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Knowledge
 * 
 */
export type Knowledge = $Result.DefaultSelection<Prisma.$KnowledgePayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model GeneratedQuestion
 * 
 */
export type GeneratedQuestion = $Result.DefaultSelection<Prisma.$GeneratedQuestionPayload>
/**
 * Model StudyRecord
 * 
 */
export type StudyRecord = $Result.DefaultSelection<Prisma.$StudyRecordPayload>
/**
 * Model WrongQuestionBook
 * 
 */
export type WrongQuestionBook = $Result.DefaultSelection<Prisma.$WrongQuestionBookPayload>
/**
 * Model TestReport
 * 
 */
export type TestReport = $Result.DefaultSelection<Prisma.$TestReportPayload>
/**
 * Model ChatHistory
 * 
 */
export type ChatHistory = $Result.DefaultSelection<Prisma.$ChatHistoryPayload>
/**
 * Model CurveState
 * 
 */
export type CurveState = $Result.DefaultSelection<Prisma.$CurveStatePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  student: 'student',
  teacher: 'teacher'
};

export type Role = (typeof Role)[keyof typeof Role]


export const QuestionType: {
  choice: 'choice',
  blank: 'blank',
  solution: 'solution'
};

export type QuestionType = (typeof QuestionType)[keyof typeof QuestionType]


export const Difficulty: {
  basic: 'basic',
  medium: 'medium',
  hard: 'hard'
};

export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty]


export const QuestionSource: {
  preset: 'preset',
  uploaded: 'uploaded'
};

export type QuestionSource = (typeof QuestionSource)[keyof typeof QuestionSource]


export const QuestionStatus: {
  pending: 'pending',
  approved: 'approved',
  rejected: 'rejected'
};

export type QuestionStatus = (typeof QuestionStatus)[keyof typeof QuestionStatus]


export const TestModule: {
  ellipse: 'ellipse',
  hyperbola: 'hyperbola',
  parabola: 'parabola',
  mixed: 'mixed'
};

export type TestModule = (typeof TestModule)[keyof typeof TestModule]


export const ChatMessageRole: {
  user: 'user',
  assistant: 'assistant'
};

export type ChatMessageRole = (typeof ChatMessageRole)[keyof typeof ChatMessageRole]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type QuestionType = $Enums.QuestionType

export const QuestionType: typeof $Enums.QuestionType

export type Difficulty = $Enums.Difficulty

export const Difficulty: typeof $Enums.Difficulty

export type QuestionSource = $Enums.QuestionSource

export const QuestionSource: typeof $Enums.QuestionSource

export type QuestionStatus = $Enums.QuestionStatus

export const QuestionStatus: typeof $Enums.QuestionStatus

export type TestModule = $Enums.TestModule

export const TestModule: typeof $Enums.TestModule

export type ChatMessageRole = $Enums.ChatMessageRole

export const ChatMessageRole: typeof $Enums.ChatMessageRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.knowledge`: Exposes CRUD operations for the **Knowledge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Knowledges
    * const knowledges = await prisma.knowledge.findMany()
    * ```
    */
  get knowledge(): Prisma.KnowledgeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.generatedQuestion`: Exposes CRUD operations for the **GeneratedQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GeneratedQuestions
    * const generatedQuestions = await prisma.generatedQuestion.findMany()
    * ```
    */
  get generatedQuestion(): Prisma.GeneratedQuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studyRecord`: Exposes CRUD operations for the **StudyRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudyRecords
    * const studyRecords = await prisma.studyRecord.findMany()
    * ```
    */
  get studyRecord(): Prisma.StudyRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wrongQuestionBook`: Exposes CRUD operations for the **WrongQuestionBook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WrongQuestionBooks
    * const wrongQuestionBooks = await prisma.wrongQuestionBook.findMany()
    * ```
    */
  get wrongQuestionBook(): Prisma.WrongQuestionBookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testReport`: Exposes CRUD operations for the **TestReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestReports
    * const testReports = await prisma.testReport.findMany()
    * ```
    */
  get testReport(): Prisma.TestReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatHistory`: Exposes CRUD operations for the **ChatHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatHistories
    * const chatHistories = await prisma.chatHistory.findMany()
    * ```
    */
  get chatHistory(): Prisma.ChatHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.curveState`: Exposes CRUD operations for the **CurveState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CurveStates
    * const curveStates = await prisma.curveState.findMany()
    * ```
    */
  get curveState(): Prisma.CurveStateDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Knowledge: 'Knowledge',
    Question: 'Question',
    GeneratedQuestion: 'GeneratedQuestion',
    StudyRecord: 'StudyRecord',
    WrongQuestionBook: 'WrongQuestionBook',
    TestReport: 'TestReport',
    ChatHistory: 'ChatHistory',
    CurveState: 'CurveState'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "knowledge" | "question" | "generatedQuestion" | "studyRecord" | "wrongQuestionBook" | "testReport" | "chatHistory" | "curveState"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Knowledge: {
        payload: Prisma.$KnowledgePayload<ExtArgs>
        fields: Prisma.KnowledgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KnowledgeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KnowledgeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgePayload>
          }
          findFirst: {
            args: Prisma.KnowledgeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KnowledgeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgePayload>
          }
          findMany: {
            args: Prisma.KnowledgeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgePayload>[]
          }
          create: {
            args: Prisma.KnowledgeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgePayload>
          }
          createMany: {
            args: Prisma.KnowledgeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KnowledgeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgePayload>[]
          }
          delete: {
            args: Prisma.KnowledgeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgePayload>
          }
          update: {
            args: Prisma.KnowledgeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgePayload>
          }
          deleteMany: {
            args: Prisma.KnowledgeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KnowledgeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KnowledgeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgePayload>[]
          }
          upsert: {
            args: Prisma.KnowledgeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgePayload>
          }
          aggregate: {
            args: Prisma.KnowledgeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKnowledge>
          }
          groupBy: {
            args: Prisma.KnowledgeGroupByArgs<ExtArgs>
            result: $Utils.Optional<KnowledgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.KnowledgeCountArgs<ExtArgs>
            result: $Utils.Optional<KnowledgeCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      GeneratedQuestion: {
        payload: Prisma.$GeneratedQuestionPayload<ExtArgs>
        fields: Prisma.GeneratedQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GeneratedQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GeneratedQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedQuestionPayload>
          }
          findFirst: {
            args: Prisma.GeneratedQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GeneratedQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedQuestionPayload>
          }
          findMany: {
            args: Prisma.GeneratedQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedQuestionPayload>[]
          }
          create: {
            args: Prisma.GeneratedQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedQuestionPayload>
          }
          createMany: {
            args: Prisma.GeneratedQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GeneratedQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedQuestionPayload>[]
          }
          delete: {
            args: Prisma.GeneratedQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedQuestionPayload>
          }
          update: {
            args: Prisma.GeneratedQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedQuestionPayload>
          }
          deleteMany: {
            args: Prisma.GeneratedQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GeneratedQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GeneratedQuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedQuestionPayload>[]
          }
          upsert: {
            args: Prisma.GeneratedQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedQuestionPayload>
          }
          aggregate: {
            args: Prisma.GeneratedQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeneratedQuestion>
          }
          groupBy: {
            args: Prisma.GeneratedQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeneratedQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.GeneratedQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<GeneratedQuestionCountAggregateOutputType> | number
          }
        }
      }
      StudyRecord: {
        payload: Prisma.$StudyRecordPayload<ExtArgs>
        fields: Prisma.StudyRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudyRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudyRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyRecordPayload>
          }
          findFirst: {
            args: Prisma.StudyRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudyRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyRecordPayload>
          }
          findMany: {
            args: Prisma.StudyRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyRecordPayload>[]
          }
          create: {
            args: Prisma.StudyRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyRecordPayload>
          }
          createMany: {
            args: Prisma.StudyRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudyRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyRecordPayload>[]
          }
          delete: {
            args: Prisma.StudyRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyRecordPayload>
          }
          update: {
            args: Prisma.StudyRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyRecordPayload>
          }
          deleteMany: {
            args: Prisma.StudyRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudyRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudyRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyRecordPayload>[]
          }
          upsert: {
            args: Prisma.StudyRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyRecordPayload>
          }
          aggregate: {
            args: Prisma.StudyRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudyRecord>
          }
          groupBy: {
            args: Prisma.StudyRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudyRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudyRecordCountArgs<ExtArgs>
            result: $Utils.Optional<StudyRecordCountAggregateOutputType> | number
          }
        }
      }
      WrongQuestionBook: {
        payload: Prisma.$WrongQuestionBookPayload<ExtArgs>
        fields: Prisma.WrongQuestionBookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WrongQuestionBookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrongQuestionBookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WrongQuestionBookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrongQuestionBookPayload>
          }
          findFirst: {
            args: Prisma.WrongQuestionBookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrongQuestionBookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WrongQuestionBookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrongQuestionBookPayload>
          }
          findMany: {
            args: Prisma.WrongQuestionBookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrongQuestionBookPayload>[]
          }
          create: {
            args: Prisma.WrongQuestionBookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrongQuestionBookPayload>
          }
          createMany: {
            args: Prisma.WrongQuestionBookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WrongQuestionBookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrongQuestionBookPayload>[]
          }
          delete: {
            args: Prisma.WrongQuestionBookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrongQuestionBookPayload>
          }
          update: {
            args: Prisma.WrongQuestionBookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrongQuestionBookPayload>
          }
          deleteMany: {
            args: Prisma.WrongQuestionBookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WrongQuestionBookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WrongQuestionBookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrongQuestionBookPayload>[]
          }
          upsert: {
            args: Prisma.WrongQuestionBookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrongQuestionBookPayload>
          }
          aggregate: {
            args: Prisma.WrongQuestionBookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWrongQuestionBook>
          }
          groupBy: {
            args: Prisma.WrongQuestionBookGroupByArgs<ExtArgs>
            result: $Utils.Optional<WrongQuestionBookGroupByOutputType>[]
          }
          count: {
            args: Prisma.WrongQuestionBookCountArgs<ExtArgs>
            result: $Utils.Optional<WrongQuestionBookCountAggregateOutputType> | number
          }
        }
      }
      TestReport: {
        payload: Prisma.$TestReportPayload<ExtArgs>
        fields: Prisma.TestReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestReportPayload>
          }
          findFirst: {
            args: Prisma.TestReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestReportPayload>
          }
          findMany: {
            args: Prisma.TestReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestReportPayload>[]
          }
          create: {
            args: Prisma.TestReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestReportPayload>
          }
          createMany: {
            args: Prisma.TestReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestReportPayload>[]
          }
          delete: {
            args: Prisma.TestReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestReportPayload>
          }
          update: {
            args: Prisma.TestReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestReportPayload>
          }
          deleteMany: {
            args: Prisma.TestReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestReportPayload>[]
          }
          upsert: {
            args: Prisma.TestReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestReportPayload>
          }
          aggregate: {
            args: Prisma.TestReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestReport>
          }
          groupBy: {
            args: Prisma.TestReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestReportCountArgs<ExtArgs>
            result: $Utils.Optional<TestReportCountAggregateOutputType> | number
          }
        }
      }
      ChatHistory: {
        payload: Prisma.$ChatHistoryPayload<ExtArgs>
        fields: Prisma.ChatHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatHistoryPayload>
          }
          findFirst: {
            args: Prisma.ChatHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatHistoryPayload>
          }
          findMany: {
            args: Prisma.ChatHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatHistoryPayload>[]
          }
          create: {
            args: Prisma.ChatHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatHistoryPayload>
          }
          createMany: {
            args: Prisma.ChatHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatHistoryPayload>[]
          }
          delete: {
            args: Prisma.ChatHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatHistoryPayload>
          }
          update: {
            args: Prisma.ChatHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ChatHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatHistoryPayload>[]
          }
          upsert: {
            args: Prisma.ChatHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatHistoryPayload>
          }
          aggregate: {
            args: Prisma.ChatHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatHistory>
          }
          groupBy: {
            args: Prisma.ChatHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ChatHistoryCountAggregateOutputType> | number
          }
        }
      }
      CurveState: {
        payload: Prisma.$CurveStatePayload<ExtArgs>
        fields: Prisma.CurveStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CurveStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurveStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CurveStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurveStatePayload>
          }
          findFirst: {
            args: Prisma.CurveStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurveStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CurveStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurveStatePayload>
          }
          findMany: {
            args: Prisma.CurveStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurveStatePayload>[]
          }
          create: {
            args: Prisma.CurveStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurveStatePayload>
          }
          createMany: {
            args: Prisma.CurveStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CurveStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurveStatePayload>[]
          }
          delete: {
            args: Prisma.CurveStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurveStatePayload>
          }
          update: {
            args: Prisma.CurveStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurveStatePayload>
          }
          deleteMany: {
            args: Prisma.CurveStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CurveStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CurveStateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurveStatePayload>[]
          }
          upsert: {
            args: Prisma.CurveStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurveStatePayload>
          }
          aggregate: {
            args: Prisma.CurveStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurveState>
          }
          groupBy: {
            args: Prisma.CurveStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CurveStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CurveStateCountArgs<ExtArgs>
            result: $Utils.Optional<CurveStateCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    knowledge?: KnowledgeOmit
    question?: QuestionOmit
    generatedQuestion?: GeneratedQuestionOmit
    studyRecord?: StudyRecordOmit
    wrongQuestionBook?: WrongQuestionBookOmit
    testReport?: TestReportOmit
    chatHistory?: ChatHistoryOmit
    curveState?: CurveStateOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    studyRecords: number
    wrongBook: number
    testReports: number
    chatHistory: number
    curveStates: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studyRecords?: boolean | UserCountOutputTypeCountStudyRecordsArgs
    wrongBook?: boolean | UserCountOutputTypeCountWrongBookArgs
    testReports?: boolean | UserCountOutputTypeCountTestReportsArgs
    chatHistory?: boolean | UserCountOutputTypeCountChatHistoryArgs
    curveStates?: boolean | UserCountOutputTypeCountCurveStatesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStudyRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudyRecordWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWrongBookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WrongQuestionBookWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTestReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestReportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCurveStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurveStateWhereInput
  }


  /**
   * Count Type KnowledgeCountOutputType
   */

  export type KnowledgeCountOutputType = {
    children: number
  }

  export type KnowledgeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | KnowledgeCountOutputTypeCountChildrenArgs
  }

  // Custom InputTypes
  /**
   * KnowledgeCountOutputType without action
   */
  export type KnowledgeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeCountOutputType
     */
    select?: KnowledgeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KnowledgeCountOutputType without action
   */
  export type KnowledgeCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KnowledgeWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    studyRecords: number
    wrongBook: number
    generated: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studyRecords?: boolean | QuestionCountOutputTypeCountStudyRecordsArgs
    wrongBook?: boolean | QuestionCountOutputTypeCountWrongBookArgs
    generated?: boolean | QuestionCountOutputTypeCountGeneratedArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountStudyRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudyRecordWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountWrongBookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WrongQuestionBookWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountGeneratedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneratedQuestionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    role: $Enums.Role | null
    name: string | null
    email: string | null
    classGroup: string | null
    passwordHash: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    role: $Enums.Role | null
    name: string | null
    email: string | null
    classGroup: string | null
    passwordHash: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    role: number
    name: number
    email: number
    classGroup: number
    passwordHash: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    role?: true
    name?: true
    email?: true
    classGroup?: true
    passwordHash?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    role?: true
    name?: true
    email?: true
    classGroup?: true
    passwordHash?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    role?: true
    name?: true
    email?: true
    classGroup?: true
    passwordHash?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    role: $Enums.Role
    name: string
    email: string
    classGroup: string | null
    passwordHash: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    name?: boolean
    email?: boolean
    classGroup?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    studyRecords?: boolean | User$studyRecordsArgs<ExtArgs>
    wrongBook?: boolean | User$wrongBookArgs<ExtArgs>
    testReports?: boolean | User$testReportsArgs<ExtArgs>
    chatHistory?: boolean | User$chatHistoryArgs<ExtArgs>
    curveStates?: boolean | User$curveStatesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    name?: boolean
    email?: boolean
    classGroup?: boolean
    passwordHash?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    name?: boolean
    email?: boolean
    classGroup?: boolean
    passwordHash?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    role?: boolean
    name?: boolean
    email?: boolean
    classGroup?: boolean
    passwordHash?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "name" | "email" | "classGroup" | "passwordHash" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studyRecords?: boolean | User$studyRecordsArgs<ExtArgs>
    wrongBook?: boolean | User$wrongBookArgs<ExtArgs>
    testReports?: boolean | User$testReportsArgs<ExtArgs>
    chatHistory?: boolean | User$chatHistoryArgs<ExtArgs>
    curveStates?: boolean | User$curveStatesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      studyRecords: Prisma.$StudyRecordPayload<ExtArgs>[]
      wrongBook: Prisma.$WrongQuestionBookPayload<ExtArgs>[]
      testReports: Prisma.$TestReportPayload<ExtArgs>[]
      chatHistory: Prisma.$ChatHistoryPayload<ExtArgs>[]
      curveStates: Prisma.$CurveStatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: $Enums.Role
      name: string
      email: string
      classGroup: string | null
      passwordHash: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    studyRecords<T extends User$studyRecordsArgs<ExtArgs> = {}>(args?: Subset<T, User$studyRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wrongBook<T extends User$wrongBookArgs<ExtArgs> = {}>(args?: Subset<T, User$wrongBookArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WrongQuestionBookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    testReports<T extends User$testReportsArgs<ExtArgs> = {}>(args?: Subset<T, User$testReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatHistory<T extends User$chatHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$chatHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    curveStates<T extends User$curveStatesArgs<ExtArgs> = {}>(args?: Subset<T, User$curveStatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurveStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly classGroup: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.studyRecords
   */
  export type User$studyRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyRecord
     */
    select?: StudyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyRecord
     */
    omit?: StudyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyRecordInclude<ExtArgs> | null
    where?: StudyRecordWhereInput
    orderBy?: StudyRecordOrderByWithRelationInput | StudyRecordOrderByWithRelationInput[]
    cursor?: StudyRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudyRecordScalarFieldEnum | StudyRecordScalarFieldEnum[]
  }

  /**
   * User.wrongBook
   */
  export type User$wrongBookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrongQuestionBook
     */
    select?: WrongQuestionBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WrongQuestionBook
     */
    omit?: WrongQuestionBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrongQuestionBookInclude<ExtArgs> | null
    where?: WrongQuestionBookWhereInput
    orderBy?: WrongQuestionBookOrderByWithRelationInput | WrongQuestionBookOrderByWithRelationInput[]
    cursor?: WrongQuestionBookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WrongQuestionBookScalarFieldEnum | WrongQuestionBookScalarFieldEnum[]
  }

  /**
   * User.testReports
   */
  export type User$testReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestReport
     */
    select?: TestReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestReport
     */
    omit?: TestReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestReportInclude<ExtArgs> | null
    where?: TestReportWhereInput
    orderBy?: TestReportOrderByWithRelationInput | TestReportOrderByWithRelationInput[]
    cursor?: TestReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestReportScalarFieldEnum | TestReportScalarFieldEnum[]
  }

  /**
   * User.chatHistory
   */
  export type User$chatHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryInclude<ExtArgs> | null
    where?: ChatHistoryWhereInput
    orderBy?: ChatHistoryOrderByWithRelationInput | ChatHistoryOrderByWithRelationInput[]
    cursor?: ChatHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatHistoryScalarFieldEnum | ChatHistoryScalarFieldEnum[]
  }

  /**
   * User.curveStates
   */
  export type User$curveStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurveState
     */
    select?: CurveStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurveState
     */
    omit?: CurveStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurveStateInclude<ExtArgs> | null
    where?: CurveStateWhereInput
    orderBy?: CurveStateOrderByWithRelationInput | CurveStateOrderByWithRelationInput[]
    cursor?: CurveStateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CurveStateScalarFieldEnum | CurveStateScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Knowledge
   */

  export type AggregateKnowledge = {
    _count: KnowledgeCountAggregateOutputType | null
    _avg: KnowledgeAvgAggregateOutputType | null
    _sum: KnowledgeSumAggregateOutputType | null
    _min: KnowledgeMinAggregateOutputType | null
    _max: KnowledgeMaxAggregateOutputType | null
  }

  export type KnowledgeAvgAggregateOutputType = {
    order: number | null
  }

  export type KnowledgeSumAggregateOutputType = {
    order: number | null
  }

  export type KnowledgeMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    category: string | null
    parentId: string | null
    order: number | null
  }

  export type KnowledgeMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    category: string | null
    parentId: string | null
    order: number | null
  }

  export type KnowledgeCountAggregateOutputType = {
    id: number
    title: number
    content: number
    category: number
    parentId: number
    order: number
    _all: number
  }


  export type KnowledgeAvgAggregateInputType = {
    order?: true
  }

  export type KnowledgeSumAggregateInputType = {
    order?: true
  }

  export type KnowledgeMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    category?: true
    parentId?: true
    order?: true
  }

  export type KnowledgeMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    category?: true
    parentId?: true
    order?: true
  }

  export type KnowledgeCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    category?: true
    parentId?: true
    order?: true
    _all?: true
  }

  export type KnowledgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Knowledge to aggregate.
     */
    where?: KnowledgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Knowledges to fetch.
     */
    orderBy?: KnowledgeOrderByWithRelationInput | KnowledgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KnowledgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Knowledges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Knowledges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Knowledges
    **/
    _count?: true | KnowledgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KnowledgeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KnowledgeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KnowledgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KnowledgeMaxAggregateInputType
  }

  export type GetKnowledgeAggregateType<T extends KnowledgeAggregateArgs> = {
        [P in keyof T & keyof AggregateKnowledge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKnowledge[P]>
      : GetScalarType<T[P], AggregateKnowledge[P]>
  }




  export type KnowledgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KnowledgeWhereInput
    orderBy?: KnowledgeOrderByWithAggregationInput | KnowledgeOrderByWithAggregationInput[]
    by: KnowledgeScalarFieldEnum[] | KnowledgeScalarFieldEnum
    having?: KnowledgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KnowledgeCountAggregateInputType | true
    _avg?: KnowledgeAvgAggregateInputType
    _sum?: KnowledgeSumAggregateInputType
    _min?: KnowledgeMinAggregateInputType
    _max?: KnowledgeMaxAggregateInputType
  }

  export type KnowledgeGroupByOutputType = {
    id: string
    title: string
    content: string
    category: string
    parentId: string | null
    order: number
    _count: KnowledgeCountAggregateOutputType | null
    _avg: KnowledgeAvgAggregateOutputType | null
    _sum: KnowledgeSumAggregateOutputType | null
    _min: KnowledgeMinAggregateOutputType | null
    _max: KnowledgeMaxAggregateOutputType | null
  }

  type GetKnowledgeGroupByPayload<T extends KnowledgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KnowledgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KnowledgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KnowledgeGroupByOutputType[P]>
            : GetScalarType<T[P], KnowledgeGroupByOutputType[P]>
        }
      >
    >


  export type KnowledgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    parentId?: boolean
    order?: boolean
    parent?: boolean | Knowledge$parentArgs<ExtArgs>
    children?: boolean | Knowledge$childrenArgs<ExtArgs>
    _count?: boolean | KnowledgeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["knowledge"]>

  export type KnowledgeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    parentId?: boolean
    order?: boolean
    parent?: boolean | Knowledge$parentArgs<ExtArgs>
  }, ExtArgs["result"]["knowledge"]>

  export type KnowledgeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    parentId?: boolean
    order?: boolean
    parent?: boolean | Knowledge$parentArgs<ExtArgs>
  }, ExtArgs["result"]["knowledge"]>

  export type KnowledgeSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    parentId?: boolean
    order?: boolean
  }

  export type KnowledgeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "category" | "parentId" | "order", ExtArgs["result"]["knowledge"]>
  export type KnowledgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Knowledge$parentArgs<ExtArgs>
    children?: boolean | Knowledge$childrenArgs<ExtArgs>
    _count?: boolean | KnowledgeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KnowledgeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Knowledge$parentArgs<ExtArgs>
  }
  export type KnowledgeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Knowledge$parentArgs<ExtArgs>
  }

  export type $KnowledgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Knowledge"
    objects: {
      parent: Prisma.$KnowledgePayload<ExtArgs> | null
      children: Prisma.$KnowledgePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      category: string
      parentId: string | null
      order: number
    }, ExtArgs["result"]["knowledge"]>
    composites: {}
  }

  type KnowledgeGetPayload<S extends boolean | null | undefined | KnowledgeDefaultArgs> = $Result.GetResult<Prisma.$KnowledgePayload, S>

  type KnowledgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KnowledgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KnowledgeCountAggregateInputType | true
    }

  export interface KnowledgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Knowledge'], meta: { name: 'Knowledge' } }
    /**
     * Find zero or one Knowledge that matches the filter.
     * @param {KnowledgeFindUniqueArgs} args - Arguments to find a Knowledge
     * @example
     * // Get one Knowledge
     * const knowledge = await prisma.knowledge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KnowledgeFindUniqueArgs>(args: SelectSubset<T, KnowledgeFindUniqueArgs<ExtArgs>>): Prisma__KnowledgeClient<$Result.GetResult<Prisma.$KnowledgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Knowledge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KnowledgeFindUniqueOrThrowArgs} args - Arguments to find a Knowledge
     * @example
     * // Get one Knowledge
     * const knowledge = await prisma.knowledge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KnowledgeFindUniqueOrThrowArgs>(args: SelectSubset<T, KnowledgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KnowledgeClient<$Result.GetResult<Prisma.$KnowledgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Knowledge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeFindFirstArgs} args - Arguments to find a Knowledge
     * @example
     * // Get one Knowledge
     * const knowledge = await prisma.knowledge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KnowledgeFindFirstArgs>(args?: SelectSubset<T, KnowledgeFindFirstArgs<ExtArgs>>): Prisma__KnowledgeClient<$Result.GetResult<Prisma.$KnowledgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Knowledge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeFindFirstOrThrowArgs} args - Arguments to find a Knowledge
     * @example
     * // Get one Knowledge
     * const knowledge = await prisma.knowledge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KnowledgeFindFirstOrThrowArgs>(args?: SelectSubset<T, KnowledgeFindFirstOrThrowArgs<ExtArgs>>): Prisma__KnowledgeClient<$Result.GetResult<Prisma.$KnowledgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Knowledges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Knowledges
     * const knowledges = await prisma.knowledge.findMany()
     * 
     * // Get first 10 Knowledges
     * const knowledges = await prisma.knowledge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const knowledgeWithIdOnly = await prisma.knowledge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KnowledgeFindManyArgs>(args?: SelectSubset<T, KnowledgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Knowledge.
     * @param {KnowledgeCreateArgs} args - Arguments to create a Knowledge.
     * @example
     * // Create one Knowledge
     * const Knowledge = await prisma.knowledge.create({
     *   data: {
     *     // ... data to create a Knowledge
     *   }
     * })
     * 
     */
    create<T extends KnowledgeCreateArgs>(args: SelectSubset<T, KnowledgeCreateArgs<ExtArgs>>): Prisma__KnowledgeClient<$Result.GetResult<Prisma.$KnowledgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Knowledges.
     * @param {KnowledgeCreateManyArgs} args - Arguments to create many Knowledges.
     * @example
     * // Create many Knowledges
     * const knowledge = await prisma.knowledge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KnowledgeCreateManyArgs>(args?: SelectSubset<T, KnowledgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Knowledges and returns the data saved in the database.
     * @param {KnowledgeCreateManyAndReturnArgs} args - Arguments to create many Knowledges.
     * @example
     * // Create many Knowledges
     * const knowledge = await prisma.knowledge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Knowledges and only return the `id`
     * const knowledgeWithIdOnly = await prisma.knowledge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KnowledgeCreateManyAndReturnArgs>(args?: SelectSubset<T, KnowledgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Knowledge.
     * @param {KnowledgeDeleteArgs} args - Arguments to delete one Knowledge.
     * @example
     * // Delete one Knowledge
     * const Knowledge = await prisma.knowledge.delete({
     *   where: {
     *     // ... filter to delete one Knowledge
     *   }
     * })
     * 
     */
    delete<T extends KnowledgeDeleteArgs>(args: SelectSubset<T, KnowledgeDeleteArgs<ExtArgs>>): Prisma__KnowledgeClient<$Result.GetResult<Prisma.$KnowledgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Knowledge.
     * @param {KnowledgeUpdateArgs} args - Arguments to update one Knowledge.
     * @example
     * // Update one Knowledge
     * const knowledge = await prisma.knowledge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KnowledgeUpdateArgs>(args: SelectSubset<T, KnowledgeUpdateArgs<ExtArgs>>): Prisma__KnowledgeClient<$Result.GetResult<Prisma.$KnowledgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Knowledges.
     * @param {KnowledgeDeleteManyArgs} args - Arguments to filter Knowledges to delete.
     * @example
     * // Delete a few Knowledges
     * const { count } = await prisma.knowledge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KnowledgeDeleteManyArgs>(args?: SelectSubset<T, KnowledgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Knowledges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Knowledges
     * const knowledge = await prisma.knowledge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KnowledgeUpdateManyArgs>(args: SelectSubset<T, KnowledgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Knowledges and returns the data updated in the database.
     * @param {KnowledgeUpdateManyAndReturnArgs} args - Arguments to update many Knowledges.
     * @example
     * // Update many Knowledges
     * const knowledge = await prisma.knowledge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Knowledges and only return the `id`
     * const knowledgeWithIdOnly = await prisma.knowledge.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KnowledgeUpdateManyAndReturnArgs>(args: SelectSubset<T, KnowledgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Knowledge.
     * @param {KnowledgeUpsertArgs} args - Arguments to update or create a Knowledge.
     * @example
     * // Update or create a Knowledge
     * const knowledge = await prisma.knowledge.upsert({
     *   create: {
     *     // ... data to create a Knowledge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Knowledge we want to update
     *   }
     * })
     */
    upsert<T extends KnowledgeUpsertArgs>(args: SelectSubset<T, KnowledgeUpsertArgs<ExtArgs>>): Prisma__KnowledgeClient<$Result.GetResult<Prisma.$KnowledgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Knowledges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeCountArgs} args - Arguments to filter Knowledges to count.
     * @example
     * // Count the number of Knowledges
     * const count = await prisma.knowledge.count({
     *   where: {
     *     // ... the filter for the Knowledges we want to count
     *   }
     * })
    **/
    count<T extends KnowledgeCountArgs>(
      args?: Subset<T, KnowledgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KnowledgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Knowledge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KnowledgeAggregateArgs>(args: Subset<T, KnowledgeAggregateArgs>): Prisma.PrismaPromise<GetKnowledgeAggregateType<T>>

    /**
     * Group by Knowledge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KnowledgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KnowledgeGroupByArgs['orderBy'] }
        : { orderBy?: KnowledgeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KnowledgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKnowledgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Knowledge model
   */
  readonly fields: KnowledgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Knowledge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KnowledgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends Knowledge$parentArgs<ExtArgs> = {}>(args?: Subset<T, Knowledge$parentArgs<ExtArgs>>): Prisma__KnowledgeClient<$Result.GetResult<Prisma.$KnowledgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends Knowledge$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Knowledge$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Knowledge model
   */
  interface KnowledgeFieldRefs {
    readonly id: FieldRef<"Knowledge", 'String'>
    readonly title: FieldRef<"Knowledge", 'String'>
    readonly content: FieldRef<"Knowledge", 'String'>
    readonly category: FieldRef<"Knowledge", 'String'>
    readonly parentId: FieldRef<"Knowledge", 'String'>
    readonly order: FieldRef<"Knowledge", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Knowledge findUnique
   */
  export type KnowledgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Knowledge
     */
    select?: KnowledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Knowledge
     */
    omit?: KnowledgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeInclude<ExtArgs> | null
    /**
     * Filter, which Knowledge to fetch.
     */
    where: KnowledgeWhereUniqueInput
  }

  /**
   * Knowledge findUniqueOrThrow
   */
  export type KnowledgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Knowledge
     */
    select?: KnowledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Knowledge
     */
    omit?: KnowledgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeInclude<ExtArgs> | null
    /**
     * Filter, which Knowledge to fetch.
     */
    where: KnowledgeWhereUniqueInput
  }

  /**
   * Knowledge findFirst
   */
  export type KnowledgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Knowledge
     */
    select?: KnowledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Knowledge
     */
    omit?: KnowledgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeInclude<ExtArgs> | null
    /**
     * Filter, which Knowledge to fetch.
     */
    where?: KnowledgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Knowledges to fetch.
     */
    orderBy?: KnowledgeOrderByWithRelationInput | KnowledgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Knowledges.
     */
    cursor?: KnowledgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Knowledges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Knowledges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Knowledges.
     */
    distinct?: KnowledgeScalarFieldEnum | KnowledgeScalarFieldEnum[]
  }

  /**
   * Knowledge findFirstOrThrow
   */
  export type KnowledgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Knowledge
     */
    select?: KnowledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Knowledge
     */
    omit?: KnowledgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeInclude<ExtArgs> | null
    /**
     * Filter, which Knowledge to fetch.
     */
    where?: KnowledgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Knowledges to fetch.
     */
    orderBy?: KnowledgeOrderByWithRelationInput | KnowledgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Knowledges.
     */
    cursor?: KnowledgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Knowledges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Knowledges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Knowledges.
     */
    distinct?: KnowledgeScalarFieldEnum | KnowledgeScalarFieldEnum[]
  }

  /**
   * Knowledge findMany
   */
  export type KnowledgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Knowledge
     */
    select?: KnowledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Knowledge
     */
    omit?: KnowledgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeInclude<ExtArgs> | null
    /**
     * Filter, which Knowledges to fetch.
     */
    where?: KnowledgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Knowledges to fetch.
     */
    orderBy?: KnowledgeOrderByWithRelationInput | KnowledgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Knowledges.
     */
    cursor?: KnowledgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Knowledges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Knowledges.
     */
    skip?: number
    distinct?: KnowledgeScalarFieldEnum | KnowledgeScalarFieldEnum[]
  }

  /**
   * Knowledge create
   */
  export type KnowledgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Knowledge
     */
    select?: KnowledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Knowledge
     */
    omit?: KnowledgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeInclude<ExtArgs> | null
    /**
     * The data needed to create a Knowledge.
     */
    data: XOR<KnowledgeCreateInput, KnowledgeUncheckedCreateInput>
  }

  /**
   * Knowledge createMany
   */
  export type KnowledgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Knowledges.
     */
    data: KnowledgeCreateManyInput | KnowledgeCreateManyInput[]
  }

  /**
   * Knowledge createManyAndReturn
   */
  export type KnowledgeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Knowledge
     */
    select?: KnowledgeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Knowledge
     */
    omit?: KnowledgeOmit<ExtArgs> | null
    /**
     * The data used to create many Knowledges.
     */
    data: KnowledgeCreateManyInput | KnowledgeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Knowledge update
   */
  export type KnowledgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Knowledge
     */
    select?: KnowledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Knowledge
     */
    omit?: KnowledgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeInclude<ExtArgs> | null
    /**
     * The data needed to update a Knowledge.
     */
    data: XOR<KnowledgeUpdateInput, KnowledgeUncheckedUpdateInput>
    /**
     * Choose, which Knowledge to update.
     */
    where: KnowledgeWhereUniqueInput
  }

  /**
   * Knowledge updateMany
   */
  export type KnowledgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Knowledges.
     */
    data: XOR<KnowledgeUpdateManyMutationInput, KnowledgeUncheckedUpdateManyInput>
    /**
     * Filter which Knowledges to update
     */
    where?: KnowledgeWhereInput
    /**
     * Limit how many Knowledges to update.
     */
    limit?: number
  }

  /**
   * Knowledge updateManyAndReturn
   */
  export type KnowledgeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Knowledge
     */
    select?: KnowledgeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Knowledge
     */
    omit?: KnowledgeOmit<ExtArgs> | null
    /**
     * The data used to update Knowledges.
     */
    data: XOR<KnowledgeUpdateManyMutationInput, KnowledgeUncheckedUpdateManyInput>
    /**
     * Filter which Knowledges to update
     */
    where?: KnowledgeWhereInput
    /**
     * Limit how many Knowledges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Knowledge upsert
   */
  export type KnowledgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Knowledge
     */
    select?: KnowledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Knowledge
     */
    omit?: KnowledgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeInclude<ExtArgs> | null
    /**
     * The filter to search for the Knowledge to update in case it exists.
     */
    where: KnowledgeWhereUniqueInput
    /**
     * In case the Knowledge found by the `where` argument doesn't exist, create a new Knowledge with this data.
     */
    create: XOR<KnowledgeCreateInput, KnowledgeUncheckedCreateInput>
    /**
     * In case the Knowledge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KnowledgeUpdateInput, KnowledgeUncheckedUpdateInput>
  }

  /**
   * Knowledge delete
   */
  export type KnowledgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Knowledge
     */
    select?: KnowledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Knowledge
     */
    omit?: KnowledgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeInclude<ExtArgs> | null
    /**
     * Filter which Knowledge to delete.
     */
    where: KnowledgeWhereUniqueInput
  }

  /**
   * Knowledge deleteMany
   */
  export type KnowledgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Knowledges to delete
     */
    where?: KnowledgeWhereInput
    /**
     * Limit how many Knowledges to delete.
     */
    limit?: number
  }

  /**
   * Knowledge.parent
   */
  export type Knowledge$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Knowledge
     */
    select?: KnowledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Knowledge
     */
    omit?: KnowledgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeInclude<ExtArgs> | null
    where?: KnowledgeWhereInput
  }

  /**
   * Knowledge.children
   */
  export type Knowledge$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Knowledge
     */
    select?: KnowledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Knowledge
     */
    omit?: KnowledgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeInclude<ExtArgs> | null
    where?: KnowledgeWhereInput
    orderBy?: KnowledgeOrderByWithRelationInput | KnowledgeOrderByWithRelationInput[]
    cursor?: KnowledgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KnowledgeScalarFieldEnum | KnowledgeScalarFieldEnum[]
  }

  /**
   * Knowledge without action
   */
  export type KnowledgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Knowledge
     */
    select?: KnowledgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Knowledge
     */
    omit?: KnowledgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    type: $Enums.QuestionType | null
    difficulty: $Enums.Difficulty | null
    content: string | null
    answer: string | null
    solution: string | null
    pitfalls: string | null
    source: $Enums.QuestionSource | null
    imageUrl: string | null
    status: $Enums.QuestionStatus | null
    createdAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    type: $Enums.QuestionType | null
    difficulty: $Enums.Difficulty | null
    content: string | null
    answer: string | null
    solution: string | null
    pitfalls: string | null
    source: $Enums.QuestionSource | null
    imageUrl: string | null
    status: $Enums.QuestionStatus | null
    createdAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    type: number
    difficulty: number
    content: number
    answer: number
    solution: number
    pitfalls: number
    knowledgePoints: number
    source: number
    imageUrl: number
    status: number
    createdAt: number
    _all: number
  }


  export type QuestionMinAggregateInputType = {
    id?: true
    type?: true
    difficulty?: true
    content?: true
    answer?: true
    solution?: true
    pitfalls?: true
    source?: true
    imageUrl?: true
    status?: true
    createdAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    type?: true
    difficulty?: true
    content?: true
    answer?: true
    solution?: true
    pitfalls?: true
    source?: true
    imageUrl?: true
    status?: true
    createdAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    type?: true
    difficulty?: true
    content?: true
    answer?: true
    solution?: true
    pitfalls?: true
    knowledgePoints?: true
    source?: true
    imageUrl?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    type: $Enums.QuestionType
    difficulty: $Enums.Difficulty
    content: string
    answer: string | null
    solution: string | null
    pitfalls: string | null
    knowledgePoints: JsonValue | null
    source: $Enums.QuestionSource
    imageUrl: string | null
    status: $Enums.QuestionStatus
    createdAt: Date
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    difficulty?: boolean
    content?: boolean
    answer?: boolean
    solution?: boolean
    pitfalls?: boolean
    knowledgePoints?: boolean
    source?: boolean
    imageUrl?: boolean
    status?: boolean
    createdAt?: boolean
    studyRecords?: boolean | Question$studyRecordsArgs<ExtArgs>
    wrongBook?: boolean | Question$wrongBookArgs<ExtArgs>
    generated?: boolean | Question$generatedArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    difficulty?: boolean
    content?: boolean
    answer?: boolean
    solution?: boolean
    pitfalls?: boolean
    knowledgePoints?: boolean
    source?: boolean
    imageUrl?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    difficulty?: boolean
    content?: boolean
    answer?: boolean
    solution?: boolean
    pitfalls?: boolean
    knowledgePoints?: boolean
    source?: boolean
    imageUrl?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    type?: boolean
    difficulty?: boolean
    content?: boolean
    answer?: boolean
    solution?: boolean
    pitfalls?: boolean
    knowledgePoints?: boolean
    source?: boolean
    imageUrl?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "difficulty" | "content" | "answer" | "solution" | "pitfalls" | "knowledgePoints" | "source" | "imageUrl" | "status" | "createdAt", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studyRecords?: boolean | Question$studyRecordsArgs<ExtArgs>
    wrongBook?: boolean | Question$wrongBookArgs<ExtArgs>
    generated?: boolean | Question$generatedArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      studyRecords: Prisma.$StudyRecordPayload<ExtArgs>[]
      wrongBook: Prisma.$WrongQuestionBookPayload<ExtArgs>[]
      generated: Prisma.$GeneratedQuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.QuestionType
      difficulty: $Enums.Difficulty
      content: string
      answer: string | null
      solution: string | null
      pitfalls: string | null
      knowledgePoints: Prisma.JsonValue | null
      source: $Enums.QuestionSource
      imageUrl: string | null
      status: $Enums.QuestionStatus
      createdAt: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    studyRecords<T extends Question$studyRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Question$studyRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wrongBook<T extends Question$wrongBookArgs<ExtArgs> = {}>(args?: Subset<T, Question$wrongBookArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WrongQuestionBookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    generated<T extends Question$generatedArgs<ExtArgs> = {}>(args?: Subset<T, Question$generatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly type: FieldRef<"Question", 'QuestionType'>
    readonly difficulty: FieldRef<"Question", 'Difficulty'>
    readonly content: FieldRef<"Question", 'String'>
    readonly answer: FieldRef<"Question", 'String'>
    readonly solution: FieldRef<"Question", 'String'>
    readonly pitfalls: FieldRef<"Question", 'String'>
    readonly knowledgePoints: FieldRef<"Question", 'Json'>
    readonly source: FieldRef<"Question", 'QuestionSource'>
    readonly imageUrl: FieldRef<"Question", 'String'>
    readonly status: FieldRef<"Question", 'QuestionStatus'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.studyRecords
   */
  export type Question$studyRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyRecord
     */
    select?: StudyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyRecord
     */
    omit?: StudyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyRecordInclude<ExtArgs> | null
    where?: StudyRecordWhereInput
    orderBy?: StudyRecordOrderByWithRelationInput | StudyRecordOrderByWithRelationInput[]
    cursor?: StudyRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudyRecordScalarFieldEnum | StudyRecordScalarFieldEnum[]
  }

  /**
   * Question.wrongBook
   */
  export type Question$wrongBookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrongQuestionBook
     */
    select?: WrongQuestionBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WrongQuestionBook
     */
    omit?: WrongQuestionBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrongQuestionBookInclude<ExtArgs> | null
    where?: WrongQuestionBookWhereInput
    orderBy?: WrongQuestionBookOrderByWithRelationInput | WrongQuestionBookOrderByWithRelationInput[]
    cursor?: WrongQuestionBookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WrongQuestionBookScalarFieldEnum | WrongQuestionBookScalarFieldEnum[]
  }

  /**
   * Question.generated
   */
  export type Question$generatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedQuestion
     */
    select?: GeneratedQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedQuestion
     */
    omit?: GeneratedQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedQuestionInclude<ExtArgs> | null
    where?: GeneratedQuestionWhereInput
    orderBy?: GeneratedQuestionOrderByWithRelationInput | GeneratedQuestionOrderByWithRelationInput[]
    cursor?: GeneratedQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GeneratedQuestionScalarFieldEnum | GeneratedQuestionScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model GeneratedQuestion
   */

  export type AggregateGeneratedQuestion = {
    _count: GeneratedQuestionCountAggregateOutputType | null
    _min: GeneratedQuestionMinAggregateOutputType | null
    _max: GeneratedQuestionMaxAggregateOutputType | null
  }

  export type GeneratedQuestionMinAggregateOutputType = {
    id: string | null
    parentQuestionId: string | null
    difficultyLevel: $Enums.Difficulty | null
    content: string | null
    answer: string | null
    solution: string | null
  }

  export type GeneratedQuestionMaxAggregateOutputType = {
    id: string | null
    parentQuestionId: string | null
    difficultyLevel: $Enums.Difficulty | null
    content: string | null
    answer: string | null
    solution: string | null
  }

  export type GeneratedQuestionCountAggregateOutputType = {
    id: number
    parentQuestionId: number
    difficultyLevel: number
    content: number
    answer: number
    solution: number
    _all: number
  }


  export type GeneratedQuestionMinAggregateInputType = {
    id?: true
    parentQuestionId?: true
    difficultyLevel?: true
    content?: true
    answer?: true
    solution?: true
  }

  export type GeneratedQuestionMaxAggregateInputType = {
    id?: true
    parentQuestionId?: true
    difficultyLevel?: true
    content?: true
    answer?: true
    solution?: true
  }

  export type GeneratedQuestionCountAggregateInputType = {
    id?: true
    parentQuestionId?: true
    difficultyLevel?: true
    content?: true
    answer?: true
    solution?: true
    _all?: true
  }

  export type GeneratedQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneratedQuestion to aggregate.
     */
    where?: GeneratedQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedQuestions to fetch.
     */
    orderBy?: GeneratedQuestionOrderByWithRelationInput | GeneratedQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeneratedQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GeneratedQuestions
    **/
    _count?: true | GeneratedQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneratedQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneratedQuestionMaxAggregateInputType
  }

  export type GetGeneratedQuestionAggregateType<T extends GeneratedQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateGeneratedQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeneratedQuestion[P]>
      : GetScalarType<T[P], AggregateGeneratedQuestion[P]>
  }




  export type GeneratedQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneratedQuestionWhereInput
    orderBy?: GeneratedQuestionOrderByWithAggregationInput | GeneratedQuestionOrderByWithAggregationInput[]
    by: GeneratedQuestionScalarFieldEnum[] | GeneratedQuestionScalarFieldEnum
    having?: GeneratedQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneratedQuestionCountAggregateInputType | true
    _min?: GeneratedQuestionMinAggregateInputType
    _max?: GeneratedQuestionMaxAggregateInputType
  }

  export type GeneratedQuestionGroupByOutputType = {
    id: string
    parentQuestionId: string
    difficultyLevel: $Enums.Difficulty
    content: string
    answer: string | null
    solution: string | null
    _count: GeneratedQuestionCountAggregateOutputType | null
    _min: GeneratedQuestionMinAggregateOutputType | null
    _max: GeneratedQuestionMaxAggregateOutputType | null
  }

  type GetGeneratedQuestionGroupByPayload<T extends GeneratedQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeneratedQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneratedQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneratedQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], GeneratedQuestionGroupByOutputType[P]>
        }
      >
    >


  export type GeneratedQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentQuestionId?: boolean
    difficultyLevel?: boolean
    content?: boolean
    answer?: boolean
    solution?: boolean
    parentQuestion?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generatedQuestion"]>

  export type GeneratedQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentQuestionId?: boolean
    difficultyLevel?: boolean
    content?: boolean
    answer?: boolean
    solution?: boolean
    parentQuestion?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generatedQuestion"]>

  export type GeneratedQuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parentQuestionId?: boolean
    difficultyLevel?: boolean
    content?: boolean
    answer?: boolean
    solution?: boolean
    parentQuestion?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generatedQuestion"]>

  export type GeneratedQuestionSelectScalar = {
    id?: boolean
    parentQuestionId?: boolean
    difficultyLevel?: boolean
    content?: boolean
    answer?: boolean
    solution?: boolean
  }

  export type GeneratedQuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "parentQuestionId" | "difficultyLevel" | "content" | "answer" | "solution", ExtArgs["result"]["generatedQuestion"]>
  export type GeneratedQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parentQuestion?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type GeneratedQuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parentQuestion?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type GeneratedQuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parentQuestion?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $GeneratedQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GeneratedQuestion"
    objects: {
      parentQuestion: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      parentQuestionId: string
      difficultyLevel: $Enums.Difficulty
      content: string
      answer: string | null
      solution: string | null
    }, ExtArgs["result"]["generatedQuestion"]>
    composites: {}
  }

  type GeneratedQuestionGetPayload<S extends boolean | null | undefined | GeneratedQuestionDefaultArgs> = $Result.GetResult<Prisma.$GeneratedQuestionPayload, S>

  type GeneratedQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GeneratedQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GeneratedQuestionCountAggregateInputType | true
    }

  export interface GeneratedQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GeneratedQuestion'], meta: { name: 'GeneratedQuestion' } }
    /**
     * Find zero or one GeneratedQuestion that matches the filter.
     * @param {GeneratedQuestionFindUniqueArgs} args - Arguments to find a GeneratedQuestion
     * @example
     * // Get one GeneratedQuestion
     * const generatedQuestion = await prisma.generatedQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GeneratedQuestionFindUniqueArgs>(args: SelectSubset<T, GeneratedQuestionFindUniqueArgs<ExtArgs>>): Prisma__GeneratedQuestionClient<$Result.GetResult<Prisma.$GeneratedQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GeneratedQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GeneratedQuestionFindUniqueOrThrowArgs} args - Arguments to find a GeneratedQuestion
     * @example
     * // Get one GeneratedQuestion
     * const generatedQuestion = await prisma.generatedQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GeneratedQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, GeneratedQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GeneratedQuestionClient<$Result.GetResult<Prisma.$GeneratedQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneratedQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedQuestionFindFirstArgs} args - Arguments to find a GeneratedQuestion
     * @example
     * // Get one GeneratedQuestion
     * const generatedQuestion = await prisma.generatedQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GeneratedQuestionFindFirstArgs>(args?: SelectSubset<T, GeneratedQuestionFindFirstArgs<ExtArgs>>): Prisma__GeneratedQuestionClient<$Result.GetResult<Prisma.$GeneratedQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneratedQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedQuestionFindFirstOrThrowArgs} args - Arguments to find a GeneratedQuestion
     * @example
     * // Get one GeneratedQuestion
     * const generatedQuestion = await prisma.generatedQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GeneratedQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, GeneratedQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__GeneratedQuestionClient<$Result.GetResult<Prisma.$GeneratedQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GeneratedQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GeneratedQuestions
     * const generatedQuestions = await prisma.generatedQuestion.findMany()
     * 
     * // Get first 10 GeneratedQuestions
     * const generatedQuestions = await prisma.generatedQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generatedQuestionWithIdOnly = await prisma.generatedQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GeneratedQuestionFindManyArgs>(args?: SelectSubset<T, GeneratedQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GeneratedQuestion.
     * @param {GeneratedQuestionCreateArgs} args - Arguments to create a GeneratedQuestion.
     * @example
     * // Create one GeneratedQuestion
     * const GeneratedQuestion = await prisma.generatedQuestion.create({
     *   data: {
     *     // ... data to create a GeneratedQuestion
     *   }
     * })
     * 
     */
    create<T extends GeneratedQuestionCreateArgs>(args: SelectSubset<T, GeneratedQuestionCreateArgs<ExtArgs>>): Prisma__GeneratedQuestionClient<$Result.GetResult<Prisma.$GeneratedQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GeneratedQuestions.
     * @param {GeneratedQuestionCreateManyArgs} args - Arguments to create many GeneratedQuestions.
     * @example
     * // Create many GeneratedQuestions
     * const generatedQuestion = await prisma.generatedQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GeneratedQuestionCreateManyArgs>(args?: SelectSubset<T, GeneratedQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GeneratedQuestions and returns the data saved in the database.
     * @param {GeneratedQuestionCreateManyAndReturnArgs} args - Arguments to create many GeneratedQuestions.
     * @example
     * // Create many GeneratedQuestions
     * const generatedQuestion = await prisma.generatedQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GeneratedQuestions and only return the `id`
     * const generatedQuestionWithIdOnly = await prisma.generatedQuestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GeneratedQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, GeneratedQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GeneratedQuestion.
     * @param {GeneratedQuestionDeleteArgs} args - Arguments to delete one GeneratedQuestion.
     * @example
     * // Delete one GeneratedQuestion
     * const GeneratedQuestion = await prisma.generatedQuestion.delete({
     *   where: {
     *     // ... filter to delete one GeneratedQuestion
     *   }
     * })
     * 
     */
    delete<T extends GeneratedQuestionDeleteArgs>(args: SelectSubset<T, GeneratedQuestionDeleteArgs<ExtArgs>>): Prisma__GeneratedQuestionClient<$Result.GetResult<Prisma.$GeneratedQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GeneratedQuestion.
     * @param {GeneratedQuestionUpdateArgs} args - Arguments to update one GeneratedQuestion.
     * @example
     * // Update one GeneratedQuestion
     * const generatedQuestion = await prisma.generatedQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GeneratedQuestionUpdateArgs>(args: SelectSubset<T, GeneratedQuestionUpdateArgs<ExtArgs>>): Prisma__GeneratedQuestionClient<$Result.GetResult<Prisma.$GeneratedQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GeneratedQuestions.
     * @param {GeneratedQuestionDeleteManyArgs} args - Arguments to filter GeneratedQuestions to delete.
     * @example
     * // Delete a few GeneratedQuestions
     * const { count } = await prisma.generatedQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GeneratedQuestionDeleteManyArgs>(args?: SelectSubset<T, GeneratedQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneratedQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GeneratedQuestions
     * const generatedQuestion = await prisma.generatedQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GeneratedQuestionUpdateManyArgs>(args: SelectSubset<T, GeneratedQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneratedQuestions and returns the data updated in the database.
     * @param {GeneratedQuestionUpdateManyAndReturnArgs} args - Arguments to update many GeneratedQuestions.
     * @example
     * // Update many GeneratedQuestions
     * const generatedQuestion = await prisma.generatedQuestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GeneratedQuestions and only return the `id`
     * const generatedQuestionWithIdOnly = await prisma.generatedQuestion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GeneratedQuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, GeneratedQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GeneratedQuestion.
     * @param {GeneratedQuestionUpsertArgs} args - Arguments to update or create a GeneratedQuestion.
     * @example
     * // Update or create a GeneratedQuestion
     * const generatedQuestion = await prisma.generatedQuestion.upsert({
     *   create: {
     *     // ... data to create a GeneratedQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GeneratedQuestion we want to update
     *   }
     * })
     */
    upsert<T extends GeneratedQuestionUpsertArgs>(args: SelectSubset<T, GeneratedQuestionUpsertArgs<ExtArgs>>): Prisma__GeneratedQuestionClient<$Result.GetResult<Prisma.$GeneratedQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GeneratedQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedQuestionCountArgs} args - Arguments to filter GeneratedQuestions to count.
     * @example
     * // Count the number of GeneratedQuestions
     * const count = await prisma.generatedQuestion.count({
     *   where: {
     *     // ... the filter for the GeneratedQuestions we want to count
     *   }
     * })
    **/
    count<T extends GeneratedQuestionCountArgs>(
      args?: Subset<T, GeneratedQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneratedQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GeneratedQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GeneratedQuestionAggregateArgs>(args: Subset<T, GeneratedQuestionAggregateArgs>): Prisma.PrismaPromise<GetGeneratedQuestionAggregateType<T>>

    /**
     * Group by GeneratedQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedQuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GeneratedQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeneratedQuestionGroupByArgs['orderBy'] }
        : { orderBy?: GeneratedQuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GeneratedQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneratedQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GeneratedQuestion model
   */
  readonly fields: GeneratedQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GeneratedQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GeneratedQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parentQuestion<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GeneratedQuestion model
   */
  interface GeneratedQuestionFieldRefs {
    readonly id: FieldRef<"GeneratedQuestion", 'String'>
    readonly parentQuestionId: FieldRef<"GeneratedQuestion", 'String'>
    readonly difficultyLevel: FieldRef<"GeneratedQuestion", 'Difficulty'>
    readonly content: FieldRef<"GeneratedQuestion", 'String'>
    readonly answer: FieldRef<"GeneratedQuestion", 'String'>
    readonly solution: FieldRef<"GeneratedQuestion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GeneratedQuestion findUnique
   */
  export type GeneratedQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedQuestion
     */
    select?: GeneratedQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedQuestion
     */
    omit?: GeneratedQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedQuestionInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedQuestion to fetch.
     */
    where: GeneratedQuestionWhereUniqueInput
  }

  /**
   * GeneratedQuestion findUniqueOrThrow
   */
  export type GeneratedQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedQuestion
     */
    select?: GeneratedQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedQuestion
     */
    omit?: GeneratedQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedQuestionInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedQuestion to fetch.
     */
    where: GeneratedQuestionWhereUniqueInput
  }

  /**
   * GeneratedQuestion findFirst
   */
  export type GeneratedQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedQuestion
     */
    select?: GeneratedQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedQuestion
     */
    omit?: GeneratedQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedQuestionInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedQuestion to fetch.
     */
    where?: GeneratedQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedQuestions to fetch.
     */
    orderBy?: GeneratedQuestionOrderByWithRelationInput | GeneratedQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneratedQuestions.
     */
    cursor?: GeneratedQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneratedQuestions.
     */
    distinct?: GeneratedQuestionScalarFieldEnum | GeneratedQuestionScalarFieldEnum[]
  }

  /**
   * GeneratedQuestion findFirstOrThrow
   */
  export type GeneratedQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedQuestion
     */
    select?: GeneratedQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedQuestion
     */
    omit?: GeneratedQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedQuestionInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedQuestion to fetch.
     */
    where?: GeneratedQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedQuestions to fetch.
     */
    orderBy?: GeneratedQuestionOrderByWithRelationInput | GeneratedQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneratedQuestions.
     */
    cursor?: GeneratedQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneratedQuestions.
     */
    distinct?: GeneratedQuestionScalarFieldEnum | GeneratedQuestionScalarFieldEnum[]
  }

  /**
   * GeneratedQuestion findMany
   */
  export type GeneratedQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedQuestion
     */
    select?: GeneratedQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedQuestion
     */
    omit?: GeneratedQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedQuestionInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedQuestions to fetch.
     */
    where?: GeneratedQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedQuestions to fetch.
     */
    orderBy?: GeneratedQuestionOrderByWithRelationInput | GeneratedQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GeneratedQuestions.
     */
    cursor?: GeneratedQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedQuestions.
     */
    skip?: number
    distinct?: GeneratedQuestionScalarFieldEnum | GeneratedQuestionScalarFieldEnum[]
  }

  /**
   * GeneratedQuestion create
   */
  export type GeneratedQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedQuestion
     */
    select?: GeneratedQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedQuestion
     */
    omit?: GeneratedQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a GeneratedQuestion.
     */
    data: XOR<GeneratedQuestionCreateInput, GeneratedQuestionUncheckedCreateInput>
  }

  /**
   * GeneratedQuestion createMany
   */
  export type GeneratedQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GeneratedQuestions.
     */
    data: GeneratedQuestionCreateManyInput | GeneratedQuestionCreateManyInput[]
  }

  /**
   * GeneratedQuestion createManyAndReturn
   */
  export type GeneratedQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedQuestion
     */
    select?: GeneratedQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedQuestion
     */
    omit?: GeneratedQuestionOmit<ExtArgs> | null
    /**
     * The data used to create many GeneratedQuestions.
     */
    data: GeneratedQuestionCreateManyInput | GeneratedQuestionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedQuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GeneratedQuestion update
   */
  export type GeneratedQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedQuestion
     */
    select?: GeneratedQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedQuestion
     */
    omit?: GeneratedQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a GeneratedQuestion.
     */
    data: XOR<GeneratedQuestionUpdateInput, GeneratedQuestionUncheckedUpdateInput>
    /**
     * Choose, which GeneratedQuestion to update.
     */
    where: GeneratedQuestionWhereUniqueInput
  }

  /**
   * GeneratedQuestion updateMany
   */
  export type GeneratedQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GeneratedQuestions.
     */
    data: XOR<GeneratedQuestionUpdateManyMutationInput, GeneratedQuestionUncheckedUpdateManyInput>
    /**
     * Filter which GeneratedQuestions to update
     */
    where?: GeneratedQuestionWhereInput
    /**
     * Limit how many GeneratedQuestions to update.
     */
    limit?: number
  }

  /**
   * GeneratedQuestion updateManyAndReturn
   */
  export type GeneratedQuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedQuestion
     */
    select?: GeneratedQuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedQuestion
     */
    omit?: GeneratedQuestionOmit<ExtArgs> | null
    /**
     * The data used to update GeneratedQuestions.
     */
    data: XOR<GeneratedQuestionUpdateManyMutationInput, GeneratedQuestionUncheckedUpdateManyInput>
    /**
     * Filter which GeneratedQuestions to update
     */
    where?: GeneratedQuestionWhereInput
    /**
     * Limit how many GeneratedQuestions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedQuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GeneratedQuestion upsert
   */
  export type GeneratedQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedQuestion
     */
    select?: GeneratedQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedQuestion
     */
    omit?: GeneratedQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the GeneratedQuestion to update in case it exists.
     */
    where: GeneratedQuestionWhereUniqueInput
    /**
     * In case the GeneratedQuestion found by the `where` argument doesn't exist, create a new GeneratedQuestion with this data.
     */
    create: XOR<GeneratedQuestionCreateInput, GeneratedQuestionUncheckedCreateInput>
    /**
     * In case the GeneratedQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeneratedQuestionUpdateInput, GeneratedQuestionUncheckedUpdateInput>
  }

  /**
   * GeneratedQuestion delete
   */
  export type GeneratedQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedQuestion
     */
    select?: GeneratedQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedQuestion
     */
    omit?: GeneratedQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedQuestionInclude<ExtArgs> | null
    /**
     * Filter which GeneratedQuestion to delete.
     */
    where: GeneratedQuestionWhereUniqueInput
  }

  /**
   * GeneratedQuestion deleteMany
   */
  export type GeneratedQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneratedQuestions to delete
     */
    where?: GeneratedQuestionWhereInput
    /**
     * Limit how many GeneratedQuestions to delete.
     */
    limit?: number
  }

  /**
   * GeneratedQuestion without action
   */
  export type GeneratedQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedQuestion
     */
    select?: GeneratedQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedQuestion
     */
    omit?: GeneratedQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedQuestionInclude<ExtArgs> | null
  }


  /**
   * Model StudyRecord
   */

  export type AggregateStudyRecord = {
    _count: StudyRecordCountAggregateOutputType | null
    _avg: StudyRecordAvgAggregateOutputType | null
    _sum: StudyRecordSumAggregateOutputType | null
    _min: StudyRecordMinAggregateOutputType | null
    _max: StudyRecordMaxAggregateOutputType | null
  }

  export type StudyRecordAvgAggregateOutputType = {
    timeSpent: number | null
  }

  export type StudyRecordSumAggregateOutputType = {
    timeSpent: number | null
  }

  export type StudyRecordMinAggregateOutputType = {
    id: string | null
    userId: string | null
    questionId: string | null
    userAnswer: string | null
    isCorrect: boolean | null
    timeSpent: number | null
    createdAt: Date | null
  }

  export type StudyRecordMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    questionId: string | null
    userAnswer: string | null
    isCorrect: boolean | null
    timeSpent: number | null
    createdAt: Date | null
  }

  export type StudyRecordCountAggregateOutputType = {
    id: number
    userId: number
    questionId: number
    userAnswer: number
    isCorrect: number
    timeSpent: number
    createdAt: number
    _all: number
  }


  export type StudyRecordAvgAggregateInputType = {
    timeSpent?: true
  }

  export type StudyRecordSumAggregateInputType = {
    timeSpent?: true
  }

  export type StudyRecordMinAggregateInputType = {
    id?: true
    userId?: true
    questionId?: true
    userAnswer?: true
    isCorrect?: true
    timeSpent?: true
    createdAt?: true
  }

  export type StudyRecordMaxAggregateInputType = {
    id?: true
    userId?: true
    questionId?: true
    userAnswer?: true
    isCorrect?: true
    timeSpent?: true
    createdAt?: true
  }

  export type StudyRecordCountAggregateInputType = {
    id?: true
    userId?: true
    questionId?: true
    userAnswer?: true
    isCorrect?: true
    timeSpent?: true
    createdAt?: true
    _all?: true
  }

  export type StudyRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudyRecord to aggregate.
     */
    where?: StudyRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyRecords to fetch.
     */
    orderBy?: StudyRecordOrderByWithRelationInput | StudyRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudyRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudyRecords
    **/
    _count?: true | StudyRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudyRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudyRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudyRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudyRecordMaxAggregateInputType
  }

  export type GetStudyRecordAggregateType<T extends StudyRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateStudyRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudyRecord[P]>
      : GetScalarType<T[P], AggregateStudyRecord[P]>
  }




  export type StudyRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudyRecordWhereInput
    orderBy?: StudyRecordOrderByWithAggregationInput | StudyRecordOrderByWithAggregationInput[]
    by: StudyRecordScalarFieldEnum[] | StudyRecordScalarFieldEnum
    having?: StudyRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudyRecordCountAggregateInputType | true
    _avg?: StudyRecordAvgAggregateInputType
    _sum?: StudyRecordSumAggregateInputType
    _min?: StudyRecordMinAggregateInputType
    _max?: StudyRecordMaxAggregateInputType
  }

  export type StudyRecordGroupByOutputType = {
    id: string
    userId: string
    questionId: string
    userAnswer: string | null
    isCorrect: boolean
    timeSpent: number
    createdAt: Date
    _count: StudyRecordCountAggregateOutputType | null
    _avg: StudyRecordAvgAggregateOutputType | null
    _sum: StudyRecordSumAggregateOutputType | null
    _min: StudyRecordMinAggregateOutputType | null
    _max: StudyRecordMaxAggregateOutputType | null
  }

  type GetStudyRecordGroupByPayload<T extends StudyRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudyRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudyRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudyRecordGroupByOutputType[P]>
            : GetScalarType<T[P], StudyRecordGroupByOutputType[P]>
        }
      >
    >


  export type StudyRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questionId?: boolean
    userAnswer?: boolean
    isCorrect?: boolean
    timeSpent?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studyRecord"]>

  export type StudyRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questionId?: boolean
    userAnswer?: boolean
    isCorrect?: boolean
    timeSpent?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studyRecord"]>

  export type StudyRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questionId?: boolean
    userAnswer?: boolean
    isCorrect?: boolean
    timeSpent?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studyRecord"]>

  export type StudyRecordSelectScalar = {
    id?: boolean
    userId?: boolean
    questionId?: boolean
    userAnswer?: boolean
    isCorrect?: boolean
    timeSpent?: boolean
    createdAt?: boolean
  }

  export type StudyRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "questionId" | "userAnswer" | "isCorrect" | "timeSpent" | "createdAt", ExtArgs["result"]["studyRecord"]>
  export type StudyRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type StudyRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type StudyRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $StudyRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudyRecord"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      questionId: string
      userAnswer: string | null
      isCorrect: boolean
      timeSpent: number
      createdAt: Date
    }, ExtArgs["result"]["studyRecord"]>
    composites: {}
  }

  type StudyRecordGetPayload<S extends boolean | null | undefined | StudyRecordDefaultArgs> = $Result.GetResult<Prisma.$StudyRecordPayload, S>

  type StudyRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudyRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudyRecordCountAggregateInputType | true
    }

  export interface StudyRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudyRecord'], meta: { name: 'StudyRecord' } }
    /**
     * Find zero or one StudyRecord that matches the filter.
     * @param {StudyRecordFindUniqueArgs} args - Arguments to find a StudyRecord
     * @example
     * // Get one StudyRecord
     * const studyRecord = await prisma.studyRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudyRecordFindUniqueArgs>(args: SelectSubset<T, StudyRecordFindUniqueArgs<ExtArgs>>): Prisma__StudyRecordClient<$Result.GetResult<Prisma.$StudyRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudyRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudyRecordFindUniqueOrThrowArgs} args - Arguments to find a StudyRecord
     * @example
     * // Get one StudyRecord
     * const studyRecord = await prisma.studyRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudyRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, StudyRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudyRecordClient<$Result.GetResult<Prisma.$StudyRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudyRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyRecordFindFirstArgs} args - Arguments to find a StudyRecord
     * @example
     * // Get one StudyRecord
     * const studyRecord = await prisma.studyRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudyRecordFindFirstArgs>(args?: SelectSubset<T, StudyRecordFindFirstArgs<ExtArgs>>): Prisma__StudyRecordClient<$Result.GetResult<Prisma.$StudyRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudyRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyRecordFindFirstOrThrowArgs} args - Arguments to find a StudyRecord
     * @example
     * // Get one StudyRecord
     * const studyRecord = await prisma.studyRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudyRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, StudyRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudyRecordClient<$Result.GetResult<Prisma.$StudyRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudyRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudyRecords
     * const studyRecords = await prisma.studyRecord.findMany()
     * 
     * // Get first 10 StudyRecords
     * const studyRecords = await prisma.studyRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studyRecordWithIdOnly = await prisma.studyRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudyRecordFindManyArgs>(args?: SelectSubset<T, StudyRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudyRecord.
     * @param {StudyRecordCreateArgs} args - Arguments to create a StudyRecord.
     * @example
     * // Create one StudyRecord
     * const StudyRecord = await prisma.studyRecord.create({
     *   data: {
     *     // ... data to create a StudyRecord
     *   }
     * })
     * 
     */
    create<T extends StudyRecordCreateArgs>(args: SelectSubset<T, StudyRecordCreateArgs<ExtArgs>>): Prisma__StudyRecordClient<$Result.GetResult<Prisma.$StudyRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudyRecords.
     * @param {StudyRecordCreateManyArgs} args - Arguments to create many StudyRecords.
     * @example
     * // Create many StudyRecords
     * const studyRecord = await prisma.studyRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudyRecordCreateManyArgs>(args?: SelectSubset<T, StudyRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudyRecords and returns the data saved in the database.
     * @param {StudyRecordCreateManyAndReturnArgs} args - Arguments to create many StudyRecords.
     * @example
     * // Create many StudyRecords
     * const studyRecord = await prisma.studyRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudyRecords and only return the `id`
     * const studyRecordWithIdOnly = await prisma.studyRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudyRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, StudyRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudyRecord.
     * @param {StudyRecordDeleteArgs} args - Arguments to delete one StudyRecord.
     * @example
     * // Delete one StudyRecord
     * const StudyRecord = await prisma.studyRecord.delete({
     *   where: {
     *     // ... filter to delete one StudyRecord
     *   }
     * })
     * 
     */
    delete<T extends StudyRecordDeleteArgs>(args: SelectSubset<T, StudyRecordDeleteArgs<ExtArgs>>): Prisma__StudyRecordClient<$Result.GetResult<Prisma.$StudyRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudyRecord.
     * @param {StudyRecordUpdateArgs} args - Arguments to update one StudyRecord.
     * @example
     * // Update one StudyRecord
     * const studyRecord = await prisma.studyRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudyRecordUpdateArgs>(args: SelectSubset<T, StudyRecordUpdateArgs<ExtArgs>>): Prisma__StudyRecordClient<$Result.GetResult<Prisma.$StudyRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudyRecords.
     * @param {StudyRecordDeleteManyArgs} args - Arguments to filter StudyRecords to delete.
     * @example
     * // Delete a few StudyRecords
     * const { count } = await prisma.studyRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudyRecordDeleteManyArgs>(args?: SelectSubset<T, StudyRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudyRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudyRecords
     * const studyRecord = await prisma.studyRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudyRecordUpdateManyArgs>(args: SelectSubset<T, StudyRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudyRecords and returns the data updated in the database.
     * @param {StudyRecordUpdateManyAndReturnArgs} args - Arguments to update many StudyRecords.
     * @example
     * // Update many StudyRecords
     * const studyRecord = await prisma.studyRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudyRecords and only return the `id`
     * const studyRecordWithIdOnly = await prisma.studyRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudyRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, StudyRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudyRecord.
     * @param {StudyRecordUpsertArgs} args - Arguments to update or create a StudyRecord.
     * @example
     * // Update or create a StudyRecord
     * const studyRecord = await prisma.studyRecord.upsert({
     *   create: {
     *     // ... data to create a StudyRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudyRecord we want to update
     *   }
     * })
     */
    upsert<T extends StudyRecordUpsertArgs>(args: SelectSubset<T, StudyRecordUpsertArgs<ExtArgs>>): Prisma__StudyRecordClient<$Result.GetResult<Prisma.$StudyRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudyRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyRecordCountArgs} args - Arguments to filter StudyRecords to count.
     * @example
     * // Count the number of StudyRecords
     * const count = await prisma.studyRecord.count({
     *   where: {
     *     // ... the filter for the StudyRecords we want to count
     *   }
     * })
    **/
    count<T extends StudyRecordCountArgs>(
      args?: Subset<T, StudyRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudyRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudyRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudyRecordAggregateArgs>(args: Subset<T, StudyRecordAggregateArgs>): Prisma.PrismaPromise<GetStudyRecordAggregateType<T>>

    /**
     * Group by StudyRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudyRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudyRecordGroupByArgs['orderBy'] }
        : { orderBy?: StudyRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudyRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudyRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudyRecord model
   */
  readonly fields: StudyRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudyRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudyRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudyRecord model
   */
  interface StudyRecordFieldRefs {
    readonly id: FieldRef<"StudyRecord", 'String'>
    readonly userId: FieldRef<"StudyRecord", 'String'>
    readonly questionId: FieldRef<"StudyRecord", 'String'>
    readonly userAnswer: FieldRef<"StudyRecord", 'String'>
    readonly isCorrect: FieldRef<"StudyRecord", 'Boolean'>
    readonly timeSpent: FieldRef<"StudyRecord", 'Int'>
    readonly createdAt: FieldRef<"StudyRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudyRecord findUnique
   */
  export type StudyRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyRecord
     */
    select?: StudyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyRecord
     */
    omit?: StudyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyRecordInclude<ExtArgs> | null
    /**
     * Filter, which StudyRecord to fetch.
     */
    where: StudyRecordWhereUniqueInput
  }

  /**
   * StudyRecord findUniqueOrThrow
   */
  export type StudyRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyRecord
     */
    select?: StudyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyRecord
     */
    omit?: StudyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyRecordInclude<ExtArgs> | null
    /**
     * Filter, which StudyRecord to fetch.
     */
    where: StudyRecordWhereUniqueInput
  }

  /**
   * StudyRecord findFirst
   */
  export type StudyRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyRecord
     */
    select?: StudyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyRecord
     */
    omit?: StudyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyRecordInclude<ExtArgs> | null
    /**
     * Filter, which StudyRecord to fetch.
     */
    where?: StudyRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyRecords to fetch.
     */
    orderBy?: StudyRecordOrderByWithRelationInput | StudyRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudyRecords.
     */
    cursor?: StudyRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudyRecords.
     */
    distinct?: StudyRecordScalarFieldEnum | StudyRecordScalarFieldEnum[]
  }

  /**
   * StudyRecord findFirstOrThrow
   */
  export type StudyRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyRecord
     */
    select?: StudyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyRecord
     */
    omit?: StudyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyRecordInclude<ExtArgs> | null
    /**
     * Filter, which StudyRecord to fetch.
     */
    where?: StudyRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyRecords to fetch.
     */
    orderBy?: StudyRecordOrderByWithRelationInput | StudyRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudyRecords.
     */
    cursor?: StudyRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudyRecords.
     */
    distinct?: StudyRecordScalarFieldEnum | StudyRecordScalarFieldEnum[]
  }

  /**
   * StudyRecord findMany
   */
  export type StudyRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyRecord
     */
    select?: StudyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyRecord
     */
    omit?: StudyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyRecordInclude<ExtArgs> | null
    /**
     * Filter, which StudyRecords to fetch.
     */
    where?: StudyRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyRecords to fetch.
     */
    orderBy?: StudyRecordOrderByWithRelationInput | StudyRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudyRecords.
     */
    cursor?: StudyRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyRecords.
     */
    skip?: number
    distinct?: StudyRecordScalarFieldEnum | StudyRecordScalarFieldEnum[]
  }

  /**
   * StudyRecord create
   */
  export type StudyRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyRecord
     */
    select?: StudyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyRecord
     */
    omit?: StudyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a StudyRecord.
     */
    data: XOR<StudyRecordCreateInput, StudyRecordUncheckedCreateInput>
  }

  /**
   * StudyRecord createMany
   */
  export type StudyRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudyRecords.
     */
    data: StudyRecordCreateManyInput | StudyRecordCreateManyInput[]
  }

  /**
   * StudyRecord createManyAndReturn
   */
  export type StudyRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyRecord
     */
    select?: StudyRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudyRecord
     */
    omit?: StudyRecordOmit<ExtArgs> | null
    /**
     * The data used to create many StudyRecords.
     */
    data: StudyRecordCreateManyInput | StudyRecordCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudyRecord update
   */
  export type StudyRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyRecord
     */
    select?: StudyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyRecord
     */
    omit?: StudyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a StudyRecord.
     */
    data: XOR<StudyRecordUpdateInput, StudyRecordUncheckedUpdateInput>
    /**
     * Choose, which StudyRecord to update.
     */
    where: StudyRecordWhereUniqueInput
  }

  /**
   * StudyRecord updateMany
   */
  export type StudyRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudyRecords.
     */
    data: XOR<StudyRecordUpdateManyMutationInput, StudyRecordUncheckedUpdateManyInput>
    /**
     * Filter which StudyRecords to update
     */
    where?: StudyRecordWhereInput
    /**
     * Limit how many StudyRecords to update.
     */
    limit?: number
  }

  /**
   * StudyRecord updateManyAndReturn
   */
  export type StudyRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyRecord
     */
    select?: StudyRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudyRecord
     */
    omit?: StudyRecordOmit<ExtArgs> | null
    /**
     * The data used to update StudyRecords.
     */
    data: XOR<StudyRecordUpdateManyMutationInput, StudyRecordUncheckedUpdateManyInput>
    /**
     * Filter which StudyRecords to update
     */
    where?: StudyRecordWhereInput
    /**
     * Limit how many StudyRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudyRecord upsert
   */
  export type StudyRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyRecord
     */
    select?: StudyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyRecord
     */
    omit?: StudyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the StudyRecord to update in case it exists.
     */
    where: StudyRecordWhereUniqueInput
    /**
     * In case the StudyRecord found by the `where` argument doesn't exist, create a new StudyRecord with this data.
     */
    create: XOR<StudyRecordCreateInput, StudyRecordUncheckedCreateInput>
    /**
     * In case the StudyRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudyRecordUpdateInput, StudyRecordUncheckedUpdateInput>
  }

  /**
   * StudyRecord delete
   */
  export type StudyRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyRecord
     */
    select?: StudyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyRecord
     */
    omit?: StudyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyRecordInclude<ExtArgs> | null
    /**
     * Filter which StudyRecord to delete.
     */
    where: StudyRecordWhereUniqueInput
  }

  /**
   * StudyRecord deleteMany
   */
  export type StudyRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudyRecords to delete
     */
    where?: StudyRecordWhereInput
    /**
     * Limit how many StudyRecords to delete.
     */
    limit?: number
  }

  /**
   * StudyRecord without action
   */
  export type StudyRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyRecord
     */
    select?: StudyRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyRecord
     */
    omit?: StudyRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyRecordInclude<ExtArgs> | null
  }


  /**
   * Model WrongQuestionBook
   */

  export type AggregateWrongQuestionBook = {
    _count: WrongQuestionBookCountAggregateOutputType | null
    _avg: WrongQuestionBookAvgAggregateOutputType | null
    _sum: WrongQuestionBookSumAggregateOutputType | null
    _min: WrongQuestionBookMinAggregateOutputType | null
    _max: WrongQuestionBookMaxAggregateOutputType | null
  }

  export type WrongQuestionBookAvgAggregateOutputType = {
    wrongCount: number | null
  }

  export type WrongQuestionBookSumAggregateOutputType = {
    wrongCount: number | null
  }

  export type WrongQuestionBookMinAggregateOutputType = {
    id: string | null
    userId: string | null
    questionId: string | null
    wrongCount: number | null
  }

  export type WrongQuestionBookMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    questionId: string | null
    wrongCount: number | null
  }

  export type WrongQuestionBookCountAggregateOutputType = {
    id: number
    userId: number
    questionId: number
    wrongCount: number
    _all: number
  }


  export type WrongQuestionBookAvgAggregateInputType = {
    wrongCount?: true
  }

  export type WrongQuestionBookSumAggregateInputType = {
    wrongCount?: true
  }

  export type WrongQuestionBookMinAggregateInputType = {
    id?: true
    userId?: true
    questionId?: true
    wrongCount?: true
  }

  export type WrongQuestionBookMaxAggregateInputType = {
    id?: true
    userId?: true
    questionId?: true
    wrongCount?: true
  }

  export type WrongQuestionBookCountAggregateInputType = {
    id?: true
    userId?: true
    questionId?: true
    wrongCount?: true
    _all?: true
  }

  export type WrongQuestionBookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WrongQuestionBook to aggregate.
     */
    where?: WrongQuestionBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WrongQuestionBooks to fetch.
     */
    orderBy?: WrongQuestionBookOrderByWithRelationInput | WrongQuestionBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WrongQuestionBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WrongQuestionBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WrongQuestionBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WrongQuestionBooks
    **/
    _count?: true | WrongQuestionBookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WrongQuestionBookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WrongQuestionBookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WrongQuestionBookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WrongQuestionBookMaxAggregateInputType
  }

  export type GetWrongQuestionBookAggregateType<T extends WrongQuestionBookAggregateArgs> = {
        [P in keyof T & keyof AggregateWrongQuestionBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWrongQuestionBook[P]>
      : GetScalarType<T[P], AggregateWrongQuestionBook[P]>
  }




  export type WrongQuestionBookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WrongQuestionBookWhereInput
    orderBy?: WrongQuestionBookOrderByWithAggregationInput | WrongQuestionBookOrderByWithAggregationInput[]
    by: WrongQuestionBookScalarFieldEnum[] | WrongQuestionBookScalarFieldEnum
    having?: WrongQuestionBookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WrongQuestionBookCountAggregateInputType | true
    _avg?: WrongQuestionBookAvgAggregateInputType
    _sum?: WrongQuestionBookSumAggregateInputType
    _min?: WrongQuestionBookMinAggregateInputType
    _max?: WrongQuestionBookMaxAggregateInputType
  }

  export type WrongQuestionBookGroupByOutputType = {
    id: string
    userId: string
    questionId: string
    wrongCount: number
    _count: WrongQuestionBookCountAggregateOutputType | null
    _avg: WrongQuestionBookAvgAggregateOutputType | null
    _sum: WrongQuestionBookSumAggregateOutputType | null
    _min: WrongQuestionBookMinAggregateOutputType | null
    _max: WrongQuestionBookMaxAggregateOutputType | null
  }

  type GetWrongQuestionBookGroupByPayload<T extends WrongQuestionBookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WrongQuestionBookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WrongQuestionBookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WrongQuestionBookGroupByOutputType[P]>
            : GetScalarType<T[P], WrongQuestionBookGroupByOutputType[P]>
        }
      >
    >


  export type WrongQuestionBookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questionId?: boolean
    wrongCount?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wrongQuestionBook"]>

  export type WrongQuestionBookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questionId?: boolean
    wrongCount?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wrongQuestionBook"]>

  export type WrongQuestionBookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    questionId?: boolean
    wrongCount?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wrongQuestionBook"]>

  export type WrongQuestionBookSelectScalar = {
    id?: boolean
    userId?: boolean
    questionId?: boolean
    wrongCount?: boolean
  }

  export type WrongQuestionBookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "questionId" | "wrongCount", ExtArgs["result"]["wrongQuestionBook"]>
  export type WrongQuestionBookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type WrongQuestionBookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type WrongQuestionBookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $WrongQuestionBookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WrongQuestionBook"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      questionId: string
      wrongCount: number
    }, ExtArgs["result"]["wrongQuestionBook"]>
    composites: {}
  }

  type WrongQuestionBookGetPayload<S extends boolean | null | undefined | WrongQuestionBookDefaultArgs> = $Result.GetResult<Prisma.$WrongQuestionBookPayload, S>

  type WrongQuestionBookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WrongQuestionBookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WrongQuestionBookCountAggregateInputType | true
    }

  export interface WrongQuestionBookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WrongQuestionBook'], meta: { name: 'WrongQuestionBook' } }
    /**
     * Find zero or one WrongQuestionBook that matches the filter.
     * @param {WrongQuestionBookFindUniqueArgs} args - Arguments to find a WrongQuestionBook
     * @example
     * // Get one WrongQuestionBook
     * const wrongQuestionBook = await prisma.wrongQuestionBook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WrongQuestionBookFindUniqueArgs>(args: SelectSubset<T, WrongQuestionBookFindUniqueArgs<ExtArgs>>): Prisma__WrongQuestionBookClient<$Result.GetResult<Prisma.$WrongQuestionBookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WrongQuestionBook that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WrongQuestionBookFindUniqueOrThrowArgs} args - Arguments to find a WrongQuestionBook
     * @example
     * // Get one WrongQuestionBook
     * const wrongQuestionBook = await prisma.wrongQuestionBook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WrongQuestionBookFindUniqueOrThrowArgs>(args: SelectSubset<T, WrongQuestionBookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WrongQuestionBookClient<$Result.GetResult<Prisma.$WrongQuestionBookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WrongQuestionBook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WrongQuestionBookFindFirstArgs} args - Arguments to find a WrongQuestionBook
     * @example
     * // Get one WrongQuestionBook
     * const wrongQuestionBook = await prisma.wrongQuestionBook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WrongQuestionBookFindFirstArgs>(args?: SelectSubset<T, WrongQuestionBookFindFirstArgs<ExtArgs>>): Prisma__WrongQuestionBookClient<$Result.GetResult<Prisma.$WrongQuestionBookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WrongQuestionBook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WrongQuestionBookFindFirstOrThrowArgs} args - Arguments to find a WrongQuestionBook
     * @example
     * // Get one WrongQuestionBook
     * const wrongQuestionBook = await prisma.wrongQuestionBook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WrongQuestionBookFindFirstOrThrowArgs>(args?: SelectSubset<T, WrongQuestionBookFindFirstOrThrowArgs<ExtArgs>>): Prisma__WrongQuestionBookClient<$Result.GetResult<Prisma.$WrongQuestionBookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WrongQuestionBooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WrongQuestionBookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WrongQuestionBooks
     * const wrongQuestionBooks = await prisma.wrongQuestionBook.findMany()
     * 
     * // Get first 10 WrongQuestionBooks
     * const wrongQuestionBooks = await prisma.wrongQuestionBook.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wrongQuestionBookWithIdOnly = await prisma.wrongQuestionBook.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WrongQuestionBookFindManyArgs>(args?: SelectSubset<T, WrongQuestionBookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WrongQuestionBookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WrongQuestionBook.
     * @param {WrongQuestionBookCreateArgs} args - Arguments to create a WrongQuestionBook.
     * @example
     * // Create one WrongQuestionBook
     * const WrongQuestionBook = await prisma.wrongQuestionBook.create({
     *   data: {
     *     // ... data to create a WrongQuestionBook
     *   }
     * })
     * 
     */
    create<T extends WrongQuestionBookCreateArgs>(args: SelectSubset<T, WrongQuestionBookCreateArgs<ExtArgs>>): Prisma__WrongQuestionBookClient<$Result.GetResult<Prisma.$WrongQuestionBookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WrongQuestionBooks.
     * @param {WrongQuestionBookCreateManyArgs} args - Arguments to create many WrongQuestionBooks.
     * @example
     * // Create many WrongQuestionBooks
     * const wrongQuestionBook = await prisma.wrongQuestionBook.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WrongQuestionBookCreateManyArgs>(args?: SelectSubset<T, WrongQuestionBookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WrongQuestionBooks and returns the data saved in the database.
     * @param {WrongQuestionBookCreateManyAndReturnArgs} args - Arguments to create many WrongQuestionBooks.
     * @example
     * // Create many WrongQuestionBooks
     * const wrongQuestionBook = await prisma.wrongQuestionBook.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WrongQuestionBooks and only return the `id`
     * const wrongQuestionBookWithIdOnly = await prisma.wrongQuestionBook.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WrongQuestionBookCreateManyAndReturnArgs>(args?: SelectSubset<T, WrongQuestionBookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WrongQuestionBookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WrongQuestionBook.
     * @param {WrongQuestionBookDeleteArgs} args - Arguments to delete one WrongQuestionBook.
     * @example
     * // Delete one WrongQuestionBook
     * const WrongQuestionBook = await prisma.wrongQuestionBook.delete({
     *   where: {
     *     // ... filter to delete one WrongQuestionBook
     *   }
     * })
     * 
     */
    delete<T extends WrongQuestionBookDeleteArgs>(args: SelectSubset<T, WrongQuestionBookDeleteArgs<ExtArgs>>): Prisma__WrongQuestionBookClient<$Result.GetResult<Prisma.$WrongQuestionBookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WrongQuestionBook.
     * @param {WrongQuestionBookUpdateArgs} args - Arguments to update one WrongQuestionBook.
     * @example
     * // Update one WrongQuestionBook
     * const wrongQuestionBook = await prisma.wrongQuestionBook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WrongQuestionBookUpdateArgs>(args: SelectSubset<T, WrongQuestionBookUpdateArgs<ExtArgs>>): Prisma__WrongQuestionBookClient<$Result.GetResult<Prisma.$WrongQuestionBookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WrongQuestionBooks.
     * @param {WrongQuestionBookDeleteManyArgs} args - Arguments to filter WrongQuestionBooks to delete.
     * @example
     * // Delete a few WrongQuestionBooks
     * const { count } = await prisma.wrongQuestionBook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WrongQuestionBookDeleteManyArgs>(args?: SelectSubset<T, WrongQuestionBookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WrongQuestionBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WrongQuestionBookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WrongQuestionBooks
     * const wrongQuestionBook = await prisma.wrongQuestionBook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WrongQuestionBookUpdateManyArgs>(args: SelectSubset<T, WrongQuestionBookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WrongQuestionBooks and returns the data updated in the database.
     * @param {WrongQuestionBookUpdateManyAndReturnArgs} args - Arguments to update many WrongQuestionBooks.
     * @example
     * // Update many WrongQuestionBooks
     * const wrongQuestionBook = await prisma.wrongQuestionBook.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WrongQuestionBooks and only return the `id`
     * const wrongQuestionBookWithIdOnly = await prisma.wrongQuestionBook.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WrongQuestionBookUpdateManyAndReturnArgs>(args: SelectSubset<T, WrongQuestionBookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WrongQuestionBookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WrongQuestionBook.
     * @param {WrongQuestionBookUpsertArgs} args - Arguments to update or create a WrongQuestionBook.
     * @example
     * // Update or create a WrongQuestionBook
     * const wrongQuestionBook = await prisma.wrongQuestionBook.upsert({
     *   create: {
     *     // ... data to create a WrongQuestionBook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WrongQuestionBook we want to update
     *   }
     * })
     */
    upsert<T extends WrongQuestionBookUpsertArgs>(args: SelectSubset<T, WrongQuestionBookUpsertArgs<ExtArgs>>): Prisma__WrongQuestionBookClient<$Result.GetResult<Prisma.$WrongQuestionBookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WrongQuestionBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WrongQuestionBookCountArgs} args - Arguments to filter WrongQuestionBooks to count.
     * @example
     * // Count the number of WrongQuestionBooks
     * const count = await prisma.wrongQuestionBook.count({
     *   where: {
     *     // ... the filter for the WrongQuestionBooks we want to count
     *   }
     * })
    **/
    count<T extends WrongQuestionBookCountArgs>(
      args?: Subset<T, WrongQuestionBookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WrongQuestionBookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WrongQuestionBook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WrongQuestionBookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WrongQuestionBookAggregateArgs>(args: Subset<T, WrongQuestionBookAggregateArgs>): Prisma.PrismaPromise<GetWrongQuestionBookAggregateType<T>>

    /**
     * Group by WrongQuestionBook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WrongQuestionBookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WrongQuestionBookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WrongQuestionBookGroupByArgs['orderBy'] }
        : { orderBy?: WrongQuestionBookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WrongQuestionBookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWrongQuestionBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WrongQuestionBook model
   */
  readonly fields: WrongQuestionBookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WrongQuestionBook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WrongQuestionBookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WrongQuestionBook model
   */
  interface WrongQuestionBookFieldRefs {
    readonly id: FieldRef<"WrongQuestionBook", 'String'>
    readonly userId: FieldRef<"WrongQuestionBook", 'String'>
    readonly questionId: FieldRef<"WrongQuestionBook", 'String'>
    readonly wrongCount: FieldRef<"WrongQuestionBook", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WrongQuestionBook findUnique
   */
  export type WrongQuestionBookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrongQuestionBook
     */
    select?: WrongQuestionBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WrongQuestionBook
     */
    omit?: WrongQuestionBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrongQuestionBookInclude<ExtArgs> | null
    /**
     * Filter, which WrongQuestionBook to fetch.
     */
    where: WrongQuestionBookWhereUniqueInput
  }

  /**
   * WrongQuestionBook findUniqueOrThrow
   */
  export type WrongQuestionBookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrongQuestionBook
     */
    select?: WrongQuestionBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WrongQuestionBook
     */
    omit?: WrongQuestionBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrongQuestionBookInclude<ExtArgs> | null
    /**
     * Filter, which WrongQuestionBook to fetch.
     */
    where: WrongQuestionBookWhereUniqueInput
  }

  /**
   * WrongQuestionBook findFirst
   */
  export type WrongQuestionBookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrongQuestionBook
     */
    select?: WrongQuestionBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WrongQuestionBook
     */
    omit?: WrongQuestionBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrongQuestionBookInclude<ExtArgs> | null
    /**
     * Filter, which WrongQuestionBook to fetch.
     */
    where?: WrongQuestionBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WrongQuestionBooks to fetch.
     */
    orderBy?: WrongQuestionBookOrderByWithRelationInput | WrongQuestionBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WrongQuestionBooks.
     */
    cursor?: WrongQuestionBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WrongQuestionBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WrongQuestionBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WrongQuestionBooks.
     */
    distinct?: WrongQuestionBookScalarFieldEnum | WrongQuestionBookScalarFieldEnum[]
  }

  /**
   * WrongQuestionBook findFirstOrThrow
   */
  export type WrongQuestionBookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrongQuestionBook
     */
    select?: WrongQuestionBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WrongQuestionBook
     */
    omit?: WrongQuestionBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrongQuestionBookInclude<ExtArgs> | null
    /**
     * Filter, which WrongQuestionBook to fetch.
     */
    where?: WrongQuestionBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WrongQuestionBooks to fetch.
     */
    orderBy?: WrongQuestionBookOrderByWithRelationInput | WrongQuestionBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WrongQuestionBooks.
     */
    cursor?: WrongQuestionBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WrongQuestionBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WrongQuestionBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WrongQuestionBooks.
     */
    distinct?: WrongQuestionBookScalarFieldEnum | WrongQuestionBookScalarFieldEnum[]
  }

  /**
   * WrongQuestionBook findMany
   */
  export type WrongQuestionBookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrongQuestionBook
     */
    select?: WrongQuestionBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WrongQuestionBook
     */
    omit?: WrongQuestionBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrongQuestionBookInclude<ExtArgs> | null
    /**
     * Filter, which WrongQuestionBooks to fetch.
     */
    where?: WrongQuestionBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WrongQuestionBooks to fetch.
     */
    orderBy?: WrongQuestionBookOrderByWithRelationInput | WrongQuestionBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WrongQuestionBooks.
     */
    cursor?: WrongQuestionBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WrongQuestionBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WrongQuestionBooks.
     */
    skip?: number
    distinct?: WrongQuestionBookScalarFieldEnum | WrongQuestionBookScalarFieldEnum[]
  }

  /**
   * WrongQuestionBook create
   */
  export type WrongQuestionBookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrongQuestionBook
     */
    select?: WrongQuestionBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WrongQuestionBook
     */
    omit?: WrongQuestionBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrongQuestionBookInclude<ExtArgs> | null
    /**
     * The data needed to create a WrongQuestionBook.
     */
    data: XOR<WrongQuestionBookCreateInput, WrongQuestionBookUncheckedCreateInput>
  }

  /**
   * WrongQuestionBook createMany
   */
  export type WrongQuestionBookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WrongQuestionBooks.
     */
    data: WrongQuestionBookCreateManyInput | WrongQuestionBookCreateManyInput[]
  }

  /**
   * WrongQuestionBook createManyAndReturn
   */
  export type WrongQuestionBookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrongQuestionBook
     */
    select?: WrongQuestionBookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WrongQuestionBook
     */
    omit?: WrongQuestionBookOmit<ExtArgs> | null
    /**
     * The data used to create many WrongQuestionBooks.
     */
    data: WrongQuestionBookCreateManyInput | WrongQuestionBookCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrongQuestionBookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WrongQuestionBook update
   */
  export type WrongQuestionBookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrongQuestionBook
     */
    select?: WrongQuestionBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WrongQuestionBook
     */
    omit?: WrongQuestionBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrongQuestionBookInclude<ExtArgs> | null
    /**
     * The data needed to update a WrongQuestionBook.
     */
    data: XOR<WrongQuestionBookUpdateInput, WrongQuestionBookUncheckedUpdateInput>
    /**
     * Choose, which WrongQuestionBook to update.
     */
    where: WrongQuestionBookWhereUniqueInput
  }

  /**
   * WrongQuestionBook updateMany
   */
  export type WrongQuestionBookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WrongQuestionBooks.
     */
    data: XOR<WrongQuestionBookUpdateManyMutationInput, WrongQuestionBookUncheckedUpdateManyInput>
    /**
     * Filter which WrongQuestionBooks to update
     */
    where?: WrongQuestionBookWhereInput
    /**
     * Limit how many WrongQuestionBooks to update.
     */
    limit?: number
  }

  /**
   * WrongQuestionBook updateManyAndReturn
   */
  export type WrongQuestionBookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrongQuestionBook
     */
    select?: WrongQuestionBookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WrongQuestionBook
     */
    omit?: WrongQuestionBookOmit<ExtArgs> | null
    /**
     * The data used to update WrongQuestionBooks.
     */
    data: XOR<WrongQuestionBookUpdateManyMutationInput, WrongQuestionBookUncheckedUpdateManyInput>
    /**
     * Filter which WrongQuestionBooks to update
     */
    where?: WrongQuestionBookWhereInput
    /**
     * Limit how many WrongQuestionBooks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrongQuestionBookIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WrongQuestionBook upsert
   */
  export type WrongQuestionBookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrongQuestionBook
     */
    select?: WrongQuestionBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WrongQuestionBook
     */
    omit?: WrongQuestionBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrongQuestionBookInclude<ExtArgs> | null
    /**
     * The filter to search for the WrongQuestionBook to update in case it exists.
     */
    where: WrongQuestionBookWhereUniqueInput
    /**
     * In case the WrongQuestionBook found by the `where` argument doesn't exist, create a new WrongQuestionBook with this data.
     */
    create: XOR<WrongQuestionBookCreateInput, WrongQuestionBookUncheckedCreateInput>
    /**
     * In case the WrongQuestionBook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WrongQuestionBookUpdateInput, WrongQuestionBookUncheckedUpdateInput>
  }

  /**
   * WrongQuestionBook delete
   */
  export type WrongQuestionBookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrongQuestionBook
     */
    select?: WrongQuestionBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WrongQuestionBook
     */
    omit?: WrongQuestionBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrongQuestionBookInclude<ExtArgs> | null
    /**
     * Filter which WrongQuestionBook to delete.
     */
    where: WrongQuestionBookWhereUniqueInput
  }

  /**
   * WrongQuestionBook deleteMany
   */
  export type WrongQuestionBookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WrongQuestionBooks to delete
     */
    where?: WrongQuestionBookWhereInput
    /**
     * Limit how many WrongQuestionBooks to delete.
     */
    limit?: number
  }

  /**
   * WrongQuestionBook without action
   */
  export type WrongQuestionBookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrongQuestionBook
     */
    select?: WrongQuestionBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WrongQuestionBook
     */
    omit?: WrongQuestionBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrongQuestionBookInclude<ExtArgs> | null
  }


  /**
   * Model TestReport
   */

  export type AggregateTestReport = {
    _count: TestReportCountAggregateOutputType | null
    _avg: TestReportAvgAggregateOutputType | null
    _sum: TestReportSumAggregateOutputType | null
    _min: TestReportMinAggregateOutputType | null
    _max: TestReportMaxAggregateOutputType | null
  }

  export type TestReportAvgAggregateOutputType = {
    score: number | null
  }

  export type TestReportSumAggregateOutputType = {
    score: number | null
  }

  export type TestReportMinAggregateOutputType = {
    id: string | null
    userId: string | null
    module: $Enums.TestModule | null
    score: number | null
    aiAnalysis: string | null
    createdAt: Date | null
  }

  export type TestReportMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    module: $Enums.TestModule | null
    score: number | null
    aiAnalysis: string | null
    createdAt: Date | null
  }

  export type TestReportCountAggregateOutputType = {
    id: number
    userId: number
    module: number
    score: number
    aiAnalysis: number
    createdAt: number
    _all: number
  }


  export type TestReportAvgAggregateInputType = {
    score?: true
  }

  export type TestReportSumAggregateInputType = {
    score?: true
  }

  export type TestReportMinAggregateInputType = {
    id?: true
    userId?: true
    module?: true
    score?: true
    aiAnalysis?: true
    createdAt?: true
  }

  export type TestReportMaxAggregateInputType = {
    id?: true
    userId?: true
    module?: true
    score?: true
    aiAnalysis?: true
    createdAt?: true
  }

  export type TestReportCountAggregateInputType = {
    id?: true
    userId?: true
    module?: true
    score?: true
    aiAnalysis?: true
    createdAt?: true
    _all?: true
  }

  export type TestReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestReport to aggregate.
     */
    where?: TestReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestReports to fetch.
     */
    orderBy?: TestReportOrderByWithRelationInput | TestReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestReports
    **/
    _count?: true | TestReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestReportMaxAggregateInputType
  }

  export type GetTestReportAggregateType<T extends TestReportAggregateArgs> = {
        [P in keyof T & keyof AggregateTestReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestReport[P]>
      : GetScalarType<T[P], AggregateTestReport[P]>
  }




  export type TestReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestReportWhereInput
    orderBy?: TestReportOrderByWithAggregationInput | TestReportOrderByWithAggregationInput[]
    by: TestReportScalarFieldEnum[] | TestReportScalarFieldEnum
    having?: TestReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestReportCountAggregateInputType | true
    _avg?: TestReportAvgAggregateInputType
    _sum?: TestReportSumAggregateInputType
    _min?: TestReportMinAggregateInputType
    _max?: TestReportMaxAggregateInputType
  }

  export type TestReportGroupByOutputType = {
    id: string
    userId: string
    module: $Enums.TestModule
    score: number
    aiAnalysis: string
    createdAt: Date
    _count: TestReportCountAggregateOutputType | null
    _avg: TestReportAvgAggregateOutputType | null
    _sum: TestReportSumAggregateOutputType | null
    _min: TestReportMinAggregateOutputType | null
    _max: TestReportMaxAggregateOutputType | null
  }

  type GetTestReportGroupByPayload<T extends TestReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestReportGroupByOutputType[P]>
            : GetScalarType<T[P], TestReportGroupByOutputType[P]>
        }
      >
    >


  export type TestReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    module?: boolean
    score?: boolean
    aiAnalysis?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testReport"]>

  export type TestReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    module?: boolean
    score?: boolean
    aiAnalysis?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testReport"]>

  export type TestReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    module?: boolean
    score?: boolean
    aiAnalysis?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testReport"]>

  export type TestReportSelectScalar = {
    id?: boolean
    userId?: boolean
    module?: boolean
    score?: boolean
    aiAnalysis?: boolean
    createdAt?: boolean
  }

  export type TestReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "module" | "score" | "aiAnalysis" | "createdAt", ExtArgs["result"]["testReport"]>
  export type TestReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TestReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TestReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TestReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestReport"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      module: $Enums.TestModule
      score: number
      aiAnalysis: string
      createdAt: Date
    }, ExtArgs["result"]["testReport"]>
    composites: {}
  }

  type TestReportGetPayload<S extends boolean | null | undefined | TestReportDefaultArgs> = $Result.GetResult<Prisma.$TestReportPayload, S>

  type TestReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestReportCountAggregateInputType | true
    }

  export interface TestReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestReport'], meta: { name: 'TestReport' } }
    /**
     * Find zero or one TestReport that matches the filter.
     * @param {TestReportFindUniqueArgs} args - Arguments to find a TestReport
     * @example
     * // Get one TestReport
     * const testReport = await prisma.testReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestReportFindUniqueArgs>(args: SelectSubset<T, TestReportFindUniqueArgs<ExtArgs>>): Prisma__TestReportClient<$Result.GetResult<Prisma.$TestReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestReportFindUniqueOrThrowArgs} args - Arguments to find a TestReport
     * @example
     * // Get one TestReport
     * const testReport = await prisma.testReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestReportFindUniqueOrThrowArgs>(args: SelectSubset<T, TestReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestReportClient<$Result.GetResult<Prisma.$TestReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestReportFindFirstArgs} args - Arguments to find a TestReport
     * @example
     * // Get one TestReport
     * const testReport = await prisma.testReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestReportFindFirstArgs>(args?: SelectSubset<T, TestReportFindFirstArgs<ExtArgs>>): Prisma__TestReportClient<$Result.GetResult<Prisma.$TestReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestReportFindFirstOrThrowArgs} args - Arguments to find a TestReport
     * @example
     * // Get one TestReport
     * const testReport = await prisma.testReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestReportFindFirstOrThrowArgs>(args?: SelectSubset<T, TestReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestReportClient<$Result.GetResult<Prisma.$TestReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestReports
     * const testReports = await prisma.testReport.findMany()
     * 
     * // Get first 10 TestReports
     * const testReports = await prisma.testReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testReportWithIdOnly = await prisma.testReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestReportFindManyArgs>(args?: SelectSubset<T, TestReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestReport.
     * @param {TestReportCreateArgs} args - Arguments to create a TestReport.
     * @example
     * // Create one TestReport
     * const TestReport = await prisma.testReport.create({
     *   data: {
     *     // ... data to create a TestReport
     *   }
     * })
     * 
     */
    create<T extends TestReportCreateArgs>(args: SelectSubset<T, TestReportCreateArgs<ExtArgs>>): Prisma__TestReportClient<$Result.GetResult<Prisma.$TestReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestReports.
     * @param {TestReportCreateManyArgs} args - Arguments to create many TestReports.
     * @example
     * // Create many TestReports
     * const testReport = await prisma.testReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestReportCreateManyArgs>(args?: SelectSubset<T, TestReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestReports and returns the data saved in the database.
     * @param {TestReportCreateManyAndReturnArgs} args - Arguments to create many TestReports.
     * @example
     * // Create many TestReports
     * const testReport = await prisma.testReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestReports and only return the `id`
     * const testReportWithIdOnly = await prisma.testReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestReportCreateManyAndReturnArgs>(args?: SelectSubset<T, TestReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TestReport.
     * @param {TestReportDeleteArgs} args - Arguments to delete one TestReport.
     * @example
     * // Delete one TestReport
     * const TestReport = await prisma.testReport.delete({
     *   where: {
     *     // ... filter to delete one TestReport
     *   }
     * })
     * 
     */
    delete<T extends TestReportDeleteArgs>(args: SelectSubset<T, TestReportDeleteArgs<ExtArgs>>): Prisma__TestReportClient<$Result.GetResult<Prisma.$TestReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestReport.
     * @param {TestReportUpdateArgs} args - Arguments to update one TestReport.
     * @example
     * // Update one TestReport
     * const testReport = await prisma.testReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestReportUpdateArgs>(args: SelectSubset<T, TestReportUpdateArgs<ExtArgs>>): Prisma__TestReportClient<$Result.GetResult<Prisma.$TestReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestReports.
     * @param {TestReportDeleteManyArgs} args - Arguments to filter TestReports to delete.
     * @example
     * // Delete a few TestReports
     * const { count } = await prisma.testReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestReportDeleteManyArgs>(args?: SelectSubset<T, TestReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestReports
     * const testReport = await prisma.testReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestReportUpdateManyArgs>(args: SelectSubset<T, TestReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestReports and returns the data updated in the database.
     * @param {TestReportUpdateManyAndReturnArgs} args - Arguments to update many TestReports.
     * @example
     * // Update many TestReports
     * const testReport = await prisma.testReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TestReports and only return the `id`
     * const testReportWithIdOnly = await prisma.testReport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestReportUpdateManyAndReturnArgs>(args: SelectSubset<T, TestReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TestReport.
     * @param {TestReportUpsertArgs} args - Arguments to update or create a TestReport.
     * @example
     * // Update or create a TestReport
     * const testReport = await prisma.testReport.upsert({
     *   create: {
     *     // ... data to create a TestReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestReport we want to update
     *   }
     * })
     */
    upsert<T extends TestReportUpsertArgs>(args: SelectSubset<T, TestReportUpsertArgs<ExtArgs>>): Prisma__TestReportClient<$Result.GetResult<Prisma.$TestReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestReportCountArgs} args - Arguments to filter TestReports to count.
     * @example
     * // Count the number of TestReports
     * const count = await prisma.testReport.count({
     *   where: {
     *     // ... the filter for the TestReports we want to count
     *   }
     * })
    **/
    count<T extends TestReportCountArgs>(
      args?: Subset<T, TestReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestReportAggregateArgs>(args: Subset<T, TestReportAggregateArgs>): Prisma.PrismaPromise<GetTestReportAggregateType<T>>

    /**
     * Group by TestReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestReportGroupByArgs['orderBy'] }
        : { orderBy?: TestReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestReport model
   */
  readonly fields: TestReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TestReport model
   */
  interface TestReportFieldRefs {
    readonly id: FieldRef<"TestReport", 'String'>
    readonly userId: FieldRef<"TestReport", 'String'>
    readonly module: FieldRef<"TestReport", 'TestModule'>
    readonly score: FieldRef<"TestReport", 'Int'>
    readonly aiAnalysis: FieldRef<"TestReport", 'String'>
    readonly createdAt: FieldRef<"TestReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TestReport findUnique
   */
  export type TestReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestReport
     */
    select?: TestReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestReport
     */
    omit?: TestReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestReportInclude<ExtArgs> | null
    /**
     * Filter, which TestReport to fetch.
     */
    where: TestReportWhereUniqueInput
  }

  /**
   * TestReport findUniqueOrThrow
   */
  export type TestReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestReport
     */
    select?: TestReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestReport
     */
    omit?: TestReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestReportInclude<ExtArgs> | null
    /**
     * Filter, which TestReport to fetch.
     */
    where: TestReportWhereUniqueInput
  }

  /**
   * TestReport findFirst
   */
  export type TestReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestReport
     */
    select?: TestReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestReport
     */
    omit?: TestReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestReportInclude<ExtArgs> | null
    /**
     * Filter, which TestReport to fetch.
     */
    where?: TestReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestReports to fetch.
     */
    orderBy?: TestReportOrderByWithRelationInput | TestReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestReports.
     */
    cursor?: TestReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestReports.
     */
    distinct?: TestReportScalarFieldEnum | TestReportScalarFieldEnum[]
  }

  /**
   * TestReport findFirstOrThrow
   */
  export type TestReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestReport
     */
    select?: TestReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestReport
     */
    omit?: TestReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestReportInclude<ExtArgs> | null
    /**
     * Filter, which TestReport to fetch.
     */
    where?: TestReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestReports to fetch.
     */
    orderBy?: TestReportOrderByWithRelationInput | TestReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestReports.
     */
    cursor?: TestReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestReports.
     */
    distinct?: TestReportScalarFieldEnum | TestReportScalarFieldEnum[]
  }

  /**
   * TestReport findMany
   */
  export type TestReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestReport
     */
    select?: TestReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestReport
     */
    omit?: TestReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestReportInclude<ExtArgs> | null
    /**
     * Filter, which TestReports to fetch.
     */
    where?: TestReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestReports to fetch.
     */
    orderBy?: TestReportOrderByWithRelationInput | TestReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestReports.
     */
    cursor?: TestReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestReports.
     */
    skip?: number
    distinct?: TestReportScalarFieldEnum | TestReportScalarFieldEnum[]
  }

  /**
   * TestReport create
   */
  export type TestReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestReport
     */
    select?: TestReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestReport
     */
    omit?: TestReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestReportInclude<ExtArgs> | null
    /**
     * The data needed to create a TestReport.
     */
    data: XOR<TestReportCreateInput, TestReportUncheckedCreateInput>
  }

  /**
   * TestReport createMany
   */
  export type TestReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestReports.
     */
    data: TestReportCreateManyInput | TestReportCreateManyInput[]
  }

  /**
   * TestReport createManyAndReturn
   */
  export type TestReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestReport
     */
    select?: TestReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestReport
     */
    omit?: TestReportOmit<ExtArgs> | null
    /**
     * The data used to create many TestReports.
     */
    data: TestReportCreateManyInput | TestReportCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestReport update
   */
  export type TestReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestReport
     */
    select?: TestReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestReport
     */
    omit?: TestReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestReportInclude<ExtArgs> | null
    /**
     * The data needed to update a TestReport.
     */
    data: XOR<TestReportUpdateInput, TestReportUncheckedUpdateInput>
    /**
     * Choose, which TestReport to update.
     */
    where: TestReportWhereUniqueInput
  }

  /**
   * TestReport updateMany
   */
  export type TestReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestReports.
     */
    data: XOR<TestReportUpdateManyMutationInput, TestReportUncheckedUpdateManyInput>
    /**
     * Filter which TestReports to update
     */
    where?: TestReportWhereInput
    /**
     * Limit how many TestReports to update.
     */
    limit?: number
  }

  /**
   * TestReport updateManyAndReturn
   */
  export type TestReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestReport
     */
    select?: TestReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestReport
     */
    omit?: TestReportOmit<ExtArgs> | null
    /**
     * The data used to update TestReports.
     */
    data: XOR<TestReportUpdateManyMutationInput, TestReportUncheckedUpdateManyInput>
    /**
     * Filter which TestReports to update
     */
    where?: TestReportWhereInput
    /**
     * Limit how many TestReports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestReport upsert
   */
  export type TestReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestReport
     */
    select?: TestReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestReport
     */
    omit?: TestReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestReportInclude<ExtArgs> | null
    /**
     * The filter to search for the TestReport to update in case it exists.
     */
    where: TestReportWhereUniqueInput
    /**
     * In case the TestReport found by the `where` argument doesn't exist, create a new TestReport with this data.
     */
    create: XOR<TestReportCreateInput, TestReportUncheckedCreateInput>
    /**
     * In case the TestReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestReportUpdateInput, TestReportUncheckedUpdateInput>
  }

  /**
   * TestReport delete
   */
  export type TestReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestReport
     */
    select?: TestReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestReport
     */
    omit?: TestReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestReportInclude<ExtArgs> | null
    /**
     * Filter which TestReport to delete.
     */
    where: TestReportWhereUniqueInput
  }

  /**
   * TestReport deleteMany
   */
  export type TestReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestReports to delete
     */
    where?: TestReportWhereInput
    /**
     * Limit how many TestReports to delete.
     */
    limit?: number
  }

  /**
   * TestReport without action
   */
  export type TestReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestReport
     */
    select?: TestReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestReport
     */
    omit?: TestReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestReportInclude<ExtArgs> | null
  }


  /**
   * Model ChatHistory
   */

  export type AggregateChatHistory = {
    _count: ChatHistoryCountAggregateOutputType | null
    _min: ChatHistoryMinAggregateOutputType | null
    _max: ChatHistoryMaxAggregateOutputType | null
  }

  export type ChatHistoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    role: $Enums.ChatMessageRole | null
    content: string | null
    timestamp: Date | null
  }

  export type ChatHistoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    role: $Enums.ChatMessageRole | null
    content: string | null
    timestamp: Date | null
  }

  export type ChatHistoryCountAggregateOutputType = {
    id: number
    userId: number
    role: number
    content: number
    timestamp: number
    _all: number
  }


  export type ChatHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    role?: true
    content?: true
    timestamp?: true
  }

  export type ChatHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    role?: true
    content?: true
    timestamp?: true
  }

  export type ChatHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    role?: true
    content?: true
    timestamp?: true
    _all?: true
  }

  export type ChatHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatHistory to aggregate.
     */
    where?: ChatHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatHistories to fetch.
     */
    orderBy?: ChatHistoryOrderByWithRelationInput | ChatHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatHistories
    **/
    _count?: true | ChatHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatHistoryMaxAggregateInputType
  }

  export type GetChatHistoryAggregateType<T extends ChatHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateChatHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatHistory[P]>
      : GetScalarType<T[P], AggregateChatHistory[P]>
  }




  export type ChatHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatHistoryWhereInput
    orderBy?: ChatHistoryOrderByWithAggregationInput | ChatHistoryOrderByWithAggregationInput[]
    by: ChatHistoryScalarFieldEnum[] | ChatHistoryScalarFieldEnum
    having?: ChatHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatHistoryCountAggregateInputType | true
    _min?: ChatHistoryMinAggregateInputType
    _max?: ChatHistoryMaxAggregateInputType
  }

  export type ChatHistoryGroupByOutputType = {
    id: string
    userId: string
    role: $Enums.ChatMessageRole
    content: string
    timestamp: Date
    _count: ChatHistoryCountAggregateOutputType | null
    _min: ChatHistoryMinAggregateOutputType | null
    _max: ChatHistoryMaxAggregateOutputType | null
  }

  type GetChatHistoryGroupByPayload<T extends ChatHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ChatHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ChatHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    role?: boolean
    content?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatHistory"]>

  export type ChatHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    role?: boolean
    content?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatHistory"]>

  export type ChatHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    role?: boolean
    content?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatHistory"]>

  export type ChatHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    role?: boolean
    content?: boolean
    timestamp?: boolean
  }

  export type ChatHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "role" | "content" | "timestamp", ExtArgs["result"]["chatHistory"]>
  export type ChatHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      role: $Enums.ChatMessageRole
      content: string
      timestamp: Date
    }, ExtArgs["result"]["chatHistory"]>
    composites: {}
  }

  type ChatHistoryGetPayload<S extends boolean | null | undefined | ChatHistoryDefaultArgs> = $Result.GetResult<Prisma.$ChatHistoryPayload, S>

  type ChatHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatHistoryCountAggregateInputType | true
    }

  export interface ChatHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatHistory'], meta: { name: 'ChatHistory' } }
    /**
     * Find zero or one ChatHistory that matches the filter.
     * @param {ChatHistoryFindUniqueArgs} args - Arguments to find a ChatHistory
     * @example
     * // Get one ChatHistory
     * const chatHistory = await prisma.chatHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatHistoryFindUniqueArgs>(args: SelectSubset<T, ChatHistoryFindUniqueArgs<ExtArgs>>): Prisma__ChatHistoryClient<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatHistoryFindUniqueOrThrowArgs} args - Arguments to find a ChatHistory
     * @example
     * // Get one ChatHistory
     * const chatHistory = await prisma.chatHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatHistoryClient<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatHistoryFindFirstArgs} args - Arguments to find a ChatHistory
     * @example
     * // Get one ChatHistory
     * const chatHistory = await prisma.chatHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatHistoryFindFirstArgs>(args?: SelectSubset<T, ChatHistoryFindFirstArgs<ExtArgs>>): Prisma__ChatHistoryClient<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatHistoryFindFirstOrThrowArgs} args - Arguments to find a ChatHistory
     * @example
     * // Get one ChatHistory
     * const chatHistory = await prisma.chatHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatHistoryClient<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatHistories
     * const chatHistories = await prisma.chatHistory.findMany()
     * 
     * // Get first 10 ChatHistories
     * const chatHistories = await prisma.chatHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatHistoryWithIdOnly = await prisma.chatHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatHistoryFindManyArgs>(args?: SelectSubset<T, ChatHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatHistory.
     * @param {ChatHistoryCreateArgs} args - Arguments to create a ChatHistory.
     * @example
     * // Create one ChatHistory
     * const ChatHistory = await prisma.chatHistory.create({
     *   data: {
     *     // ... data to create a ChatHistory
     *   }
     * })
     * 
     */
    create<T extends ChatHistoryCreateArgs>(args: SelectSubset<T, ChatHistoryCreateArgs<ExtArgs>>): Prisma__ChatHistoryClient<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatHistories.
     * @param {ChatHistoryCreateManyArgs} args - Arguments to create many ChatHistories.
     * @example
     * // Create many ChatHistories
     * const chatHistory = await prisma.chatHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatHistoryCreateManyArgs>(args?: SelectSubset<T, ChatHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatHistories and returns the data saved in the database.
     * @param {ChatHistoryCreateManyAndReturnArgs} args - Arguments to create many ChatHistories.
     * @example
     * // Create many ChatHistories
     * const chatHistory = await prisma.chatHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatHistories and only return the `id`
     * const chatHistoryWithIdOnly = await prisma.chatHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatHistory.
     * @param {ChatHistoryDeleteArgs} args - Arguments to delete one ChatHistory.
     * @example
     * // Delete one ChatHistory
     * const ChatHistory = await prisma.chatHistory.delete({
     *   where: {
     *     // ... filter to delete one ChatHistory
     *   }
     * })
     * 
     */
    delete<T extends ChatHistoryDeleteArgs>(args: SelectSubset<T, ChatHistoryDeleteArgs<ExtArgs>>): Prisma__ChatHistoryClient<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatHistory.
     * @param {ChatHistoryUpdateArgs} args - Arguments to update one ChatHistory.
     * @example
     * // Update one ChatHistory
     * const chatHistory = await prisma.chatHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatHistoryUpdateArgs>(args: SelectSubset<T, ChatHistoryUpdateArgs<ExtArgs>>): Prisma__ChatHistoryClient<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatHistories.
     * @param {ChatHistoryDeleteManyArgs} args - Arguments to filter ChatHistories to delete.
     * @example
     * // Delete a few ChatHistories
     * const { count } = await prisma.chatHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatHistoryDeleteManyArgs>(args?: SelectSubset<T, ChatHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatHistories
     * const chatHistory = await prisma.chatHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatHistoryUpdateManyArgs>(args: SelectSubset<T, ChatHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatHistories and returns the data updated in the database.
     * @param {ChatHistoryUpdateManyAndReturnArgs} args - Arguments to update many ChatHistories.
     * @example
     * // Update many ChatHistories
     * const chatHistory = await prisma.chatHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatHistories and only return the `id`
     * const chatHistoryWithIdOnly = await prisma.chatHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatHistory.
     * @param {ChatHistoryUpsertArgs} args - Arguments to update or create a ChatHistory.
     * @example
     * // Update or create a ChatHistory
     * const chatHistory = await prisma.chatHistory.upsert({
     *   create: {
     *     // ... data to create a ChatHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatHistory we want to update
     *   }
     * })
     */
    upsert<T extends ChatHistoryUpsertArgs>(args: SelectSubset<T, ChatHistoryUpsertArgs<ExtArgs>>): Prisma__ChatHistoryClient<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatHistoryCountArgs} args - Arguments to filter ChatHistories to count.
     * @example
     * // Count the number of ChatHistories
     * const count = await prisma.chatHistory.count({
     *   where: {
     *     // ... the filter for the ChatHistories we want to count
     *   }
     * })
    **/
    count<T extends ChatHistoryCountArgs>(
      args?: Subset<T, ChatHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatHistoryAggregateArgs>(args: Subset<T, ChatHistoryAggregateArgs>): Prisma.PrismaPromise<GetChatHistoryAggregateType<T>>

    /**
     * Group by ChatHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ChatHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatHistory model
   */
  readonly fields: ChatHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatHistory model
   */
  interface ChatHistoryFieldRefs {
    readonly id: FieldRef<"ChatHistory", 'String'>
    readonly userId: FieldRef<"ChatHistory", 'String'>
    readonly role: FieldRef<"ChatHistory", 'ChatMessageRole'>
    readonly content: FieldRef<"ChatHistory", 'String'>
    readonly timestamp: FieldRef<"ChatHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatHistory findUnique
   */
  export type ChatHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ChatHistory to fetch.
     */
    where: ChatHistoryWhereUniqueInput
  }

  /**
   * ChatHistory findUniqueOrThrow
   */
  export type ChatHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ChatHistory to fetch.
     */
    where: ChatHistoryWhereUniqueInput
  }

  /**
   * ChatHistory findFirst
   */
  export type ChatHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ChatHistory to fetch.
     */
    where?: ChatHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatHistories to fetch.
     */
    orderBy?: ChatHistoryOrderByWithRelationInput | ChatHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatHistories.
     */
    cursor?: ChatHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatHistories.
     */
    distinct?: ChatHistoryScalarFieldEnum | ChatHistoryScalarFieldEnum[]
  }

  /**
   * ChatHistory findFirstOrThrow
   */
  export type ChatHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ChatHistory to fetch.
     */
    where?: ChatHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatHistories to fetch.
     */
    orderBy?: ChatHistoryOrderByWithRelationInput | ChatHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatHistories.
     */
    cursor?: ChatHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatHistories.
     */
    distinct?: ChatHistoryScalarFieldEnum | ChatHistoryScalarFieldEnum[]
  }

  /**
   * ChatHistory findMany
   */
  export type ChatHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ChatHistories to fetch.
     */
    where?: ChatHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatHistories to fetch.
     */
    orderBy?: ChatHistoryOrderByWithRelationInput | ChatHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatHistories.
     */
    cursor?: ChatHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatHistories.
     */
    skip?: number
    distinct?: ChatHistoryScalarFieldEnum | ChatHistoryScalarFieldEnum[]
  }

  /**
   * ChatHistory create
   */
  export type ChatHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatHistory.
     */
    data: XOR<ChatHistoryCreateInput, ChatHistoryUncheckedCreateInput>
  }

  /**
   * ChatHistory createMany
   */
  export type ChatHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatHistories.
     */
    data: ChatHistoryCreateManyInput | ChatHistoryCreateManyInput[]
  }

  /**
   * ChatHistory createManyAndReturn
   */
  export type ChatHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many ChatHistories.
     */
    data: ChatHistoryCreateManyInput | ChatHistoryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatHistory update
   */
  export type ChatHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatHistory.
     */
    data: XOR<ChatHistoryUpdateInput, ChatHistoryUncheckedUpdateInput>
    /**
     * Choose, which ChatHistory to update.
     */
    where: ChatHistoryWhereUniqueInput
  }

  /**
   * ChatHistory updateMany
   */
  export type ChatHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatHistories.
     */
    data: XOR<ChatHistoryUpdateManyMutationInput, ChatHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ChatHistories to update
     */
    where?: ChatHistoryWhereInput
    /**
     * Limit how many ChatHistories to update.
     */
    limit?: number
  }

  /**
   * ChatHistory updateManyAndReturn
   */
  export type ChatHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * The data used to update ChatHistories.
     */
    data: XOR<ChatHistoryUpdateManyMutationInput, ChatHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ChatHistories to update
     */
    where?: ChatHistoryWhereInput
    /**
     * Limit how many ChatHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatHistory upsert
   */
  export type ChatHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatHistory to update in case it exists.
     */
    where: ChatHistoryWhereUniqueInput
    /**
     * In case the ChatHistory found by the `where` argument doesn't exist, create a new ChatHistory with this data.
     */
    create: XOR<ChatHistoryCreateInput, ChatHistoryUncheckedCreateInput>
    /**
     * In case the ChatHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatHistoryUpdateInput, ChatHistoryUncheckedUpdateInput>
  }

  /**
   * ChatHistory delete
   */
  export type ChatHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryInclude<ExtArgs> | null
    /**
     * Filter which ChatHistory to delete.
     */
    where: ChatHistoryWhereUniqueInput
  }

  /**
   * ChatHistory deleteMany
   */
  export type ChatHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatHistories to delete
     */
    where?: ChatHistoryWhereInput
    /**
     * Limit how many ChatHistories to delete.
     */
    limit?: number
  }

  /**
   * ChatHistory without action
   */
  export type ChatHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryInclude<ExtArgs> | null
  }


  /**
   * Model CurveState
   */

  export type AggregateCurveState = {
    _count: CurveStateCountAggregateOutputType | null
    _min: CurveStateMinAggregateOutputType | null
    _max: CurveStateMaxAggregateOutputType | null
  }

  export type CurveStateMinAggregateOutputType = {
    id: string | null
    stateJson: string | null
    createdAt: Date | null
    ownerUserId: string | null
  }

  export type CurveStateMaxAggregateOutputType = {
    id: string | null
    stateJson: string | null
    createdAt: Date | null
    ownerUserId: string | null
  }

  export type CurveStateCountAggregateOutputType = {
    id: number
    stateJson: number
    createdAt: number
    ownerUserId: number
    _all: number
  }


  export type CurveStateMinAggregateInputType = {
    id?: true
    stateJson?: true
    createdAt?: true
    ownerUserId?: true
  }

  export type CurveStateMaxAggregateInputType = {
    id?: true
    stateJson?: true
    createdAt?: true
    ownerUserId?: true
  }

  export type CurveStateCountAggregateInputType = {
    id?: true
    stateJson?: true
    createdAt?: true
    ownerUserId?: true
    _all?: true
  }

  export type CurveStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CurveState to aggregate.
     */
    where?: CurveStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurveStates to fetch.
     */
    orderBy?: CurveStateOrderByWithRelationInput | CurveStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CurveStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurveStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurveStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CurveStates
    **/
    _count?: true | CurveStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurveStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurveStateMaxAggregateInputType
  }

  export type GetCurveStateAggregateType<T extends CurveStateAggregateArgs> = {
        [P in keyof T & keyof AggregateCurveState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurveState[P]>
      : GetScalarType<T[P], AggregateCurveState[P]>
  }




  export type CurveStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurveStateWhereInput
    orderBy?: CurveStateOrderByWithAggregationInput | CurveStateOrderByWithAggregationInput[]
    by: CurveStateScalarFieldEnum[] | CurveStateScalarFieldEnum
    having?: CurveStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurveStateCountAggregateInputType | true
    _min?: CurveStateMinAggregateInputType
    _max?: CurveStateMaxAggregateInputType
  }

  export type CurveStateGroupByOutputType = {
    id: string
    stateJson: string
    createdAt: Date
    ownerUserId: string | null
    _count: CurveStateCountAggregateOutputType | null
    _min: CurveStateMinAggregateOutputType | null
    _max: CurveStateMaxAggregateOutputType | null
  }

  type GetCurveStateGroupByPayload<T extends CurveStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CurveStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurveStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurveStateGroupByOutputType[P]>
            : GetScalarType<T[P], CurveStateGroupByOutputType[P]>
        }
      >
    >


  export type CurveStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stateJson?: boolean
    createdAt?: boolean
    ownerUserId?: boolean
    owner?: boolean | CurveState$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["curveState"]>

  export type CurveStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stateJson?: boolean
    createdAt?: boolean
    ownerUserId?: boolean
    owner?: boolean | CurveState$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["curveState"]>

  export type CurveStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stateJson?: boolean
    createdAt?: boolean
    ownerUserId?: boolean
    owner?: boolean | CurveState$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["curveState"]>

  export type CurveStateSelectScalar = {
    id?: boolean
    stateJson?: boolean
    createdAt?: boolean
    ownerUserId?: boolean
  }

  export type CurveStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "stateJson" | "createdAt" | "ownerUserId", ExtArgs["result"]["curveState"]>
  export type CurveStateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | CurveState$ownerArgs<ExtArgs>
  }
  export type CurveStateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | CurveState$ownerArgs<ExtArgs>
  }
  export type CurveStateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | CurveState$ownerArgs<ExtArgs>
  }

  export type $CurveStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CurveState"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      stateJson: string
      createdAt: Date
      ownerUserId: string | null
    }, ExtArgs["result"]["curveState"]>
    composites: {}
  }

  type CurveStateGetPayload<S extends boolean | null | undefined | CurveStateDefaultArgs> = $Result.GetResult<Prisma.$CurveStatePayload, S>

  type CurveStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CurveStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CurveStateCountAggregateInputType | true
    }

  export interface CurveStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CurveState'], meta: { name: 'CurveState' } }
    /**
     * Find zero or one CurveState that matches the filter.
     * @param {CurveStateFindUniqueArgs} args - Arguments to find a CurveState
     * @example
     * // Get one CurveState
     * const curveState = await prisma.curveState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CurveStateFindUniqueArgs>(args: SelectSubset<T, CurveStateFindUniqueArgs<ExtArgs>>): Prisma__CurveStateClient<$Result.GetResult<Prisma.$CurveStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CurveState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CurveStateFindUniqueOrThrowArgs} args - Arguments to find a CurveState
     * @example
     * // Get one CurveState
     * const curveState = await prisma.curveState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CurveStateFindUniqueOrThrowArgs>(args: SelectSubset<T, CurveStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CurveStateClient<$Result.GetResult<Prisma.$CurveStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CurveState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurveStateFindFirstArgs} args - Arguments to find a CurveState
     * @example
     * // Get one CurveState
     * const curveState = await prisma.curveState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CurveStateFindFirstArgs>(args?: SelectSubset<T, CurveStateFindFirstArgs<ExtArgs>>): Prisma__CurveStateClient<$Result.GetResult<Prisma.$CurveStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CurveState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurveStateFindFirstOrThrowArgs} args - Arguments to find a CurveState
     * @example
     * // Get one CurveState
     * const curveState = await prisma.curveState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CurveStateFindFirstOrThrowArgs>(args?: SelectSubset<T, CurveStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CurveStateClient<$Result.GetResult<Prisma.$CurveStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CurveStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurveStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CurveStates
     * const curveStates = await prisma.curveState.findMany()
     * 
     * // Get first 10 CurveStates
     * const curveStates = await prisma.curveState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const curveStateWithIdOnly = await prisma.curveState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CurveStateFindManyArgs>(args?: SelectSubset<T, CurveStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurveStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CurveState.
     * @param {CurveStateCreateArgs} args - Arguments to create a CurveState.
     * @example
     * // Create one CurveState
     * const CurveState = await prisma.curveState.create({
     *   data: {
     *     // ... data to create a CurveState
     *   }
     * })
     * 
     */
    create<T extends CurveStateCreateArgs>(args: SelectSubset<T, CurveStateCreateArgs<ExtArgs>>): Prisma__CurveStateClient<$Result.GetResult<Prisma.$CurveStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CurveStates.
     * @param {CurveStateCreateManyArgs} args - Arguments to create many CurveStates.
     * @example
     * // Create many CurveStates
     * const curveState = await prisma.curveState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CurveStateCreateManyArgs>(args?: SelectSubset<T, CurveStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CurveStates and returns the data saved in the database.
     * @param {CurveStateCreateManyAndReturnArgs} args - Arguments to create many CurveStates.
     * @example
     * // Create many CurveStates
     * const curveState = await prisma.curveState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CurveStates and only return the `id`
     * const curveStateWithIdOnly = await prisma.curveState.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CurveStateCreateManyAndReturnArgs>(args?: SelectSubset<T, CurveStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurveStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CurveState.
     * @param {CurveStateDeleteArgs} args - Arguments to delete one CurveState.
     * @example
     * // Delete one CurveState
     * const CurveState = await prisma.curveState.delete({
     *   where: {
     *     // ... filter to delete one CurveState
     *   }
     * })
     * 
     */
    delete<T extends CurveStateDeleteArgs>(args: SelectSubset<T, CurveStateDeleteArgs<ExtArgs>>): Prisma__CurveStateClient<$Result.GetResult<Prisma.$CurveStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CurveState.
     * @param {CurveStateUpdateArgs} args - Arguments to update one CurveState.
     * @example
     * // Update one CurveState
     * const curveState = await prisma.curveState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CurveStateUpdateArgs>(args: SelectSubset<T, CurveStateUpdateArgs<ExtArgs>>): Prisma__CurveStateClient<$Result.GetResult<Prisma.$CurveStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CurveStates.
     * @param {CurveStateDeleteManyArgs} args - Arguments to filter CurveStates to delete.
     * @example
     * // Delete a few CurveStates
     * const { count } = await prisma.curveState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CurveStateDeleteManyArgs>(args?: SelectSubset<T, CurveStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CurveStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurveStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CurveStates
     * const curveState = await prisma.curveState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CurveStateUpdateManyArgs>(args: SelectSubset<T, CurveStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CurveStates and returns the data updated in the database.
     * @param {CurveStateUpdateManyAndReturnArgs} args - Arguments to update many CurveStates.
     * @example
     * // Update many CurveStates
     * const curveState = await prisma.curveState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CurveStates and only return the `id`
     * const curveStateWithIdOnly = await prisma.curveState.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CurveStateUpdateManyAndReturnArgs>(args: SelectSubset<T, CurveStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurveStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CurveState.
     * @param {CurveStateUpsertArgs} args - Arguments to update or create a CurveState.
     * @example
     * // Update or create a CurveState
     * const curveState = await prisma.curveState.upsert({
     *   create: {
     *     // ... data to create a CurveState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CurveState we want to update
     *   }
     * })
     */
    upsert<T extends CurveStateUpsertArgs>(args: SelectSubset<T, CurveStateUpsertArgs<ExtArgs>>): Prisma__CurveStateClient<$Result.GetResult<Prisma.$CurveStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CurveStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurveStateCountArgs} args - Arguments to filter CurveStates to count.
     * @example
     * // Count the number of CurveStates
     * const count = await prisma.curveState.count({
     *   where: {
     *     // ... the filter for the CurveStates we want to count
     *   }
     * })
    **/
    count<T extends CurveStateCountArgs>(
      args?: Subset<T, CurveStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurveStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CurveState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurveStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CurveStateAggregateArgs>(args: Subset<T, CurveStateAggregateArgs>): Prisma.PrismaPromise<GetCurveStateAggregateType<T>>

    /**
     * Group by CurveState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurveStateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CurveStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CurveStateGroupByArgs['orderBy'] }
        : { orderBy?: CurveStateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CurveStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurveStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CurveState model
   */
  readonly fields: CurveStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CurveState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CurveStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends CurveState$ownerArgs<ExtArgs> = {}>(args?: Subset<T, CurveState$ownerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CurveState model
   */
  interface CurveStateFieldRefs {
    readonly id: FieldRef<"CurveState", 'String'>
    readonly stateJson: FieldRef<"CurveState", 'String'>
    readonly createdAt: FieldRef<"CurveState", 'DateTime'>
    readonly ownerUserId: FieldRef<"CurveState", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CurveState findUnique
   */
  export type CurveStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurveState
     */
    select?: CurveStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurveState
     */
    omit?: CurveStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurveStateInclude<ExtArgs> | null
    /**
     * Filter, which CurveState to fetch.
     */
    where: CurveStateWhereUniqueInput
  }

  /**
   * CurveState findUniqueOrThrow
   */
  export type CurveStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurveState
     */
    select?: CurveStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurveState
     */
    omit?: CurveStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurveStateInclude<ExtArgs> | null
    /**
     * Filter, which CurveState to fetch.
     */
    where: CurveStateWhereUniqueInput
  }

  /**
   * CurveState findFirst
   */
  export type CurveStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurveState
     */
    select?: CurveStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurveState
     */
    omit?: CurveStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurveStateInclude<ExtArgs> | null
    /**
     * Filter, which CurveState to fetch.
     */
    where?: CurveStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurveStates to fetch.
     */
    orderBy?: CurveStateOrderByWithRelationInput | CurveStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CurveStates.
     */
    cursor?: CurveStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurveStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurveStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CurveStates.
     */
    distinct?: CurveStateScalarFieldEnum | CurveStateScalarFieldEnum[]
  }

  /**
   * CurveState findFirstOrThrow
   */
  export type CurveStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurveState
     */
    select?: CurveStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurveState
     */
    omit?: CurveStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurveStateInclude<ExtArgs> | null
    /**
     * Filter, which CurveState to fetch.
     */
    where?: CurveStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurveStates to fetch.
     */
    orderBy?: CurveStateOrderByWithRelationInput | CurveStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CurveStates.
     */
    cursor?: CurveStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurveStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurveStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CurveStates.
     */
    distinct?: CurveStateScalarFieldEnum | CurveStateScalarFieldEnum[]
  }

  /**
   * CurveState findMany
   */
  export type CurveStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurveState
     */
    select?: CurveStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurveState
     */
    omit?: CurveStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurveStateInclude<ExtArgs> | null
    /**
     * Filter, which CurveStates to fetch.
     */
    where?: CurveStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurveStates to fetch.
     */
    orderBy?: CurveStateOrderByWithRelationInput | CurveStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CurveStates.
     */
    cursor?: CurveStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurveStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurveStates.
     */
    skip?: number
    distinct?: CurveStateScalarFieldEnum | CurveStateScalarFieldEnum[]
  }

  /**
   * CurveState create
   */
  export type CurveStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurveState
     */
    select?: CurveStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurveState
     */
    omit?: CurveStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurveStateInclude<ExtArgs> | null
    /**
     * The data needed to create a CurveState.
     */
    data: XOR<CurveStateCreateInput, CurveStateUncheckedCreateInput>
  }

  /**
   * CurveState createMany
   */
  export type CurveStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CurveStates.
     */
    data: CurveStateCreateManyInput | CurveStateCreateManyInput[]
  }

  /**
   * CurveState createManyAndReturn
   */
  export type CurveStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurveState
     */
    select?: CurveStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CurveState
     */
    omit?: CurveStateOmit<ExtArgs> | null
    /**
     * The data used to create many CurveStates.
     */
    data: CurveStateCreateManyInput | CurveStateCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurveStateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CurveState update
   */
  export type CurveStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurveState
     */
    select?: CurveStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurveState
     */
    omit?: CurveStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurveStateInclude<ExtArgs> | null
    /**
     * The data needed to update a CurveState.
     */
    data: XOR<CurveStateUpdateInput, CurveStateUncheckedUpdateInput>
    /**
     * Choose, which CurveState to update.
     */
    where: CurveStateWhereUniqueInput
  }

  /**
   * CurveState updateMany
   */
  export type CurveStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CurveStates.
     */
    data: XOR<CurveStateUpdateManyMutationInput, CurveStateUncheckedUpdateManyInput>
    /**
     * Filter which CurveStates to update
     */
    where?: CurveStateWhereInput
    /**
     * Limit how many CurveStates to update.
     */
    limit?: number
  }

  /**
   * CurveState updateManyAndReturn
   */
  export type CurveStateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurveState
     */
    select?: CurveStateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CurveState
     */
    omit?: CurveStateOmit<ExtArgs> | null
    /**
     * The data used to update CurveStates.
     */
    data: XOR<CurveStateUpdateManyMutationInput, CurveStateUncheckedUpdateManyInput>
    /**
     * Filter which CurveStates to update
     */
    where?: CurveStateWhereInput
    /**
     * Limit how many CurveStates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurveStateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CurveState upsert
   */
  export type CurveStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurveState
     */
    select?: CurveStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurveState
     */
    omit?: CurveStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurveStateInclude<ExtArgs> | null
    /**
     * The filter to search for the CurveState to update in case it exists.
     */
    where: CurveStateWhereUniqueInput
    /**
     * In case the CurveState found by the `where` argument doesn't exist, create a new CurveState with this data.
     */
    create: XOR<CurveStateCreateInput, CurveStateUncheckedCreateInput>
    /**
     * In case the CurveState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CurveStateUpdateInput, CurveStateUncheckedUpdateInput>
  }

  /**
   * CurveState delete
   */
  export type CurveStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurveState
     */
    select?: CurveStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurveState
     */
    omit?: CurveStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurveStateInclude<ExtArgs> | null
    /**
     * Filter which CurveState to delete.
     */
    where: CurveStateWhereUniqueInput
  }

  /**
   * CurveState deleteMany
   */
  export type CurveStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CurveStates to delete
     */
    where?: CurveStateWhereInput
    /**
     * Limit how many CurveStates to delete.
     */
    limit?: number
  }

  /**
   * CurveState.owner
   */
  export type CurveState$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * CurveState without action
   */
  export type CurveStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurveState
     */
    select?: CurveStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurveState
     */
    omit?: CurveStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurveStateInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    role: 'role',
    name: 'name',
    email: 'email',
    classGroup: 'classGroup',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const KnowledgeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    category: 'category',
    parentId: 'parentId',
    order: 'order'
  };

  export type KnowledgeScalarFieldEnum = (typeof KnowledgeScalarFieldEnum)[keyof typeof KnowledgeScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    type: 'type',
    difficulty: 'difficulty',
    content: 'content',
    answer: 'answer',
    solution: 'solution',
    pitfalls: 'pitfalls',
    knowledgePoints: 'knowledgePoints',
    source: 'source',
    imageUrl: 'imageUrl',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const GeneratedQuestionScalarFieldEnum: {
    id: 'id',
    parentQuestionId: 'parentQuestionId',
    difficultyLevel: 'difficultyLevel',
    content: 'content',
    answer: 'answer',
    solution: 'solution'
  };

  export type GeneratedQuestionScalarFieldEnum = (typeof GeneratedQuestionScalarFieldEnum)[keyof typeof GeneratedQuestionScalarFieldEnum]


  export const StudyRecordScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    questionId: 'questionId',
    userAnswer: 'userAnswer',
    isCorrect: 'isCorrect',
    timeSpent: 'timeSpent',
    createdAt: 'createdAt'
  };

  export type StudyRecordScalarFieldEnum = (typeof StudyRecordScalarFieldEnum)[keyof typeof StudyRecordScalarFieldEnum]


  export const WrongQuestionBookScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    questionId: 'questionId',
    wrongCount: 'wrongCount'
  };

  export type WrongQuestionBookScalarFieldEnum = (typeof WrongQuestionBookScalarFieldEnum)[keyof typeof WrongQuestionBookScalarFieldEnum]


  export const TestReportScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    module: 'module',
    score: 'score',
    aiAnalysis: 'aiAnalysis',
    createdAt: 'createdAt'
  };

  export type TestReportScalarFieldEnum = (typeof TestReportScalarFieldEnum)[keyof typeof TestReportScalarFieldEnum]


  export const ChatHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    role: 'role',
    content: 'content',
    timestamp: 'timestamp'
  };

  export type ChatHistoryScalarFieldEnum = (typeof ChatHistoryScalarFieldEnum)[keyof typeof ChatHistoryScalarFieldEnum]


  export const CurveStateScalarFieldEnum: {
    id: 'id',
    stateJson: 'stateJson',
    createdAt: 'createdAt',
    ownerUserId: 'ownerUserId'
  };

  export type CurveStateScalarFieldEnum = (typeof CurveStateScalarFieldEnum)[keyof typeof CurveStateScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'QuestionType'
   */
  export type EnumQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionType'>
    


  /**
   * Reference to a field of type 'Difficulty'
   */
  export type EnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'QuestionSource'
   */
  export type EnumQuestionSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionSource'>
    


  /**
   * Reference to a field of type 'QuestionStatus'
   */
  export type EnumQuestionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionStatus'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TestModule'
   */
  export type EnumTestModuleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TestModule'>
    


  /**
   * Reference to a field of type 'ChatMessageRole'
   */
  export type EnumChatMessageRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChatMessageRole'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    classGroup?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    studyRecords?: StudyRecordListRelationFilter
    wrongBook?: WrongQuestionBookListRelationFilter
    testReports?: TestReportListRelationFilter
    chatHistory?: ChatHistoryListRelationFilter
    curveStates?: CurveStateListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    email?: SortOrder
    classGroup?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    studyRecords?: StudyRecordOrderByRelationAggregateInput
    wrongBook?: WrongQuestionBookOrderByRelationAggregateInput
    testReports?: TestReportOrderByRelationAggregateInput
    chatHistory?: ChatHistoryOrderByRelationAggregateInput
    curveStates?: CurveStateOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: EnumRoleFilter<"User"> | $Enums.Role
    name?: StringFilter<"User"> | string
    classGroup?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    studyRecords?: StudyRecordListRelationFilter
    wrongBook?: WrongQuestionBookListRelationFilter
    testReports?: TestReportListRelationFilter
    chatHistory?: ChatHistoryListRelationFilter
    curveStates?: CurveStateListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    email?: SortOrder
    classGroup?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    classGroup?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type KnowledgeWhereInput = {
    AND?: KnowledgeWhereInput | KnowledgeWhereInput[]
    OR?: KnowledgeWhereInput[]
    NOT?: KnowledgeWhereInput | KnowledgeWhereInput[]
    id?: StringFilter<"Knowledge"> | string
    title?: StringFilter<"Knowledge"> | string
    content?: StringFilter<"Knowledge"> | string
    category?: StringFilter<"Knowledge"> | string
    parentId?: StringNullableFilter<"Knowledge"> | string | null
    order?: IntFilter<"Knowledge"> | number
    parent?: XOR<KnowledgeNullableScalarRelationFilter, KnowledgeWhereInput> | null
    children?: KnowledgeListRelationFilter
  }

  export type KnowledgeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    parentId?: SortOrderInput | SortOrder
    order?: SortOrder
    parent?: KnowledgeOrderByWithRelationInput
    children?: KnowledgeOrderByRelationAggregateInput
  }

  export type KnowledgeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KnowledgeWhereInput | KnowledgeWhereInput[]
    OR?: KnowledgeWhereInput[]
    NOT?: KnowledgeWhereInput | KnowledgeWhereInput[]
    title?: StringFilter<"Knowledge"> | string
    content?: StringFilter<"Knowledge"> | string
    category?: StringFilter<"Knowledge"> | string
    parentId?: StringNullableFilter<"Knowledge"> | string | null
    order?: IntFilter<"Knowledge"> | number
    parent?: XOR<KnowledgeNullableScalarRelationFilter, KnowledgeWhereInput> | null
    children?: KnowledgeListRelationFilter
  }, "id">

  export type KnowledgeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    parentId?: SortOrderInput | SortOrder
    order?: SortOrder
    _count?: KnowledgeCountOrderByAggregateInput
    _avg?: KnowledgeAvgOrderByAggregateInput
    _max?: KnowledgeMaxOrderByAggregateInput
    _min?: KnowledgeMinOrderByAggregateInput
    _sum?: KnowledgeSumOrderByAggregateInput
  }

  export type KnowledgeScalarWhereWithAggregatesInput = {
    AND?: KnowledgeScalarWhereWithAggregatesInput | KnowledgeScalarWhereWithAggregatesInput[]
    OR?: KnowledgeScalarWhereWithAggregatesInput[]
    NOT?: KnowledgeScalarWhereWithAggregatesInput | KnowledgeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Knowledge"> | string
    title?: StringWithAggregatesFilter<"Knowledge"> | string
    content?: StringWithAggregatesFilter<"Knowledge"> | string
    category?: StringWithAggregatesFilter<"Knowledge"> | string
    parentId?: StringNullableWithAggregatesFilter<"Knowledge"> | string | null
    order?: IntWithAggregatesFilter<"Knowledge"> | number
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    type?: EnumQuestionTypeFilter<"Question"> | $Enums.QuestionType
    difficulty?: EnumDifficultyFilter<"Question"> | $Enums.Difficulty
    content?: StringFilter<"Question"> | string
    answer?: StringNullableFilter<"Question"> | string | null
    solution?: StringNullableFilter<"Question"> | string | null
    pitfalls?: StringNullableFilter<"Question"> | string | null
    knowledgePoints?: JsonNullableFilter<"Question">
    source?: EnumQuestionSourceFilter<"Question"> | $Enums.QuestionSource
    imageUrl?: StringNullableFilter<"Question"> | string | null
    status?: EnumQuestionStatusFilter<"Question"> | $Enums.QuestionStatus
    createdAt?: DateTimeFilter<"Question"> | Date | string
    studyRecords?: StudyRecordListRelationFilter
    wrongBook?: WrongQuestionBookListRelationFilter
    generated?: GeneratedQuestionListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    difficulty?: SortOrder
    content?: SortOrder
    answer?: SortOrderInput | SortOrder
    solution?: SortOrderInput | SortOrder
    pitfalls?: SortOrderInput | SortOrder
    knowledgePoints?: SortOrderInput | SortOrder
    source?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    studyRecords?: StudyRecordOrderByRelationAggregateInput
    wrongBook?: WrongQuestionBookOrderByRelationAggregateInput
    generated?: GeneratedQuestionOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    type?: EnumQuestionTypeFilter<"Question"> | $Enums.QuestionType
    difficulty?: EnumDifficultyFilter<"Question"> | $Enums.Difficulty
    content?: StringFilter<"Question"> | string
    answer?: StringNullableFilter<"Question"> | string | null
    solution?: StringNullableFilter<"Question"> | string | null
    pitfalls?: StringNullableFilter<"Question"> | string | null
    knowledgePoints?: JsonNullableFilter<"Question">
    source?: EnumQuestionSourceFilter<"Question"> | $Enums.QuestionSource
    imageUrl?: StringNullableFilter<"Question"> | string | null
    status?: EnumQuestionStatusFilter<"Question"> | $Enums.QuestionStatus
    createdAt?: DateTimeFilter<"Question"> | Date | string
    studyRecords?: StudyRecordListRelationFilter
    wrongBook?: WrongQuestionBookListRelationFilter
    generated?: GeneratedQuestionListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    difficulty?: SortOrder
    content?: SortOrder
    answer?: SortOrderInput | SortOrder
    solution?: SortOrderInput | SortOrder
    pitfalls?: SortOrderInput | SortOrder
    knowledgePoints?: SortOrderInput | SortOrder
    source?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    type?: EnumQuestionTypeWithAggregatesFilter<"Question"> | $Enums.QuestionType
    difficulty?: EnumDifficultyWithAggregatesFilter<"Question"> | $Enums.Difficulty
    content?: StringWithAggregatesFilter<"Question"> | string
    answer?: StringNullableWithAggregatesFilter<"Question"> | string | null
    solution?: StringNullableWithAggregatesFilter<"Question"> | string | null
    pitfalls?: StringNullableWithAggregatesFilter<"Question"> | string | null
    knowledgePoints?: JsonNullableWithAggregatesFilter<"Question">
    source?: EnumQuestionSourceWithAggregatesFilter<"Question"> | $Enums.QuestionSource
    imageUrl?: StringNullableWithAggregatesFilter<"Question"> | string | null
    status?: EnumQuestionStatusWithAggregatesFilter<"Question"> | $Enums.QuestionStatus
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
  }

  export type GeneratedQuestionWhereInput = {
    AND?: GeneratedQuestionWhereInput | GeneratedQuestionWhereInput[]
    OR?: GeneratedQuestionWhereInput[]
    NOT?: GeneratedQuestionWhereInput | GeneratedQuestionWhereInput[]
    id?: StringFilter<"GeneratedQuestion"> | string
    parentQuestionId?: StringFilter<"GeneratedQuestion"> | string
    difficultyLevel?: EnumDifficultyFilter<"GeneratedQuestion"> | $Enums.Difficulty
    content?: StringFilter<"GeneratedQuestion"> | string
    answer?: StringNullableFilter<"GeneratedQuestion"> | string | null
    solution?: StringNullableFilter<"GeneratedQuestion"> | string | null
    parentQuestion?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type GeneratedQuestionOrderByWithRelationInput = {
    id?: SortOrder
    parentQuestionId?: SortOrder
    difficultyLevel?: SortOrder
    content?: SortOrder
    answer?: SortOrderInput | SortOrder
    solution?: SortOrderInput | SortOrder
    parentQuestion?: QuestionOrderByWithRelationInput
  }

  export type GeneratedQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GeneratedQuestionWhereInput | GeneratedQuestionWhereInput[]
    OR?: GeneratedQuestionWhereInput[]
    NOT?: GeneratedQuestionWhereInput | GeneratedQuestionWhereInput[]
    parentQuestionId?: StringFilter<"GeneratedQuestion"> | string
    difficultyLevel?: EnumDifficultyFilter<"GeneratedQuestion"> | $Enums.Difficulty
    content?: StringFilter<"GeneratedQuestion"> | string
    answer?: StringNullableFilter<"GeneratedQuestion"> | string | null
    solution?: StringNullableFilter<"GeneratedQuestion"> | string | null
    parentQuestion?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "id">

  export type GeneratedQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    parentQuestionId?: SortOrder
    difficultyLevel?: SortOrder
    content?: SortOrder
    answer?: SortOrderInput | SortOrder
    solution?: SortOrderInput | SortOrder
    _count?: GeneratedQuestionCountOrderByAggregateInput
    _max?: GeneratedQuestionMaxOrderByAggregateInput
    _min?: GeneratedQuestionMinOrderByAggregateInput
  }

  export type GeneratedQuestionScalarWhereWithAggregatesInput = {
    AND?: GeneratedQuestionScalarWhereWithAggregatesInput | GeneratedQuestionScalarWhereWithAggregatesInput[]
    OR?: GeneratedQuestionScalarWhereWithAggregatesInput[]
    NOT?: GeneratedQuestionScalarWhereWithAggregatesInput | GeneratedQuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GeneratedQuestion"> | string
    parentQuestionId?: StringWithAggregatesFilter<"GeneratedQuestion"> | string
    difficultyLevel?: EnumDifficultyWithAggregatesFilter<"GeneratedQuestion"> | $Enums.Difficulty
    content?: StringWithAggregatesFilter<"GeneratedQuestion"> | string
    answer?: StringNullableWithAggregatesFilter<"GeneratedQuestion"> | string | null
    solution?: StringNullableWithAggregatesFilter<"GeneratedQuestion"> | string | null
  }

  export type StudyRecordWhereInput = {
    AND?: StudyRecordWhereInput | StudyRecordWhereInput[]
    OR?: StudyRecordWhereInput[]
    NOT?: StudyRecordWhereInput | StudyRecordWhereInput[]
    id?: StringFilter<"StudyRecord"> | string
    userId?: StringFilter<"StudyRecord"> | string
    questionId?: StringFilter<"StudyRecord"> | string
    userAnswer?: StringNullableFilter<"StudyRecord"> | string | null
    isCorrect?: BoolFilter<"StudyRecord"> | boolean
    timeSpent?: IntFilter<"StudyRecord"> | number
    createdAt?: DateTimeFilter<"StudyRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type StudyRecordOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    userAnswer?: SortOrderInput | SortOrder
    isCorrect?: SortOrder
    timeSpent?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
  }

  export type StudyRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudyRecordWhereInput | StudyRecordWhereInput[]
    OR?: StudyRecordWhereInput[]
    NOT?: StudyRecordWhereInput | StudyRecordWhereInput[]
    userId?: StringFilter<"StudyRecord"> | string
    questionId?: StringFilter<"StudyRecord"> | string
    userAnswer?: StringNullableFilter<"StudyRecord"> | string | null
    isCorrect?: BoolFilter<"StudyRecord"> | boolean
    timeSpent?: IntFilter<"StudyRecord"> | number
    createdAt?: DateTimeFilter<"StudyRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "id">

  export type StudyRecordOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    userAnswer?: SortOrderInput | SortOrder
    isCorrect?: SortOrder
    timeSpent?: SortOrder
    createdAt?: SortOrder
    _count?: StudyRecordCountOrderByAggregateInput
    _avg?: StudyRecordAvgOrderByAggregateInput
    _max?: StudyRecordMaxOrderByAggregateInput
    _min?: StudyRecordMinOrderByAggregateInput
    _sum?: StudyRecordSumOrderByAggregateInput
  }

  export type StudyRecordScalarWhereWithAggregatesInput = {
    AND?: StudyRecordScalarWhereWithAggregatesInput | StudyRecordScalarWhereWithAggregatesInput[]
    OR?: StudyRecordScalarWhereWithAggregatesInput[]
    NOT?: StudyRecordScalarWhereWithAggregatesInput | StudyRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudyRecord"> | string
    userId?: StringWithAggregatesFilter<"StudyRecord"> | string
    questionId?: StringWithAggregatesFilter<"StudyRecord"> | string
    userAnswer?: StringNullableWithAggregatesFilter<"StudyRecord"> | string | null
    isCorrect?: BoolWithAggregatesFilter<"StudyRecord"> | boolean
    timeSpent?: IntWithAggregatesFilter<"StudyRecord"> | number
    createdAt?: DateTimeWithAggregatesFilter<"StudyRecord"> | Date | string
  }

  export type WrongQuestionBookWhereInput = {
    AND?: WrongQuestionBookWhereInput | WrongQuestionBookWhereInput[]
    OR?: WrongQuestionBookWhereInput[]
    NOT?: WrongQuestionBookWhereInput | WrongQuestionBookWhereInput[]
    id?: StringFilter<"WrongQuestionBook"> | string
    userId?: StringFilter<"WrongQuestionBook"> | string
    questionId?: StringFilter<"WrongQuestionBook"> | string
    wrongCount?: IntFilter<"WrongQuestionBook"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type WrongQuestionBookOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    wrongCount?: SortOrder
    user?: UserOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
  }

  export type WrongQuestionBookWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_questionId?: WrongQuestionBookUserIdQuestionIdCompoundUniqueInput
    AND?: WrongQuestionBookWhereInput | WrongQuestionBookWhereInput[]
    OR?: WrongQuestionBookWhereInput[]
    NOT?: WrongQuestionBookWhereInput | WrongQuestionBookWhereInput[]
    userId?: StringFilter<"WrongQuestionBook"> | string
    questionId?: StringFilter<"WrongQuestionBook"> | string
    wrongCount?: IntFilter<"WrongQuestionBook"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "id" | "userId_questionId">

  export type WrongQuestionBookOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    wrongCount?: SortOrder
    _count?: WrongQuestionBookCountOrderByAggregateInput
    _avg?: WrongQuestionBookAvgOrderByAggregateInput
    _max?: WrongQuestionBookMaxOrderByAggregateInput
    _min?: WrongQuestionBookMinOrderByAggregateInput
    _sum?: WrongQuestionBookSumOrderByAggregateInput
  }

  export type WrongQuestionBookScalarWhereWithAggregatesInput = {
    AND?: WrongQuestionBookScalarWhereWithAggregatesInput | WrongQuestionBookScalarWhereWithAggregatesInput[]
    OR?: WrongQuestionBookScalarWhereWithAggregatesInput[]
    NOT?: WrongQuestionBookScalarWhereWithAggregatesInput | WrongQuestionBookScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WrongQuestionBook"> | string
    userId?: StringWithAggregatesFilter<"WrongQuestionBook"> | string
    questionId?: StringWithAggregatesFilter<"WrongQuestionBook"> | string
    wrongCount?: IntWithAggregatesFilter<"WrongQuestionBook"> | number
  }

  export type TestReportWhereInput = {
    AND?: TestReportWhereInput | TestReportWhereInput[]
    OR?: TestReportWhereInput[]
    NOT?: TestReportWhereInput | TestReportWhereInput[]
    id?: StringFilter<"TestReport"> | string
    userId?: StringFilter<"TestReport"> | string
    module?: EnumTestModuleFilter<"TestReport"> | $Enums.TestModule
    score?: IntFilter<"TestReport"> | number
    aiAnalysis?: StringFilter<"TestReport"> | string
    createdAt?: DateTimeFilter<"TestReport"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TestReportOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    module?: SortOrder
    score?: SortOrder
    aiAnalysis?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TestReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TestReportWhereInput | TestReportWhereInput[]
    OR?: TestReportWhereInput[]
    NOT?: TestReportWhereInput | TestReportWhereInput[]
    userId?: StringFilter<"TestReport"> | string
    module?: EnumTestModuleFilter<"TestReport"> | $Enums.TestModule
    score?: IntFilter<"TestReport"> | number
    aiAnalysis?: StringFilter<"TestReport"> | string
    createdAt?: DateTimeFilter<"TestReport"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TestReportOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    module?: SortOrder
    score?: SortOrder
    aiAnalysis?: SortOrder
    createdAt?: SortOrder
    _count?: TestReportCountOrderByAggregateInput
    _avg?: TestReportAvgOrderByAggregateInput
    _max?: TestReportMaxOrderByAggregateInput
    _min?: TestReportMinOrderByAggregateInput
    _sum?: TestReportSumOrderByAggregateInput
  }

  export type TestReportScalarWhereWithAggregatesInput = {
    AND?: TestReportScalarWhereWithAggregatesInput | TestReportScalarWhereWithAggregatesInput[]
    OR?: TestReportScalarWhereWithAggregatesInput[]
    NOT?: TestReportScalarWhereWithAggregatesInput | TestReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TestReport"> | string
    userId?: StringWithAggregatesFilter<"TestReport"> | string
    module?: EnumTestModuleWithAggregatesFilter<"TestReport"> | $Enums.TestModule
    score?: IntWithAggregatesFilter<"TestReport"> | number
    aiAnalysis?: StringWithAggregatesFilter<"TestReport"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TestReport"> | Date | string
  }

  export type ChatHistoryWhereInput = {
    AND?: ChatHistoryWhereInput | ChatHistoryWhereInput[]
    OR?: ChatHistoryWhereInput[]
    NOT?: ChatHistoryWhereInput | ChatHistoryWhereInput[]
    id?: StringFilter<"ChatHistory"> | string
    userId?: StringFilter<"ChatHistory"> | string
    role?: EnumChatMessageRoleFilter<"ChatHistory"> | $Enums.ChatMessageRole
    content?: StringFilter<"ChatHistory"> | string
    timestamp?: DateTimeFilter<"ChatHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ChatHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ChatHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatHistoryWhereInput | ChatHistoryWhereInput[]
    OR?: ChatHistoryWhereInput[]
    NOT?: ChatHistoryWhereInput | ChatHistoryWhereInput[]
    userId?: StringFilter<"ChatHistory"> | string
    role?: EnumChatMessageRoleFilter<"ChatHistory"> | $Enums.ChatMessageRole
    content?: StringFilter<"ChatHistory"> | string
    timestamp?: DateTimeFilter<"ChatHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ChatHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    _count?: ChatHistoryCountOrderByAggregateInput
    _max?: ChatHistoryMaxOrderByAggregateInput
    _min?: ChatHistoryMinOrderByAggregateInput
  }

  export type ChatHistoryScalarWhereWithAggregatesInput = {
    AND?: ChatHistoryScalarWhereWithAggregatesInput | ChatHistoryScalarWhereWithAggregatesInput[]
    OR?: ChatHistoryScalarWhereWithAggregatesInput[]
    NOT?: ChatHistoryScalarWhereWithAggregatesInput | ChatHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatHistory"> | string
    userId?: StringWithAggregatesFilter<"ChatHistory"> | string
    role?: EnumChatMessageRoleWithAggregatesFilter<"ChatHistory"> | $Enums.ChatMessageRole
    content?: StringWithAggregatesFilter<"ChatHistory"> | string
    timestamp?: DateTimeWithAggregatesFilter<"ChatHistory"> | Date | string
  }

  export type CurveStateWhereInput = {
    AND?: CurveStateWhereInput | CurveStateWhereInput[]
    OR?: CurveStateWhereInput[]
    NOT?: CurveStateWhereInput | CurveStateWhereInput[]
    id?: StringFilter<"CurveState"> | string
    stateJson?: StringFilter<"CurveState"> | string
    createdAt?: DateTimeFilter<"CurveState"> | Date | string
    ownerUserId?: StringNullableFilter<"CurveState"> | string | null
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type CurveStateOrderByWithRelationInput = {
    id?: SortOrder
    stateJson?: SortOrder
    createdAt?: SortOrder
    ownerUserId?: SortOrderInput | SortOrder
    owner?: UserOrderByWithRelationInput
  }

  export type CurveStateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CurveStateWhereInput | CurveStateWhereInput[]
    OR?: CurveStateWhereInput[]
    NOT?: CurveStateWhereInput | CurveStateWhereInput[]
    stateJson?: StringFilter<"CurveState"> | string
    createdAt?: DateTimeFilter<"CurveState"> | Date | string
    ownerUserId?: StringNullableFilter<"CurveState"> | string | null
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type CurveStateOrderByWithAggregationInput = {
    id?: SortOrder
    stateJson?: SortOrder
    createdAt?: SortOrder
    ownerUserId?: SortOrderInput | SortOrder
    _count?: CurveStateCountOrderByAggregateInput
    _max?: CurveStateMaxOrderByAggregateInput
    _min?: CurveStateMinOrderByAggregateInput
  }

  export type CurveStateScalarWhereWithAggregatesInput = {
    AND?: CurveStateScalarWhereWithAggregatesInput | CurveStateScalarWhereWithAggregatesInput[]
    OR?: CurveStateScalarWhereWithAggregatesInput[]
    NOT?: CurveStateScalarWhereWithAggregatesInput | CurveStateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CurveState"> | string
    stateJson?: StringWithAggregatesFilter<"CurveState"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CurveState"> | Date | string
    ownerUserId?: StringNullableWithAggregatesFilter<"CurveState"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    role: $Enums.Role
    name: string
    email: string
    classGroup?: string | null
    passwordHash: string
    createdAt?: Date | string
    studyRecords?: StudyRecordCreateNestedManyWithoutUserInput
    wrongBook?: WrongQuestionBookCreateNestedManyWithoutUserInput
    testReports?: TestReportCreateNestedManyWithoutUserInput
    chatHistory?: ChatHistoryCreateNestedManyWithoutUserInput
    curveStates?: CurveStateCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    role: $Enums.Role
    name: string
    email: string
    classGroup?: string | null
    passwordHash: string
    createdAt?: Date | string
    studyRecords?: StudyRecordUncheckedCreateNestedManyWithoutUserInput
    wrongBook?: WrongQuestionBookUncheckedCreateNestedManyWithoutUserInput
    testReports?: TestReportUncheckedCreateNestedManyWithoutUserInput
    chatHistory?: ChatHistoryUncheckedCreateNestedManyWithoutUserInput
    curveStates?: CurveStateUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    classGroup?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studyRecords?: StudyRecordUpdateManyWithoutUserNestedInput
    wrongBook?: WrongQuestionBookUpdateManyWithoutUserNestedInput
    testReports?: TestReportUpdateManyWithoutUserNestedInput
    chatHistory?: ChatHistoryUpdateManyWithoutUserNestedInput
    curveStates?: CurveStateUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    classGroup?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studyRecords?: StudyRecordUncheckedUpdateManyWithoutUserNestedInput
    wrongBook?: WrongQuestionBookUncheckedUpdateManyWithoutUserNestedInput
    testReports?: TestReportUncheckedUpdateManyWithoutUserNestedInput
    chatHistory?: ChatHistoryUncheckedUpdateManyWithoutUserNestedInput
    curveStates?: CurveStateUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    role: $Enums.Role
    name: string
    email: string
    classGroup?: string | null
    passwordHash: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    classGroup?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    classGroup?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KnowledgeCreateInput = {
    id?: string
    title: string
    content: string
    category: string
    order?: number
    parent?: KnowledgeCreateNestedOneWithoutChildrenInput
    children?: KnowledgeCreateNestedManyWithoutParentInput
  }

  export type KnowledgeUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    category: string
    parentId?: string | null
    order?: number
    children?: KnowledgeUncheckedCreateNestedManyWithoutParentInput
  }

  export type KnowledgeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    parent?: KnowledgeUpdateOneWithoutChildrenNestedInput
    children?: KnowledgeUpdateManyWithoutParentNestedInput
  }

  export type KnowledgeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    children?: KnowledgeUncheckedUpdateManyWithoutParentNestedInput
  }

  export type KnowledgeCreateManyInput = {
    id?: string
    title: string
    content: string
    category: string
    parentId?: string | null
    order?: number
  }

  export type KnowledgeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type KnowledgeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionCreateInput = {
    id?: string
    type: $Enums.QuestionType
    difficulty: $Enums.Difficulty
    content: string
    answer?: string | null
    solution?: string | null
    pitfalls?: string | null
    knowledgePoints?: NullableJsonNullValueInput | InputJsonValue
    source: $Enums.QuestionSource
    imageUrl?: string | null
    status?: $Enums.QuestionStatus
    createdAt?: Date | string
    studyRecords?: StudyRecordCreateNestedManyWithoutQuestionInput
    wrongBook?: WrongQuestionBookCreateNestedManyWithoutQuestionInput
    generated?: GeneratedQuestionCreateNestedManyWithoutParentQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    type: $Enums.QuestionType
    difficulty: $Enums.Difficulty
    content: string
    answer?: string | null
    solution?: string | null
    pitfalls?: string | null
    knowledgePoints?: NullableJsonNullValueInput | InputJsonValue
    source: $Enums.QuestionSource
    imageUrl?: string | null
    status?: $Enums.QuestionStatus
    createdAt?: Date | string
    studyRecords?: StudyRecordUncheckedCreateNestedManyWithoutQuestionInput
    wrongBook?: WrongQuestionBookUncheckedCreateNestedManyWithoutQuestionInput
    generated?: GeneratedQuestionUncheckedCreateNestedManyWithoutParentQuestionInput
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    content?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    pitfalls?: NullableStringFieldUpdateOperationsInput | string | null
    knowledgePoints?: NullableJsonNullValueInput | InputJsonValue
    source?: EnumQuestionSourceFieldUpdateOperationsInput | $Enums.QuestionSource
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studyRecords?: StudyRecordUpdateManyWithoutQuestionNestedInput
    wrongBook?: WrongQuestionBookUpdateManyWithoutQuestionNestedInput
    generated?: GeneratedQuestionUpdateManyWithoutParentQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    content?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    pitfalls?: NullableStringFieldUpdateOperationsInput | string | null
    knowledgePoints?: NullableJsonNullValueInput | InputJsonValue
    source?: EnumQuestionSourceFieldUpdateOperationsInput | $Enums.QuestionSource
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studyRecords?: StudyRecordUncheckedUpdateManyWithoutQuestionNestedInput
    wrongBook?: WrongQuestionBookUncheckedUpdateManyWithoutQuestionNestedInput
    generated?: GeneratedQuestionUncheckedUpdateManyWithoutParentQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: string
    type: $Enums.QuestionType
    difficulty: $Enums.Difficulty
    content: string
    answer?: string | null
    solution?: string | null
    pitfalls?: string | null
    knowledgePoints?: NullableJsonNullValueInput | InputJsonValue
    source: $Enums.QuestionSource
    imageUrl?: string | null
    status?: $Enums.QuestionStatus
    createdAt?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    content?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    pitfalls?: NullableStringFieldUpdateOperationsInput | string | null
    knowledgePoints?: NullableJsonNullValueInput | InputJsonValue
    source?: EnumQuestionSourceFieldUpdateOperationsInput | $Enums.QuestionSource
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    content?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    pitfalls?: NullableStringFieldUpdateOperationsInput | string | null
    knowledgePoints?: NullableJsonNullValueInput | InputJsonValue
    source?: EnumQuestionSourceFieldUpdateOperationsInput | $Enums.QuestionSource
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedQuestionCreateInput = {
    id?: string
    difficultyLevel: $Enums.Difficulty
    content: string
    answer?: string | null
    solution?: string | null
    parentQuestion: QuestionCreateNestedOneWithoutGeneratedInput
  }

  export type GeneratedQuestionUncheckedCreateInput = {
    id?: string
    parentQuestionId: string
    difficultyLevel: $Enums.Difficulty
    content: string
    answer?: string | null
    solution?: string | null
  }

  export type GeneratedQuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    difficultyLevel?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    content?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    parentQuestion?: QuestionUpdateOneRequiredWithoutGeneratedNestedInput
  }

  export type GeneratedQuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentQuestionId?: StringFieldUpdateOperationsInput | string
    difficultyLevel?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    content?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GeneratedQuestionCreateManyInput = {
    id?: string
    parentQuestionId: string
    difficultyLevel: $Enums.Difficulty
    content: string
    answer?: string | null
    solution?: string | null
  }

  export type GeneratedQuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    difficultyLevel?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    content?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GeneratedQuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentQuestionId?: StringFieldUpdateOperationsInput | string
    difficultyLevel?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    content?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudyRecordCreateInput = {
    id?: string
    userAnswer?: string | null
    isCorrect: boolean
    timeSpent: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutStudyRecordsInput
    question: QuestionCreateNestedOneWithoutStudyRecordsInput
  }

  export type StudyRecordUncheckedCreateInput = {
    id?: string
    userId: string
    questionId: string
    userAnswer?: string | null
    isCorrect: boolean
    timeSpent: number
    createdAt?: Date | string
  }

  export type StudyRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeSpent?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStudyRecordsNestedInput
    question?: QuestionUpdateOneRequiredWithoutStudyRecordsNestedInput
  }

  export type StudyRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeSpent?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyRecordCreateManyInput = {
    id?: string
    userId: string
    questionId: string
    userAnswer?: string | null
    isCorrect: boolean
    timeSpent: number
    createdAt?: Date | string
  }

  export type StudyRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeSpent?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeSpent?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WrongQuestionBookCreateInput = {
    id?: string
    wrongCount?: number
    user: UserCreateNestedOneWithoutWrongBookInput
    question: QuestionCreateNestedOneWithoutWrongBookInput
  }

  export type WrongQuestionBookUncheckedCreateInput = {
    id?: string
    userId: string
    questionId: string
    wrongCount?: number
  }

  export type WrongQuestionBookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    wrongCount?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutWrongBookNestedInput
    question?: QuestionUpdateOneRequiredWithoutWrongBookNestedInput
  }

  export type WrongQuestionBookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    wrongCount?: IntFieldUpdateOperationsInput | number
  }

  export type WrongQuestionBookCreateManyInput = {
    id?: string
    userId: string
    questionId: string
    wrongCount?: number
  }

  export type WrongQuestionBookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    wrongCount?: IntFieldUpdateOperationsInput | number
  }

  export type WrongQuestionBookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    wrongCount?: IntFieldUpdateOperationsInput | number
  }

  export type TestReportCreateInput = {
    id?: string
    module: $Enums.TestModule
    score: number
    aiAnalysis: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTestReportsInput
  }

  export type TestReportUncheckedCreateInput = {
    id?: string
    userId: string
    module: $Enums.TestModule
    score: number
    aiAnalysis: string
    createdAt?: Date | string
  }

  export type TestReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: EnumTestModuleFieldUpdateOperationsInput | $Enums.TestModule
    score?: IntFieldUpdateOperationsInput | number
    aiAnalysis?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTestReportsNestedInput
  }

  export type TestReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    module?: EnumTestModuleFieldUpdateOperationsInput | $Enums.TestModule
    score?: IntFieldUpdateOperationsInput | number
    aiAnalysis?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestReportCreateManyInput = {
    id?: string
    userId: string
    module: $Enums.TestModule
    score: number
    aiAnalysis: string
    createdAt?: Date | string
  }

  export type TestReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: EnumTestModuleFieldUpdateOperationsInput | $Enums.TestModule
    score?: IntFieldUpdateOperationsInput | number
    aiAnalysis?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    module?: EnumTestModuleFieldUpdateOperationsInput | $Enums.TestModule
    score?: IntFieldUpdateOperationsInput | number
    aiAnalysis?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatHistoryCreateInput = {
    id?: string
    role: $Enums.ChatMessageRole
    content: string
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutChatHistoryInput
  }

  export type ChatHistoryUncheckedCreateInput = {
    id?: string
    userId: string
    role: $Enums.ChatMessageRole
    content: string
    timestamp?: Date | string
  }

  export type ChatHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumChatMessageRoleFieldUpdateOperationsInput | $Enums.ChatMessageRole
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatHistoryNestedInput
  }

  export type ChatHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumChatMessageRoleFieldUpdateOperationsInput | $Enums.ChatMessageRole
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatHistoryCreateManyInput = {
    id?: string
    userId: string
    role: $Enums.ChatMessageRole
    content: string
    timestamp?: Date | string
  }

  export type ChatHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumChatMessageRoleFieldUpdateOperationsInput | $Enums.ChatMessageRole
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumChatMessageRoleFieldUpdateOperationsInput | $Enums.ChatMessageRole
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurveStateCreateInput = {
    id?: string
    stateJson: string
    createdAt?: Date | string
    owner?: UserCreateNestedOneWithoutCurveStatesInput
  }

  export type CurveStateUncheckedCreateInput = {
    id?: string
    stateJson: string
    createdAt?: Date | string
    ownerUserId?: string | null
  }

  export type CurveStateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stateJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutCurveStatesNestedInput
  }

  export type CurveStateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stateJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CurveStateCreateManyInput = {
    id?: string
    stateJson: string
    createdAt?: Date | string
    ownerUserId?: string | null
  }

  export type CurveStateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stateJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurveStateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    stateJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StudyRecordListRelationFilter = {
    every?: StudyRecordWhereInput
    some?: StudyRecordWhereInput
    none?: StudyRecordWhereInput
  }

  export type WrongQuestionBookListRelationFilter = {
    every?: WrongQuestionBookWhereInput
    some?: WrongQuestionBookWhereInput
    none?: WrongQuestionBookWhereInput
  }

  export type TestReportListRelationFilter = {
    every?: TestReportWhereInput
    some?: TestReportWhereInput
    none?: TestReportWhereInput
  }

  export type ChatHistoryListRelationFilter = {
    every?: ChatHistoryWhereInput
    some?: ChatHistoryWhereInput
    none?: ChatHistoryWhereInput
  }

  export type CurveStateListRelationFilter = {
    every?: CurveStateWhereInput
    some?: CurveStateWhereInput
    none?: CurveStateWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StudyRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WrongQuestionBookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CurveStateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    email?: SortOrder
    classGroup?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    email?: SortOrder
    classGroup?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    email?: SortOrder
    classGroup?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type KnowledgeNullableScalarRelationFilter = {
    is?: KnowledgeWhereInput | null
    isNot?: KnowledgeWhereInput | null
  }

  export type KnowledgeListRelationFilter = {
    every?: KnowledgeWhereInput
    some?: KnowledgeWhereInput
    none?: KnowledgeWhereInput
  }

  export type KnowledgeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KnowledgeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    parentId?: SortOrder
    order?: SortOrder
  }

  export type KnowledgeAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type KnowledgeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    parentId?: SortOrder
    order?: SortOrder
  }

  export type KnowledgeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    parentId?: SortOrder
    order?: SortOrder
  }

  export type KnowledgeSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumQuestionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[]
    notIn?: $Enums.QuestionType[]
    not?: NestedEnumQuestionTypeFilter<$PrismaModel> | $Enums.QuestionType
  }

  export type EnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[]
    notIn?: $Enums.Difficulty[]
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumQuestionSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionSource | EnumQuestionSourceFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionSource[]
    notIn?: $Enums.QuestionSource[]
    not?: NestedEnumQuestionSourceFilter<$PrismaModel> | $Enums.QuestionSource
  }

  export type EnumQuestionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionStatus | EnumQuestionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionStatus[]
    notIn?: $Enums.QuestionStatus[]
    not?: NestedEnumQuestionStatusFilter<$PrismaModel> | $Enums.QuestionStatus
  }

  export type GeneratedQuestionListRelationFilter = {
    every?: GeneratedQuestionWhereInput
    some?: GeneratedQuestionWhereInput
    none?: GeneratedQuestionWhereInput
  }

  export type GeneratedQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    difficulty?: SortOrder
    content?: SortOrder
    answer?: SortOrder
    solution?: SortOrder
    pitfalls?: SortOrder
    knowledgePoints?: SortOrder
    source?: SortOrder
    imageUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    difficulty?: SortOrder
    content?: SortOrder
    answer?: SortOrder
    solution?: SortOrder
    pitfalls?: SortOrder
    source?: SortOrder
    imageUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    difficulty?: SortOrder
    content?: SortOrder
    answer?: SortOrder
    solution?: SortOrder
    pitfalls?: SortOrder
    source?: SortOrder
    imageUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumQuestionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[]
    notIn?: $Enums.QuestionType[]
    not?: NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuestionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionTypeFilter<$PrismaModel>
    _max?: NestedEnumQuestionTypeFilter<$PrismaModel>
  }

  export type EnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[]
    notIn?: $Enums.Difficulty[]
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumQuestionSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionSource | EnumQuestionSourceFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionSource[]
    notIn?: $Enums.QuestionSource[]
    not?: NestedEnumQuestionSourceWithAggregatesFilter<$PrismaModel> | $Enums.QuestionSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionSourceFilter<$PrismaModel>
    _max?: NestedEnumQuestionSourceFilter<$PrismaModel>
  }

  export type EnumQuestionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionStatus | EnumQuestionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionStatus[]
    notIn?: $Enums.QuestionStatus[]
    not?: NestedEnumQuestionStatusWithAggregatesFilter<$PrismaModel> | $Enums.QuestionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionStatusFilter<$PrismaModel>
    _max?: NestedEnumQuestionStatusFilter<$PrismaModel>
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type GeneratedQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    parentQuestionId?: SortOrder
    difficultyLevel?: SortOrder
    content?: SortOrder
    answer?: SortOrder
    solution?: SortOrder
  }

  export type GeneratedQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    parentQuestionId?: SortOrder
    difficultyLevel?: SortOrder
    content?: SortOrder
    answer?: SortOrder
    solution?: SortOrder
  }

  export type GeneratedQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    parentQuestionId?: SortOrder
    difficultyLevel?: SortOrder
    content?: SortOrder
    answer?: SortOrder
    solution?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type StudyRecordCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    userAnswer?: SortOrder
    isCorrect?: SortOrder
    timeSpent?: SortOrder
    createdAt?: SortOrder
  }

  export type StudyRecordAvgOrderByAggregateInput = {
    timeSpent?: SortOrder
  }

  export type StudyRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    userAnswer?: SortOrder
    isCorrect?: SortOrder
    timeSpent?: SortOrder
    createdAt?: SortOrder
  }

  export type StudyRecordMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    userAnswer?: SortOrder
    isCorrect?: SortOrder
    timeSpent?: SortOrder
    createdAt?: SortOrder
  }

  export type StudyRecordSumOrderByAggregateInput = {
    timeSpent?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type WrongQuestionBookUserIdQuestionIdCompoundUniqueInput = {
    userId: string
    questionId: string
  }

  export type WrongQuestionBookCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    wrongCount?: SortOrder
  }

  export type WrongQuestionBookAvgOrderByAggregateInput = {
    wrongCount?: SortOrder
  }

  export type WrongQuestionBookMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    wrongCount?: SortOrder
  }

  export type WrongQuestionBookMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    questionId?: SortOrder
    wrongCount?: SortOrder
  }

  export type WrongQuestionBookSumOrderByAggregateInput = {
    wrongCount?: SortOrder
  }

  export type EnumTestModuleFilter<$PrismaModel = never> = {
    equals?: $Enums.TestModule | EnumTestModuleFieldRefInput<$PrismaModel>
    in?: $Enums.TestModule[]
    notIn?: $Enums.TestModule[]
    not?: NestedEnumTestModuleFilter<$PrismaModel> | $Enums.TestModule
  }

  export type TestReportCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    module?: SortOrder
    score?: SortOrder
    aiAnalysis?: SortOrder
    createdAt?: SortOrder
  }

  export type TestReportAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type TestReportMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    module?: SortOrder
    score?: SortOrder
    aiAnalysis?: SortOrder
    createdAt?: SortOrder
  }

  export type TestReportMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    module?: SortOrder
    score?: SortOrder
    aiAnalysis?: SortOrder
    createdAt?: SortOrder
  }

  export type TestReportSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type EnumTestModuleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TestModule | EnumTestModuleFieldRefInput<$PrismaModel>
    in?: $Enums.TestModule[]
    notIn?: $Enums.TestModule[]
    not?: NestedEnumTestModuleWithAggregatesFilter<$PrismaModel> | $Enums.TestModule
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTestModuleFilter<$PrismaModel>
    _max?: NestedEnumTestModuleFilter<$PrismaModel>
  }

  export type EnumChatMessageRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatMessageRole | EnumChatMessageRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ChatMessageRole[]
    notIn?: $Enums.ChatMessageRole[]
    not?: NestedEnumChatMessageRoleFilter<$PrismaModel> | $Enums.ChatMessageRole
  }

  export type ChatHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
  }

  export type ChatHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
  }

  export type ChatHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
  }

  export type EnumChatMessageRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatMessageRole | EnumChatMessageRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ChatMessageRole[]
    notIn?: $Enums.ChatMessageRole[]
    not?: NestedEnumChatMessageRoleWithAggregatesFilter<$PrismaModel> | $Enums.ChatMessageRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChatMessageRoleFilter<$PrismaModel>
    _max?: NestedEnumChatMessageRoleFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type CurveStateCountOrderByAggregateInput = {
    id?: SortOrder
    stateJson?: SortOrder
    createdAt?: SortOrder
    ownerUserId?: SortOrder
  }

  export type CurveStateMaxOrderByAggregateInput = {
    id?: SortOrder
    stateJson?: SortOrder
    createdAt?: SortOrder
    ownerUserId?: SortOrder
  }

  export type CurveStateMinOrderByAggregateInput = {
    id?: SortOrder
    stateJson?: SortOrder
    createdAt?: SortOrder
    ownerUserId?: SortOrder
  }

  export type StudyRecordCreateNestedManyWithoutUserInput = {
    create?: XOR<StudyRecordCreateWithoutUserInput, StudyRecordUncheckedCreateWithoutUserInput> | StudyRecordCreateWithoutUserInput[] | StudyRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudyRecordCreateOrConnectWithoutUserInput | StudyRecordCreateOrConnectWithoutUserInput[]
    createMany?: StudyRecordCreateManyUserInputEnvelope
    connect?: StudyRecordWhereUniqueInput | StudyRecordWhereUniqueInput[]
  }

  export type WrongQuestionBookCreateNestedManyWithoutUserInput = {
    create?: XOR<WrongQuestionBookCreateWithoutUserInput, WrongQuestionBookUncheckedCreateWithoutUserInput> | WrongQuestionBookCreateWithoutUserInput[] | WrongQuestionBookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WrongQuestionBookCreateOrConnectWithoutUserInput | WrongQuestionBookCreateOrConnectWithoutUserInput[]
    createMany?: WrongQuestionBookCreateManyUserInputEnvelope
    connect?: WrongQuestionBookWhereUniqueInput | WrongQuestionBookWhereUniqueInput[]
  }

  export type TestReportCreateNestedManyWithoutUserInput = {
    create?: XOR<TestReportCreateWithoutUserInput, TestReportUncheckedCreateWithoutUserInput> | TestReportCreateWithoutUserInput[] | TestReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TestReportCreateOrConnectWithoutUserInput | TestReportCreateOrConnectWithoutUserInput[]
    createMany?: TestReportCreateManyUserInputEnvelope
    connect?: TestReportWhereUniqueInput | TestReportWhereUniqueInput[]
  }

  export type ChatHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatHistoryCreateWithoutUserInput, ChatHistoryUncheckedCreateWithoutUserInput> | ChatHistoryCreateWithoutUserInput[] | ChatHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatHistoryCreateOrConnectWithoutUserInput | ChatHistoryCreateOrConnectWithoutUserInput[]
    createMany?: ChatHistoryCreateManyUserInputEnvelope
    connect?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
  }

  export type CurveStateCreateNestedManyWithoutOwnerInput = {
    create?: XOR<CurveStateCreateWithoutOwnerInput, CurveStateUncheckedCreateWithoutOwnerInput> | CurveStateCreateWithoutOwnerInput[] | CurveStateUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CurveStateCreateOrConnectWithoutOwnerInput | CurveStateCreateOrConnectWithoutOwnerInput[]
    createMany?: CurveStateCreateManyOwnerInputEnvelope
    connect?: CurveStateWhereUniqueInput | CurveStateWhereUniqueInput[]
  }

  export type StudyRecordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StudyRecordCreateWithoutUserInput, StudyRecordUncheckedCreateWithoutUserInput> | StudyRecordCreateWithoutUserInput[] | StudyRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudyRecordCreateOrConnectWithoutUserInput | StudyRecordCreateOrConnectWithoutUserInput[]
    createMany?: StudyRecordCreateManyUserInputEnvelope
    connect?: StudyRecordWhereUniqueInput | StudyRecordWhereUniqueInput[]
  }

  export type WrongQuestionBookUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WrongQuestionBookCreateWithoutUserInput, WrongQuestionBookUncheckedCreateWithoutUserInput> | WrongQuestionBookCreateWithoutUserInput[] | WrongQuestionBookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WrongQuestionBookCreateOrConnectWithoutUserInput | WrongQuestionBookCreateOrConnectWithoutUserInput[]
    createMany?: WrongQuestionBookCreateManyUserInputEnvelope
    connect?: WrongQuestionBookWhereUniqueInput | WrongQuestionBookWhereUniqueInput[]
  }

  export type TestReportUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TestReportCreateWithoutUserInput, TestReportUncheckedCreateWithoutUserInput> | TestReportCreateWithoutUserInput[] | TestReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TestReportCreateOrConnectWithoutUserInput | TestReportCreateOrConnectWithoutUserInput[]
    createMany?: TestReportCreateManyUserInputEnvelope
    connect?: TestReportWhereUniqueInput | TestReportWhereUniqueInput[]
  }

  export type ChatHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatHistoryCreateWithoutUserInput, ChatHistoryUncheckedCreateWithoutUserInput> | ChatHistoryCreateWithoutUserInput[] | ChatHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatHistoryCreateOrConnectWithoutUserInput | ChatHistoryCreateOrConnectWithoutUserInput[]
    createMany?: ChatHistoryCreateManyUserInputEnvelope
    connect?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
  }

  export type CurveStateUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<CurveStateCreateWithoutOwnerInput, CurveStateUncheckedCreateWithoutOwnerInput> | CurveStateCreateWithoutOwnerInput[] | CurveStateUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CurveStateCreateOrConnectWithoutOwnerInput | CurveStateCreateOrConnectWithoutOwnerInput[]
    createMany?: CurveStateCreateManyOwnerInputEnvelope
    connect?: CurveStateWhereUniqueInput | CurveStateWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StudyRecordUpdateManyWithoutUserNestedInput = {
    create?: XOR<StudyRecordCreateWithoutUserInput, StudyRecordUncheckedCreateWithoutUserInput> | StudyRecordCreateWithoutUserInput[] | StudyRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudyRecordCreateOrConnectWithoutUserInput | StudyRecordCreateOrConnectWithoutUserInput[]
    upsert?: StudyRecordUpsertWithWhereUniqueWithoutUserInput | StudyRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StudyRecordCreateManyUserInputEnvelope
    set?: StudyRecordWhereUniqueInput | StudyRecordWhereUniqueInput[]
    disconnect?: StudyRecordWhereUniqueInput | StudyRecordWhereUniqueInput[]
    delete?: StudyRecordWhereUniqueInput | StudyRecordWhereUniqueInput[]
    connect?: StudyRecordWhereUniqueInput | StudyRecordWhereUniqueInput[]
    update?: StudyRecordUpdateWithWhereUniqueWithoutUserInput | StudyRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StudyRecordUpdateManyWithWhereWithoutUserInput | StudyRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StudyRecordScalarWhereInput | StudyRecordScalarWhereInput[]
  }

  export type WrongQuestionBookUpdateManyWithoutUserNestedInput = {
    create?: XOR<WrongQuestionBookCreateWithoutUserInput, WrongQuestionBookUncheckedCreateWithoutUserInput> | WrongQuestionBookCreateWithoutUserInput[] | WrongQuestionBookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WrongQuestionBookCreateOrConnectWithoutUserInput | WrongQuestionBookCreateOrConnectWithoutUserInput[]
    upsert?: WrongQuestionBookUpsertWithWhereUniqueWithoutUserInput | WrongQuestionBookUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WrongQuestionBookCreateManyUserInputEnvelope
    set?: WrongQuestionBookWhereUniqueInput | WrongQuestionBookWhereUniqueInput[]
    disconnect?: WrongQuestionBookWhereUniqueInput | WrongQuestionBookWhereUniqueInput[]
    delete?: WrongQuestionBookWhereUniqueInput | WrongQuestionBookWhereUniqueInput[]
    connect?: WrongQuestionBookWhereUniqueInput | WrongQuestionBookWhereUniqueInput[]
    update?: WrongQuestionBookUpdateWithWhereUniqueWithoutUserInput | WrongQuestionBookUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WrongQuestionBookUpdateManyWithWhereWithoutUserInput | WrongQuestionBookUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WrongQuestionBookScalarWhereInput | WrongQuestionBookScalarWhereInput[]
  }

  export type TestReportUpdateManyWithoutUserNestedInput = {
    create?: XOR<TestReportCreateWithoutUserInput, TestReportUncheckedCreateWithoutUserInput> | TestReportCreateWithoutUserInput[] | TestReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TestReportCreateOrConnectWithoutUserInput | TestReportCreateOrConnectWithoutUserInput[]
    upsert?: TestReportUpsertWithWhereUniqueWithoutUserInput | TestReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TestReportCreateManyUserInputEnvelope
    set?: TestReportWhereUniqueInput | TestReportWhereUniqueInput[]
    disconnect?: TestReportWhereUniqueInput | TestReportWhereUniqueInput[]
    delete?: TestReportWhereUniqueInput | TestReportWhereUniqueInput[]
    connect?: TestReportWhereUniqueInput | TestReportWhereUniqueInput[]
    update?: TestReportUpdateWithWhereUniqueWithoutUserInput | TestReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TestReportUpdateManyWithWhereWithoutUserInput | TestReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TestReportScalarWhereInput | TestReportScalarWhereInput[]
  }

  export type ChatHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatHistoryCreateWithoutUserInput, ChatHistoryUncheckedCreateWithoutUserInput> | ChatHistoryCreateWithoutUserInput[] | ChatHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatHistoryCreateOrConnectWithoutUserInput | ChatHistoryCreateOrConnectWithoutUserInput[]
    upsert?: ChatHistoryUpsertWithWhereUniqueWithoutUserInput | ChatHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatHistoryCreateManyUserInputEnvelope
    set?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    disconnect?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    delete?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    connect?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    update?: ChatHistoryUpdateWithWhereUniqueWithoutUserInput | ChatHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatHistoryUpdateManyWithWhereWithoutUserInput | ChatHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatHistoryScalarWhereInput | ChatHistoryScalarWhereInput[]
  }

  export type CurveStateUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<CurveStateCreateWithoutOwnerInput, CurveStateUncheckedCreateWithoutOwnerInput> | CurveStateCreateWithoutOwnerInput[] | CurveStateUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CurveStateCreateOrConnectWithoutOwnerInput | CurveStateCreateOrConnectWithoutOwnerInput[]
    upsert?: CurveStateUpsertWithWhereUniqueWithoutOwnerInput | CurveStateUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: CurveStateCreateManyOwnerInputEnvelope
    set?: CurveStateWhereUniqueInput | CurveStateWhereUniqueInput[]
    disconnect?: CurveStateWhereUniqueInput | CurveStateWhereUniqueInput[]
    delete?: CurveStateWhereUniqueInput | CurveStateWhereUniqueInput[]
    connect?: CurveStateWhereUniqueInput | CurveStateWhereUniqueInput[]
    update?: CurveStateUpdateWithWhereUniqueWithoutOwnerInput | CurveStateUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: CurveStateUpdateManyWithWhereWithoutOwnerInput | CurveStateUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: CurveStateScalarWhereInput | CurveStateScalarWhereInput[]
  }

  export type StudyRecordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StudyRecordCreateWithoutUserInput, StudyRecordUncheckedCreateWithoutUserInput> | StudyRecordCreateWithoutUserInput[] | StudyRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudyRecordCreateOrConnectWithoutUserInput | StudyRecordCreateOrConnectWithoutUserInput[]
    upsert?: StudyRecordUpsertWithWhereUniqueWithoutUserInput | StudyRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StudyRecordCreateManyUserInputEnvelope
    set?: StudyRecordWhereUniqueInput | StudyRecordWhereUniqueInput[]
    disconnect?: StudyRecordWhereUniqueInput | StudyRecordWhereUniqueInput[]
    delete?: StudyRecordWhereUniqueInput | StudyRecordWhereUniqueInput[]
    connect?: StudyRecordWhereUniqueInput | StudyRecordWhereUniqueInput[]
    update?: StudyRecordUpdateWithWhereUniqueWithoutUserInput | StudyRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StudyRecordUpdateManyWithWhereWithoutUserInput | StudyRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StudyRecordScalarWhereInput | StudyRecordScalarWhereInput[]
  }

  export type WrongQuestionBookUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WrongQuestionBookCreateWithoutUserInput, WrongQuestionBookUncheckedCreateWithoutUserInput> | WrongQuestionBookCreateWithoutUserInput[] | WrongQuestionBookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WrongQuestionBookCreateOrConnectWithoutUserInput | WrongQuestionBookCreateOrConnectWithoutUserInput[]
    upsert?: WrongQuestionBookUpsertWithWhereUniqueWithoutUserInput | WrongQuestionBookUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WrongQuestionBookCreateManyUserInputEnvelope
    set?: WrongQuestionBookWhereUniqueInput | WrongQuestionBookWhereUniqueInput[]
    disconnect?: WrongQuestionBookWhereUniqueInput | WrongQuestionBookWhereUniqueInput[]
    delete?: WrongQuestionBookWhereUniqueInput | WrongQuestionBookWhereUniqueInput[]
    connect?: WrongQuestionBookWhereUniqueInput | WrongQuestionBookWhereUniqueInput[]
    update?: WrongQuestionBookUpdateWithWhereUniqueWithoutUserInput | WrongQuestionBookUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WrongQuestionBookUpdateManyWithWhereWithoutUserInput | WrongQuestionBookUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WrongQuestionBookScalarWhereInput | WrongQuestionBookScalarWhereInput[]
  }

  export type TestReportUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TestReportCreateWithoutUserInput, TestReportUncheckedCreateWithoutUserInput> | TestReportCreateWithoutUserInput[] | TestReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TestReportCreateOrConnectWithoutUserInput | TestReportCreateOrConnectWithoutUserInput[]
    upsert?: TestReportUpsertWithWhereUniqueWithoutUserInput | TestReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TestReportCreateManyUserInputEnvelope
    set?: TestReportWhereUniqueInput | TestReportWhereUniqueInput[]
    disconnect?: TestReportWhereUniqueInput | TestReportWhereUniqueInput[]
    delete?: TestReportWhereUniqueInput | TestReportWhereUniqueInput[]
    connect?: TestReportWhereUniqueInput | TestReportWhereUniqueInput[]
    update?: TestReportUpdateWithWhereUniqueWithoutUserInput | TestReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TestReportUpdateManyWithWhereWithoutUserInput | TestReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TestReportScalarWhereInput | TestReportScalarWhereInput[]
  }

  export type ChatHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatHistoryCreateWithoutUserInput, ChatHistoryUncheckedCreateWithoutUserInput> | ChatHistoryCreateWithoutUserInput[] | ChatHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatHistoryCreateOrConnectWithoutUserInput | ChatHistoryCreateOrConnectWithoutUserInput[]
    upsert?: ChatHistoryUpsertWithWhereUniqueWithoutUserInput | ChatHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatHistoryCreateManyUserInputEnvelope
    set?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    disconnect?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    delete?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    connect?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    update?: ChatHistoryUpdateWithWhereUniqueWithoutUserInput | ChatHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatHistoryUpdateManyWithWhereWithoutUserInput | ChatHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatHistoryScalarWhereInput | ChatHistoryScalarWhereInput[]
  }

  export type CurveStateUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<CurveStateCreateWithoutOwnerInput, CurveStateUncheckedCreateWithoutOwnerInput> | CurveStateCreateWithoutOwnerInput[] | CurveStateUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CurveStateCreateOrConnectWithoutOwnerInput | CurveStateCreateOrConnectWithoutOwnerInput[]
    upsert?: CurveStateUpsertWithWhereUniqueWithoutOwnerInput | CurveStateUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: CurveStateCreateManyOwnerInputEnvelope
    set?: CurveStateWhereUniqueInput | CurveStateWhereUniqueInput[]
    disconnect?: CurveStateWhereUniqueInput | CurveStateWhereUniqueInput[]
    delete?: CurveStateWhereUniqueInput | CurveStateWhereUniqueInput[]
    connect?: CurveStateWhereUniqueInput | CurveStateWhereUniqueInput[]
    update?: CurveStateUpdateWithWhereUniqueWithoutOwnerInput | CurveStateUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: CurveStateUpdateManyWithWhereWithoutOwnerInput | CurveStateUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: CurveStateScalarWhereInput | CurveStateScalarWhereInput[]
  }

  export type KnowledgeCreateNestedOneWithoutChildrenInput = {
    create?: XOR<KnowledgeCreateWithoutChildrenInput, KnowledgeUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: KnowledgeCreateOrConnectWithoutChildrenInput
    connect?: KnowledgeWhereUniqueInput
  }

  export type KnowledgeCreateNestedManyWithoutParentInput = {
    create?: XOR<KnowledgeCreateWithoutParentInput, KnowledgeUncheckedCreateWithoutParentInput> | KnowledgeCreateWithoutParentInput[] | KnowledgeUncheckedCreateWithoutParentInput[]
    connectOrCreate?: KnowledgeCreateOrConnectWithoutParentInput | KnowledgeCreateOrConnectWithoutParentInput[]
    createMany?: KnowledgeCreateManyParentInputEnvelope
    connect?: KnowledgeWhereUniqueInput | KnowledgeWhereUniqueInput[]
  }

  export type KnowledgeUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<KnowledgeCreateWithoutParentInput, KnowledgeUncheckedCreateWithoutParentInput> | KnowledgeCreateWithoutParentInput[] | KnowledgeUncheckedCreateWithoutParentInput[]
    connectOrCreate?: KnowledgeCreateOrConnectWithoutParentInput | KnowledgeCreateOrConnectWithoutParentInput[]
    createMany?: KnowledgeCreateManyParentInputEnvelope
    connect?: KnowledgeWhereUniqueInput | KnowledgeWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type KnowledgeUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<KnowledgeCreateWithoutChildrenInput, KnowledgeUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: KnowledgeCreateOrConnectWithoutChildrenInput
    upsert?: KnowledgeUpsertWithoutChildrenInput
    disconnect?: KnowledgeWhereInput | boolean
    delete?: KnowledgeWhereInput | boolean
    connect?: KnowledgeWhereUniqueInput
    update?: XOR<XOR<KnowledgeUpdateToOneWithWhereWithoutChildrenInput, KnowledgeUpdateWithoutChildrenInput>, KnowledgeUncheckedUpdateWithoutChildrenInput>
  }

  export type KnowledgeUpdateManyWithoutParentNestedInput = {
    create?: XOR<KnowledgeCreateWithoutParentInput, KnowledgeUncheckedCreateWithoutParentInput> | KnowledgeCreateWithoutParentInput[] | KnowledgeUncheckedCreateWithoutParentInput[]
    connectOrCreate?: KnowledgeCreateOrConnectWithoutParentInput | KnowledgeCreateOrConnectWithoutParentInput[]
    upsert?: KnowledgeUpsertWithWhereUniqueWithoutParentInput | KnowledgeUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: KnowledgeCreateManyParentInputEnvelope
    set?: KnowledgeWhereUniqueInput | KnowledgeWhereUniqueInput[]
    disconnect?: KnowledgeWhereUniqueInput | KnowledgeWhereUniqueInput[]
    delete?: KnowledgeWhereUniqueInput | KnowledgeWhereUniqueInput[]
    connect?: KnowledgeWhereUniqueInput | KnowledgeWhereUniqueInput[]
    update?: KnowledgeUpdateWithWhereUniqueWithoutParentInput | KnowledgeUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: KnowledgeUpdateManyWithWhereWithoutParentInput | KnowledgeUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: KnowledgeScalarWhereInput | KnowledgeScalarWhereInput[]
  }

  export type KnowledgeUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<KnowledgeCreateWithoutParentInput, KnowledgeUncheckedCreateWithoutParentInput> | KnowledgeCreateWithoutParentInput[] | KnowledgeUncheckedCreateWithoutParentInput[]
    connectOrCreate?: KnowledgeCreateOrConnectWithoutParentInput | KnowledgeCreateOrConnectWithoutParentInput[]
    upsert?: KnowledgeUpsertWithWhereUniqueWithoutParentInput | KnowledgeUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: KnowledgeCreateManyParentInputEnvelope
    set?: KnowledgeWhereUniqueInput | KnowledgeWhereUniqueInput[]
    disconnect?: KnowledgeWhereUniqueInput | KnowledgeWhereUniqueInput[]
    delete?: KnowledgeWhereUniqueInput | KnowledgeWhereUniqueInput[]
    connect?: KnowledgeWhereUniqueInput | KnowledgeWhereUniqueInput[]
    update?: KnowledgeUpdateWithWhereUniqueWithoutParentInput | KnowledgeUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: KnowledgeUpdateManyWithWhereWithoutParentInput | KnowledgeUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: KnowledgeScalarWhereInput | KnowledgeScalarWhereInput[]
  }

  export type StudyRecordCreateNestedManyWithoutQuestionInput = {
    create?: XOR<StudyRecordCreateWithoutQuestionInput, StudyRecordUncheckedCreateWithoutQuestionInput> | StudyRecordCreateWithoutQuestionInput[] | StudyRecordUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: StudyRecordCreateOrConnectWithoutQuestionInput | StudyRecordCreateOrConnectWithoutQuestionInput[]
    createMany?: StudyRecordCreateManyQuestionInputEnvelope
    connect?: StudyRecordWhereUniqueInput | StudyRecordWhereUniqueInput[]
  }

  export type WrongQuestionBookCreateNestedManyWithoutQuestionInput = {
    create?: XOR<WrongQuestionBookCreateWithoutQuestionInput, WrongQuestionBookUncheckedCreateWithoutQuestionInput> | WrongQuestionBookCreateWithoutQuestionInput[] | WrongQuestionBookUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: WrongQuestionBookCreateOrConnectWithoutQuestionInput | WrongQuestionBookCreateOrConnectWithoutQuestionInput[]
    createMany?: WrongQuestionBookCreateManyQuestionInputEnvelope
    connect?: WrongQuestionBookWhereUniqueInput | WrongQuestionBookWhereUniqueInput[]
  }

  export type GeneratedQuestionCreateNestedManyWithoutParentQuestionInput = {
    create?: XOR<GeneratedQuestionCreateWithoutParentQuestionInput, GeneratedQuestionUncheckedCreateWithoutParentQuestionInput> | GeneratedQuestionCreateWithoutParentQuestionInput[] | GeneratedQuestionUncheckedCreateWithoutParentQuestionInput[]
    connectOrCreate?: GeneratedQuestionCreateOrConnectWithoutParentQuestionInput | GeneratedQuestionCreateOrConnectWithoutParentQuestionInput[]
    createMany?: GeneratedQuestionCreateManyParentQuestionInputEnvelope
    connect?: GeneratedQuestionWhereUniqueInput | GeneratedQuestionWhereUniqueInput[]
  }

  export type StudyRecordUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<StudyRecordCreateWithoutQuestionInput, StudyRecordUncheckedCreateWithoutQuestionInput> | StudyRecordCreateWithoutQuestionInput[] | StudyRecordUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: StudyRecordCreateOrConnectWithoutQuestionInput | StudyRecordCreateOrConnectWithoutQuestionInput[]
    createMany?: StudyRecordCreateManyQuestionInputEnvelope
    connect?: StudyRecordWhereUniqueInput | StudyRecordWhereUniqueInput[]
  }

  export type WrongQuestionBookUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<WrongQuestionBookCreateWithoutQuestionInput, WrongQuestionBookUncheckedCreateWithoutQuestionInput> | WrongQuestionBookCreateWithoutQuestionInput[] | WrongQuestionBookUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: WrongQuestionBookCreateOrConnectWithoutQuestionInput | WrongQuestionBookCreateOrConnectWithoutQuestionInput[]
    createMany?: WrongQuestionBookCreateManyQuestionInputEnvelope
    connect?: WrongQuestionBookWhereUniqueInput | WrongQuestionBookWhereUniqueInput[]
  }

  export type GeneratedQuestionUncheckedCreateNestedManyWithoutParentQuestionInput = {
    create?: XOR<GeneratedQuestionCreateWithoutParentQuestionInput, GeneratedQuestionUncheckedCreateWithoutParentQuestionInput> | GeneratedQuestionCreateWithoutParentQuestionInput[] | GeneratedQuestionUncheckedCreateWithoutParentQuestionInput[]
    connectOrCreate?: GeneratedQuestionCreateOrConnectWithoutParentQuestionInput | GeneratedQuestionCreateOrConnectWithoutParentQuestionInput[]
    createMany?: GeneratedQuestionCreateManyParentQuestionInputEnvelope
    connect?: GeneratedQuestionWhereUniqueInput | GeneratedQuestionWhereUniqueInput[]
  }

  export type EnumQuestionTypeFieldUpdateOperationsInput = {
    set?: $Enums.QuestionType
  }

  export type EnumDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.Difficulty
  }

  export type EnumQuestionSourceFieldUpdateOperationsInput = {
    set?: $Enums.QuestionSource
  }

  export type EnumQuestionStatusFieldUpdateOperationsInput = {
    set?: $Enums.QuestionStatus
  }

  export type StudyRecordUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<StudyRecordCreateWithoutQuestionInput, StudyRecordUncheckedCreateWithoutQuestionInput> | StudyRecordCreateWithoutQuestionInput[] | StudyRecordUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: StudyRecordCreateOrConnectWithoutQuestionInput | StudyRecordCreateOrConnectWithoutQuestionInput[]
    upsert?: StudyRecordUpsertWithWhereUniqueWithoutQuestionInput | StudyRecordUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: StudyRecordCreateManyQuestionInputEnvelope
    set?: StudyRecordWhereUniqueInput | StudyRecordWhereUniqueInput[]
    disconnect?: StudyRecordWhereUniqueInput | StudyRecordWhereUniqueInput[]
    delete?: StudyRecordWhereUniqueInput | StudyRecordWhereUniqueInput[]
    connect?: StudyRecordWhereUniqueInput | StudyRecordWhereUniqueInput[]
    update?: StudyRecordUpdateWithWhereUniqueWithoutQuestionInput | StudyRecordUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: StudyRecordUpdateManyWithWhereWithoutQuestionInput | StudyRecordUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: StudyRecordScalarWhereInput | StudyRecordScalarWhereInput[]
  }

  export type WrongQuestionBookUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<WrongQuestionBookCreateWithoutQuestionInput, WrongQuestionBookUncheckedCreateWithoutQuestionInput> | WrongQuestionBookCreateWithoutQuestionInput[] | WrongQuestionBookUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: WrongQuestionBookCreateOrConnectWithoutQuestionInput | WrongQuestionBookCreateOrConnectWithoutQuestionInput[]
    upsert?: WrongQuestionBookUpsertWithWhereUniqueWithoutQuestionInput | WrongQuestionBookUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: WrongQuestionBookCreateManyQuestionInputEnvelope
    set?: WrongQuestionBookWhereUniqueInput | WrongQuestionBookWhereUniqueInput[]
    disconnect?: WrongQuestionBookWhereUniqueInput | WrongQuestionBookWhereUniqueInput[]
    delete?: WrongQuestionBookWhereUniqueInput | WrongQuestionBookWhereUniqueInput[]
    connect?: WrongQuestionBookWhereUniqueInput | WrongQuestionBookWhereUniqueInput[]
    update?: WrongQuestionBookUpdateWithWhereUniqueWithoutQuestionInput | WrongQuestionBookUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: WrongQuestionBookUpdateManyWithWhereWithoutQuestionInput | WrongQuestionBookUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: WrongQuestionBookScalarWhereInput | WrongQuestionBookScalarWhereInput[]
  }

  export type GeneratedQuestionUpdateManyWithoutParentQuestionNestedInput = {
    create?: XOR<GeneratedQuestionCreateWithoutParentQuestionInput, GeneratedQuestionUncheckedCreateWithoutParentQuestionInput> | GeneratedQuestionCreateWithoutParentQuestionInput[] | GeneratedQuestionUncheckedCreateWithoutParentQuestionInput[]
    connectOrCreate?: GeneratedQuestionCreateOrConnectWithoutParentQuestionInput | GeneratedQuestionCreateOrConnectWithoutParentQuestionInput[]
    upsert?: GeneratedQuestionUpsertWithWhereUniqueWithoutParentQuestionInput | GeneratedQuestionUpsertWithWhereUniqueWithoutParentQuestionInput[]
    createMany?: GeneratedQuestionCreateManyParentQuestionInputEnvelope
    set?: GeneratedQuestionWhereUniqueInput | GeneratedQuestionWhereUniqueInput[]
    disconnect?: GeneratedQuestionWhereUniqueInput | GeneratedQuestionWhereUniqueInput[]
    delete?: GeneratedQuestionWhereUniqueInput | GeneratedQuestionWhereUniqueInput[]
    connect?: GeneratedQuestionWhereUniqueInput | GeneratedQuestionWhereUniqueInput[]
    update?: GeneratedQuestionUpdateWithWhereUniqueWithoutParentQuestionInput | GeneratedQuestionUpdateWithWhereUniqueWithoutParentQuestionInput[]
    updateMany?: GeneratedQuestionUpdateManyWithWhereWithoutParentQuestionInput | GeneratedQuestionUpdateManyWithWhereWithoutParentQuestionInput[]
    deleteMany?: GeneratedQuestionScalarWhereInput | GeneratedQuestionScalarWhereInput[]
  }

  export type StudyRecordUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<StudyRecordCreateWithoutQuestionInput, StudyRecordUncheckedCreateWithoutQuestionInput> | StudyRecordCreateWithoutQuestionInput[] | StudyRecordUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: StudyRecordCreateOrConnectWithoutQuestionInput | StudyRecordCreateOrConnectWithoutQuestionInput[]
    upsert?: StudyRecordUpsertWithWhereUniqueWithoutQuestionInput | StudyRecordUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: StudyRecordCreateManyQuestionInputEnvelope
    set?: StudyRecordWhereUniqueInput | StudyRecordWhereUniqueInput[]
    disconnect?: StudyRecordWhereUniqueInput | StudyRecordWhereUniqueInput[]
    delete?: StudyRecordWhereUniqueInput | StudyRecordWhereUniqueInput[]
    connect?: StudyRecordWhereUniqueInput | StudyRecordWhereUniqueInput[]
    update?: StudyRecordUpdateWithWhereUniqueWithoutQuestionInput | StudyRecordUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: StudyRecordUpdateManyWithWhereWithoutQuestionInput | StudyRecordUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: StudyRecordScalarWhereInput | StudyRecordScalarWhereInput[]
  }

  export type WrongQuestionBookUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<WrongQuestionBookCreateWithoutQuestionInput, WrongQuestionBookUncheckedCreateWithoutQuestionInput> | WrongQuestionBookCreateWithoutQuestionInput[] | WrongQuestionBookUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: WrongQuestionBookCreateOrConnectWithoutQuestionInput | WrongQuestionBookCreateOrConnectWithoutQuestionInput[]
    upsert?: WrongQuestionBookUpsertWithWhereUniqueWithoutQuestionInput | WrongQuestionBookUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: WrongQuestionBookCreateManyQuestionInputEnvelope
    set?: WrongQuestionBookWhereUniqueInput | WrongQuestionBookWhereUniqueInput[]
    disconnect?: WrongQuestionBookWhereUniqueInput | WrongQuestionBookWhereUniqueInput[]
    delete?: WrongQuestionBookWhereUniqueInput | WrongQuestionBookWhereUniqueInput[]
    connect?: WrongQuestionBookWhereUniqueInput | WrongQuestionBookWhereUniqueInput[]
    update?: WrongQuestionBookUpdateWithWhereUniqueWithoutQuestionInput | WrongQuestionBookUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: WrongQuestionBookUpdateManyWithWhereWithoutQuestionInput | WrongQuestionBookUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: WrongQuestionBookScalarWhereInput | WrongQuestionBookScalarWhereInput[]
  }

  export type GeneratedQuestionUncheckedUpdateManyWithoutParentQuestionNestedInput = {
    create?: XOR<GeneratedQuestionCreateWithoutParentQuestionInput, GeneratedQuestionUncheckedCreateWithoutParentQuestionInput> | GeneratedQuestionCreateWithoutParentQuestionInput[] | GeneratedQuestionUncheckedCreateWithoutParentQuestionInput[]
    connectOrCreate?: GeneratedQuestionCreateOrConnectWithoutParentQuestionInput | GeneratedQuestionCreateOrConnectWithoutParentQuestionInput[]
    upsert?: GeneratedQuestionUpsertWithWhereUniqueWithoutParentQuestionInput | GeneratedQuestionUpsertWithWhereUniqueWithoutParentQuestionInput[]
    createMany?: GeneratedQuestionCreateManyParentQuestionInputEnvelope
    set?: GeneratedQuestionWhereUniqueInput | GeneratedQuestionWhereUniqueInput[]
    disconnect?: GeneratedQuestionWhereUniqueInput | GeneratedQuestionWhereUniqueInput[]
    delete?: GeneratedQuestionWhereUniqueInput | GeneratedQuestionWhereUniqueInput[]
    connect?: GeneratedQuestionWhereUniqueInput | GeneratedQuestionWhereUniqueInput[]
    update?: GeneratedQuestionUpdateWithWhereUniqueWithoutParentQuestionInput | GeneratedQuestionUpdateWithWhereUniqueWithoutParentQuestionInput[]
    updateMany?: GeneratedQuestionUpdateManyWithWhereWithoutParentQuestionInput | GeneratedQuestionUpdateManyWithWhereWithoutParentQuestionInput[]
    deleteMany?: GeneratedQuestionScalarWhereInput | GeneratedQuestionScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutGeneratedInput = {
    create?: XOR<QuestionCreateWithoutGeneratedInput, QuestionUncheckedCreateWithoutGeneratedInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutGeneratedInput
    connect?: QuestionWhereUniqueInput
  }

  export type QuestionUpdateOneRequiredWithoutGeneratedNestedInput = {
    create?: XOR<QuestionCreateWithoutGeneratedInput, QuestionUncheckedCreateWithoutGeneratedInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutGeneratedInput
    upsert?: QuestionUpsertWithoutGeneratedInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutGeneratedInput, QuestionUpdateWithoutGeneratedInput>, QuestionUncheckedUpdateWithoutGeneratedInput>
  }

  export type UserCreateNestedOneWithoutStudyRecordsInput = {
    create?: XOR<UserCreateWithoutStudyRecordsInput, UserUncheckedCreateWithoutStudyRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudyRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutStudyRecordsInput = {
    create?: XOR<QuestionCreateWithoutStudyRecordsInput, QuestionUncheckedCreateWithoutStudyRecordsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutStudyRecordsInput
    connect?: QuestionWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutStudyRecordsNestedInput = {
    create?: XOR<UserCreateWithoutStudyRecordsInput, UserUncheckedCreateWithoutStudyRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudyRecordsInput
    upsert?: UserUpsertWithoutStudyRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudyRecordsInput, UserUpdateWithoutStudyRecordsInput>, UserUncheckedUpdateWithoutStudyRecordsInput>
  }

  export type QuestionUpdateOneRequiredWithoutStudyRecordsNestedInput = {
    create?: XOR<QuestionCreateWithoutStudyRecordsInput, QuestionUncheckedCreateWithoutStudyRecordsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutStudyRecordsInput
    upsert?: QuestionUpsertWithoutStudyRecordsInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutStudyRecordsInput, QuestionUpdateWithoutStudyRecordsInput>, QuestionUncheckedUpdateWithoutStudyRecordsInput>
  }

  export type UserCreateNestedOneWithoutWrongBookInput = {
    create?: XOR<UserCreateWithoutWrongBookInput, UserUncheckedCreateWithoutWrongBookInput>
    connectOrCreate?: UserCreateOrConnectWithoutWrongBookInput
    connect?: UserWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutWrongBookInput = {
    create?: XOR<QuestionCreateWithoutWrongBookInput, QuestionUncheckedCreateWithoutWrongBookInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutWrongBookInput
    connect?: QuestionWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWrongBookNestedInput = {
    create?: XOR<UserCreateWithoutWrongBookInput, UserUncheckedCreateWithoutWrongBookInput>
    connectOrCreate?: UserCreateOrConnectWithoutWrongBookInput
    upsert?: UserUpsertWithoutWrongBookInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWrongBookInput, UserUpdateWithoutWrongBookInput>, UserUncheckedUpdateWithoutWrongBookInput>
  }

  export type QuestionUpdateOneRequiredWithoutWrongBookNestedInput = {
    create?: XOR<QuestionCreateWithoutWrongBookInput, QuestionUncheckedCreateWithoutWrongBookInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutWrongBookInput
    upsert?: QuestionUpsertWithoutWrongBookInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutWrongBookInput, QuestionUpdateWithoutWrongBookInput>, QuestionUncheckedUpdateWithoutWrongBookInput>
  }

  export type UserCreateNestedOneWithoutTestReportsInput = {
    create?: XOR<UserCreateWithoutTestReportsInput, UserUncheckedCreateWithoutTestReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTestReportsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTestModuleFieldUpdateOperationsInput = {
    set?: $Enums.TestModule
  }

  export type UserUpdateOneRequiredWithoutTestReportsNestedInput = {
    create?: XOR<UserCreateWithoutTestReportsInput, UserUncheckedCreateWithoutTestReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTestReportsInput
    upsert?: UserUpsertWithoutTestReportsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTestReportsInput, UserUpdateWithoutTestReportsInput>, UserUncheckedUpdateWithoutTestReportsInput>
  }

  export type UserCreateNestedOneWithoutChatHistoryInput = {
    create?: XOR<UserCreateWithoutChatHistoryInput, UserUncheckedCreateWithoutChatHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type EnumChatMessageRoleFieldUpdateOperationsInput = {
    set?: $Enums.ChatMessageRole
  }

  export type UserUpdateOneRequiredWithoutChatHistoryNestedInput = {
    create?: XOR<UserCreateWithoutChatHistoryInput, UserUncheckedCreateWithoutChatHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatHistoryInput
    upsert?: UserUpsertWithoutChatHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatHistoryInput, UserUpdateWithoutChatHistoryInput>, UserUncheckedUpdateWithoutChatHistoryInput>
  }

  export type UserCreateNestedOneWithoutCurveStatesInput = {
    create?: XOR<UserCreateWithoutCurveStatesInput, UserUncheckedCreateWithoutCurveStatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCurveStatesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutCurveStatesNestedInput = {
    create?: XOR<UserCreateWithoutCurveStatesInput, UserUncheckedCreateWithoutCurveStatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCurveStatesInput
    upsert?: UserUpsertWithoutCurveStatesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCurveStatesInput, UserUpdateWithoutCurveStatesInput>, UserUncheckedUpdateWithoutCurveStatesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumQuestionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[]
    notIn?: $Enums.QuestionType[]
    not?: NestedEnumQuestionTypeFilter<$PrismaModel> | $Enums.QuestionType
  }

  export type NestedEnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[]
    notIn?: $Enums.Difficulty[]
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type NestedEnumQuestionSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionSource | EnumQuestionSourceFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionSource[]
    notIn?: $Enums.QuestionSource[]
    not?: NestedEnumQuestionSourceFilter<$PrismaModel> | $Enums.QuestionSource
  }

  export type NestedEnumQuestionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionStatus | EnumQuestionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionStatus[]
    notIn?: $Enums.QuestionStatus[]
    not?: NestedEnumQuestionStatusFilter<$PrismaModel> | $Enums.QuestionStatus
  }

  export type NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[]
    notIn?: $Enums.QuestionType[]
    not?: NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuestionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionTypeFilter<$PrismaModel>
    _max?: NestedEnumQuestionTypeFilter<$PrismaModel>
  }

  export type NestedEnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[]
    notIn?: $Enums.Difficulty[]
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumQuestionSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionSource | EnumQuestionSourceFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionSource[]
    notIn?: $Enums.QuestionSource[]
    not?: NestedEnumQuestionSourceWithAggregatesFilter<$PrismaModel> | $Enums.QuestionSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionSourceFilter<$PrismaModel>
    _max?: NestedEnumQuestionSourceFilter<$PrismaModel>
  }

  export type NestedEnumQuestionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionStatus | EnumQuestionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionStatus[]
    notIn?: $Enums.QuestionStatus[]
    not?: NestedEnumQuestionStatusWithAggregatesFilter<$PrismaModel> | $Enums.QuestionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionStatusFilter<$PrismaModel>
    _max?: NestedEnumQuestionStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTestModuleFilter<$PrismaModel = never> = {
    equals?: $Enums.TestModule | EnumTestModuleFieldRefInput<$PrismaModel>
    in?: $Enums.TestModule[]
    notIn?: $Enums.TestModule[]
    not?: NestedEnumTestModuleFilter<$PrismaModel> | $Enums.TestModule
  }

  export type NestedEnumTestModuleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TestModule | EnumTestModuleFieldRefInput<$PrismaModel>
    in?: $Enums.TestModule[]
    notIn?: $Enums.TestModule[]
    not?: NestedEnumTestModuleWithAggregatesFilter<$PrismaModel> | $Enums.TestModule
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTestModuleFilter<$PrismaModel>
    _max?: NestedEnumTestModuleFilter<$PrismaModel>
  }

  export type NestedEnumChatMessageRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatMessageRole | EnumChatMessageRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ChatMessageRole[]
    notIn?: $Enums.ChatMessageRole[]
    not?: NestedEnumChatMessageRoleFilter<$PrismaModel> | $Enums.ChatMessageRole
  }

  export type NestedEnumChatMessageRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatMessageRole | EnumChatMessageRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ChatMessageRole[]
    notIn?: $Enums.ChatMessageRole[]
    not?: NestedEnumChatMessageRoleWithAggregatesFilter<$PrismaModel> | $Enums.ChatMessageRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChatMessageRoleFilter<$PrismaModel>
    _max?: NestedEnumChatMessageRoleFilter<$PrismaModel>
  }

  export type StudyRecordCreateWithoutUserInput = {
    id?: string
    userAnswer?: string | null
    isCorrect: boolean
    timeSpent: number
    createdAt?: Date | string
    question: QuestionCreateNestedOneWithoutStudyRecordsInput
  }

  export type StudyRecordUncheckedCreateWithoutUserInput = {
    id?: string
    questionId: string
    userAnswer?: string | null
    isCorrect: boolean
    timeSpent: number
    createdAt?: Date | string
  }

  export type StudyRecordCreateOrConnectWithoutUserInput = {
    where: StudyRecordWhereUniqueInput
    create: XOR<StudyRecordCreateWithoutUserInput, StudyRecordUncheckedCreateWithoutUserInput>
  }

  export type StudyRecordCreateManyUserInputEnvelope = {
    data: StudyRecordCreateManyUserInput | StudyRecordCreateManyUserInput[]
  }

  export type WrongQuestionBookCreateWithoutUserInput = {
    id?: string
    wrongCount?: number
    question: QuestionCreateNestedOneWithoutWrongBookInput
  }

  export type WrongQuestionBookUncheckedCreateWithoutUserInput = {
    id?: string
    questionId: string
    wrongCount?: number
  }

  export type WrongQuestionBookCreateOrConnectWithoutUserInput = {
    where: WrongQuestionBookWhereUniqueInput
    create: XOR<WrongQuestionBookCreateWithoutUserInput, WrongQuestionBookUncheckedCreateWithoutUserInput>
  }

  export type WrongQuestionBookCreateManyUserInputEnvelope = {
    data: WrongQuestionBookCreateManyUserInput | WrongQuestionBookCreateManyUserInput[]
  }

  export type TestReportCreateWithoutUserInput = {
    id?: string
    module: $Enums.TestModule
    score: number
    aiAnalysis: string
    createdAt?: Date | string
  }

  export type TestReportUncheckedCreateWithoutUserInput = {
    id?: string
    module: $Enums.TestModule
    score: number
    aiAnalysis: string
    createdAt?: Date | string
  }

  export type TestReportCreateOrConnectWithoutUserInput = {
    where: TestReportWhereUniqueInput
    create: XOR<TestReportCreateWithoutUserInput, TestReportUncheckedCreateWithoutUserInput>
  }

  export type TestReportCreateManyUserInputEnvelope = {
    data: TestReportCreateManyUserInput | TestReportCreateManyUserInput[]
  }

  export type ChatHistoryCreateWithoutUserInput = {
    id?: string
    role: $Enums.ChatMessageRole
    content: string
    timestamp?: Date | string
  }

  export type ChatHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    role: $Enums.ChatMessageRole
    content: string
    timestamp?: Date | string
  }

  export type ChatHistoryCreateOrConnectWithoutUserInput = {
    where: ChatHistoryWhereUniqueInput
    create: XOR<ChatHistoryCreateWithoutUserInput, ChatHistoryUncheckedCreateWithoutUserInput>
  }

  export type ChatHistoryCreateManyUserInputEnvelope = {
    data: ChatHistoryCreateManyUserInput | ChatHistoryCreateManyUserInput[]
  }

  export type CurveStateCreateWithoutOwnerInput = {
    id?: string
    stateJson: string
    createdAt?: Date | string
  }

  export type CurveStateUncheckedCreateWithoutOwnerInput = {
    id?: string
    stateJson: string
    createdAt?: Date | string
  }

  export type CurveStateCreateOrConnectWithoutOwnerInput = {
    where: CurveStateWhereUniqueInput
    create: XOR<CurveStateCreateWithoutOwnerInput, CurveStateUncheckedCreateWithoutOwnerInput>
  }

  export type CurveStateCreateManyOwnerInputEnvelope = {
    data: CurveStateCreateManyOwnerInput | CurveStateCreateManyOwnerInput[]
  }

  export type StudyRecordUpsertWithWhereUniqueWithoutUserInput = {
    where: StudyRecordWhereUniqueInput
    update: XOR<StudyRecordUpdateWithoutUserInput, StudyRecordUncheckedUpdateWithoutUserInput>
    create: XOR<StudyRecordCreateWithoutUserInput, StudyRecordUncheckedCreateWithoutUserInput>
  }

  export type StudyRecordUpdateWithWhereUniqueWithoutUserInput = {
    where: StudyRecordWhereUniqueInput
    data: XOR<StudyRecordUpdateWithoutUserInput, StudyRecordUncheckedUpdateWithoutUserInput>
  }

  export type StudyRecordUpdateManyWithWhereWithoutUserInput = {
    where: StudyRecordScalarWhereInput
    data: XOR<StudyRecordUpdateManyMutationInput, StudyRecordUncheckedUpdateManyWithoutUserInput>
  }

  export type StudyRecordScalarWhereInput = {
    AND?: StudyRecordScalarWhereInput | StudyRecordScalarWhereInput[]
    OR?: StudyRecordScalarWhereInput[]
    NOT?: StudyRecordScalarWhereInput | StudyRecordScalarWhereInput[]
    id?: StringFilter<"StudyRecord"> | string
    userId?: StringFilter<"StudyRecord"> | string
    questionId?: StringFilter<"StudyRecord"> | string
    userAnswer?: StringNullableFilter<"StudyRecord"> | string | null
    isCorrect?: BoolFilter<"StudyRecord"> | boolean
    timeSpent?: IntFilter<"StudyRecord"> | number
    createdAt?: DateTimeFilter<"StudyRecord"> | Date | string
  }

  export type WrongQuestionBookUpsertWithWhereUniqueWithoutUserInput = {
    where: WrongQuestionBookWhereUniqueInput
    update: XOR<WrongQuestionBookUpdateWithoutUserInput, WrongQuestionBookUncheckedUpdateWithoutUserInput>
    create: XOR<WrongQuestionBookCreateWithoutUserInput, WrongQuestionBookUncheckedCreateWithoutUserInput>
  }

  export type WrongQuestionBookUpdateWithWhereUniqueWithoutUserInput = {
    where: WrongQuestionBookWhereUniqueInput
    data: XOR<WrongQuestionBookUpdateWithoutUserInput, WrongQuestionBookUncheckedUpdateWithoutUserInput>
  }

  export type WrongQuestionBookUpdateManyWithWhereWithoutUserInput = {
    where: WrongQuestionBookScalarWhereInput
    data: XOR<WrongQuestionBookUpdateManyMutationInput, WrongQuestionBookUncheckedUpdateManyWithoutUserInput>
  }

  export type WrongQuestionBookScalarWhereInput = {
    AND?: WrongQuestionBookScalarWhereInput | WrongQuestionBookScalarWhereInput[]
    OR?: WrongQuestionBookScalarWhereInput[]
    NOT?: WrongQuestionBookScalarWhereInput | WrongQuestionBookScalarWhereInput[]
    id?: StringFilter<"WrongQuestionBook"> | string
    userId?: StringFilter<"WrongQuestionBook"> | string
    questionId?: StringFilter<"WrongQuestionBook"> | string
    wrongCount?: IntFilter<"WrongQuestionBook"> | number
  }

  export type TestReportUpsertWithWhereUniqueWithoutUserInput = {
    where: TestReportWhereUniqueInput
    update: XOR<TestReportUpdateWithoutUserInput, TestReportUncheckedUpdateWithoutUserInput>
    create: XOR<TestReportCreateWithoutUserInput, TestReportUncheckedCreateWithoutUserInput>
  }

  export type TestReportUpdateWithWhereUniqueWithoutUserInput = {
    where: TestReportWhereUniqueInput
    data: XOR<TestReportUpdateWithoutUserInput, TestReportUncheckedUpdateWithoutUserInput>
  }

  export type TestReportUpdateManyWithWhereWithoutUserInput = {
    where: TestReportScalarWhereInput
    data: XOR<TestReportUpdateManyMutationInput, TestReportUncheckedUpdateManyWithoutUserInput>
  }

  export type TestReportScalarWhereInput = {
    AND?: TestReportScalarWhereInput | TestReportScalarWhereInput[]
    OR?: TestReportScalarWhereInput[]
    NOT?: TestReportScalarWhereInput | TestReportScalarWhereInput[]
    id?: StringFilter<"TestReport"> | string
    userId?: StringFilter<"TestReport"> | string
    module?: EnumTestModuleFilter<"TestReport"> | $Enums.TestModule
    score?: IntFilter<"TestReport"> | number
    aiAnalysis?: StringFilter<"TestReport"> | string
    createdAt?: DateTimeFilter<"TestReport"> | Date | string
  }

  export type ChatHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatHistoryWhereUniqueInput
    update: XOR<ChatHistoryUpdateWithoutUserInput, ChatHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<ChatHistoryCreateWithoutUserInput, ChatHistoryUncheckedCreateWithoutUserInput>
  }

  export type ChatHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatHistoryWhereUniqueInput
    data: XOR<ChatHistoryUpdateWithoutUserInput, ChatHistoryUncheckedUpdateWithoutUserInput>
  }

  export type ChatHistoryUpdateManyWithWhereWithoutUserInput = {
    where: ChatHistoryScalarWhereInput
    data: XOR<ChatHistoryUpdateManyMutationInput, ChatHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatHistoryScalarWhereInput = {
    AND?: ChatHistoryScalarWhereInput | ChatHistoryScalarWhereInput[]
    OR?: ChatHistoryScalarWhereInput[]
    NOT?: ChatHistoryScalarWhereInput | ChatHistoryScalarWhereInput[]
    id?: StringFilter<"ChatHistory"> | string
    userId?: StringFilter<"ChatHistory"> | string
    role?: EnumChatMessageRoleFilter<"ChatHistory"> | $Enums.ChatMessageRole
    content?: StringFilter<"ChatHistory"> | string
    timestamp?: DateTimeFilter<"ChatHistory"> | Date | string
  }

  export type CurveStateUpsertWithWhereUniqueWithoutOwnerInput = {
    where: CurveStateWhereUniqueInput
    update: XOR<CurveStateUpdateWithoutOwnerInput, CurveStateUncheckedUpdateWithoutOwnerInput>
    create: XOR<CurveStateCreateWithoutOwnerInput, CurveStateUncheckedCreateWithoutOwnerInput>
  }

  export type CurveStateUpdateWithWhereUniqueWithoutOwnerInput = {
    where: CurveStateWhereUniqueInput
    data: XOR<CurveStateUpdateWithoutOwnerInput, CurveStateUncheckedUpdateWithoutOwnerInput>
  }

  export type CurveStateUpdateManyWithWhereWithoutOwnerInput = {
    where: CurveStateScalarWhereInput
    data: XOR<CurveStateUpdateManyMutationInput, CurveStateUncheckedUpdateManyWithoutOwnerInput>
  }

  export type CurveStateScalarWhereInput = {
    AND?: CurveStateScalarWhereInput | CurveStateScalarWhereInput[]
    OR?: CurveStateScalarWhereInput[]
    NOT?: CurveStateScalarWhereInput | CurveStateScalarWhereInput[]
    id?: StringFilter<"CurveState"> | string
    stateJson?: StringFilter<"CurveState"> | string
    createdAt?: DateTimeFilter<"CurveState"> | Date | string
    ownerUserId?: StringNullableFilter<"CurveState"> | string | null
  }

  export type KnowledgeCreateWithoutChildrenInput = {
    id?: string
    title: string
    content: string
    category: string
    order?: number
    parent?: KnowledgeCreateNestedOneWithoutChildrenInput
  }

  export type KnowledgeUncheckedCreateWithoutChildrenInput = {
    id?: string
    title: string
    content: string
    category: string
    parentId?: string | null
    order?: number
  }

  export type KnowledgeCreateOrConnectWithoutChildrenInput = {
    where: KnowledgeWhereUniqueInput
    create: XOR<KnowledgeCreateWithoutChildrenInput, KnowledgeUncheckedCreateWithoutChildrenInput>
  }

  export type KnowledgeCreateWithoutParentInput = {
    id?: string
    title: string
    content: string
    category: string
    order?: number
    children?: KnowledgeCreateNestedManyWithoutParentInput
  }

  export type KnowledgeUncheckedCreateWithoutParentInput = {
    id?: string
    title: string
    content: string
    category: string
    order?: number
    children?: KnowledgeUncheckedCreateNestedManyWithoutParentInput
  }

  export type KnowledgeCreateOrConnectWithoutParentInput = {
    where: KnowledgeWhereUniqueInput
    create: XOR<KnowledgeCreateWithoutParentInput, KnowledgeUncheckedCreateWithoutParentInput>
  }

  export type KnowledgeCreateManyParentInputEnvelope = {
    data: KnowledgeCreateManyParentInput | KnowledgeCreateManyParentInput[]
  }

  export type KnowledgeUpsertWithoutChildrenInput = {
    update: XOR<KnowledgeUpdateWithoutChildrenInput, KnowledgeUncheckedUpdateWithoutChildrenInput>
    create: XOR<KnowledgeCreateWithoutChildrenInput, KnowledgeUncheckedCreateWithoutChildrenInput>
    where?: KnowledgeWhereInput
  }

  export type KnowledgeUpdateToOneWithWhereWithoutChildrenInput = {
    where?: KnowledgeWhereInput
    data: XOR<KnowledgeUpdateWithoutChildrenInput, KnowledgeUncheckedUpdateWithoutChildrenInput>
  }

  export type KnowledgeUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    parent?: KnowledgeUpdateOneWithoutChildrenNestedInput
  }

  export type KnowledgeUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type KnowledgeUpsertWithWhereUniqueWithoutParentInput = {
    where: KnowledgeWhereUniqueInput
    update: XOR<KnowledgeUpdateWithoutParentInput, KnowledgeUncheckedUpdateWithoutParentInput>
    create: XOR<KnowledgeCreateWithoutParentInput, KnowledgeUncheckedCreateWithoutParentInput>
  }

  export type KnowledgeUpdateWithWhereUniqueWithoutParentInput = {
    where: KnowledgeWhereUniqueInput
    data: XOR<KnowledgeUpdateWithoutParentInput, KnowledgeUncheckedUpdateWithoutParentInput>
  }

  export type KnowledgeUpdateManyWithWhereWithoutParentInput = {
    where: KnowledgeScalarWhereInput
    data: XOR<KnowledgeUpdateManyMutationInput, KnowledgeUncheckedUpdateManyWithoutParentInput>
  }

  export type KnowledgeScalarWhereInput = {
    AND?: KnowledgeScalarWhereInput | KnowledgeScalarWhereInput[]
    OR?: KnowledgeScalarWhereInput[]
    NOT?: KnowledgeScalarWhereInput | KnowledgeScalarWhereInput[]
    id?: StringFilter<"Knowledge"> | string
    title?: StringFilter<"Knowledge"> | string
    content?: StringFilter<"Knowledge"> | string
    category?: StringFilter<"Knowledge"> | string
    parentId?: StringNullableFilter<"Knowledge"> | string | null
    order?: IntFilter<"Knowledge"> | number
  }

  export type StudyRecordCreateWithoutQuestionInput = {
    id?: string
    userAnswer?: string | null
    isCorrect: boolean
    timeSpent: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutStudyRecordsInput
  }

  export type StudyRecordUncheckedCreateWithoutQuestionInput = {
    id?: string
    userId: string
    userAnswer?: string | null
    isCorrect: boolean
    timeSpent: number
    createdAt?: Date | string
  }

  export type StudyRecordCreateOrConnectWithoutQuestionInput = {
    where: StudyRecordWhereUniqueInput
    create: XOR<StudyRecordCreateWithoutQuestionInput, StudyRecordUncheckedCreateWithoutQuestionInput>
  }

  export type StudyRecordCreateManyQuestionInputEnvelope = {
    data: StudyRecordCreateManyQuestionInput | StudyRecordCreateManyQuestionInput[]
  }

  export type WrongQuestionBookCreateWithoutQuestionInput = {
    id?: string
    wrongCount?: number
    user: UserCreateNestedOneWithoutWrongBookInput
  }

  export type WrongQuestionBookUncheckedCreateWithoutQuestionInput = {
    id?: string
    userId: string
    wrongCount?: number
  }

  export type WrongQuestionBookCreateOrConnectWithoutQuestionInput = {
    where: WrongQuestionBookWhereUniqueInput
    create: XOR<WrongQuestionBookCreateWithoutQuestionInput, WrongQuestionBookUncheckedCreateWithoutQuestionInput>
  }

  export type WrongQuestionBookCreateManyQuestionInputEnvelope = {
    data: WrongQuestionBookCreateManyQuestionInput | WrongQuestionBookCreateManyQuestionInput[]
  }

  export type GeneratedQuestionCreateWithoutParentQuestionInput = {
    id?: string
    difficultyLevel: $Enums.Difficulty
    content: string
    answer?: string | null
    solution?: string | null
  }

  export type GeneratedQuestionUncheckedCreateWithoutParentQuestionInput = {
    id?: string
    difficultyLevel: $Enums.Difficulty
    content: string
    answer?: string | null
    solution?: string | null
  }

  export type GeneratedQuestionCreateOrConnectWithoutParentQuestionInput = {
    where: GeneratedQuestionWhereUniqueInput
    create: XOR<GeneratedQuestionCreateWithoutParentQuestionInput, GeneratedQuestionUncheckedCreateWithoutParentQuestionInput>
  }

  export type GeneratedQuestionCreateManyParentQuestionInputEnvelope = {
    data: GeneratedQuestionCreateManyParentQuestionInput | GeneratedQuestionCreateManyParentQuestionInput[]
  }

  export type StudyRecordUpsertWithWhereUniqueWithoutQuestionInput = {
    where: StudyRecordWhereUniqueInput
    update: XOR<StudyRecordUpdateWithoutQuestionInput, StudyRecordUncheckedUpdateWithoutQuestionInput>
    create: XOR<StudyRecordCreateWithoutQuestionInput, StudyRecordUncheckedCreateWithoutQuestionInput>
  }

  export type StudyRecordUpdateWithWhereUniqueWithoutQuestionInput = {
    where: StudyRecordWhereUniqueInput
    data: XOR<StudyRecordUpdateWithoutQuestionInput, StudyRecordUncheckedUpdateWithoutQuestionInput>
  }

  export type StudyRecordUpdateManyWithWhereWithoutQuestionInput = {
    where: StudyRecordScalarWhereInput
    data: XOR<StudyRecordUpdateManyMutationInput, StudyRecordUncheckedUpdateManyWithoutQuestionInput>
  }

  export type WrongQuestionBookUpsertWithWhereUniqueWithoutQuestionInput = {
    where: WrongQuestionBookWhereUniqueInput
    update: XOR<WrongQuestionBookUpdateWithoutQuestionInput, WrongQuestionBookUncheckedUpdateWithoutQuestionInput>
    create: XOR<WrongQuestionBookCreateWithoutQuestionInput, WrongQuestionBookUncheckedCreateWithoutQuestionInput>
  }

  export type WrongQuestionBookUpdateWithWhereUniqueWithoutQuestionInput = {
    where: WrongQuestionBookWhereUniqueInput
    data: XOR<WrongQuestionBookUpdateWithoutQuestionInput, WrongQuestionBookUncheckedUpdateWithoutQuestionInput>
  }

  export type WrongQuestionBookUpdateManyWithWhereWithoutQuestionInput = {
    where: WrongQuestionBookScalarWhereInput
    data: XOR<WrongQuestionBookUpdateManyMutationInput, WrongQuestionBookUncheckedUpdateManyWithoutQuestionInput>
  }

  export type GeneratedQuestionUpsertWithWhereUniqueWithoutParentQuestionInput = {
    where: GeneratedQuestionWhereUniqueInput
    update: XOR<GeneratedQuestionUpdateWithoutParentQuestionInput, GeneratedQuestionUncheckedUpdateWithoutParentQuestionInput>
    create: XOR<GeneratedQuestionCreateWithoutParentQuestionInput, GeneratedQuestionUncheckedCreateWithoutParentQuestionInput>
  }

  export type GeneratedQuestionUpdateWithWhereUniqueWithoutParentQuestionInput = {
    where: GeneratedQuestionWhereUniqueInput
    data: XOR<GeneratedQuestionUpdateWithoutParentQuestionInput, GeneratedQuestionUncheckedUpdateWithoutParentQuestionInput>
  }

  export type GeneratedQuestionUpdateManyWithWhereWithoutParentQuestionInput = {
    where: GeneratedQuestionScalarWhereInput
    data: XOR<GeneratedQuestionUpdateManyMutationInput, GeneratedQuestionUncheckedUpdateManyWithoutParentQuestionInput>
  }

  export type GeneratedQuestionScalarWhereInput = {
    AND?: GeneratedQuestionScalarWhereInput | GeneratedQuestionScalarWhereInput[]
    OR?: GeneratedQuestionScalarWhereInput[]
    NOT?: GeneratedQuestionScalarWhereInput | GeneratedQuestionScalarWhereInput[]
    id?: StringFilter<"GeneratedQuestion"> | string
    parentQuestionId?: StringFilter<"GeneratedQuestion"> | string
    difficultyLevel?: EnumDifficultyFilter<"GeneratedQuestion"> | $Enums.Difficulty
    content?: StringFilter<"GeneratedQuestion"> | string
    answer?: StringNullableFilter<"GeneratedQuestion"> | string | null
    solution?: StringNullableFilter<"GeneratedQuestion"> | string | null
  }

  export type QuestionCreateWithoutGeneratedInput = {
    id?: string
    type: $Enums.QuestionType
    difficulty: $Enums.Difficulty
    content: string
    answer?: string | null
    solution?: string | null
    pitfalls?: string | null
    knowledgePoints?: NullableJsonNullValueInput | InputJsonValue
    source: $Enums.QuestionSource
    imageUrl?: string | null
    status?: $Enums.QuestionStatus
    createdAt?: Date | string
    studyRecords?: StudyRecordCreateNestedManyWithoutQuestionInput
    wrongBook?: WrongQuestionBookCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutGeneratedInput = {
    id?: string
    type: $Enums.QuestionType
    difficulty: $Enums.Difficulty
    content: string
    answer?: string | null
    solution?: string | null
    pitfalls?: string | null
    knowledgePoints?: NullableJsonNullValueInput | InputJsonValue
    source: $Enums.QuestionSource
    imageUrl?: string | null
    status?: $Enums.QuestionStatus
    createdAt?: Date | string
    studyRecords?: StudyRecordUncheckedCreateNestedManyWithoutQuestionInput
    wrongBook?: WrongQuestionBookUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutGeneratedInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutGeneratedInput, QuestionUncheckedCreateWithoutGeneratedInput>
  }

  export type QuestionUpsertWithoutGeneratedInput = {
    update: XOR<QuestionUpdateWithoutGeneratedInput, QuestionUncheckedUpdateWithoutGeneratedInput>
    create: XOR<QuestionCreateWithoutGeneratedInput, QuestionUncheckedCreateWithoutGeneratedInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutGeneratedInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutGeneratedInput, QuestionUncheckedUpdateWithoutGeneratedInput>
  }

  export type QuestionUpdateWithoutGeneratedInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    content?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    pitfalls?: NullableStringFieldUpdateOperationsInput | string | null
    knowledgePoints?: NullableJsonNullValueInput | InputJsonValue
    source?: EnumQuestionSourceFieldUpdateOperationsInput | $Enums.QuestionSource
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studyRecords?: StudyRecordUpdateManyWithoutQuestionNestedInput
    wrongBook?: WrongQuestionBookUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutGeneratedInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    content?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    pitfalls?: NullableStringFieldUpdateOperationsInput | string | null
    knowledgePoints?: NullableJsonNullValueInput | InputJsonValue
    source?: EnumQuestionSourceFieldUpdateOperationsInput | $Enums.QuestionSource
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studyRecords?: StudyRecordUncheckedUpdateManyWithoutQuestionNestedInput
    wrongBook?: WrongQuestionBookUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type UserCreateWithoutStudyRecordsInput = {
    id?: string
    role: $Enums.Role
    name: string
    email: string
    classGroup?: string | null
    passwordHash: string
    createdAt?: Date | string
    wrongBook?: WrongQuestionBookCreateNestedManyWithoutUserInput
    testReports?: TestReportCreateNestedManyWithoutUserInput
    chatHistory?: ChatHistoryCreateNestedManyWithoutUserInput
    curveStates?: CurveStateCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutStudyRecordsInput = {
    id?: string
    role: $Enums.Role
    name: string
    email: string
    classGroup?: string | null
    passwordHash: string
    createdAt?: Date | string
    wrongBook?: WrongQuestionBookUncheckedCreateNestedManyWithoutUserInput
    testReports?: TestReportUncheckedCreateNestedManyWithoutUserInput
    chatHistory?: ChatHistoryUncheckedCreateNestedManyWithoutUserInput
    curveStates?: CurveStateUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutStudyRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudyRecordsInput, UserUncheckedCreateWithoutStudyRecordsInput>
  }

  export type QuestionCreateWithoutStudyRecordsInput = {
    id?: string
    type: $Enums.QuestionType
    difficulty: $Enums.Difficulty
    content: string
    answer?: string | null
    solution?: string | null
    pitfalls?: string | null
    knowledgePoints?: NullableJsonNullValueInput | InputJsonValue
    source: $Enums.QuestionSource
    imageUrl?: string | null
    status?: $Enums.QuestionStatus
    createdAt?: Date | string
    wrongBook?: WrongQuestionBookCreateNestedManyWithoutQuestionInput
    generated?: GeneratedQuestionCreateNestedManyWithoutParentQuestionInput
  }

  export type QuestionUncheckedCreateWithoutStudyRecordsInput = {
    id?: string
    type: $Enums.QuestionType
    difficulty: $Enums.Difficulty
    content: string
    answer?: string | null
    solution?: string | null
    pitfalls?: string | null
    knowledgePoints?: NullableJsonNullValueInput | InputJsonValue
    source: $Enums.QuestionSource
    imageUrl?: string | null
    status?: $Enums.QuestionStatus
    createdAt?: Date | string
    wrongBook?: WrongQuestionBookUncheckedCreateNestedManyWithoutQuestionInput
    generated?: GeneratedQuestionUncheckedCreateNestedManyWithoutParentQuestionInput
  }

  export type QuestionCreateOrConnectWithoutStudyRecordsInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutStudyRecordsInput, QuestionUncheckedCreateWithoutStudyRecordsInput>
  }

  export type UserUpsertWithoutStudyRecordsInput = {
    update: XOR<UserUpdateWithoutStudyRecordsInput, UserUncheckedUpdateWithoutStudyRecordsInput>
    create: XOR<UserCreateWithoutStudyRecordsInput, UserUncheckedCreateWithoutStudyRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudyRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudyRecordsInput, UserUncheckedUpdateWithoutStudyRecordsInput>
  }

  export type UserUpdateWithoutStudyRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    classGroup?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wrongBook?: WrongQuestionBookUpdateManyWithoutUserNestedInput
    testReports?: TestReportUpdateManyWithoutUserNestedInput
    chatHistory?: ChatHistoryUpdateManyWithoutUserNestedInput
    curveStates?: CurveStateUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutStudyRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    classGroup?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wrongBook?: WrongQuestionBookUncheckedUpdateManyWithoutUserNestedInput
    testReports?: TestReportUncheckedUpdateManyWithoutUserNestedInput
    chatHistory?: ChatHistoryUncheckedUpdateManyWithoutUserNestedInput
    curveStates?: CurveStateUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type QuestionUpsertWithoutStudyRecordsInput = {
    update: XOR<QuestionUpdateWithoutStudyRecordsInput, QuestionUncheckedUpdateWithoutStudyRecordsInput>
    create: XOR<QuestionCreateWithoutStudyRecordsInput, QuestionUncheckedCreateWithoutStudyRecordsInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutStudyRecordsInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutStudyRecordsInput, QuestionUncheckedUpdateWithoutStudyRecordsInput>
  }

  export type QuestionUpdateWithoutStudyRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    content?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    pitfalls?: NullableStringFieldUpdateOperationsInput | string | null
    knowledgePoints?: NullableJsonNullValueInput | InputJsonValue
    source?: EnumQuestionSourceFieldUpdateOperationsInput | $Enums.QuestionSource
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wrongBook?: WrongQuestionBookUpdateManyWithoutQuestionNestedInput
    generated?: GeneratedQuestionUpdateManyWithoutParentQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutStudyRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    content?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    pitfalls?: NullableStringFieldUpdateOperationsInput | string | null
    knowledgePoints?: NullableJsonNullValueInput | InputJsonValue
    source?: EnumQuestionSourceFieldUpdateOperationsInput | $Enums.QuestionSource
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wrongBook?: WrongQuestionBookUncheckedUpdateManyWithoutQuestionNestedInput
    generated?: GeneratedQuestionUncheckedUpdateManyWithoutParentQuestionNestedInput
  }

  export type UserCreateWithoutWrongBookInput = {
    id?: string
    role: $Enums.Role
    name: string
    email: string
    classGroup?: string | null
    passwordHash: string
    createdAt?: Date | string
    studyRecords?: StudyRecordCreateNestedManyWithoutUserInput
    testReports?: TestReportCreateNestedManyWithoutUserInput
    chatHistory?: ChatHistoryCreateNestedManyWithoutUserInput
    curveStates?: CurveStateCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutWrongBookInput = {
    id?: string
    role: $Enums.Role
    name: string
    email: string
    classGroup?: string | null
    passwordHash: string
    createdAt?: Date | string
    studyRecords?: StudyRecordUncheckedCreateNestedManyWithoutUserInput
    testReports?: TestReportUncheckedCreateNestedManyWithoutUserInput
    chatHistory?: ChatHistoryUncheckedCreateNestedManyWithoutUserInput
    curveStates?: CurveStateUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutWrongBookInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWrongBookInput, UserUncheckedCreateWithoutWrongBookInput>
  }

  export type QuestionCreateWithoutWrongBookInput = {
    id?: string
    type: $Enums.QuestionType
    difficulty: $Enums.Difficulty
    content: string
    answer?: string | null
    solution?: string | null
    pitfalls?: string | null
    knowledgePoints?: NullableJsonNullValueInput | InputJsonValue
    source: $Enums.QuestionSource
    imageUrl?: string | null
    status?: $Enums.QuestionStatus
    createdAt?: Date | string
    studyRecords?: StudyRecordCreateNestedManyWithoutQuestionInput
    generated?: GeneratedQuestionCreateNestedManyWithoutParentQuestionInput
  }

  export type QuestionUncheckedCreateWithoutWrongBookInput = {
    id?: string
    type: $Enums.QuestionType
    difficulty: $Enums.Difficulty
    content: string
    answer?: string | null
    solution?: string | null
    pitfalls?: string | null
    knowledgePoints?: NullableJsonNullValueInput | InputJsonValue
    source: $Enums.QuestionSource
    imageUrl?: string | null
    status?: $Enums.QuestionStatus
    createdAt?: Date | string
    studyRecords?: StudyRecordUncheckedCreateNestedManyWithoutQuestionInput
    generated?: GeneratedQuestionUncheckedCreateNestedManyWithoutParentQuestionInput
  }

  export type QuestionCreateOrConnectWithoutWrongBookInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutWrongBookInput, QuestionUncheckedCreateWithoutWrongBookInput>
  }

  export type UserUpsertWithoutWrongBookInput = {
    update: XOR<UserUpdateWithoutWrongBookInput, UserUncheckedUpdateWithoutWrongBookInput>
    create: XOR<UserCreateWithoutWrongBookInput, UserUncheckedCreateWithoutWrongBookInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWrongBookInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWrongBookInput, UserUncheckedUpdateWithoutWrongBookInput>
  }

  export type UserUpdateWithoutWrongBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    classGroup?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studyRecords?: StudyRecordUpdateManyWithoutUserNestedInput
    testReports?: TestReportUpdateManyWithoutUserNestedInput
    chatHistory?: ChatHistoryUpdateManyWithoutUserNestedInput
    curveStates?: CurveStateUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutWrongBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    classGroup?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studyRecords?: StudyRecordUncheckedUpdateManyWithoutUserNestedInput
    testReports?: TestReportUncheckedUpdateManyWithoutUserNestedInput
    chatHistory?: ChatHistoryUncheckedUpdateManyWithoutUserNestedInput
    curveStates?: CurveStateUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type QuestionUpsertWithoutWrongBookInput = {
    update: XOR<QuestionUpdateWithoutWrongBookInput, QuestionUncheckedUpdateWithoutWrongBookInput>
    create: XOR<QuestionCreateWithoutWrongBookInput, QuestionUncheckedCreateWithoutWrongBookInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutWrongBookInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutWrongBookInput, QuestionUncheckedUpdateWithoutWrongBookInput>
  }

  export type QuestionUpdateWithoutWrongBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    content?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    pitfalls?: NullableStringFieldUpdateOperationsInput | string | null
    knowledgePoints?: NullableJsonNullValueInput | InputJsonValue
    source?: EnumQuestionSourceFieldUpdateOperationsInput | $Enums.QuestionSource
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studyRecords?: StudyRecordUpdateManyWithoutQuestionNestedInput
    generated?: GeneratedQuestionUpdateManyWithoutParentQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutWrongBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    content?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
    pitfalls?: NullableStringFieldUpdateOperationsInput | string | null
    knowledgePoints?: NullableJsonNullValueInput | InputJsonValue
    source?: EnumQuestionSourceFieldUpdateOperationsInput | $Enums.QuestionSource
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumQuestionStatusFieldUpdateOperationsInput | $Enums.QuestionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studyRecords?: StudyRecordUncheckedUpdateManyWithoutQuestionNestedInput
    generated?: GeneratedQuestionUncheckedUpdateManyWithoutParentQuestionNestedInput
  }

  export type UserCreateWithoutTestReportsInput = {
    id?: string
    role: $Enums.Role
    name: string
    email: string
    classGroup?: string | null
    passwordHash: string
    createdAt?: Date | string
    studyRecords?: StudyRecordCreateNestedManyWithoutUserInput
    wrongBook?: WrongQuestionBookCreateNestedManyWithoutUserInput
    chatHistory?: ChatHistoryCreateNestedManyWithoutUserInput
    curveStates?: CurveStateCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutTestReportsInput = {
    id?: string
    role: $Enums.Role
    name: string
    email: string
    classGroup?: string | null
    passwordHash: string
    createdAt?: Date | string
    studyRecords?: StudyRecordUncheckedCreateNestedManyWithoutUserInput
    wrongBook?: WrongQuestionBookUncheckedCreateNestedManyWithoutUserInput
    chatHistory?: ChatHistoryUncheckedCreateNestedManyWithoutUserInput
    curveStates?: CurveStateUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutTestReportsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTestReportsInput, UserUncheckedCreateWithoutTestReportsInput>
  }

  export type UserUpsertWithoutTestReportsInput = {
    update: XOR<UserUpdateWithoutTestReportsInput, UserUncheckedUpdateWithoutTestReportsInput>
    create: XOR<UserCreateWithoutTestReportsInput, UserUncheckedCreateWithoutTestReportsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTestReportsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTestReportsInput, UserUncheckedUpdateWithoutTestReportsInput>
  }

  export type UserUpdateWithoutTestReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    classGroup?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studyRecords?: StudyRecordUpdateManyWithoutUserNestedInput
    wrongBook?: WrongQuestionBookUpdateManyWithoutUserNestedInput
    chatHistory?: ChatHistoryUpdateManyWithoutUserNestedInput
    curveStates?: CurveStateUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutTestReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    classGroup?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studyRecords?: StudyRecordUncheckedUpdateManyWithoutUserNestedInput
    wrongBook?: WrongQuestionBookUncheckedUpdateManyWithoutUserNestedInput
    chatHistory?: ChatHistoryUncheckedUpdateManyWithoutUserNestedInput
    curveStates?: CurveStateUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateWithoutChatHistoryInput = {
    id?: string
    role: $Enums.Role
    name: string
    email: string
    classGroup?: string | null
    passwordHash: string
    createdAt?: Date | string
    studyRecords?: StudyRecordCreateNestedManyWithoutUserInput
    wrongBook?: WrongQuestionBookCreateNestedManyWithoutUserInput
    testReports?: TestReportCreateNestedManyWithoutUserInput
    curveStates?: CurveStateCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutChatHistoryInput = {
    id?: string
    role: $Enums.Role
    name: string
    email: string
    classGroup?: string | null
    passwordHash: string
    createdAt?: Date | string
    studyRecords?: StudyRecordUncheckedCreateNestedManyWithoutUserInput
    wrongBook?: WrongQuestionBookUncheckedCreateNestedManyWithoutUserInput
    testReports?: TestReportUncheckedCreateNestedManyWithoutUserInput
    curveStates?: CurveStateUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutChatHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatHistoryInput, UserUncheckedCreateWithoutChatHistoryInput>
  }

  export type UserUpsertWithoutChatHistoryInput = {
    update: XOR<UserUpdateWithoutChatHistoryInput, UserUncheckedUpdateWithoutChatHistoryInput>
    create: XOR<UserCreateWithoutChatHistoryInput, UserUncheckedCreateWithoutChatHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatHistoryInput, UserUncheckedUpdateWithoutChatHistoryInput>
  }

  export type UserUpdateWithoutChatHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    classGroup?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studyRecords?: StudyRecordUpdateManyWithoutUserNestedInput
    wrongBook?: WrongQuestionBookUpdateManyWithoutUserNestedInput
    testReports?: TestReportUpdateManyWithoutUserNestedInput
    curveStates?: CurveStateUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutChatHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    classGroup?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studyRecords?: StudyRecordUncheckedUpdateManyWithoutUserNestedInput
    wrongBook?: WrongQuestionBookUncheckedUpdateManyWithoutUserNestedInput
    testReports?: TestReportUncheckedUpdateManyWithoutUserNestedInput
    curveStates?: CurveStateUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateWithoutCurveStatesInput = {
    id?: string
    role: $Enums.Role
    name: string
    email: string
    classGroup?: string | null
    passwordHash: string
    createdAt?: Date | string
    studyRecords?: StudyRecordCreateNestedManyWithoutUserInput
    wrongBook?: WrongQuestionBookCreateNestedManyWithoutUserInput
    testReports?: TestReportCreateNestedManyWithoutUserInput
    chatHistory?: ChatHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCurveStatesInput = {
    id?: string
    role: $Enums.Role
    name: string
    email: string
    classGroup?: string | null
    passwordHash: string
    createdAt?: Date | string
    studyRecords?: StudyRecordUncheckedCreateNestedManyWithoutUserInput
    wrongBook?: WrongQuestionBookUncheckedCreateNestedManyWithoutUserInput
    testReports?: TestReportUncheckedCreateNestedManyWithoutUserInput
    chatHistory?: ChatHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCurveStatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCurveStatesInput, UserUncheckedCreateWithoutCurveStatesInput>
  }

  export type UserUpsertWithoutCurveStatesInput = {
    update: XOR<UserUpdateWithoutCurveStatesInput, UserUncheckedUpdateWithoutCurveStatesInput>
    create: XOR<UserCreateWithoutCurveStatesInput, UserUncheckedCreateWithoutCurveStatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCurveStatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCurveStatesInput, UserUncheckedUpdateWithoutCurveStatesInput>
  }

  export type UserUpdateWithoutCurveStatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    classGroup?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studyRecords?: StudyRecordUpdateManyWithoutUserNestedInput
    wrongBook?: WrongQuestionBookUpdateManyWithoutUserNestedInput
    testReports?: TestReportUpdateManyWithoutUserNestedInput
    chatHistory?: ChatHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCurveStatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    classGroup?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studyRecords?: StudyRecordUncheckedUpdateManyWithoutUserNestedInput
    wrongBook?: WrongQuestionBookUncheckedUpdateManyWithoutUserNestedInput
    testReports?: TestReportUncheckedUpdateManyWithoutUserNestedInput
    chatHistory?: ChatHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StudyRecordCreateManyUserInput = {
    id?: string
    questionId: string
    userAnswer?: string | null
    isCorrect: boolean
    timeSpent: number
    createdAt?: Date | string
  }

  export type WrongQuestionBookCreateManyUserInput = {
    id?: string
    questionId: string
    wrongCount?: number
  }

  export type TestReportCreateManyUserInput = {
    id?: string
    module: $Enums.TestModule
    score: number
    aiAnalysis: string
    createdAt?: Date | string
  }

  export type ChatHistoryCreateManyUserInput = {
    id?: string
    role: $Enums.ChatMessageRole
    content: string
    timestamp?: Date | string
  }

  export type CurveStateCreateManyOwnerInput = {
    id?: string
    stateJson: string
    createdAt?: Date | string
  }

  export type StudyRecordUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeSpent?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutStudyRecordsNestedInput
  }

  export type StudyRecordUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeSpent?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyRecordUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeSpent?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WrongQuestionBookUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    wrongCount?: IntFieldUpdateOperationsInput | number
    question?: QuestionUpdateOneRequiredWithoutWrongBookNestedInput
  }

  export type WrongQuestionBookUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    wrongCount?: IntFieldUpdateOperationsInput | number
  }

  export type WrongQuestionBookUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    wrongCount?: IntFieldUpdateOperationsInput | number
  }

  export type TestReportUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: EnumTestModuleFieldUpdateOperationsInput | $Enums.TestModule
    score?: IntFieldUpdateOperationsInput | number
    aiAnalysis?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestReportUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: EnumTestModuleFieldUpdateOperationsInput | $Enums.TestModule
    score?: IntFieldUpdateOperationsInput | number
    aiAnalysis?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestReportUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: EnumTestModuleFieldUpdateOperationsInput | $Enums.TestModule
    score?: IntFieldUpdateOperationsInput | number
    aiAnalysis?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumChatMessageRoleFieldUpdateOperationsInput | $Enums.ChatMessageRole
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumChatMessageRoleFieldUpdateOperationsInput | $Enums.ChatMessageRole
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumChatMessageRoleFieldUpdateOperationsInput | $Enums.ChatMessageRole
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurveStateUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    stateJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurveStateUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    stateJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurveStateUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    stateJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KnowledgeCreateManyParentInput = {
    id?: string
    title: string
    content: string
    category: string
    order?: number
  }

  export type KnowledgeUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    children?: KnowledgeUpdateManyWithoutParentNestedInput
  }

  export type KnowledgeUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    children?: KnowledgeUncheckedUpdateManyWithoutParentNestedInput
  }

  export type KnowledgeUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type StudyRecordCreateManyQuestionInput = {
    id?: string
    userId: string
    userAnswer?: string | null
    isCorrect: boolean
    timeSpent: number
    createdAt?: Date | string
  }

  export type WrongQuestionBookCreateManyQuestionInput = {
    id?: string
    userId: string
    wrongCount?: number
  }

  export type GeneratedQuestionCreateManyParentQuestionInput = {
    id?: string
    difficultyLevel: $Enums.Difficulty
    content: string
    answer?: string | null
    solution?: string | null
  }

  export type StudyRecordUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeSpent?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStudyRecordsNestedInput
  }

  export type StudyRecordUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeSpent?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyRecordUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userAnswer?: NullableStringFieldUpdateOperationsInput | string | null
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    timeSpent?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WrongQuestionBookUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    wrongCount?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutWrongBookNestedInput
  }

  export type WrongQuestionBookUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    wrongCount?: IntFieldUpdateOperationsInput | number
  }

  export type WrongQuestionBookUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    wrongCount?: IntFieldUpdateOperationsInput | number
  }

  export type GeneratedQuestionUpdateWithoutParentQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    difficultyLevel?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    content?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GeneratedQuestionUncheckedUpdateWithoutParentQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    difficultyLevel?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    content?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GeneratedQuestionUncheckedUpdateManyWithoutParentQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    difficultyLevel?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    content?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    solution?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}