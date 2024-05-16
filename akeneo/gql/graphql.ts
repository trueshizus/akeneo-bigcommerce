/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any; }
};

/** An Akeneo Asset records */
export type Asset = {
  __typename?: 'Asset';
  code?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['String']['output']>;
  updated?: Maybe<Scalars['String']['output']>;
  values?: Maybe<Scalars['JSONObject']['output']>;
};

/** An Akeneo Asset Families Collection */
export type AssetFamiliesCollection = {
  __typename?: 'AssetFamiliesCollection';
  items?: Maybe<Array<Maybe<AssetFamily>>>;
  links?: Maybe<PageLinks>;
  /** Information about the current GraphQL query. */
  queryInformation?: Maybe<QueryInformation>;
};

/** An Akeneo Asset Families records Collection */
export type AssetFamiliesRecordsCollection = {
  __typename?: 'AssetFamiliesRecordsCollection';
  items?: Maybe<Array<Maybe<Asset>>>;
  links?: Maybe<PageLinks>;
  /** Information about the current GraphQL query. */
  queryInformation?: Maybe<QueryInformation>;
};

/** An Akeneo Asset Family */
export type AssetFamily = {
  __typename?: 'AssetFamily';
  attributeAsMainMedia?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<Array<Maybe<AssetFamilyAttribute>>>;
  code?: Maybe<Scalars['String']['output']>;
  labels?: Maybe<Array<Maybe<Scalars['JSONObject']['output']>>>;
};

/** An Akeneo Asset Attribute */
export type AssetFamilyAttribute = {
  __typename?: 'AssetFamilyAttribute';
  code?: Maybe<Scalars['String']['output']>;
  labels?: Maybe<Array<Maybe<Scalars['JSONObject']['output']>>>;
  mediaType?: Maybe<Scalars['String']['output']>;
  prefix?: Maybe<Scalars['String']['output']>;
  suffix?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  valuePerChannel?: Maybe<Scalars['Boolean']['output']>;
  valuePerLocale?: Maybe<Scalars['Boolean']['output']>;
};

/** An Akeneo Attribute */
export type Attribute = {
  __typename?: 'Attribute';
  code?: Maybe<Scalars['String']['output']>;
  group?: Maybe<Group>;
  isMainIdentifier?: Maybe<Scalars['Boolean']['output']>;
  labels?: Maybe<Array<Maybe<Scalars['JSONObject']['output']>>>;
  metricFamily?: Maybe<Scalars['String']['output']>;
  numberMax?: Maybe<Scalars['Int']['output']>;
  numberMin?: Maybe<Scalars['Int']['output']>;
  /** Reference entities and assets are RelatedObject in GraphQL application */
  relatedObject?: Maybe<RelatedObject>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  unique?: Maybe<Scalars['Boolean']['output']>;
  updated?: Maybe<Scalars['String']['output']>;
  valuePerChannel?: Maybe<Scalars['Boolean']['output']>;
  valuePerLocale?: Maybe<Scalars['Boolean']['output']>;
  /** The values of the attribute in the current context.                            If this field is queried within the attributes query it will return null. */
  values?: Maybe<Array<Maybe<Scalars['JSONObject']['output']>>>;
};


/** An Akeneo Attribute */
export type AttributeValuesArgs = {
  withRelatedObjectValues?: InputMaybe<Scalars['Boolean']['input']>;
};

/** An Akeneo Attribute Collection */
export type AttributeCollection = {
  __typename?: 'AttributeCollection';
  items?: Maybe<Array<Maybe<Attribute>>>;
  links?: Maybe<PageLinks>;
  /** Information about the current GraphQL query. */
  queryInformation?: Maybe<QueryInformation>;
};

/** An Akeneo Attribute Option */
export type AttributeOptions = {
  __typename?: 'AttributeOptions';
  attribute?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  labels?: Maybe<Array<Maybe<Scalars['JSONObject']['output']>>>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
};

