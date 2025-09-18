/**
 * Translation configuration for Invoice App
 * Supports English and Japanese languages
 */

export const translations = {
  en: {
    // Header
    companyName: "Mirai IT Solutions",
    manageInventory: "Manage Inventory",

    // Invoice Creation Section
    addItemToInvoice: "Add Item to Invoice",
    selectProduct: "Select Product",
    chooseProduct: "-- Choose a Product --",
    quantity: "Quantity",
    addToInvoice: "Add to Invoice",

    // Invoice Items Table
    invoiceItems: "Invoice Items",
    product: "Product",
    price: "Price (¥)",
    qty: "Qty",
    cost: "Cost (¥)",
    actions: "Actions",

    // Invoice Summary
    invoiceSummary: "Invoice Summary",
    total: "Total:",
    tax: "Tax (5%):",
    netTotal: "Net Total:",

    // Checkout
    printInvoice: "Print Invoice",

    // Manage Inventory Sidebar
    existingProducts: "Existing Products",
    addNewProduct: "Add New Product",
    productName: "Product Name",
    productNamePlaceholder: "e.g., UI/UX Design",
    pricePlaceholder: "e.g., 250000",
    addProduct: "Add Product",

    // SweetAlert2 Messages
    noProductNameOrPrice: "No Product Name or Price",
    areYouSureToRemove: "Are you sure to Remove?",
    youWontBeAbleToRevert: "You won't be able to revert this!",
    yesDeleteIt: "Yes, delete it!",
    deleted: "Deleted!",
    yourFileHasBeenDeleted: "Your file has been deleted.",
    productAlreadyExists:
      "is already existed. Do you want to upgrade quantity?",
    yesUpgradeQuantity: "Yes, upgrade quantity!",

    // Language Toggle
    language: "Language",
  },

  ja: {
    // Header
    companyName: "未来ITソリューションズ",
    manageInventory: "在庫管理",

    // Invoice Creation Section
    addItemToInvoice: "請求書にアイテムを追加",
    selectProduct: "商品を選択",
    chooseProduct: "-- 商品を選択してください --",
    quantity: "数量",
    addToInvoice: "請求書に追加",

    // Invoice Items Table
    invoiceItems: "請求書アイテム",
    product: "商品",
    price: "価格 (¥)",
    qty: "数量",
    cost: "費用 (¥)",
    actions: "アクション",

    // Invoice Summary
    invoiceSummary: "請求書サマリー",
    total: "合計:",
    tax: "税金 (5%):",
    netTotal: "純合計:",

    // Checkout
    printInvoice: "請求書を印刷",

    // Manage Inventory Sidebar
    existingProducts: "既存商品",
    addNewProduct: "新商品を追加",
    productName: "商品名",
    productNamePlaceholder: "例: UI/UXデザイン",
    pricePlaceholder: "例: 250000",
    addProduct: "商品を追加",

    // SweetAlert2 Messages
    noProductNameOrPrice: "商品名または価格がありません",
    areYouSureToRemove: "削除してもよろしいですか？",
    youWontBeAbleToRevert: "この操作は元に戻せません！",
    yesDeleteIt: "はい、削除します！",
    deleted: "削除されました！",
    yourFileHasBeenDeleted: "ファイルが削除されました。",
    productAlreadyExists: "は既に存在します。数量をアップグレードしますか？",
    yesUpgradeQuantity: "はい、数量をアップグレードします！",

    // Language Toggle
    language: "言語",
  },
};

// Default language is Japanese
export const DEFAULT_LANGUAGE = "ja";

// Available languages
export const AVAILABLE_LANGUAGES = ["en", "ja"];
