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
    component: ComponentCreator('/', '6cf'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'eaa'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '960'),
            routes: [
              {
                path: '/swapx-developer/',
                component: ComponentCreator('/swapx-developer/', 'c3f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v2/',
                component: ComponentCreator('/swapx-developer/contracts-v2/', '080'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v2/concepts/',
                component: ComponentCreator('/swapx-developer/contracts-v2/concepts/', '2eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v2/concepts/advanced-topics/',
                component: ComponentCreator('/swapx-developer/contracts-v2/concepts/advanced-topics/', 'e9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v2/concepts/advanced-topics/fees',
                component: ComponentCreator('/swapx-developer/contracts-v2/concepts/advanced-topics/fees', '579'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v2/concepts/advanced-topics/math',
                component: ComponentCreator('/swapx-developer/contracts-v2/concepts/advanced-topics/math', '5ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v2/concepts/advanced-topics/pricing',
                component: ComponentCreator('/swapx-developer/contracts-v2/concepts/advanced-topics/pricing', '78d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v2/concepts/advanced-topics/research',
                component: ComponentCreator('/swapx-developer/contracts-v2/concepts/advanced-topics/research', '4a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v2/concepts/advanced-topics/security',
                component: ComponentCreator('/swapx-developer/contracts-v2/concepts/advanced-topics/security', 'e0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v2/concepts/advanced-topics/understanding-returns',
                component: ComponentCreator('/swapx-developer/contracts-v2/concepts/advanced-topics/understanding-returns', 'e23'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v2/concepts/core-concepts/',
                component: ComponentCreator('/swapx-developer/contracts-v2/concepts/core-concepts/', 'f22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v2/concepts/core-concepts/flash-swaps',
                component: ComponentCreator('/swapx-developer/contracts-v2/concepts/core-concepts/flash-swaps', 'c62'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v2/concepts/core-concepts/oracles',
                component: ComponentCreator('/swapx-developer/contracts-v2/concepts/core-concepts/oracles', '144'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v2/concepts/core-concepts/pools',
                component: ComponentCreator('/swapx-developer/contracts-v2/concepts/core-concepts/pools', 'b10'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v2/concepts/core-concepts/swaps',
                component: ComponentCreator('/swapx-developer/contracts-v2/concepts/core-concepts/swaps', 'dee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v2/concepts/protocol-overview/',
                component: ComponentCreator('/swapx-developer/contracts-v2/concepts/protocol-overview/', '400'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v2/concepts/protocol-overview/ecosystem-participants',
                component: ComponentCreator('/swapx-developer/contracts-v2/concepts/protocol-overview/ecosystem-participants', '0d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v2/concepts/protocol-overview/glossary',
                component: ComponentCreator('/swapx-developer/contracts-v2/concepts/protocol-overview/glossary', '62e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v2/concepts/protocol-overview/how-uniswap-works',
                component: ComponentCreator('/swapx-developer/contracts-v2/concepts/protocol-overview/how-uniswap-works', 'c25'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v2/concepts/protocol-overview/smart-contracts',
                component: ComponentCreator('/swapx-developer/contracts-v2/concepts/protocol-overview/smart-contracts', '505'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v2/guides/',
                component: ComponentCreator('/swapx-developer/contracts-v2/guides/', '4dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v2/guides/interface-integration/',
                component: ComponentCreator('/swapx-developer/contracts-v2/guides/interface-integration/', 'c77'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v2/guides/interface-integration/custom-interface-linking',
                component: ComponentCreator('/swapx-developer/contracts-v2/guides/interface-integration/custom-interface-linking', '41f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v2/guides/interface-integration/using-the-api',
                component: ComponentCreator('/swapx-developer/contracts-v2/guides/interface-integration/using-the-api', '4a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v2/guides/smart-contract-integration/',
                component: ComponentCreator('/swapx-developer/contracts-v2/guides/smart-contract-integration/', '289'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v2/guides/smart-contract-integration/building-an-oracle',
                component: ComponentCreator('/swapx-developer/contracts-v2/guides/smart-contract-integration/building-an-oracle', '03f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v2/guides/smart-contract-integration/getting-pair-addresses',
                component: ComponentCreator('/swapx-developer/contracts-v2/guides/smart-contract-integration/getting-pair-addresses', '233'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v2/guides/smart-contract-integration/providing-liquidity',
                component: ComponentCreator('/swapx-developer/contracts-v2/guides/smart-contract-integration/providing-liquidity', '0fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v2/guides/smart-contract-integration/quick-start',
                component: ComponentCreator('/swapx-developer/contracts-v2/guides/smart-contract-integration/quick-start', '797'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v2/guides/smart-contract-integration/supporting-meta-transactions',
                component: ComponentCreator('/swapx-developer/contracts-v2/guides/smart-contract-integration/supporting-meta-transactions', 'db5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v2/guides/smart-contract-integration/trading-from-a-smart-contract',
                component: ComponentCreator('/swapx-developer/contracts-v2/guides/smart-contract-integration/trading-from-a-smart-contract', '2a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v2/guides/smart-contract-integration/using-flash-swaps',
                component: ComponentCreator('/swapx-developer/contracts-v2/guides/smart-contract-integration/using-flash-swaps', 'b01'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/',
                component: ComponentCreator('/swapx-developer/contracts-v3/', 'a41'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/guides/',
                component: ComponentCreator('/swapx-developer/contracts-v3/guides/', '314'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/guides/flash-integrations/',
                component: ComponentCreator('/swapx-developer/contracts-v3/guides/flash-integrations/', '2b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/guides/flash-integrations/calling-flash',
                component: ComponentCreator('/swapx-developer/contracts-v3/guides/flash-integrations/calling-flash', '3d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/guides/flash-integrations/final-contract',
                component: ComponentCreator('/swapx-developer/contracts-v3/guides/flash-integrations/final-contract', '1c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/guides/flash-integrations/flash-callback',
                component: ComponentCreator('/swapx-developer/contracts-v3/guides/flash-integrations/flash-callback', 'f5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/guides/flash-integrations/Inheritance-constructors',
                component: ComponentCreator('/swapx-developer/contracts-v3/guides/flash-integrations/Inheritance-constructors', '3bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/guides/liquidity-mining/',
                component: ComponentCreator('/swapx-developer/contracts-v3/guides/liquidity-mining/', 'ae9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/guides/liquidity-mining/overview',
                component: ComponentCreator('/swapx-developer/contracts-v3/guides/liquidity-mining/overview', '4f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/guides/providing-liquidity/',
                component: ComponentCreator('/swapx-developer/contracts-v3/guides/providing-liquidity/', '9e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/guides/providing-liquidity/collect-fees',
                component: ComponentCreator('/swapx-developer/contracts-v3/guides/providing-liquidity/collect-fees', 'bce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/guides/providing-liquidity/decrease-liquidity',
                component: ComponentCreator('/swapx-developer/contracts-v3/guides/providing-liquidity/decrease-liquidity', '33e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/guides/providing-liquidity/increase-liquidity',
                component: ComponentCreator('/swapx-developer/contracts-v3/guides/providing-liquidity/increase-liquidity', 'f63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/guides/providing-liquidity/mint-a-new-position',
                component: ComponentCreator('/swapx-developer/contracts-v3/guides/providing-liquidity/mint-a-new-position', 'cb8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/guides/providing-liquidity/setting-up-your-contract',
                component: ComponentCreator('/swapx-developer/contracts-v3/guides/providing-liquidity/setting-up-your-contract', '44e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/guides/providing-liquidity/the-full-contract',
                component: ComponentCreator('/swapx-developer/contracts-v3/guides/providing-liquidity/the-full-contract', '179'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/guides/swaps/',
                component: ComponentCreator('/swapx-developer/contracts-v3/guides/swaps/', 'd8e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/guides/swaps/multihop-swaps',
                component: ComponentCreator('/swapx-developer/contracts-v3/guides/swaps/multihop-swaps', 'ef8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/guides/swaps/single-swaps',
                component: ComponentCreator('/swapx-developer/contracts-v3/guides/swaps/single-swaps', '0a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/', 'a11'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/', '3ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/interfaces/',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/interfaces/', 'ed4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/interfaces/callback/',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/interfaces/callback/', 'ac0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/interfaces/callback/IUniswapV3FlashCallback',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/interfaces/callback/IUniswapV3FlashCallback', '72b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/interfaces/callback/IUniswapV3MintCallback',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/interfaces/callback/IUniswapV3MintCallback', 'bcd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/interfaces/callback/IUniswapV3SwapCallback',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/interfaces/callback/IUniswapV3SwapCallback', 'ee6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/interfaces/IERC20Minimal',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/interfaces/IERC20Minimal', '9a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/interfaces/IUniswapV3Factory',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/interfaces/IUniswapV3Factory', 'e7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/interfaces/IUniswapV3Pool',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/interfaces/IUniswapV3Pool', 'e4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/interfaces/IUniswapV3PoolDeployer',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/interfaces/IUniswapV3PoolDeployer', 'a26'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/interfaces/pool/',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/interfaces/pool/', 'c4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/interfaces/pool/IUniswapV3PoolActions',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/interfaces/pool/IUniswapV3PoolActions', 'f99'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/interfaces/pool/IUniswapV3PoolDerivedState',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/interfaces/pool/IUniswapV3PoolDerivedState', '7b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/interfaces/pool/IUniswapV3PoolEvents',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/interfaces/pool/IUniswapV3PoolEvents', 'e01'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/interfaces/pool/IUniswapV3PoolImmutables',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/interfaces/pool/IUniswapV3PoolImmutables', 'd9b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/interfaces/pool/IUniswapV3PoolOwnerActions',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/interfaces/pool/IUniswapV3PoolOwnerActions', '90c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/interfaces/pool/IUniswapV3PoolState',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/interfaces/pool/IUniswapV3PoolState', '1f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/libraries/',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/libraries/', 'dcf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/libraries/BitMath',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/libraries/BitMath', 'aa5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/libraries/FixedPoint128',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/libraries/FixedPoint128', 'c97'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/libraries/FixedPoint96',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/libraries/FixedPoint96', 'c82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/libraries/FullMath',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/libraries/FullMath', 'eac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/libraries/LiquidityMath',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/libraries/LiquidityMath', 'e85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/libraries/LowGasSafeMath',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/libraries/LowGasSafeMath', '275'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/libraries/Oracle',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/libraries/Oracle', '86c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/libraries/Position',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/libraries/Position', '54e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/libraries/SafeCast',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/libraries/SafeCast', 'c75'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/libraries/SecondsOutside',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/libraries/SecondsOutside', 'a22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/libraries/SqrtPriceMath',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/libraries/SqrtPriceMath', 'cd3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/libraries/SwapMath',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/libraries/SwapMath', '102'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/libraries/Tick',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/libraries/Tick', '4fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/libraries/TickBitmap',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/libraries/TickBitmap', 'c59'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/libraries/TickMath',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/libraries/TickMath', '35a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/libraries/TransferHelper',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/libraries/TransferHelper', '3dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/libraries/UnsafeMath',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/libraries/UnsafeMath', 'bed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/UniswapV3Factory',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/UniswapV3Factory', '6a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/UniswapV3Pool',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/UniswapV3Pool', 'b7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/core/UniswapV3PoolDeployer',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/core/UniswapV3PoolDeployer', '87c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/error-codes',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/error-codes', 'f94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/', 'a80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/base/',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/base/', 'd49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/base/BlockTimestamp',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/base/BlockTimestamp', '68b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/base/ERC721Permit',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/base/ERC721Permit', '2d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/base/LiquidityManagement',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/base/LiquidityManagement', 'd7a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/base/Multicall',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/base/Multicall', 'df3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/base/PeripheryImmutableState',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/base/PeripheryImmutableState', '02f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/base/PeripheryPayments',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/base/PeripheryPayments', '6fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/base/PeripheryPaymentsWithFee',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/base/PeripheryPaymentsWithFee', '573'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/base/PoolInitializer',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/base/PoolInitializer', '21f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/base/SelfPermit',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/base/SelfPermit', '2e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/interfaces/',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/interfaces/', '362'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/interfaces/external/',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/interfaces/external/', 'a80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/interfaces/external/IERC1271',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/interfaces/external/IERC1271', '196'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/interfaces/external/IERC20PermitAllowed',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/interfaces/external/IERC20PermitAllowed', '8e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/interfaces/external/IWETH9',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/interfaces/external/IWETH9', '01b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/interfaces/IERC20Metadata',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/interfaces/IERC20Metadata', '03a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/interfaces/IERC721Permit',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/interfaces/IERC721Permit', '8fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/interfaces/IMulticall',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/interfaces/IMulticall', '99f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/interfaces/INonfungiblePositionManager',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/interfaces/INonfungiblePositionManager', 'c0a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/interfaces/INonfungibleTokenPositionDescriptor',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/interfaces/INonfungibleTokenPositionDescriptor', '77d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/interfaces/IPeripheryImmutableState',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/interfaces/IPeripheryImmutableState', '1d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/interfaces/IPeripheryPayments',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/interfaces/IPeripheryPayments', 'cdb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/interfaces/IPeripheryPaymentsWithFee',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/interfaces/IPeripheryPaymentsWithFee', '373'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/interfaces/IPoolInitializer',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/interfaces/IPoolInitializer', 'f18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/interfaces/IQuoter',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/interfaces/IQuoter', 'ab8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/interfaces/IQuoterV2',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/interfaces/IQuoterV2', 'c7a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/interfaces/ISelfPermit',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/interfaces/ISelfPermit', '414'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/interfaces/ISwapRouter',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/interfaces/ISwapRouter', '8ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/interfaces/ITickLens',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/interfaces/ITickLens', '561'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/interfaces/IV3Migrator',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/interfaces/IV3Migrator', '4ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/lens/',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/lens/', 'f47'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/lens/Quoter',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/lens/Quoter', '5f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/lens/QuoterV2',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/lens/QuoterV2', 'd41'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/lens/TickLens',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/lens/TickLens', '546'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/libraries/',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/libraries/', '5bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/libraries/Base64',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/libraries/Base64', 'c9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/libraries/BytesLib',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/libraries/BytesLib', '098'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/libraries/CallbackValidation',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/libraries/CallbackValidation', 'bce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/libraries/ChainId',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/libraries/ChainId', '4d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/libraries/HexStrings',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/libraries/HexStrings', '8ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/libraries/LiquidityAmounts',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/libraries/LiquidityAmounts', '562'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/libraries/NFTDescriptor',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/libraries/NFTDescriptor', 'e71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/libraries/NFTSVG',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/libraries/NFTSVG', 'be2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/libraries/OracleLibrary',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/libraries/OracleLibrary', 'bff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/libraries/Path',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/libraries/Path', 'f6b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/libraries/PoolAddress',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/libraries/PoolAddress', 'e60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/libraries/PoolTicksCounter',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/libraries/PoolTicksCounter', '8fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/libraries/PositionKey',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/libraries/PositionKey', '4b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/libraries/TokenRatioSortOrder',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/libraries/TokenRatioSortOrder', '57d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/libraries/TransferHelper',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/libraries/TransferHelper', 'c9b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/libraries/WeightedOracleLibrary',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/libraries/WeightedOracleLibrary', '105'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/NonfungiblePositionManager',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/NonfungiblePositionManager', '9b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/NonfungibleTokenPositionDescriptor',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/NonfungibleTokenPositionDescriptor', '90d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/staker/',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/staker/', '2fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/staker/Design',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/staker/Design', '9ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/staker/interfaces/',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/staker/interfaces/', 'fb5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/staker/interfaces/IUniswapV3Staker',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/staker/interfaces/IUniswapV3Staker', 'fa5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/staker/libraries/',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/staker/libraries/', '643'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/staker/libraries/IncentiveId',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/staker/libraries/IncentiveId', 'b2b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/staker/libraries/NFTPositionInfo',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/staker/libraries/NFTPositionInfo', '37a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/staker/libraries/RewardMath',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/staker/libraries/RewardMath', 'b47'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/staker/UniswapV3Staker',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/staker/UniswapV3Staker', 'e01'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/SwapRouter',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/SwapRouter', '5bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/test/',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/test/', 'e35'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/test/Base64Test',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/test/Base64Test', '8fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/test/LiquidityAmountsTest',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/test/LiquidityAmountsTest', 'd74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/test/MockTimeNonfungiblePositionManager',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/test/MockTimeNonfungiblePositionManager', 'f7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/test/MockTimeSwapRouter',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/test/MockTimeSwapRouter', '126'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/test/NFTDescriptorTest',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/test/NFTDescriptorTest', '014'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/test/PathTest',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/test/PathTest', 'bdc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/test/PeripheryImmutableStateTest',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/test/PeripheryImmutableStateTest', '3b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/test/PoolAddressTest',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/test/PoolAddressTest', '8dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/test/SelfPermitTest',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/test/SelfPermitTest', '2bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/test/TestCallbackValidation',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/test/TestCallbackValidation', '45e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/test/TestERC20',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/test/TestERC20', '52d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/test/TestERC20Metadata',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/test/TestERC20Metadata', 'b4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/test/TestERC20PermitAllowed',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/test/TestERC20PermitAllowed', '8a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/test/TestMulticall',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/test/TestMulticall', '157'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/test/TestPositionNFTOwner',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/test/TestPositionNFTOwner', 'd86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/test/TestUniswapV3Callee',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/test/TestUniswapV3Callee', '81e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/test/TickLensTest',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/test/TickLensTest', 'a80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/contracts-v3/reference/periphery/V3Migrator',
                component: ComponentCreator('/swapx-developer/contracts-v3/reference/periphery/V3Migrator', 'f11'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/quick-start-tutorial/',
                component: ComponentCreator('/swapx-developer/quick-start-tutorial/', '413'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/quick-start-tutorial/connecting-to-network',
                component: ComponentCreator('/swapx-developer/quick-start-tutorial/connecting-to-network', 'ce3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/quick-start-tutorial/environment-setup',
                component: ComponentCreator('/swapx-developer/quick-start-tutorial/environment-setup', 'bc3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/quick-start-tutorial/executing-trades',
                component: ComponentCreator('/swapx-developer/quick-start-tutorial/executing-trades', '20c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/quick-start-tutorial/reading-chain-data',
                component: ComponentCreator('/swapx-developer/quick-start-tutorial/reading-chain-data', '3c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-core/',
                component: ComponentCreator('/swapx-developer/sdks-core/', 'b55'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-core/reference/',
                component: ComponentCreator('/swapx-developer/sdks-core/reference/', 'd1f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-core/reference/classes/',
                component: ComponentCreator('/swapx-developer/sdks-core/reference/classes/', '636'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-core/reference/classes/CurrencyAmount',
                component: ComponentCreator('/swapx-developer/sdks-core/reference/classes/CurrencyAmount', '37f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-core/reference/classes/Ether',
                component: ComponentCreator('/swapx-developer/sdks-core/reference/classes/Ether', 'fdc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-core/reference/classes/Fraction',
                component: ComponentCreator('/swapx-developer/sdks-core/reference/classes/Fraction', '774'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-core/reference/classes/NativeCurrency',
                component: ComponentCreator('/swapx-developer/sdks-core/reference/classes/NativeCurrency', '83f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-core/reference/classes/Percent',
                component: ComponentCreator('/swapx-developer/sdks-core/reference/classes/Percent', '23e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-core/reference/classes/Price',
                component: ComponentCreator('/swapx-developer/sdks-core/reference/classes/Price', '7dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-core/reference/classes/Token',
                component: ComponentCreator('/swapx-developer/sdks-core/reference/classes/Token', 'ff4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-core/reference/enums/',
                component: ComponentCreator('/swapx-developer/sdks-core/reference/enums/', '5b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-core/reference/enums/ChainId',
                component: ComponentCreator('/swapx-developer/sdks-core/reference/enums/ChainId', 'afa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-core/reference/enums/NativeCurrencyName',
                component: ComponentCreator('/swapx-developer/sdks-core/reference/enums/NativeCurrencyName', '92d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-core/reference/enums/Rounding',
                component: ComponentCreator('/swapx-developer/sdks-core/reference/enums/Rounding', '2b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-core/reference/enums/TradeType',
                component: ComponentCreator('/swapx-developer/sdks-core/reference/enums/TradeType', '208'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-core/reference/modules',
                component: ComponentCreator('/swapx-developer/sdks-core/reference/modules', 'a3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-core/reference/overview',
                component: ComponentCreator('/swapx-developer/sdks-core/reference/overview', '689'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v2/',
                component: ComponentCreator('/swapx-developer/sdks-v2/', 'a62'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v2/guides/',
                component: ComponentCreator('/swapx-developer/sdks-v2/guides/', 'cf0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v2/guides/fetching-data',
                component: ComponentCreator('/swapx-developer/sdks-v2/guides/fetching-data', '2c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v2/guides/getting-pair-addresses',
                component: ComponentCreator('/swapx-developer/sdks-v2/guides/getting-pair-addresses', '7f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v2/guides/pricing',
                component: ComponentCreator('/swapx-developer/sdks-v2/guides/pricing', 'fdf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v2/guides/quick-start',
                component: ComponentCreator('/swapx-developer/sdks-v2/guides/quick-start', 'bc8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v2/guides/trading',
                component: ComponentCreator('/swapx-developer/sdks-v2/guides/trading', 'f9d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v2/reference/',
                component: ComponentCreator('/swapx-developer/sdks-v2/reference/', '296'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v2/reference/getting-started',
                component: ComponentCreator('/swapx-developer/sdks-v2/reference/getting-started', 'cba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v2/reference/other-exports',
                component: ComponentCreator('/swapx-developer/sdks-v2/reference/other-exports', '48f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v2/reference/pair',
                component: ComponentCreator('/swapx-developer/sdks-v2/reference/pair', '6ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v2/reference/route',
                component: ComponentCreator('/swapx-developer/sdks-v2/reference/route', '7fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v2/reference/trade',
                component: ComponentCreator('/swapx-developer/sdks-v2/reference/trade', 'd77'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/',
                component: ComponentCreator('/swapx-developer/sdks-v3/', '30c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/guides/',
                component: ComponentCreator('/swapx-developer/sdks-v3/guides/', '452'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/guides/advanced/',
                component: ComponentCreator('/swapx-developer/sdks-v3/guides/advanced/', 'b93'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/guides/advanced/active-liquidity',
                component: ComponentCreator('/swapx-developer/sdks-v3/guides/advanced/active-liquidity', 'f61'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/guides/advanced/introduction',
                component: ComponentCreator('/swapx-developer/sdks-v3/guides/advanced/introduction', '5df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/guides/advanced/pool-data',
                component: ComponentCreator('/swapx-developer/sdks-v3/guides/advanced/pool-data', '42e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/guides/advanced/price-oracle',
                component: ComponentCreator('/swapx-developer/sdks-v3/guides/advanced/price-oracle', 'a53'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/guides/background',
                component: ComponentCreator('/swapx-developer/sdks-v3/guides/background', '4c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/guides/liquidity/',
                component: ComponentCreator('/swapx-developer/sdks-v3/guides/liquidity/', '720'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/guides/liquidity/collecting-fees',
                component: ComponentCreator('/swapx-developer/sdks-v3/guides/liquidity/collecting-fees', 'a09'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/guides/liquidity/fetching-positions',
                component: ComponentCreator('/swapx-developer/sdks-v3/guides/liquidity/fetching-positions', 'd27'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/guides/liquidity/minting-position',
                component: ComponentCreator('/swapx-developer/sdks-v3/guides/liquidity/minting-position', 'b28'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/guides/liquidity/modifying-position',
                component: ComponentCreator('/swapx-developer/sdks-v3/guides/liquidity/modifying-position', '654'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/guides/liquidity/position-data',
                component: ComponentCreator('/swapx-developer/sdks-v3/guides/liquidity/position-data', 'd47'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/guides/liquidity/swap-and-add-liquidity',
                component: ComponentCreator('/swapx-developer/sdks-v3/guides/liquidity/swap-and-add-liquidity', '4ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/guides/local-development',
                component: ComponentCreator('/swapx-developer/sdks-v3/guides/local-development', '071'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/guides/swaps/',
                component: ComponentCreator('/swapx-developer/sdks-v3/guides/swaps/', '578'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/guides/swaps/quoting',
                component: ComponentCreator('/swapx-developer/sdks-v3/guides/swaps/quoting', '418'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/guides/swaps/routing',
                component: ComponentCreator('/swapx-developer/sdks-v3/guides/swaps/routing', '2c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/guides/swaps/trading',
                component: ComponentCreator('/swapx-developer/sdks-v3/guides/swaps/trading', '116'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/', 'e80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/classes/',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/classes/', 'cdb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/classes/FullMath',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/classes/FullMath', '64e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/classes/LiquidityMath',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/classes/LiquidityMath', '176'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/classes/Multicall',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/classes/Multicall', '92f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/classes/NonfungiblePositionManager',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/classes/NonfungiblePositionManager', 'fe6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/classes/NoTickDataProvider',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/classes/NoTickDataProvider', 'aa4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/classes/Payments',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/classes/Payments', '027'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/classes/Pool',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/classes/Pool', '864'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/classes/Position',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/classes/Position', 'aac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/classes/PositionLibrary',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/classes/PositionLibrary', '069'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/classes/Route',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/classes/Route', '5b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/classes/SelfPermit',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/classes/SelfPermit', 'fc6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/classes/SqrtPriceMath',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/classes/SqrtPriceMath', 'c59'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/classes/Staker',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/classes/Staker', '03a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/classes/SwapMath',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/classes/SwapMath', 'c5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/classes/SwapQuoter',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/classes/SwapQuoter', '037'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/classes/SwapRouter',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/classes/SwapRouter', 'b76'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/classes/Tick',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/classes/Tick', '409'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/classes/TickLibrary',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/classes/TickLibrary', 'fd4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/classes/TickList',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/classes/TickList', '0d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/classes/TickListDataProvider',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/classes/TickListDataProvider', '40b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/classes/TickMath',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/classes/TickMath', '313'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/classes/Trade',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/classes/Trade', '1df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/enums/',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/enums/', 'c24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/enums/FeeAmount',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/enums/FeeAmount', 'cd6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/interfaces/',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/interfaces/', '2c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/interfaces/AllowedPermitArguments',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/interfaces/AllowedPermitArguments', '91e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/interfaces/BestTradeOptions',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/interfaces/BestTradeOptions', 'b45'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/interfaces/ClaimOptions',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/interfaces/ClaimOptions', 'a90'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/interfaces/CollectOptions',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/interfaces/CollectOptions', '4a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/interfaces/CommonAddLiquidityOptions',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/interfaces/CommonAddLiquidityOptions', 'e57'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/interfaces/FeeOptions',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/interfaces/FeeOptions', '07b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/interfaces/IncentiveKey',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/interfaces/IncentiveKey', '0ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/interfaces/IncreaseSpecificOptions',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/interfaces/IncreaseSpecificOptions', '094'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/interfaces/MethodParameters',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/interfaces/MethodParameters', 'ff0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/interfaces/MintSpecificOptions',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/interfaces/MintSpecificOptions', '385'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/interfaces/NFTPermitOptions',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/interfaces/NFTPermitOptions', '26c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/interfaces/QuoteOptions',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/interfaces/QuoteOptions', '2cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/interfaces/RemoveLiquidityOptions',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/interfaces/RemoveLiquidityOptions', '31d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/interfaces/SafeTransferOptions',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/interfaces/SafeTransferOptions', '2ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/interfaces/StandardPermitArguments',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/interfaces/StandardPermitArguments', '8ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/interfaces/SwapOptions',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/interfaces/SwapOptions', '4b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/interfaces/TickConstructorArgs',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/interfaces/TickConstructorArgs', 'c17'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/interfaces/TickDataProvider',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/interfaces/TickDataProvider', 'a85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/sdks-v3/reference/interfaces/WithdrawOptions',
                component: ComponentCreator('/swapx-developer/sdks-v3/reference/interfaces/WithdrawOptions', '559'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/troubleshooting/',
                component: ComponentCreator('/swapx-developer/troubleshooting/', 'c6a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/troubleshooting/network-and-rpc',
                component: ComponentCreator('/swapx-developer/troubleshooting/network-and-rpc', '646'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/troubleshooting/sdk-errors',
                component: ComponentCreator('/swapx-developer/troubleshooting/sdk-errors', '13e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/troubleshooting/transaction-reverts',
                component: ComponentCreator('/swapx-developer/troubleshooting/transaction-reverts', 'd39'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/use-case-example/',
                component: ComponentCreator('/swapx-developer/use-case-example/', '3b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/use-case-example/full-use-case',
                component: ComponentCreator('/swapx-developer/use-case-example/full-use-case', '15b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/use-case-example/liquidity/',
                component: ComponentCreator('/swapx-developer/use-case-example/liquidity/', '12c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/use-case-example/liquidity/v2-liquidity',
                component: ComponentCreator('/swapx-developer/use-case-example/liquidity/v2-liquidity', '456'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/use-case-example/liquidity/v3-liquidity',
                component: ComponentCreator('/swapx-developer/use-case-example/liquidity/v3-liquidity', '0ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/use-case-example/swapping/',
                component: ComponentCreator('/swapx-developer/use-case-example/swapping/', '864'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/use-case-example/swapping/v2-swaps',
                component: ComponentCreator('/swapx-developer/use-case-example/swapping/v2-swaps', '01e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swapx-developer/use-case-example/swapping/v3-swaps',
                component: ComponentCreator('/swapx-developer/use-case-example/swapping/v3-swaps', 'e19'),
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
                path: '/swapx-integration/welcome-to-swapx/FAQs',
                component: ComponentCreator('/swapx-integration/welcome-to-swapx/FAQs', '69a'),
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
                path: '/swapx-integration/welcome-to-swapx/privacy-and-terms/XOCStaking',
                component: ComponentCreator('/swapx-integration/welcome-to-swapx/privacy-and-terms/XOCStaking', '00e'),
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
