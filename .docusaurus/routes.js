import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/zh/markdown-page',
    component: ComponentCreator('/zh/markdown-page', '520'),
    exact: true
  },
  {
    path: '/zh/',
    component: ComponentCreator('/zh/', '9c6'),
    exact: true
  },
  {
    path: '/zh/',
    component: ComponentCreator('/zh/', 'd61'),
    routes: [
      {
        path: '/zh/',
        component: ComponentCreator('/zh/', '658'),
        routes: [
          {
            path: '/zh/',
            component: ComponentCreator('/zh/', '27e'),
            routes: [
              {
                path: '/zh/category/参考',
                component: ComponentCreator('/zh/category/参考', 'f38'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/category/兑换',
                component: ComponentCreator('/zh/category/兑换', '9cf'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/category/接口',
                component: ComponentCreator('/zh/category/接口', '075'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/category/类',
                component: ComponentCreator('/zh/category/类', '95e'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/category/流动性',
                component: ComponentCreator('/zh/category/流动性', '55c'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/category/枚举',
                component: ComponentCreator('/zh/category/枚举', '2f6'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/category/先进的',
                component: ComponentCreator('/zh/category/先进的', '954'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/category/指南',
                component: ComponentCreator('/zh/category/指南', '321'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/category/指南-1',
                component: ComponentCreator('/zh/category/指南-1', '842'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/category/liquidity',
                component: ComponentCreator('/zh/category/liquidity', 'c9d'),
                exact: true,
                sidebar: "studySidebar"
              },
              {
                path: '/zh/category/privacy-and-terms',
                component: ComponentCreator('/zh/category/privacy-and-terms', 'fcd'),
                exact: true,
                sidebar: "studySidebar"
              },
              {
                path: '/zh/category/start',
                component: ComponentCreator('/zh/category/start', '1e2'),
                exact: true,
                sidebar: "studySidebar"
              },
              {
                path: '/zh/category/swap',
                component: ComponentCreator('/zh/category/swap', '581'),
                exact: true,
                sidebar: "studySidebar"
              },
              {
                path: '/zh/category/wallet_guide',
                component: ComponentCreator('/zh/category/wallet_guide', '947'),
                exact: true,
                sidebar: "studySidebar"
              },
              {
                path: '/zh/contract/',
                component: ComponentCreator('/zh/contract/', '500'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/zh/contract/swapx-v2/',
                component: ComponentCreator('/zh/contract/swapx-v2/', '9b3'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/zh/contract/swapx-v2/concepts/advanced-topics/fees',
                component: ComponentCreator('/zh/contract/swapx-v2/concepts/advanced-topics/fees', '628'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/zh/contract/swapx-v2/concepts/advanced-topics/price',
                component: ComponentCreator('/zh/contract/swapx-v2/concepts/advanced-topics/price', 'eb0'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/zh/contract/swapx-v2/concepts/advanced-topics/security',
                component: ComponentCreator('/zh/contract/swapx-v2/concepts/advanced-topics/security', '064'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/zh/contract/swapx-v2/concepts/advanced-topics/understanding-returns',
                component: ComponentCreator('/zh/contract/swapx-v2/concepts/advanced-topics/understanding-returns', 'b1b'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/zh/contract/swapx-v2/concepts/core-concepts/flash-swaps',
                component: ComponentCreator('/zh/contract/swapx-v2/concepts/core-concepts/flash-swaps', '71d'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/zh/contract/swapx-v2/concepts/core-concepts/pools',
                component: ComponentCreator('/zh/contract/swapx-v2/concepts/core-concepts/pools', '3a3'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/zh/contract/swapx-v2/concepts/core-concepts/swaps',
                component: ComponentCreator('/zh/contract/swapx-v2/concepts/core-concepts/swaps', 'd5a'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/zh/contract/swapx-v2/concepts/protocol-overview/ecosystem-participants',
                component: ComponentCreator('/zh/contract/swapx-v2/concepts/protocol-overview/ecosystem-participants', 'a18'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/zh/contract/swapx-v2/concepts/protocol-overview/how-it-works',
                component: ComponentCreator('/zh/contract/swapx-v2/concepts/protocol-overview/how-it-works', '59f'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/zh/contract/swapx-v2/concepts/protocol-overview/smart-contract',
                component: ComponentCreator('/zh/contract/swapx-v2/concepts/protocol-overview/smart-contract', '1cd'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/zh/contract/swapx-v3/guides/Implement-A-Swap/multihop-swaps',
                component: ComponentCreator('/zh/contract/swapx-v3/guides/Implement-A-Swap/multihop-swaps', '0e1'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/zh/contract/swapx-v3/guides/Implement-A-Swap/single-swaps',
                component: ComponentCreator('/zh/contract/swapx-v3/guides/Implement-A-Swap/single-swaps', 'fe9'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/zh/contract/swapx-v3/overview',
                component: ComponentCreator('/zh/contract/swapx-v3/overview', 'a94'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/zh/contract/swapx-v3/technical-reference/core/SwapXV3Factory',
                component: ComponentCreator('/zh/contract/swapx-v3/technical-reference/core/SwapXV3Factory', 'c20'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/zh/contract/swapx-v3/technical-reference/core/SwapXV3Pool',
                component: ComponentCreator('/zh/contract/swapx-v3/technical-reference/core/SwapXV3Pool', '094'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/zh/contract/swapx-v3/technical-reference/core/SwapXV3PoolDeployer',
                component: ComponentCreator('/zh/contract/swapx-v3/technical-reference/core/SwapXV3PoolDeployer', '26e'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/zh/contract/swapx-v3/technical-reference/periphery/NonfungiblePositionManager',
                component: ComponentCreator('/zh/contract/swapx-v3/technical-reference/periphery/NonfungiblePositionManager', '0df'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/zh/contract/swapx-v3/technical-reference/periphery/NonfungibleTokenPositionDescriptor',
                component: ComponentCreator('/zh/contract/swapx-v3/technical-reference/periphery/NonfungibleTokenPositionDescriptor', '3ca'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/zh/contract/swapx-v3/technical-reference/periphery/SwapRouter',
                component: ComponentCreator('/zh/contract/swapx-v3/technical-reference/periphery/SwapRouter', '2c2'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/zh/sdk/',
                component: ComponentCreator('/zh/sdk/', 'e25'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v2/guides/fetching-data',
                component: ComponentCreator('/zh/sdk/v2/guides/fetching-data', 'fb0'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v2/guides/getting-pair-addresses',
                component: ComponentCreator('/zh/sdk/v2/guides/getting-pair-addresses', '3a5'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v2/guides/pricing',
                component: ComponentCreator('/zh/sdk/v2/guides/pricing', 'd68'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v2/guides/quick-start',
                component: ComponentCreator('/zh/sdk/v2/guides/quick-start', '082'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v2/guides/trading',
                component: ComponentCreator('/zh/sdk/v2/guides/trading', 'c38'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v2/overview',
                component: ComponentCreator('/zh/sdk/v2/overview', '06f'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v2/reference/getting-started',
                component: ComponentCreator('/zh/sdk/v2/reference/getting-started', '97b'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v2/reference/other-exports',
                component: ComponentCreator('/zh/sdk/v2/reference/other-exports', '2ae'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v2/reference/pair',
                component: ComponentCreator('/zh/sdk/v2/reference/pair', 'dbd'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v2/reference/route',
                component: ComponentCreator('/zh/sdk/v2/reference/route', '017'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v2/reference/trade',
                component: ComponentCreator('/zh/sdk/v2/reference/trade', '63c'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/guides/advanced/active-liquidity',
                component: ComponentCreator('/zh/sdk/v3/guides/advanced/active-liquidity', '37d'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/guides/advanced/introduction',
                component: ComponentCreator('/zh/sdk/v3/guides/advanced/introduction', '4da'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/guides/advanced/pool-data',
                component: ComponentCreator('/zh/sdk/v3/guides/advanced/pool-data', '1f5'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/guides/advanced/price-oracle',
                component: ComponentCreator('/zh/sdk/v3/guides/advanced/price-oracle', '8fb'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/guides/advanced/range-orders',
                component: ComponentCreator('/zh/sdk/v3/guides/advanced/range-orders', '1cb'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/guides/background',
                component: ComponentCreator('/zh/sdk/v3/guides/background', 'e8c'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/guides/liquidity/collecting-fees',
                component: ComponentCreator('/zh/sdk/v3/guides/liquidity/collecting-fees', '0dc'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/guides/liquidity/fetching-positions',
                component: ComponentCreator('/zh/sdk/v3/guides/liquidity/fetching-positions', 'b16'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/guides/liquidity/minting-position',
                component: ComponentCreator('/zh/sdk/v3/guides/liquidity/minting-position', '4a4'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/guides/liquidity/modifying-position',
                component: ComponentCreator('/zh/sdk/v3/guides/liquidity/modifying-position', '540'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/guides/liquidity/position-data',
                component: ComponentCreator('/zh/sdk/v3/guides/liquidity/position-data', '046'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/guides/liquidity/swap-and-add-liquidity',
                component: ComponentCreator('/zh/sdk/v3/guides/liquidity/swap-and-add-liquidity', '0fc'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/guides/local-development',
                component: ComponentCreator('/zh/sdk/v3/guides/local-development', '8da'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/guides/swaps/quoting',
                component: ComponentCreator('/zh/sdk/v3/guides/swaps/quoting', '747'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/guides/swaps/routing',
                component: ComponentCreator('/zh/sdk/v3/guides/swaps/routing', '0a2'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/guides/swaps/trading',
                component: ComponentCreator('/zh/sdk/v3/guides/swaps/trading', '808'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/guides/web3-development-basics',
                component: ComponentCreator('/zh/sdk/v3/guides/web3-development-basics', '65b'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/overview',
                component: ComponentCreator('/zh/sdk/v3/overview', '116'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/classes/FullMath',
                component: ComponentCreator('/zh/sdk/v3/reference/classes/FullMath', 'dfc'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/classes/LiquidityMath',
                component: ComponentCreator('/zh/sdk/v3/reference/classes/LiquidityMath', 'ae2'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/classes/Multicall',
                component: ComponentCreator('/zh/sdk/v3/reference/classes/Multicall', '7a4'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/classes/NonfungiblePositionManager',
                component: ComponentCreator('/zh/sdk/v3/reference/classes/NonfungiblePositionManager', 'bbe'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/classes/NoTickDataProvider',
                component: ComponentCreator('/zh/sdk/v3/reference/classes/NoTickDataProvider', '829'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/classes/Payments',
                component: ComponentCreator('/zh/sdk/v3/reference/classes/Payments', 'fb3'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/classes/Pool',
                component: ComponentCreator('/zh/sdk/v3/reference/classes/Pool', 'ef8'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/classes/Position',
                component: ComponentCreator('/zh/sdk/v3/reference/classes/Position', '9f2'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/classes/PositionLibrary',
                component: ComponentCreator('/zh/sdk/v3/reference/classes/PositionLibrary', 'b4e'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/classes/Route',
                component: ComponentCreator('/zh/sdk/v3/reference/classes/Route', 'daa'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/classes/SelfPermit',
                component: ComponentCreator('/zh/sdk/v3/reference/classes/SelfPermit', '98a'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/classes/SqrtPriceMath',
                component: ComponentCreator('/zh/sdk/v3/reference/classes/SqrtPriceMath', 'ee8'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/classes/Staker',
                component: ComponentCreator('/zh/sdk/v3/reference/classes/Staker', '241'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/classes/SwapMath',
                component: ComponentCreator('/zh/sdk/v3/reference/classes/SwapMath', '602'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/classes/SwapQuoter',
                component: ComponentCreator('/zh/sdk/v3/reference/classes/SwapQuoter', '4e1'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/classes/SwapRouter',
                component: ComponentCreator('/zh/sdk/v3/reference/classes/SwapRouter', '131'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/classes/Tick',
                component: ComponentCreator('/zh/sdk/v3/reference/classes/Tick', 'ffa'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/classes/TickLibrary',
                component: ComponentCreator('/zh/sdk/v3/reference/classes/TickLibrary', '5f3'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/classes/TickList',
                component: ComponentCreator('/zh/sdk/v3/reference/classes/TickList', '415'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/classes/TickListDataProvider',
                component: ComponentCreator('/zh/sdk/v3/reference/classes/TickListDataProvider', 'cdf'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/classes/TickMath',
                component: ComponentCreator('/zh/sdk/v3/reference/classes/TickMath', 'a7c'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/classes/Trade',
                component: ComponentCreator('/zh/sdk/v3/reference/classes/Trade', 'db6'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/enums/FeeAmount',
                component: ComponentCreator('/zh/sdk/v3/reference/enums/FeeAmount', '7b0'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/interfaces/AllowedPermitArguments',
                component: ComponentCreator('/zh/sdk/v3/reference/interfaces/AllowedPermitArguments', '9d4'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/interfaces/BestTradeOptions',
                component: ComponentCreator('/zh/sdk/v3/reference/interfaces/BestTradeOptions', '369'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/interfaces/ClaimOptions',
                component: ComponentCreator('/zh/sdk/v3/reference/interfaces/ClaimOptions', 'c3f'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/interfaces/CollectOptions',
                component: ComponentCreator('/zh/sdk/v3/reference/interfaces/CollectOptions', '1e0'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/interfaces/CommonAddLiquidityOptions',
                component: ComponentCreator('/zh/sdk/v3/reference/interfaces/CommonAddLiquidityOptions', '2a6'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/interfaces/FeeOptions',
                component: ComponentCreator('/zh/sdk/v3/reference/interfaces/FeeOptions', '700'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/interfaces/IncentiveKey',
                component: ComponentCreator('/zh/sdk/v3/reference/interfaces/IncentiveKey', '252'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/interfaces/IncreaseSpecificOptions',
                component: ComponentCreator('/zh/sdk/v3/reference/interfaces/IncreaseSpecificOptions', 'cde'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/interfaces/MethodParameters',
                component: ComponentCreator('/zh/sdk/v3/reference/interfaces/MethodParameters', 'b5e'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/interfaces/MintSpecificOptions',
                component: ComponentCreator('/zh/sdk/v3/reference/interfaces/MintSpecificOptions', '0e8'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/interfaces/NFTPermitOptions',
                component: ComponentCreator('/zh/sdk/v3/reference/interfaces/NFTPermitOptions', 'e3d'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/interfaces/QuoteOptions',
                component: ComponentCreator('/zh/sdk/v3/reference/interfaces/QuoteOptions', 'd70'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/interfaces/RemoveLiquidityOptions',
                component: ComponentCreator('/zh/sdk/v3/reference/interfaces/RemoveLiquidityOptions', 'e79'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/interfaces/SafeTransferOptions',
                component: ComponentCreator('/zh/sdk/v3/reference/interfaces/SafeTransferOptions', '662'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/interfaces/StandardPermitArguments',
                component: ComponentCreator('/zh/sdk/v3/reference/interfaces/StandardPermitArguments', 'a1b'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/interfaces/SwapOptions',
                component: ComponentCreator('/zh/sdk/v3/reference/interfaces/SwapOptions', '139'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/interfaces/TickConstructorArgs',
                component: ComponentCreator('/zh/sdk/v3/reference/interfaces/TickConstructorArgs', '3b2'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/interfaces/TickDataProvider',
                component: ComponentCreator('/zh/sdk/v3/reference/interfaces/TickDataProvider', '798'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/interfaces/WithdrawOptions',
                component: ComponentCreator('/zh/sdk/v3/reference/interfaces/WithdrawOptions', 'd0e'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/sdk/v3/reference/overview',
                component: ComponentCreator('/zh/sdk/v3/reference/overview', '7f9'),
                exact: true,
                sidebar: "sdkSidebar"
              },
              {
                path: '/zh/study/',
                component: ComponentCreator('/zh/study/', 'ec1'),
                exact: true,
                sidebar: "studySidebar"
              },
              {
                path: '/zh/study/product/',
                component: ComponentCreator('/zh/study/product/', '00f'),
                exact: true,
                sidebar: "studySidebar"
              },
              {
                path: '/zh/study/product/liquidity/',
                component: ComponentCreator('/zh/study/product/liquidity/', 'b67'),
                exact: true,
                sidebar: "studySidebar"
              },
              {
                path: '/zh/study/product/liquidity/pool',
                component: ComponentCreator('/zh/study/product/liquidity/pool', '163'),
                exact: true,
                sidebar: "studySidebar"
              },
              {
                path: '/zh/study/product/swap/',
                component: ComponentCreator('/zh/study/product/swap/', '79f'),
                exact: true,
                sidebar: "studySidebar"
              },
              {
                path: '/zh/study/product/swap/market-maker-integration',
                component: ComponentCreator('/zh/study/product/swap/market-maker-integration', '057'),
                exact: true,
                sidebar: "studySidebar"
              },
              {
                path: '/zh/study/product/swap/trade',
                component: ComponentCreator('/zh/study/product/swap/trade', 'b60'),
                exact: true,
                sidebar: "studySidebar"
              },
              {
                path: '/zh/study/product/swap/trade_guide',
                component: ComponentCreator('/zh/study/product/swap/trade_guide', 'ee4'),
                exact: true,
                sidebar: "studySidebar"
              },
              {
                path: '/zh/study/start/wallet_guide/',
                component: ComponentCreator('/zh/study/start/wallet_guide/', '33c'),
                exact: true,
                sidebar: "studySidebar"
              },
              {
                path: '/zh/study/start/wallet_guide/connect_wallet',
                component: ComponentCreator('/zh/study/start/wallet_guide/connect_wallet', 'b44'),
                exact: true,
                sidebar: "studySidebar"
              },
              {
                path: '/zh/study/start/wallet_guide/create_wallet',
                component: ComponentCreator('/zh/study/start/wallet_guide/create_wallet', '5c7'),
                exact: true,
                sidebar: "studySidebar"
              },
              {
                path: '/zh/study/terms&conditions/privacy',
                component: ComponentCreator('/zh/study/terms&conditions/privacy', '4e4'),
                exact: true,
                sidebar: "studySidebar"
              },
              {
                path: '/zh/study/terms&conditions/terms',
                component: ComponentCreator('/zh/study/terms&conditions/terms', 'dfe'),
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