/** An Akeneo Attribute option Collection */
export type AttributeOptionsCollection = {
  __typename?: 'AttributeOptionsCollection';
  items?: Maybe<Array<Maybe<AttributeOptions>>>;
  links?: Maybe<PageLinks>;
  /** Information about the current GraphQL query. */
  queryInformation?: Maybe<QueryInformation>;
};

/** An Akeneo Category */
export type Category = {
  __typename?: 'Category';
  code?: Maybe<Scalars['String']['output']>;
  labels?: Maybe<Array<Maybe<Scalars['JSONObject']['output']>>>;
  parent?: Maybe<Category>;
  position?: Maybe<Scalars['Int']['output']>;
  updated?: Maybe<Scalars['String']['output']>;
  values?: Maybe<Array<Maybe<Scalars['JSONObject']['output']>>>;
};

/** An Akeneo Category Collection */
export type CategoryCollection = {
  __typename?: 'CategoryCollection';
  items?: Maybe<Array<Maybe<Category>>>;
  links?: Maybe<PageLinks>;
  /** Information about the current GraphQL query. */
  queryInformation?: Maybe<QueryInformation>;
};

/** An Akeneo Channel */
export type Channel = {
  __typename?: 'Channel';
  categoryTree?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  conversionUnits?: Maybe<Array<Maybe<ConversionUnit>>>;
  currencies?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  labels?: Maybe<Array<Maybe<Scalars['JSONObject']['output']>>>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** An Akeneo Channel Collection */
export type ChannelCollection = {
  __typename?: 'ChannelCollection';
  items?: Maybe<Array<Maybe<Channel>>>;
  links?: Maybe<PageLinks>;
  /** Information about the current GraphQL query. */
  queryInformation?: Maybe<QueryInformation>;
};

/** An Akeneo Conversion Unit */
export type ConversionUnit = {
  __typename?: 'ConversionUnit';
  conversionUnitCode?: Maybe<Scalars['String']['output']>;
  conversionUnitValue?: Maybe<Scalars['String']['output']>;
};

/** An Akeneo Currency */
export type Currency = {
  __typename?: 'Currency';
  code?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
};

/** An Akeneo Currency Collection */
export type CurrencyCollection = {
  __typename?: 'CurrencyCollection';
  items?: Maybe<Array<Maybe<Currency>>>;
  links?: Maybe<PageLinks>;
  /** Information about the current GraphQL query. */
  queryInformation?: Maybe<QueryInformation>;
};

/** An Akeneo Family */
export type Family = {
  __typename?: 'Family';
  attributeAsImage?: Maybe<Scalars['String']['output']>;
  attributeAsLabel?: Maybe<Scalars['String']['output']>;
  attributeRequirements?: Maybe<Array<Maybe<FamilyAttributeRequirements>>>;
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  code?: Maybe<Scalars['String']['output']>;
  /** The familyVariant is filled,                 with all available values when asked in the query families,                 with the linked one to the product model in the query productModels. */
  familyVariant?: Maybe<Array<Maybe<FamilyVariant>>>;
  labels?: Maybe<Array<Maybe<Scalars['JSONObject']['output']>>>;
};

/** An Akeneo Family AttributeRequirementsType */
export type FamilyAttributeRequirements = {
  __typename?: 'FamilyAttributeRequirements';
  attributesRequirements?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  channelCode?: Maybe<Scalars['String']['output']>;
};

/** An Akeneo Family Collection */
export type FamilyCollection = {
  __typename?: 'FamilyCollection';
  items?: Maybe<Array<Maybe<Family>>>;
  links?: Maybe<PageLinks>;
  /** Information about the current GraphQL query. */
  queryInformation?: Maybe<QueryInformation>;
};

/** An Akeneo Family Variant */
export type FamilyVariant = {
  __typename?: 'FamilyVariant';
  code?: Maybe<Scalars['String']['output']>;
  labels?: Maybe<Array<Maybe<Scalars['JSONObject']['output']>>>;
  variantAttributeSets?: Maybe<VariantAttributeSet>;
};

/** An Akeneo Group */
export type Group = {
  __typename?: 'Group';
  attributes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  code?: Maybe<Scalars['String']['output']>;
  labels?: Maybe<Array<Maybe<Scalars['JSONObject']['output']>>>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
};

/** An Akeneo Locale */
export type Locale = {
  __typename?: 'Locale';
  code?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
};

/** An Akeneo Locale Collection */
export type LocaleCollection = {
  __typename?: 'LocaleCollection';
  items?: Maybe<Array<Maybe<Locale>>>;
  links?: Maybe<PageLinks>;
  /** Information about the current GraphQL query. */
  queryInformation?: Maybe<QueryInformation>;
};

/** An Akeneo Measurement Family */
export type MeasurementFamily = {
  __typename?: 'MeasurementFamily';
  code?: Maybe<Scalars['String']['output']>;
  labels?: Maybe<Array<Maybe<Scalars['JSONObject']['output']>>>;
  standardUnitCode?: Maybe<Scalars['String']['output']>;
  units?: Maybe<Array<Maybe<MeasurementFamilyUnit>>>;
};

/** An Akeneo MeasurementFamily Collection */
export type MeasurementFamilyCollection = {
  __typename?: 'MeasurementFamilyCollection';
  items?: Maybe<Array<Maybe<MeasurementFamily>>>;
  /** Information about the current GraphQL query. */
  queryInformation?: Maybe<QueryInformation>;
};

/** An Akeneo Measurement Family Unit */
export type MeasurementFamilyUnit = {
  __typename?: 'MeasurementFamilyUnit';
  code?: Maybe<Scalars['String']['output']>;
  convertFromStandard?: Maybe<Array<Maybe<Scalars['JSONObject']['output']>>>;
  labels?: Maybe<Array<Maybe<Scalars['JSONObject']['output']>>>;
  symbol?: Maybe<Scalars['String']['output']>;
};

export type PageLinks = {
  __typename?: 'PageLinks';
  next?: Maybe<Scalars['String']['output']>;
  previous?: Maybe<Scalars['String']['output']>;
  self?: Maybe<Scalars['String']['output']>;
};

/** An Akeneo Product */
export type Product = ProductInterface & {
  __typename?: 'Product';
  attribute?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  categories?: Maybe<Array<Maybe<Category>>>;
  created?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['String']['output']>;
  family?: Maybe<Family>;
  image?: Maybe<Scalars['JSON']['output']>;
  measurement?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  parent?: Maybe<ProductModel>;
  /** Allow to retrieve a list of associated product and product models with quantity.        Ordered by type of association. */
  quantifiedAssociations?: Maybe<Array<Maybe<QuantifiedAssociation>>>;
  /** Allow to retrieve a list of associated product and product models.        Ordered by type of association. */
  simpleAssociations?: Maybe<Array<Maybe<SimpleAssociation>>>;
  updated?: Maybe<Scalars['String']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
  variationValues?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
};


/** An Akeneo Product */
export type ProductAttributeArgs = {
  code: Scalars['String']['input'];
};


/** An Akeneo Product */
export type ProductImageArgs = {
  code: Scalars['String']['input'];
};


/** An Akeneo Product */
export type ProductMeasurementArgs = {
  code: Scalars['String']['input'];
  unit?: InputMaybe<Scalars['String']['input']>;
};

/** An Akeneo Product Collection */
export type ProductCollection = {
  __typename?: 'ProductCollection';
  items?: Maybe<Array<Maybe<Product>>>;
  links?: Maybe<SearchLinks>;
  /** Information about the current GraphQL query. */
  queryInformation?: Maybe<QueryInformation>;
};

/** An Akeneo Product Interface */
export type ProductInterface = {
  attribute?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  categories?: Maybe<Array<Maybe<Category>>>;
  created?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['String']['output']>;
  family?: Maybe<Family>;
  image?: Maybe<Scalars['JSON']['output']>;
  measurement?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  /** Allow to retrieve a list of associated product and product models with quantity.        Ordered by type of association. */
  quantifiedAssociations?: Maybe<Array<Maybe<QuantifiedAssociation>>>;
  /** Allow to retrieve a list of associated product and product models.        Ordered by type of association. */
  simpleAssociations?: Maybe<Array<Maybe<SimpleAssociation>>>;
  updated?: Maybe<Scalars['String']['output']>;
};


/** An Akeneo Product Interface */
export type ProductInterfaceAttributeArgs = {
  code: Scalars['String']['input'];
};


/** An Akeneo Product Interface */
export type ProductInterfaceImageArgs = {
  code: Scalars['String']['input'];
};


/** An Akeneo Product Interface */
export type ProductInterfaceMeasurementArgs = {
  code: Scalars['String']['input'];
  unit?: InputMaybe<Scalars['String']['input']>;
};

/** An Akeneo Product Model */
export type ProductModel = ProductInterface & {
  __typename?: 'ProductModel';
  attribute?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  categories?: Maybe<Array<Maybe<Category>>>;
  code?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['String']['output']>;
  family?: Maybe<Family>;
  image?: Maybe<Scalars['JSON']['output']>;
  measurement?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  /** Allow to retrieve a list of associated product and product models with quantity.        Ordered by type of association. */
  quantifiedAssociations?: Maybe<Array<Maybe<QuantifiedAssociation>>>;
  /** Allow to retrieve a list of associated product and product models.        Ordered by type of association. */
  simpleAssociations?: Maybe<Array<Maybe<SimpleAssociation>>>;
  updated?: Maybe<Scalars['String']['output']>;
  variationAxes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** An Akeneo Product Model */
export type ProductModelAttributeArgs = {
  code: Scalars['String']['input'];
};


/** An Akeneo Product Model */
export type ProductModelImageArgs = {
  code: Scalars['String']['input'];
};


/** An Akeneo Product Model */
export type ProductModelMeasurementArgs = {
  code: Scalars['String']['input'];
  unit?: InputMaybe<Scalars['String']['input']>;
};

/** An Akeneo Product Models Collection */
export type ProductModelCollection = {
  __typename?: 'ProductModelCollection';
  items?: Maybe<Array<Maybe<ProductModel>>>;
  links?: Maybe<SearchLinks>;
  /** Information about the current GraphQL query. */
  queryInformation?: Maybe<QueryInformation>;
};

/** A quantified association object. */
export type QuantifiedAssociation = {
  __typename?: 'QuantifiedAssociation';
  quantifiedProductModels?: Maybe<Array<Maybe<QuantifiedAssociationProductModel>>>;
  quantifiedProducts?: Maybe<Array<Maybe<QuantifiedAssociationProduct>>>;
  type?: Maybe<Scalars['String']['output']>;
};

/** A quantified product association object. */
export type QuantifiedAssociationProduct = {
  __typename?: 'QuantifiedAssociationProduct';
  product?: Maybe<Product>;
  quantity?: Maybe<Scalars['Int']['output']>;
};

/** A quantified product model association object. */
export type QuantifiedAssociationProductModel = {
  __typename?: 'QuantifiedAssociationProductModel';
  productModel?: Maybe<ProductModel>;
  quantity?: Maybe<Scalars['Int']['output']>;
};

/** The root of all... queries */
export type Query = {
  __typename?: 'Query';
  /** Get a list of asset families.            Based on the REST API endpoint             https://api.akeneo.com/api-reference.html?#Assetfamily */
  assetFamilies?: Maybe<AssetFamiliesCollection>;
  /** Get a list of assets of a given asset family. Assets are paginated.            This endpoint is case sensitive on the asset family code.            Based on the REST API endpoint            https://api.akeneo.com/api-reference.html?#Asset */
  assetsRecords?: Maybe<AssetFamiliesRecordsCollection>;
  /** Get a list of options of a given attribute.            Based on the REST API endpoint            https://api.akeneo.com/api-reference.html#Attributeoption */
  attributeOptions?: Maybe<AttributeOptionsCollection>;
  /** Get a list of attributes.            Based on the REST API endpoint            https://api.akeneo.com/api-reference.html?#Attribute */
  attributes?: Maybe<AttributeCollection>;
  /** Get a list of categories.            Based on the REST API endpoint            https://api.akeneo.com/api-reference.html?#Category */
  categories?: Maybe<CategoryCollection>;
  /** Get a list of channels.            Based on the REST API endpoint            https://api.akeneo.com/api-reference.html?#Channel */
  channels?: Maybe<ChannelCollection>;
  /** Get the list of all currencies.            You can filter on the enabled status.            Based on the REST API endpoint            https://api.akeneo.com/api-reference.html?#Currency */
  currencies?: Maybe<CurrencyCollection>;
  /** Get a list of families.            Based on the REST API endpoint            https://api.akeneo.com/api-reference.html?#Family */
  families?: Maybe<FamilyCollection>;
  /** Get a list of locales.            Based on the REST API endpoint            https://api.akeneo.com/api-reference.html?#Locale */
  locales?: Maybe<LocaleCollection>;
  /** Get a list of measurement families.            Based on the REST API endpoint            https://api.akeneo.com/api-reference.html?#Measurementfamily */
  measurementFamilies?: Maybe<MeasurementFamilyCollection>;
  /** Get a list of product models.            Based on the REST API endpoint            https://api.akeneo.com/api-reference.html?#Productmodel */
  productModels?: Maybe<ProductModelCollection>;
  /**
   * Get a list of products.
   *              Based on the REST API endpoint             https://api.akeneo.com/api-reference.html#get_products_uuid
   */
  products?: Maybe<ProductCollection>;
  /** Get a list of reference entities.            Based on the REST API endpoint            https://api.akeneo.com/api-reference.html?#Referenceentities */
  referenceEntities?: Maybe<ReferenceEntitiesCollection>;
  /** Get a list of records of a given reference entity. Records are paginated and can be filtered.            Based on the REST API endpoint            https://api.akeneo.com/api-reference.html?#Referenceentityrecord */
  referenceEntitiesRecords?: Maybe<ReferenceEntityRecordsCollection>;
  /** Get the version and the edition of the PIM.            Based on the REST API endpoint            https://api.akeneo.com/api-reference.html?#System */
  systemInformation?: Maybe<SystemInformation>;
  /** Get an authentication token. No need to be authenticated to use this endpoint        Based on the REST API endpoint        https://api.akeneo.com/api-reference.html#Authentication */
  token?: Maybe<Token>;
};


/** The root of all... queries */
export type QueryAssetFamiliesArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  page?: InputMaybe<Scalars['String']['input']>;
};


/** The root of all... queries */
export type QueryAssetsRecordsArgs = {
  assetFamily: Scalars['String']['input'];
  channel?: InputMaybe<Scalars['String']['input']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  page?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['JSON']['input']>;
};


/** The root of all... queries */
export type QueryAttributeOptionsArgs = {
  attributeCode: Scalars['String']['input'];
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  page?: InputMaybe<Scalars['String']['input']>;
};


/** The root of all... queries */
export type QueryAttributesArgs = {
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  identifier?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  page?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['JSON']['input']>;
  types?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** The root of all... queries */
export type QueryCategoriesArgs = {
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  page?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['String']['input']>;
  root?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['JSON']['input']>;
};


/** The root of all... queries */
export type QueryChannelsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  page?: InputMaybe<Scalars['String']['input']>;
};


/** The root of all... queries */
export type QueryCurrenciesArgs = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
};


