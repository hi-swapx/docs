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
    path: '/search',
    component: ComponentCreator('/search', '822'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'fcf'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '8fd'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'a0f'),
            routes: [
              {
                path: '/category/-先进的',
                component: ComponentCreator('/category/-先进的', '16a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/-兑换',
                component: ComponentCreator('/category/-兑换', 'b56'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/-参考',
                component: ComponentCreator('/category/-参考', '626'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/-指南',
                component: ComponentCreator('/category/-指南', '5dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/-指南-1',
                component: ComponentCreator('/category/-指南-1', '7f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/-接口',
                component: ComponentCreator('/category/-接口', '6e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/-枚举',
                component: ComponentCreator('/category/-枚举', 'b9e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/-概念',
                component: ComponentCreator('/category/-概念', '19c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/-流动性',
                component: ComponentCreator('/category/-流动性', 'f6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/️-类',
                component: ComponentCreator('/category/️-类', '03d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/协议概览',
                component: ComponentCreator('/category/协议概览', '74e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/外围合约',
                component: ComponentCreator('/category/外围合约', '13a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/实现交换',
                component: ComponentCreator('/category/实现交换', 'aee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/技术参考',
                component: ComponentCreator('/category/技术参考', '839'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/指南',
                component: ComponentCreator('/category/指南', '2b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/核心合约',
                component: ComponentCreator('/category/核心合约', 'b82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/核心概念',
                component: ComponentCreator('/category/核心概念', '8ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/高级主题',
                component: ComponentCreator('/category/高级主题', 'f55'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/contract/',
                component: ComponentCreator('/contract/', '808'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/contract/swapx-v2/',
                component: ComponentCreator('/contract/swapx-v2/', 'fac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/contract/swapx-v2/concepts/advanced-topics/fees',
                component: ComponentCreator('/contract/swapx-v2/concepts/advanced-topics/fees', 'f31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/contract/swapx-v2/concepts/advanced-topics/price',
                component: ComponentCreator('/contract/swapx-v2/concepts/advanced-topics/price', 'd4c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/contract/swapx-v2/concepts/advanced-topics/security',
                component: ComponentCreator('/contract/swapx-v2/concepts/advanced-topics/security', 'a3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/contract/swapx-v2/concepts/advanced-topics/understanding-returns',
                component: ComponentCreator('/contract/swapx-v2/concepts/advanced-topics/understanding-returns', '9ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/contract/swapx-v2/concepts/advanced-topics/v2Contract',
                component: ComponentCreator('/contract/swapx-v2/concepts/advanced-topics/v2Contract', 'ae7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/contract/swapx-v2/concepts/core-concepts/flash-swaps',
                component: ComponentCreator('/contract/swapx-v2/concepts/core-concepts/flash-swaps', '951'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/contract/swapx-v2/concepts/core-concepts/pools',
                component: ComponentCreator('/contract/swapx-v2/concepts/core-concepts/pools', '117'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/contract/swapx-v2/concepts/core-concepts/swaps',
                component: ComponentCreator('/contract/swapx-v2/concepts/core-concepts/swaps', '85d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/contract/swapx-v2/concepts/protocol-overview/ecosystem-participants',
                component: ComponentCreator('/contract/swapx-v2/concepts/protocol-overview/ecosystem-participants', '7da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/contract/swapx-v2/concepts/protocol-overview/how-it-works',
                component: ComponentCreator('/contract/swapx-v2/concepts/protocol-overview/how-it-works', '418'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/contract/swapx-v2/concepts/protocol-overview/smart-contract',
                component: ComponentCreator('/contract/swapx-v2/concepts/protocol-overview/smart-contract', '48f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/contract/swapx-v3/guides/Implement-A-Swap/multihop-swaps',
                component: ComponentCreator('/contract/swapx-v3/guides/Implement-A-Swap/multihop-swaps', 'df9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/contract/swapx-v3/guides/Implement-A-Swap/single-swaps',
                component: ComponentCreator('/contract/swapx-v3/guides/Implement-A-Swap/single-swaps', 'fe9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/contract/swapx-v3/guides/Implement-A-Swap/v3ContractAPI',
                component: ComponentCreator('/contract/swapx-v3/guides/Implement-A-Swap/v3ContractAPI', 'd94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/contract/swapx-v3/overview',
                component: ComponentCreator('/contract/swapx-v3/overview', '65e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/contract/swapx-v3/technical-reference/core/SwapXV3Factory',
                component: ComponentCreator('/contract/swapx-v3/technical-reference/core/SwapXV3Factory', '89a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/contract/swapx-v3/technical-reference/core/SwapXV3Pool',
                component: ComponentCreator('/contract/swapx-v3/technical-reference/core/SwapXV3Pool', 'f60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/contract/swapx-v3/technical-reference/core/SwapXV3PoolDeployer',
                component: ComponentCreator('/contract/swapx-v3/technical-reference/core/SwapXV3PoolDeployer', '0f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/contract/swapx-v3/technical-reference/periphery/NonfungiblePositionManager',
                component: ComponentCreator('/contract/swapx-v3/technical-reference/periphery/NonfungiblePositionManager', '648'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/contract/swapx-v3/technical-reference/periphery/NonfungibleTokenPositionDescriptor',
                component: ComponentCreator('/contract/swapx-v3/technical-reference/periphery/NonfungibleTokenPositionDescriptor', 'a59'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/contract/swapx-v3/technical-reference/periphery/SwapRouter',
                component: ComponentCreator('/contract/swapx-v3/technical-reference/periphery/SwapRouter', 'efa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/',
                component: ComponentCreator('/sdk/', '4f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v2/guides/fetching-data',
                component: ComponentCreator('/sdk/v2/guides/fetching-data', '64f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v2/guides/getting-pair-addresses',
                component: ComponentCreator('/sdk/v2/guides/getting-pair-addresses', '3fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v2/guides/pricing',
                component: ComponentCreator('/sdk/v2/guides/pricing', '6ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v2/guides/quick-start',
                component: ComponentCreator('/sdk/v2/guides/quick-start', 'b3f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v2/guides/trading',
                component: ComponentCreator('/sdk/v2/guides/trading', 'ea2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v2/overview',
                component: ComponentCreator('/sdk/v2/overview', '5d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v2/reference/getting-started',
                component: ComponentCreator('/sdk/v2/reference/getting-started', '8d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v2/reference/other-exports',
                component: ComponentCreator('/sdk/v2/reference/other-exports', '29a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v2/reference/pair',
                component: ComponentCreator('/sdk/v2/reference/pair', '18b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v2/reference/route',
                component: ComponentCreator('/sdk/v2/reference/route', '8ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v2/reference/trade',
                component: ComponentCreator('/sdk/v2/reference/trade', '861'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/guides/advanced/active-liquidity',
                component: ComponentCreator('/sdk/v3/guides/advanced/active-liquidity', '5cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/guides/advanced/introduction',
                component: ComponentCreator('/sdk/v3/guides/advanced/introduction', '235'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/guides/advanced/pool-data',
                component: ComponentCreator('/sdk/v3/guides/advanced/pool-data', '0ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/guides/advanced/price-oracle',
                component: ComponentCreator('/sdk/v3/guides/advanced/price-oracle', '44c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/guides/advanced/range-orders',
                component: ComponentCreator('/sdk/v3/guides/advanced/range-orders', '127'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/guides/background',
                component: ComponentCreator('/sdk/v3/guides/background', 'af8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/guides/liquidity/collecting-fees',
                component: ComponentCreator('/sdk/v3/guides/liquidity/collecting-fees', '1fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/guides/liquidity/fetching-positions',
                component: ComponentCreator('/sdk/v3/guides/liquidity/fetching-positions', 'caa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/guides/liquidity/minting-position',
                component: ComponentCreator('/sdk/v3/guides/liquidity/minting-position', '07e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/guides/liquidity/modifying-position',
                component: ComponentCreator('/sdk/v3/guides/liquidity/modifying-position', '870'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/guides/liquidity/position-data',
                component: ComponentCreator('/sdk/v3/guides/liquidity/position-data', '52c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/guides/liquidity/swap-and-add-liquidity',
                component: ComponentCreator('/sdk/v3/guides/liquidity/swap-and-add-liquidity', 'd0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/guides/local-development',
                component: ComponentCreator('/sdk/v3/guides/local-development', '6ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/guides/swaps/quoting',
                component: ComponentCreator('/sdk/v3/guides/swaps/quoting', 'a66'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/guides/swaps/routing',
                component: ComponentCreator('/sdk/v3/guides/swaps/routing', 'a37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/guides/swaps/trading',
                component: ComponentCreator('/sdk/v3/guides/swaps/trading', '0a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/guides/web3-development-basics',
                component: ComponentCreator('/sdk/v3/guides/web3-development-basics', '3bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/overview',
                component: ComponentCreator('/sdk/v3/overview', '509'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/FullMath',
                component: ComponentCreator('/sdk/v3/reference/classes/FullMath', 'bce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/LiquidityMath',
                component: ComponentCreator('/sdk/v3/reference/classes/LiquidityMath', 'bf5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/Multicall',
                component: ComponentCreator('/sdk/v3/reference/classes/Multicall', '02e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/NonfungiblePositionManager',
                component: ComponentCreator('/sdk/v3/reference/classes/NonfungiblePositionManager', 'dc8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/NoTickDataProvider',
                component: ComponentCreator('/sdk/v3/reference/classes/NoTickDataProvider', '79e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/Payments',
                component: ComponentCreator('/sdk/v3/reference/classes/Payments', '0c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/Pool',
                component: ComponentCreator('/sdk/v3/reference/classes/Pool', '35f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/Position',
                component: ComponentCreator('/sdk/v3/reference/classes/Position', '06f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/PositionLibrary',
                component: ComponentCreator('/sdk/v3/reference/classes/PositionLibrary', 'f51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/Route',
                component: ComponentCreator('/sdk/v3/reference/classes/Route', 'bbc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/SelfPermit',
                component: ComponentCreator('/sdk/v3/reference/classes/SelfPermit', '009'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/SqrtPriceMath',
                component: ComponentCreator('/sdk/v3/reference/classes/SqrtPriceMath', '149'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/Staker',
                component: ComponentCreator('/sdk/v3/reference/classes/Staker', 'e6f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/SwapMath',
                component: ComponentCreator('/sdk/v3/reference/classes/SwapMath', '30b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/SwapQuoter',
                component: ComponentCreator('/sdk/v3/reference/classes/SwapQuoter', 'e38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/SwapRouter',
                component: ComponentCreator('/sdk/v3/reference/classes/SwapRouter', '1d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/Tick',
                component: ComponentCreator('/sdk/v3/reference/classes/Tick', '810'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/TickLibrary',
                component: ComponentCreator('/sdk/v3/reference/classes/TickLibrary', '090'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/TickList',
                component: ComponentCreator('/sdk/v3/reference/classes/TickList', '35e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/TickListDataProvider',
                component: ComponentCreator('/sdk/v3/reference/classes/TickListDataProvider', 'c27'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/TickMath',
                component: ComponentCreator('/sdk/v3/reference/classes/TickMath', '147'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/classes/Trade',
                component: ComponentCreator('/sdk/v3/reference/classes/Trade', '8ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/enums/FeeAmount',
                component: ComponentCreator('/sdk/v3/reference/enums/FeeAmount', '28f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/AllowedPermitArguments',
                component: ComponentCreator('/sdk/v3/reference/interfaces/AllowedPermitArguments', '67a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/BestTradeOptions',
                component: ComponentCreator('/sdk/v3/reference/interfaces/BestTradeOptions', '35d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/ClaimOptions',
                component: ComponentCreator('/sdk/v3/reference/interfaces/ClaimOptions', '0a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/CollectOptions',
                component: ComponentCreator('/sdk/v3/reference/interfaces/CollectOptions', '54d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/CommonAddLiquidityOptions',
                component: ComponentCreator('/sdk/v3/reference/interfaces/CommonAddLiquidityOptions', '606'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/FeeOptions',
                component: ComponentCreator('/sdk/v3/reference/interfaces/FeeOptions', '058'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/IncentiveKey',
                component: ComponentCreator('/sdk/v3/reference/interfaces/IncentiveKey', '9e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/IncreaseSpecificOptions',
                component: ComponentCreator('/sdk/v3/reference/interfaces/IncreaseSpecificOptions', 'd53'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/MethodParameters',
                component: ComponentCreator('/sdk/v3/reference/interfaces/MethodParameters', '013'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/MintSpecificOptions',
                component: ComponentCreator('/sdk/v3/reference/interfaces/MintSpecificOptions', '3b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/NFTPermitOptions',
                component: ComponentCreator('/sdk/v3/reference/interfaces/NFTPermitOptions', '465'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/QuoteOptions',
                component: ComponentCreator('/sdk/v3/reference/interfaces/QuoteOptions', 'a77'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/RemoveLiquidityOptions',
                component: ComponentCreator('/sdk/v3/reference/interfaces/RemoveLiquidityOptions', '956'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/SafeTransferOptions',
                component: ComponentCreator('/sdk/v3/reference/interfaces/SafeTransferOptions', '1fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/StandardPermitArguments',
                component: ComponentCreator('/sdk/v3/reference/interfaces/StandardPermitArguments', 'aea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/SwapOptions',
                component: ComponentCreator('/sdk/v3/reference/interfaces/SwapOptions', 'c1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/TickConstructorArgs',
                component: ComponentCreator('/sdk/v3/reference/interfaces/TickConstructorArgs', 'ebe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/TickDataProvider',
                component: ComponentCreator('/sdk/v3/reference/interfaces/TickDataProvider', '6c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/interfaces/WithdrawOptions',
                component: ComponentCreator('/sdk/v3/reference/interfaces/WithdrawOptions', 'dd5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/v3/reference/overview',
                component: ComponentCreator('/sdk/v3/reference/overview', '35e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-integration/',
                component: ComponentCreator('/swapx-integration/', '7d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-integration/bridging/',
                component: ComponentCreator('/swapx-integration/bridging/', 'b73'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-integration/bridging/learn-more',
                component: ComponentCreator('/swapx-integration/bridging/learn-more', 'f24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-integration/bridging/rainlink-bridging',
                component: ComponentCreator('/swapx-integration/bridging/rainlink-bridging', '1a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-integration/liquidity-pool/',
                component: ComponentCreator('/swapx-integration/liquidity-pool/', '370'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-integration/liquidity-pool/how-to-remove-liquidity',
                component: ComponentCreator('/swapx-integration/liquidity-pool/how-to-remove-liquidity', 'e88'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-integration/liquidity-pool/liquidity-overview',
                component: ComponentCreator('/swapx-integration/liquidity-pool/liquidity-overview', '0b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-integration/liquidity-pool/swapx-v2-liquidity-pool',
                component: ComponentCreator('/swapx-integration/liquidity-pool/swapx-v2-liquidity-pool', '2ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-integration/liquidity-pool/swapx-v3-liquidity-pool',
                component: ComponentCreator('/swapx-integration/liquidity-pool/swapx-v3-liquidity-pool', '879'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-integration/liquidity-pool/understanding-liquidity-provider-returns',
                component: ComponentCreator('/swapx-integration/liquidity-pool/understanding-liquidity-provider-returns', 'd9e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-integration/protocol/',
                component: ComponentCreator('/swapx-integration/protocol/', 'd5a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-integration/protocol/swapx-tokenomics',
                component: ComponentCreator('/swapx-integration/protocol/swapx-tokenomics', 'ec9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-integration/swap/',
                component: ComponentCreator('/swapx-integration/swap/', '640'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-integration/swap/basic-concepts-of-swap',
                component: ComponentCreator('/swapx-integration/swap/basic-concepts-of-swap', '067'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-integration/swap/how-to-trade',
                component: ComponentCreator('/swapx-integration/swap/how-to-trade', '9d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-integration/swap/liquidity-provider-fees',
                component: ComponentCreator('/swapx-integration/swap/liquidity-provider-fees', 'e6f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-integration/swap/market-maker-integration',
                component: ComponentCreator('/swapx-integration/swap/market-maker-integration', '95c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-integration/swap/price-mechanism-and-security',
                component: ComponentCreator('/swapx-integration/swap/price-mechanism-and-security', '22a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-integration/swap/what-is-trade',
                component: ComponentCreator('/swapx-integration/swap/what-is-trade', 'cec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-integration/welcome-to-swapx/',
                component: ComponentCreator('/swapx-integration/welcome-to-swapx/', '2c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-integration/welcome-to-swapx/about-us/',
                component: ComponentCreator('/swapx-integration/welcome-to-swapx/about-us/', 'bb9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-integration/welcome-to-swapx/about-us/brand-and-logos',
                component: ComponentCreator('/swapx-integration/welcome-to-swapx/about-us/brand-and-logos', 'c03'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-integration/welcome-to-swapx/about-us/team',
                component: ComponentCreator('/swapx-integration/welcome-to-swapx/about-us/team', '1ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-integration/welcome-to-swapx/audits',
                component: ComponentCreator('/swapx-integration/welcome-to-swapx/audits', '26b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-integration/welcome-to-swapx/contact-us',
                component: ComponentCreator('/swapx-integration/welcome-to-swapx/contact-us', 'c7e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-integration/welcome-to-swapx/news',
                component: ComponentCreator('/swapx-integration/welcome-to-swapx/news', '660'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-integration/welcome-to-swapx/privacy-and-terms/',
                component: ComponentCreator('/swapx-integration/welcome-to-swapx/privacy-and-terms/', 'f17'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-integration/welcome-to-swapx/privacy-and-terms/privacy-policy',
                component: ComponentCreator('/swapx-integration/welcome-to-swapx/privacy-and-terms/privacy-policy', '2d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-integration/welcome-to-swapx/privacy-and-terms/terms-of-service-tos',
                component: ComponentCreator('/swapx-integration/welcome-to-swapx/privacy-and-terms/terms-of-service-tos', 'f8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-integration/welcome-to-swapx/publish-your-docs',
                component: ComponentCreator('/swapx-integration/welcome-to-swapx/publish-your-docs', 'a2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-integration/welcome-to-swapx/quickstart/',
                component: ComponentCreator('/swapx-integration/welcome-to-swapx/quickstart/', '6a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-integration/welcome-to-swapx/quickstart/connect-your-wallet-to-swapx',
                component: ComponentCreator('/swapx-integration/welcome-to-swapx/quickstart/connect-your-wallet-to-swapx', '577'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-integration/welcome-to-swapx/quickstart/how-to-get-and-create-a-wallet',
                component: ComponentCreator('/swapx-integration/welcome-to-swapx/quickstart/how-to-get-and-create-a-wallet', '973'),
                exact: true,
                sidebar: "tutorialSidebar"
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
