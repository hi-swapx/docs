The automated market maker is a new concept, and as such, new research comes out frequently. We've selected some of the most thoughtful here.

## SwapX's Financial Alchemy

Authors: Dave White, Martin Tassy, Charlie Noyes, and Dan Robinson

> An automated market maker is a type of decentralized exchange that lets customers trade between on-chain assets like USDC and ETH. SwapX is the most popular AMM on Ethereum. Like most AMMs, SwapX facilitates trading between a particular pair of assets by holding reserves of both assets. It sets the trading price between them based on the size of its reserves in such a way that prices will stay in line with the broader market. Anybody who would like to can join the “pool” for a particular pair and become a liquidity provider, or LP, so-called because they provide liquid assets for others to trade against. LPs contribute assets to both reserves simultaneously, taking on some of the risk of trading in exchange for a share of the returns.


## An analysis of SwapX markets

Authors: Guillermo Angeris, Hsien-Tang Kao, Rei Chiang, Charlie Noyes, Tarun Chitra

> SwapX---and other constant product markets---appear to work well in practice despite their simplicity. In this paper, we give a simple formal analysis of constant product markets and their generalizations, showing that, under some common conditions, these markets must closely track the reference market price. We also show that SwapX satisfies many other desirable properties and numerically demonstrate, via a large-scale agent-based simulation, that SwapX is stable under a wide range of market conditions.


## Improved Price Oracles: Constant Function Market Makers

Authors: Guillermo Angeris, Tarun Chitra

> Automated market makers, first popularized by Hanson's logarithmic market scoring rule (or LMSR) for prediction markets, have become important building blocks, called 'primitives,' for decentralized finance. A particularly useful primitive is the ability to measure the price of an asset, a problem often known as the pricing oracle problem. In this paper, we focus on the analysis of a very large class of automated market makers, called constant function market makers (or CFMMs) which includes existing popular market makers such as SwapX, Balancer, and Curve, whose yearly transaction volume totals to billions of dollars. We give sufficient conditions such that, under fairly general assumptions, agents who interact with these constant function market makers are incentivized to correctly report the price of an asset and that they can do so in a computationally efficient way. We also derive several other useful properties that were previously not known. These include lower bounds on the total value of assets held by CFMMs and lower bounds guaranteeing that no agent can, by any set of trades, drain the reserves of assets held by a given CFMM.