/** The root of all... queries */
export type QueryFamiliesArgs = {
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  page?: InputMaybe<Scalars['String']['input']>;
};


/** The root of all... queries */
export type QueryLocalesArgs = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
};


/** The root of all... queries */
export type QueryMeasurementFamiliesArgs = {
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** The root of all... queries */
export type QueryProductModelsArgs = {
  attributesToLoad?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  channel?: InputMaybe<Scalars['String']['input']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  currencies?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  families?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  page?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['JSON']['input']>;
};


/** The root of all... queries */
export type QueryProductsArgs = {
  attributesToLoad?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  channel?: InputMaybe<Scalars['String']['input']>;
  currencies?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  families?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  noParent?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['JSON']['input']>;
  uuid?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** The root of all... queries */
export type QueryReferenceEntitiesArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  page?: InputMaybe<Scalars['String']['input']>;
};


/** The root of all... queries */
export type QueryReferenceEntitiesRecordsArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  codes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  page?: InputMaybe<Scalars['String']['input']>;
  referenceEntity: Scalars['String']['input'];
  search?: InputMaybe<Scalars['JSON']['input']>;
};


/** The root of all... queries */
export type QueryTokenArgs = {
  clientId: Scalars['String']['input'];
  clientSecret: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

/** Information about the current GraphQL query */
export type QueryInformation = {
  __typename?: 'QueryInformation';
  /** List of deprecated fields & arguments used in the current query */
  deprecations?: Maybe<Scalars['JSON']['output']>;
  /** Complexity of the request */
  requestComplexity?: Maybe<Scalars['Int']['output']>;
  /** the detail of the calculated complexity of the query */
  requestComplexityDetail?: Maybe<Scalars['JSONObject']['output']>;
  /** Transaction ID of the current request */
  transactionId?: Maybe<Scalars['String']['output']>;
};

/** An Akeneo Reference Entity Collection */
export type ReferenceEntitiesCollection = {
  __typename?: 'ReferenceEntitiesCollection';
  items?: Maybe<Array<Maybe<ReferenceEntity>>>;
  links?: Maybe<PageLinks>;
  /** Information about the current GraphQL query. */
  queryInformation?: Maybe<QueryInformation>;
};

/** An Akeneo Reference Entity */
export type ReferenceEntity = {
  __typename?: 'ReferenceEntity';
  attributes?: Maybe<Array<Maybe<ReferenceEntityAttribute>>>;
  code?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  labels?: Maybe<Array<Maybe<Scalars['JSONObject']['output']>>>;
};

/** An Akeneo Reference Entity Attribute */
export type ReferenceEntityAttribute = {
  __typename?: 'ReferenceEntityAttribute';
  code?: Maybe<Scalars['String']['output']>;
  labels?: Maybe<Array<Maybe<Scalars['JSONObject']['output']>>>;
  type?: Maybe<Scalars['String']['output']>;
  valuePerChannel?: Maybe<Scalars['Boolean']['output']>;
  valuePerLocale?: Maybe<Scalars['Boolean']['output']>;
};

/** An Akeneo Reference Entity records Collection */
export type ReferenceEntityRecordsCollection = {
  __typename?: 'ReferenceEntityRecordsCollection';
  items?: Maybe<Array<Maybe<ReferenceEntityRecordsType>>>;
  links?: Maybe<PageLinks>;
  /** Information about the current GraphQL query. */
  queryInformation?: Maybe<QueryInformation>;
};

/** An Akeneo Reference Entity Record */
export type ReferenceEntityRecordsType = {
  __typename?: 'ReferenceEntityRecordsType';
  code?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['String']['output']>;
  updated?: Maybe<Scalars['String']['output']>;
  values?: Maybe<Scalars['JSONObject']['output']>;
};

/** Information about the attribute's related object (asset or reference entity). */
export type RelatedObject = {
  __typename?: 'RelatedObject';
  /** If the related object is an asset, this field indicates the main media attribute. */
  attributeAsMainMedia?: Maybe<Scalars['String']['output']>;
  /** Related object code. */
  code?: Maybe<Scalars['String']['output']>;
  /** If the related object is an reference entity, this field indicates cover image. */
  image?: Maybe<Scalars['String']['output']>;
  /** Related object label. */
  labels?: Maybe<Array<Maybe<Scalars['JSONObject']['output']>>>;
};

export type SearchLinks = {
  __typename?: 'SearchLinks';
  next?: Maybe<Scalars['String']['output']>;
  self?: Maybe<Scalars['String']['output']>;
};

/** An association object. */
export type SimpleAssociation = {
  __typename?: 'SimpleAssociation';
  productModels?: Maybe<Array<Maybe<ProductModel>>>;
  products?: Maybe<Array<Maybe<Product>>>;
  type?: Maybe<Scalars['String']['output']>;
};

/** An Akeneo System Information */
export type SystemInformation = {
  __typename?: 'SystemInformation';
  data?: Maybe<SystemInformationData>;
  /** Information about the current GraphQL query. */
  queryInformation?: Maybe<QueryInformation>;
};

/** An Akeneo System Information Data */
export type SystemInformationData = {
  __typename?: 'SystemInformationData';
  edition?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

/** An Akeneo TokenType */
export type Token = {
  __typename?: 'Token';
  data?: Maybe<TokenData>;
  /** Information about the current GraphQL query. */
  queryInformation?: Maybe<QueryInformation>;
};

/** An Akeneo TokenDataType */
export type TokenData = {
  __typename?: 'TokenData';
  /** Authentication token that should be given in every authenticated request to the API */
  accessToken?: Maybe<Scalars['String']['output']>;
  /** Validity of the token given in seconds, 3600s = 1h by default */
  expiresIn?: Maybe<Scalars['Int']['output']>;
  /**  Use this token when your access token has expired. See Refresh an expired token section for more details             (https://api.akeneo.com/documentation/authentication.html#refresh-an-expired-token) */
  refreshToken?: Maybe<Scalars['String']['output']>;
  /** Token type, always equal to "bearer" */
  type?: Maybe<Scalars['String']['output']>;
};

/** An Akeneo VariantAttributeSet */
export type VariantAttributeSet = {
  __typename?: 'VariantAttributeSet';
  attributes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  axes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type AccessTokenQueryVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
  clientId: Scalars['String']['input'];
  clientSecret: Scalars['String']['input'];
}>;


export type AccessTokenQuery = { __typename?: 'Query', token?: { __typename?: 'Token', data?: { __typename?: 'TokenData', accessToken?: string | null } | null } | null };

export type ChannelsQueryVariables = Exact<{ [key: string]: never; }>;


export type ChannelsQuery = { __typename?: 'Query', channels?: { __typename?: 'ChannelCollection', items?: Array<{ __typename?: 'Channel', categoryTree?: string | null, code?: string | null, currencies?: Array<string | null> | null, labels?: Array<any | null> | null, locales?: Array<string | null> | null, conversionUnits?: Array<{ __typename?: 'ConversionUnit', conversionUnitCode?: string | null, conversionUnitValue?: string | null } | null> | null } | null> | null } | null };


export const AccessTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AccessToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clientId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clientSecret"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"clientId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clientId"}}},{"kind":"Argument","name":{"kind":"Name","value":"clientSecret"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clientSecret"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]}}]} as unknown as DocumentNode<AccessTokenQuery, AccessTokenQueryVariables>;
export const ChannelsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categoryTree"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"currencies"}},{"kind":"Field","name":{"kind":"Name","value":"labels"}},{"kind":"Field","name":{"kind":"Name","value":"locales"}},{"kind":"Field","name":{"kind":"Name","value":"conversionUnits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"conversionUnitCode"}},{"kind":"Field","name":{"kind":"Name","value":"conversionUnitValue"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ChannelsQuery, ChannelsQueryVariables>;