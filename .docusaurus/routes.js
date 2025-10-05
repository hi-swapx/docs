import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '2ea'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'db0'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '377'),
            routes: [
              {
                path: '/category/liquidity',
                component: ComponentCreator('/category/liquidity', '850'),
                exact: true,
                sidebar: "studySidebar"
              },
              {
                path: '/category/privacy-and-terms',
                component: ComponentCreator('/category/privacy-and-terms', '574'),
                exact: true,
                sidebar: "studySidebar"
              },
              {
                path: '/category/start',
                component: ComponentCreator('/category/start', 'ce6'),
                exact: true,
                sidebar: "studySidebar"
              },
              {
                path: '/category/swap',
                component: ComponentCreator('/category/swap', 'a2e'),
                exact: true,
                sidebar: "studySidebar"
              },
              {
                path: '/category/wallet_guide',
                component: ComponentCreator('/category/wallet_guide', 'c77'),
                exact: true,
                sidebar: "studySidebar"
              },
              {
                path: '/category/先进的',
                component: ComponentCreator('/category/先进的', 'fb4'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/category/兑换',
                component: ComponentCreator('/category/兑换', 'ada'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/category/参考',
                component: ComponentCreator('/category/参考', 'e76'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/category/指南',
                component: ComponentCreator('/category/指南', '2b7'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/category/指南-1',
                component: ComponentCreator('/category/指南-1', '5fc'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/category/接口',
                component: ComponentCreator('/category/接口', 'b45'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/category/枚举',
                component: ComponentCreator('/category/枚举', 'a34'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/category/流动性',
                component: ComponentCreator('/category/流动性', '6ef'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/category/类',
                component: ComponentCreator('/category/类', '608'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/contract/',
                component: ComponentCreator('/contract/', 'b26'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/contract/swapx-v2/',
                component: ComponentCreator('/contract/swapx-v2/', '77b'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/contract/swapx-v2/concepts/advanced-topics/fees',
                component: ComponentCreator('/contract/swapx-v2/concepts/advanced-topics/fees', 'cf6'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/contract/swapx-v2/concepts/advanced-topics/price',
                component: ComponentCreator('/contract/swapx-v2/concepts/advanced-topics/price', '7bd'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/contract/swapx-v2/concepts/advanced-topics/security',
                component: ComponentCreator('/contract/swapx-v2/concepts/advanced-topics/security', 'f14'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/contract/swapx-v2/concepts/advanced-topics/understanding-returns',
                component: ComponentCreator('/contract/swapx-v2/concepts/advanced-topics/understanding-returns', 'd18'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/contract/swapx-v2/concepts/core-concepts/flash-swaps',
                component: ComponentCreator('/contract/swapx-v2/concepts/core-concepts/flash-swaps', '29a'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/contract/swapx-v2/concepts/core-concepts/pools',
                component: ComponentCreator('/contract/swapx-v2/concepts/core-concepts/pools', 'a03'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/contract/swapx-v2/concepts/core-concepts/swaps',
                component: ComponentCreator('/contract/swapx-v2/concepts/core-concepts/swaps', '905'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/contract/swapx-v2/concepts/protocol-overview/ecosystem-participants',
                component: ComponentCreator('/contract/swapx-v2/concepts/protocol-overview/ecosystem-participants', 'd49'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/contract/swapx-v2/concepts/protocol-overview/how-it-works',
                component: ComponentCreator('/contract/swapx-v2/concepts/protocol-overview/how-it-works', '301'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/contract/swapx-v2/concepts/protocol-overview/smart-contract',
                component: ComponentCreator('/contract/swapx-v2/concepts/protocol-overview/smart-contract', '0fd'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/contract/swapx-v3/guides/Implement-A-Swap/multihop-swaps',
                component: ComponentCreator('/contract/swapx-v3/guides/Implement-A-Swap/multihop-swaps', '70b'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/contract/swapx-v3/guides/Implement-A-Swap/single-swaps',
                component: ComponentCreator('/contract/swapx-v3/guides/Implement-A-Swap/single-swaps', '60f'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/contract/swapx-v3/overview',
                component: ComponentCreator('/contract/swapx-v3/overview', '2f8'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/contract/swapx-v3/technical-reference/core/SwapXV3Factory',
                component: ComponentCreator('/contract/swapx-v3/technical-reference/core/SwapXV3Factory', 'bc1'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/contract/swapx-v3/technical-reference/core/SwapXV3Pool',
                component: ComponentCreator('/contract/swapx-v3/technical-reference/core/SwapXV3Pool', '558'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/contract/swapx-v3/technical-reference/core/SwapXV3PoolDeployer',
                component: ComponentCreator('/contract/swapx-v3/technical-reference/core/SwapXV3PoolDeployer', '7d8'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/contract/swapx-v3/technical-reference/periphery/NonfungiblePositionManager',
                component: ComponentCreator('/contract/swapx-v3/technical-reference/periphery/NonfungiblePositionManager', '581'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/contract/swapx-v3/technical-reference/periphery/NonfungibleTokenPositionDescriptor',
                component: ComponentCreator('/contract/swapx-v3/technical-reference/periphery/NonfungibleTokenPositionDescriptor', 'e37'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/contract/swapx-v3/technical-reference/periphery/SwapRouter',
                component: ComponentCreator('/contract/swapx-v3/technical-reference/periphery/SwapRouter', 'dc2'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/sdk/',
                component: ComponentCreator('/sdk/', 'dc1'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v2/guides/fetching-data',
                component: ComponentCreator('/sdk/v2/guides/fetching-data', 'a31'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v2/guides/getting-pair-addresses',
                component: ComponentCreator('/sdk/v2/guides/getting-pair-addresses', 'a9d'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v2/guides/pricing',
                component: ComponentCreator('/sdk/v2/guides/pricing', '3a6'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v2/guides/quick-start',
                component: ComponentCreator('/sdk/v2/guides/quick-start', 'b31'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v2/guides/trading',
                component: ComponentCreator('/sdk/v2/guides/trading', '498'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v2/overview',
                component: ComponentCreator('/sdk/v2/overview', 'db2'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v2/reference/getting-started',
                component: ComponentCreator('/sdk/v2/reference/getting-started', '643'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v2/reference/other-exports',
                component: ComponentCreator('/sdk/v2/reference/other-exports', 'e95'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v2/reference/pair',
                component: ComponentCreator('/sdk/v2/reference/pair', '597'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v2/reference/route',
                component: ComponentCreator('/sdk/v2/reference/route', 'd33'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v2/reference/trade',
                component: ComponentCreator('/sdk/v2/reference/trade', 'd65'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/guides/advanced/active-liquidity',
                component: ComponentCreator('/sdk/v3/guides/advanced/active-liquidity', '074'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/guides/advanced/introduction',
                component: ComponentCreator('/sdk/v3/guides/advanced/introduction', '714'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/guides/advanced/pool-data',
                component: ComponentCreator('/sdk/v3/guides/advanced/pool-data', '087'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/guides/advanced/price-oracle',
                component: ComponentCreator('/sdk/v3/guides/advanced/price-oracle', '297'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/guides/advanced/range-orders',
                component: ComponentCreator('/sdk/v3/guides/advanced/range-orders', 'c94'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/guides/background',
                component: ComponentCreator('/sdk/v3/guides/background', 'ddf'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/guides/liquidity/collecting-fees',
                component: ComponentCreator('/sdk/v3/guides/liquidity/collecting-fees', 'e23'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/guides/liquidity/fetching-positions',
                component: ComponentCreator('/sdk/v3/guides/liquidity/fetching-positions', 'd33'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/guides/liquidity/minting-position',
                component: ComponentCreator('/sdk/v3/guides/liquidity/minting-position', 'a60'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/guides/liquidity/modifying-position',
                component: ComponentCreator('/sdk/v3/guides/liquidity/modifying-position', 'c72'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/guides/liquidity/position-data',
                component: ComponentCreator('/sdk/v3/guides/liquidity/position-data', '969'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/guides/liquidity/swap-and-add-liquidity',
                component: ComponentCreator('/sdk/v3/guides/liquidity/swap-and-add-liquidity', 'e3a'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/guides/local-development',
                component: ComponentCreator('/sdk/v3/guides/local-development', '396'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/guides/swaps/quoting',
                component: ComponentCreator('/sdk/v3/guides/swaps/quoting', 'fed'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/guides/swaps/routing',
                component: ComponentCreator('/sdk/v3/guides/swaps/routing', 'c24'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/guides/swaps/trading',
                component: ComponentCreator('/sdk/v3/guides/swaps/trading', 'e5b'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/guides/web3-development-basics',
                component: ComponentCreator('/sdk/v3/guides/web3-development-basics', 'a99'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/overview',
                component: ComponentCreator('/sdk/v3/overview', 'd05'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/FullMath',
                component: ComponentCreator('/sdk/v3/reference/classes/FullMath', 'ee1'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/LiquidityMath',
                component: ComponentCreator('/sdk/v3/reference/classes/LiquidityMath', '3a3'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/Multicall',
                component: ComponentCreator('/sdk/v3/reference/classes/Multicall', '65e'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/NonfungiblePositionManager',
                component: ComponentCreator('/sdk/v3/reference/classes/NonfungiblePositionManager', '328'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/NoTickDataProvider',
                component: ComponentCreator('/sdk/v3/reference/classes/NoTickDataProvider', '11b'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/Payments',
                component: ComponentCreator('/sdk/v3/reference/classes/Payments', '6ca'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/Pool',
                component: ComponentCreator('/sdk/v3/reference/classes/Pool', '7c2'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/Position',
                component: ComponentCreator('/sdk/v3/reference/classes/Position', '148'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/PositionLibrary',
                component: ComponentCreator('/sdk/v3/reference/classes/PositionLibrary', '284'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/Route',
                component: ComponentCreator('/sdk/v3/reference/classes/Route', 'c77'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/SelfPermit',
                component: ComponentCreator('/sdk/v3/reference/classes/SelfPermit', '4cf'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/SqrtPriceMath',
                component: ComponentCreator('/sdk/v3/reference/classes/SqrtPriceMath', '287'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/Staker',
                component: ComponentCreator('/sdk/v3/reference/classes/Staker', '9a2'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/SwapMath',
                component: ComponentCreator('/sdk/v3/reference/classes/SwapMath', '731'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/SwapQuoter',
                component: ComponentCreator('/sdk/v3/reference/classes/SwapQuoter', '477'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/SwapRouter',
                component: ComponentCreator('/sdk/v3/reference/classes/SwapRouter', '017'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/Tick',
                component: ComponentCreator('/sdk/v3/reference/classes/Tick', '112'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/TickLibrary',
                component: ComponentCreator('/sdk/v3/reference/classes/TickLibrary', '55e'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/TickList',
                component: ComponentCreator('/sdk/v3/reference/classes/TickList', '2ae'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/TickListDataProvider',
                component: ComponentCreator('/sdk/v3/reference/classes/TickListDataProvider', 'b8e'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/TickMath',
                component: ComponentCreator('/sdk/v3/reference/classes/TickMath', '20b'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/Trade',
                component: ComponentCreator('/sdk/v3/reference/classes/Trade', 'cf8'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/enums/FeeAmount',
                component: ComponentCreator('/sdk/v3/reference/enums/FeeAmount', 'e7c'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/AllowedPermitArguments',
                component: ComponentCreator('/sdk/v3/reference/interfaces/AllowedPermitArguments', '3a6'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/BestTradeOptions',
                component: ComponentCreator('/sdk/v3/reference/interfaces/BestTradeOptions', '597'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/ClaimOptions',
                component: ComponentCreator('/sdk/v3/reference/interfaces/ClaimOptions', 'b00'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/CollectOptions',
                component: ComponentCreator('/sdk/v3/reference/interfaces/CollectOptions', '163'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/CommonAddLiquidityOptions',
                component: ComponentCreator('/sdk/v3/reference/interfaces/CommonAddLiquidityOptions', '0e6'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/FeeOptions',
                component: ComponentCreator('/sdk/v3/reference/interfaces/FeeOptions', '437'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/IncentiveKey',
                component: ComponentCreator('/sdk/v3/reference/interfaces/IncentiveKey', '2bd'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/IncreaseSpecificOptions',
                component: ComponentCreator('/sdk/v3/reference/interfaces/IncreaseSpecificOptions', '53c'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/MethodParameters',
                component: ComponentCreator('/sdk/v3/reference/interfaces/MethodParameters', 'eeb'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/MintSpecificOptions',
                component: ComponentCreator('/sdk/v3/reference/interfaces/MintSpecificOptions', '6b0'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/NFTPermitOptions',
                component: ComponentCreator('/sdk/v3/reference/interfaces/NFTPermitOptions', '7cb'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/QuoteOptions',
                component: ComponentCreator('/sdk/v3/reference/interfaces/QuoteOptions', '2aa'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/RemoveLiquidityOptions',
                component: ComponentCreator('/sdk/v3/reference/interfaces/RemoveLiquidityOptions', '70c'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/SafeTransferOptions',
                component: ComponentCreator('/sdk/v3/reference/interfaces/SafeTransferOptions', 'd75'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/StandardPermitArguments',
                component: ComponentCreator('/sdk/v3/reference/interfaces/StandardPermitArguments', '5d9'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/SwapOptions',
                component: ComponentCreator('/sdk/v3/reference/interfaces/SwapOptions', '837'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/TickConstructorArgs',
                component: ComponentCreator('/sdk/v3/reference/interfaces/TickConstructorArgs', '413'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/TickDataProvider',
                component: ComponentCreator('/sdk/v3/reference/interfaces/TickDataProvider', 'ea3'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/WithdrawOptions',
                component: ComponentCreator('/sdk/v3/reference/interfaces/WithdrawOptions', 'd12'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/sdk/v3/reference/overview',
                component: ComponentCreator('/sdk/v3/reference/overview', '836'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/study/',
                component: ComponentCreator('/study/', '172'),
                exact: true,
                sidebar: "studySidebar"
              },
              {
                path: '/study/product/',
                component: ComponentCreator('/study/product/', '3d7'),
                exact: true,
                sidebar: "studySidebar"
              },
              {
                path: '/study/product/liquidity/',
                component: ComponentCreator('/study/product/liquidity/', 'd39'),
                exact: true,
                sidebar: "studySidebar"
              },
              {
                path: '/study/product/liquidity/pool',
                component: ComponentCreator('/study/product/liquidity/pool', '987'),
                exact: true,
                sidebar: "studySidebar"
              },
              {
                path: '/study/product/swap/',
                component: ComponentCreator('/study/product/swap/', 'd95'),
                exact: true,
                sidebar: "studySidebar"
              },
              {
                path: '/study/product/swap/market-maker-integration',
                component: ComponentCreator('/study/product/swap/market-maker-integration', 'a54'),
                exact: true,
                sidebar: "studySidebar"
              },
              {
                path: '/study/product/swap/trade',
                component: ComponentCreator('/study/product/swap/trade', '36b'),
                exact: true,
                sidebar: "studySidebar"
              },
              {
                path: '/study/product/swap/trade_guide',
                component: ComponentCreator('/study/product/swap/trade_guide', '8e1'),
                exact: true,
                sidebar: "studySidebar"
              },
              {
                path: '/study/start/wallet_guide/',
                component: ComponentCreator('/study/start/wallet_guide/', 'b91'),
                exact: true,
                sidebar: "studySidebar"
              },
              {
                path: '/study/start/wallet_guide/connect_wallet',
                component: ComponentCreator('/study/start/wallet_guide/connect_wallet', '433'),
                exact: true,
                sidebar: "studySidebar"
              },
              {
                path: '/study/start/wallet_guide/create_wallet',
                component: ComponentCreator('/study/start/wallet_guide/create_wallet', '2f5'),
                exact: true,
                sidebar: "studySidebar"
              },
              {
                path: '/study/terms&conditions/privacy',
                component: ComponentCreator('/study/terms&conditions/privacy', 'd25'),
                exact: true,
                sidebar: "studySidebar"
              },
              {
                path: '/study/terms&conditions/terms',
                component: ComponentCreator('/study/terms&conditions/terms', '4b5'),
                exact: true,
                sidebar: "studySidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
