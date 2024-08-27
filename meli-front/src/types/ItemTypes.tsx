

export type ItemData = {
    author:{
        name: string;
        lastname: string;
    },
    categories: string[];
    items: Item[]
}

export interface Item {
    id: string;
    title: string;
    condition: string;
    thumbnail_id: string;
    catalog_product_id?: string;
    listing_type_id: string;
    sanitized_title: string;
    permalink: string;
    buying_mode: string;
    site_id: string;
    category_id: string;
    domain_id: string;
    thumbnail: string;
    currency_id: string;
    order_backend: number;
    price: number;
    original_price?: number;
    sale_price: SalePrice;
    available_quantity: number;
    official_store_id?: number;
    use_thumbnail_id: boolean;
    accepts_mercadopago: boolean;
    variation_filters?: string[];
    shipping: Shipping;
    stop_time: string;
    seller: Seller;
    attributes: Attribute[];
    variations_data?: VariationData[] | null;
    installments: Installments;
    winner_item_id: any;
    catalog_listing: boolean;
    discounts: any;
    promotions: any[];
    differential_pricing?: DifferentialPricing;
    inventory_id: any;
    official_store_name?: string;
  }
  
  export interface SalePrice {
    price_id: string;
    amount: number;
    conditions: Conditions;
    currency_id: string;
    exchange_rate: any;
    payment_method_prices: any[];
    payment_method_type: string;
    regular_amount?: number;
    type: string;
    metadata: Metadata;
  }
  
  export interface Conditions {
    eligible: boolean;
    context_restrictions: string[];
    start_time?: string;
    end_time?: string;
  }
  
  export interface Metadata {
    promotion_id?: string;
    promotion_type?: string;
    campaign_id?: string;
    discount_meli_amount?: number;
    variation?: string;
    campaign_discount_percentage?: number;
    experiment_id?: string;
    funding_mode?: string;
    order_item_price?: number;
    campaign_end_date?: string;
  }
  
  export interface Shipping {
    store_pick_up: boolean;
    free_shipping: boolean;
    logistic_type: string;
    mode: string;
    tags: string[];
    benefits: any;
    promise: any;
    shipping_score: number;
  }
  
  export interface Seller {
    id: number;
    nickname: string;
  }
  
  export interface Attribute {
    id: string;
    name: string;
    value_id?: string;
    value_name?: string;
    attribute_group_id: string;
    attribute_group_name: string;
    value_struct?: ValueStruct;
    values: Value[];
    source: number;
    value_type: string;
  }
  
  export interface ValueStruct {
    number: number;
    unit: string;
  }
  
  export interface Value {
    id?: string;
    name?: string;
    struct?: Struct;
    source: number;
  }
  
  export interface Struct {
    number: number;
    unit: string;
  }
  
  export interface VariationData {
    [key: string]: Variation | null;
  }
  
  export interface Variation {
    thumbnail: string;
    ratio: string;
    name: string;
    pictures_qty: number;
    price: number;
    user_product_id: string;
    attributes: any[];
  }
  
  export interface Installments {
    quantity: number;
    amount: number;
    rate: number;
    currency_id: string;
  }
  
  export interface DifferentialPricing {
    id: number;
  }
  
  export interface Sort {
    id: string;
    name: string;
  }
  
  export interface AvailableSort {
    id: string;
    name: string;
  }
  
  export interface Filter {
    id: string;
    name: string;
    type: string;
    values: FilterValue[];
  }
  
  export interface FilterValue {
    id: string;
    name: string;
    path_from_root: PathFromRoot[];
  }
  
  export interface PathFromRoot {
    id: string;
    name: string;
  }
  
  export interface AvailableFilter {
    id: string;
    name: string;
    type: string;
    values: AvailableFilterValue[];
  }
  
  export interface AvailableFilterValue {
    id: string;
    name: string;
    results: number;
  }
  
  export interface PdpTracking {
    group: boolean;
    product_info: ProductInfo[];
  }
  
  export interface ProductInfo {
    id: string;
    score: number;
    status: string;
  }
  