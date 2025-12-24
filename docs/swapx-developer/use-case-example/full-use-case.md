
## full use case


### constants/swap/index.ts
```
    // Enum definition: SWAP_SUPPORTED
export enum SWAP_SUPPORTED {
    Swapx = 'Swapx'
}
    // Enum definition: PoolState
export enum PoolState {
    PoolDoesNotExist,
    PoolExistsButHasNoLiquidity,
    PoolExistsAndHasLiquidity
}
    // Constant: FeeTierList
export const FeeTierList = [
    {
        label: '0.05%',
        value: FeeAmount.LOW,
        description: 'feeTierBestForVeryStablePairs'
    },
    {
        label: '0.3%',
        value: FeeAmount.MEDIUM,
        description: 'feeTierBestForLessVolatilePairs'
    },
    {
        label: '1%',
        value: FeeAmount.HIGH,
        description: 'feeTierBestForMostPairs'
    },

]

    // Constant: CHAIN_RPC:
export const CHAIN_RPC: Record<any, string> = {
    3721: 'https://rpc.xone.org',
    33772211: 'https://rpc-testnet.xone.plus/',
};

```

### types
```


    // Interface definition: IExecuteTradeParams
export interface IExecuteTradeParams {
    walletAddress: string
    slippage: number,
    deadline: number,
    fromToken: Token | NativeToken,
    toToken: Token | NativeToken
    amount: string
    amountOut?: string, //V3
    feeTier?: FeeAmount //V3
}

    // Interface definition: IPairInfoV2
export interface IPairInfoV2 {
    token0: Token | NativeToken,
    token1: Token | NativeToken,
    reserves?: bigint[]
    balance?: bigint
    supply?: bigint
    price0: string,
    price1: string
}

    // Interface definition: IPairInfoV3
export interface IPairInfoV3 {
    token0: Token | NativeToken,
    token1: Token | NativeToken,
    fee: number,
    tickSpacing: number,
    liquidity: number,
    sqrtPriceX96: number,
    tick: number,
}


    // Interface definition: ICreateTradeV2Params
export interface ICreateTradeV2Params {
    fromToken: Token | NativeToken,
    toToken: Token | NativeToken,
    amount: string,
    type: TradeType
}

    // Interface definition: IQuoteParams
export interface IQuoteParams {
    fromToken: Token | NativeToken,
    toToken: Token | NativeToken,
    amount: string,
    type: TradeType
}

    // Interface definition: IWarpTokenParams
export interface IWarpTokenParams {
    walletAddress: string
    fromToken: Token | NativeToken,
    toToken: Token | NativeToken,
    amount: string,
    amountOut?: string, //V3
}

    // Interface definition: ICreateTradeV3Params
export interface ICreateTradeV3Params {
    fromToken: Token | NativeToken,
    toToken: Token | NativeToken,
    amount: string,
    amountOut: string,
    feeTier: FeeAmount
    type: TradeType
}

    // Interface definition: IAddLiquidityV2Params
export interface IAddLiquidityV2Params {
    walletAddress: string
    token0: Token | NativeToken,
    token1: Token | NativeToken,
    amount0: string,
    amount1: string,
    slippage: number,
    deadline: number,
}

    // Interface definition: IAddLiquidityV3Params
export interface IAddLiquidityV3Params {
    walletAddress: string
    token0: Token | NativeToken,
    token1: Token | NativeToken,
    slippage: number,
    deadline: number,
    position: Position,
    poolInfoV3: IPoolInfoV3
}


    // Interface definition: IRemoveLiquidityV2Params
export interface IRemoveLiquidityV2Params {
    token0: Token | NativeToken,
    token1: Token | NativeToken,
    amount0: string,
    amount1: string,
    liquidity: string,
    to: string,
    slippage: number,
    deadline: number,
}


    // Interface definition: IRemoveLiquidityV3Params
export interface IRemoveLiquidityV3Params {
    token0: Token | NativeToken,
    token1: Token | NativeToken,
    liquidity: string,
    id: string,
    feeTier: FeeAmount,
    sqrtPriceX96: string,
    collectAmounts: [bigint, bigint],
    percentage: number,
    tickLower: number,
    tickUpper: number,
    currentTick: number,
    to: string,
    slippage: number,
    deadline: number,
}

    // Interface definition: IIncreaseLiquidityV3Params
export interface IIncreaseLiquidityV3Params {
    walletAddress: string
    token0: Token | NativeToken,
    token1: Token | NativeToken,
    slippage: number,
    deadline: number,
    position: Position,
    id: string,

}

    // Interface definition: IPairInfoV2
export interface IPairInfoV2 {
    token0: Token | NativeToken,
    token1: Token | NativeToken,
    reserves?: bigint[]
    balance?: bigint
    supply?: bigint
    price0: string,
    price1: string
}

    // Interface definition: IPairInfoV3
export interface IPairInfoV3 {
    token0: Token | NativeToken,
    token1: Token | NativeToken,
    fee: number,
    tickSpacing: number,
    liquidity: number,
    sqrtPriceX96: number,
    tick: number,
}

export type Version = 'v2' | 'v3'

    // Interface definition: IQuoteInfo
export interface IQuoteInfo {
    amount: string,
    priceImpact: string
    version: Version
    feeTier?: FeeAmount
    tokenIn?: string,
    tokenOut?: string,
    isHop?: boolean,
    routeString?:string,
    route?:any
    transaction_data?:{
        data:string,
        value?: string,
        from?: string,
        to?: string,
        gasLimit?: string,
        gasPrice?: string,
    }
}


    // Interface definition: IPositionDetail
export interface IPositionDetail {
    id: string;
    owner: string
    pool: {
        token0Price: string;
        token1Price: string;
        feeTier: string;
        sqrtPrice: string;
        tick: string;
        liquidity: string;
        currentPrice0: string;
        currentPrice1: string;
        id: string;
    };
    token0: Token | NativeToken;
    token1: Token | NativeToken;
    tickLower: {
        price1: string;
        price0: string;
        tickIdx: string;
    };
    tickUpper: {
        price1: string;
        price0: string;
        tickIdx: string;
    };
    depositedToken0: string;
    depositedToken1: string;
    withdrawnToken0: string
    withdrawnToken1: string
    liquidity: string,
    status: PositionStatus
}

```


### NativeToken.ts and ETH9.ts
```

// NativeToken
import {NativeCurrency} from "@swapx-lib/sdk-core";
import {Token} from "@swapx-lib/sdk-core";
import {Currency} from "@swapx-lib/sdk-core";
import {WETH9} from "@swapx-lib/sdk-core";

    // Class definition: NativeToken
export class NativeToken extends NativeCurrency{

    public constructor(chainId: number, decimals: number, symbol: string) {
        super(chainId, decimals, symbol);
    }
    // Method: equals - Implementation logic
    public equals(other: Currency): boolean {
        return other.isNative && other.chainId === this.chainId;
    }
    get wrapped(): Token {
        return WETH9[this.chainId]
    }
}


    // Constant: ETH9:
export const ETH9: { [chainId: number]: NativeToken } = {

    33772211: new NativeToken(33772211, 18, 'XOC'),
    3721: new NativeToken(3721, 18, 'XOC'),

}
```


### chainListLocal
```
import {avalanche,polygon,optimism,arbitrum,base,bsc,bscTestnet,sepolia,mainnet} from "viem/chains";
import {CHAIN_TO_ADDRESSES_MAP, ChainId, SupportedChainsType} from "@swapx-lib/sdk-core";
import {NetworkInfo} from "@tokenup/walletkit";

//todo fill this map
    // Constant: Multicall3Address:{[Key:number]:string}
export const Multicall3Address:{[Key:number]:string} = {
    [Number(ChainId.XONE)]:CHAIN_TO_ADDRESSES_MAP[ChainId.XONE as SupportedChainsType].multicallAddress,
    [Number(ChainId.XONE_TEST)]:CHAIN_TO_ADDRESSES_MAP[ChainId.XONE_TEST as SupportedChainsType].multicallAddress
}
```




### SwapBase.ts
```
import {SWAP_SUPPORTED} from "@/constants/swap";
import {Version} from "@/types";

    // Class definition: SwapBase
export abstract class SwapBase {
    protected constructor(
        public readonly swapName: SWAP_SUPPORTED,
        public readonly swapId: string,
        public readonly swapVersions: Version[]
    ) {}
}

```




### SwapX
```
import {CHAIN_RPC, FeeTierList, PoolState, SWAP_SUPPORTED} from "@/constants/swap";
import {SwapBase} from "@/web3/swap/SwapBase";
import {Pair, Route, Trade as TradeV2} from "@swapx-lib/v2-sdk";
import {
    CHAIN_TO_ADDRESSES_MAP,
    CurrencyAmount,
    Percent,
    Token,
    WETH9,
    TradeType,
    V2_FACTORY_ADDRESSES,
    V2_ROUTER_ADDRESSES,
    Currency,
    Price,
    SupportedChainsType, ChainId
} from "@swapx-lib/sdk-core";
import {multicallRpc, readContractRpc, getWalletKit} from "@tokenup/walletkit";
import V2FactoryABI from "@/abi/swap/V2FactoryABI.json";
import NonfungiblePositionManagerABI from "@/abi/swap/NonfungiblePositionManagerABI.json";
import v2PairABI from "@/abi/swap/V2PairABI.json";
import v2RouterABI from "@/abi/swap/V2RouterABI.json";
import FactoryABI from "@/abi/swap/FactoryABI.json";
import {AbiCoder, ethers,JsonRpcProvider} from "ethers";
import {
    computePoolAddress,
    FeeAmount,
    Pool,
    SwapOptions,
    SwapRouter,
    Route as RouteV3,
    Trade as TradeV3,
    TickMath,
    encodeSqrtRatioX96,
    nearestUsableTick,
    TICK_SPACINGS,
    priceToClosestTick,
    tickToPrice,
    MintOptions,
    NonfungiblePositionManager,
    Position,
    CollectOptions,
    RemoveLiquidityOptions,
    AddLiquidityOptions
} from "@swapx-lib/v3-sdk";
import BigNumber from "bignumber.js";
import PoolABI from "@/abi/swap/PoolABI.json";
import Multicall3ABI from "@/abi/swap/Multicall3ABI.json";
import QuoterABI from "@/abi/swap/QuoterABI.json";
import ERC20ABI from "@/abi/swap/ERC20ABI.json";
import {
    IAddLiquidityV2Params,
    IAddLiquidityV3Params,
    ICreateTradeV2Params,
    ICreateTradeV3Params,
    IExecuteTradeParams, IIncreaseLiquidityV3Params, IPairInfoV2,
    IPairInfoV3,
    IQuoteInfo, IQuoteParams,
    IRemoveLiquidityV2Params, IRemoveLiquidityV3Params, Version
} from "@/types";
import JSBI from "jsbi";
import {NativeToken} from "@/utils/nativeToken";
import {ETH9} from "@/constants/eth9";
import {trimTrailingZeros} from "@/utils/number";
import WETHABI from "@/abi/swap/WETHABI.json";
import {getChainRpc} from "@/utils";
import {ChainType} from "@tokenup/type";
import {Multicall3Address} from "@/constants/chainListLocal";
import {Interface} from "ethers";


    // Class definition: Swapx
export class Swapx extends SwapBase {
    public static instance: Swapx
    private readonly swapFns: Record<Partial<Version>, (arg: any) => Promise<string>>
    private readonly getOutputQuoteFns: Record<Partial<Version>, (arg: any) => Promise<IQuoteInfo | undefined>>


    constructor() {
        super(SWAP_SUPPORTED.Swapx, "1", ['v2', 'v3']);
        this.swapFns = {
            v2: this.swapV2.bind(this),
            v3: this.swapV3.bind(this)
        }
        this.getOutputQuoteFns = {
            v2: this.getOutputQuoteV2.bind(this),
            v3: this.getOutputQuoteV3.bind(this),
        }
    }

    // Method: getInstance - Implementation logic
    public static getInstance(): Swapx {
        return this.instance ? this.instance : this.instance = new Swapx();
    }


    // Method: swap - Implementation logic
    async swap(arg: IExecuteTradeParams, version: Version = 'v3'): Promise<any> {
        const isSupported = this.swapVersions.find((item) => version == item)
        if (!isSupported) throw new Error(`Not supported ${this.swapName} ${version}`)
        return this.swapFns[version](arg)
    }

    // Method: getOutputQuote - Implementation logic
    async getOutputQuote(arg: IQuoteParams, version?: Version): Promise<IQuoteInfo | undefined> {
        if (version) {
            const isSupported = this.swapVersions.find((item) => version == item)
            if (!isSupported) throw new Error(`Not supported ${this.swapName} ${version}`)
            return await this.getOutputQuoteFns[version](arg)
        } else {
            return await this.getOutputQuoteBest(arg)
        }

    }

    // Method: wrapToken - Implementation logic
    async wrapToken({value, nativeToken}: { value: string, nativeToken: NativeToken }) {
        const {writeContract} = getWalletKit()
        const rpcUrl = getChainRpc(ChainType.EVM + '_' + nativeToken.chainId)
        return await writeContract({
            abi: WETHABI,
            address: WETH9[nativeToken.chainId].address,
            functionName: "deposit",
            args: [],
            value: '0x'+ethers.parseEther(value).toString(16),
            rpcUrl
        });
    }

    // Method: unwrapToken - Implementation logic
    async unwrapToken({value, nativeToken}: { value: string, nativeToken: NativeToken }) {
        const {writeContract} = getWalletKit()
        const rpcUrl = getChainRpc(ChainType.EVM + '_' + nativeToken.chainId)
        return await writeContract({
            abi: WETHABI,
            address: WETH9[nativeToken.chainId].address,
            functionName: "withdraw",
            args: [ethers.parseEther(value)],
            rpcUrl
        });
    }


    // Method: safeParseFloat - Implementation logic
    safeParseFloat(value: string): number {
        const parsed = parseFloat(value);
        return isNaN(parsed) ? 0 : parsed;
    }

    // Method: getOutputQuoteBest - Implementation logic
    async getOutputQuoteBest(arg: IQuoteParams): Promise<IQuoteInfo | undefined> {
        const res = await Promise.all(this.swapVersions.map(async (version: Version) => {
            return await this.getOutputQuoteFns[version](arg)
        }))
        console.log('OutputQuoteBest===>', res)
        const options = res.filter((opt) => {
            return opt !== undefined
        })
        if (options.length === 0) {
            return undefined
        }

        const candidates = arg.type === TradeType.EXACT_INPUT
            ? options
            : options.filter(opt => this.safeParseFloat(opt.amount) !== 0);

        if (candidates.length === 0) {
            return options[0];
        }

        return candidates.reduce((best, current) => {
            const bestAmount = this.safeParseFloat(best.amount);
            const currentAmount = this.safeParseFloat(current.amount);
            const bestImpact = this.safeParseFloat(best.priceImpact);
            const currentImpact = this.safeParseFloat(current.priceImpact);

            const better =
                (arg.type === TradeType.EXACT_INPUT && (currentAmount > bestAmount || (currentAmount === bestAmount && currentImpact < bestImpact))) ||
                (arg.type === TradeType.EXACT_OUTPUT && (currentAmount < bestAmount || (currentAmount === bestAmount && currentImpact < bestImpact)));

            return better ? current : best;
        });
    }


    /**
     * Executes a version 2 token swap.
     *
     * @param arg - The parameters required to execute the trade, including the token addresses, amount, and trade details.
     * @returns A promise resolving to the result of the trade execution.
     */
    // Method: swapV2 - Implementation logic
    async swapV2(arg: IExecuteTradeParams): Promise<any> {
        return this.executeTradeV2(arg)
    }


    // Method: swapV3 - Implementation logic
    async swapV3(arg: IExecuteTradeParams): Promise<any> {
        return this.executeTradeV3(arg)
    }

    /**
     * Create pair V2
     * @param tokenIn
     * @param tokenOut
     */
    // Method: createPairV2 - Implementation logic
    async createPairV2(tokenIn: Token, tokenOut: Token): Promise<Pair> {
        const rpcUrl = getChainRpc(ChainType.EVM + '_' + tokenIn.chainId)
        const pairAddress = await readContractRpc({
            address: V2_FACTORY_ADDRESSES[tokenIn.chainId],
            abi: V2FactoryABI,
            functionName: 'getPair',
            args: [tokenIn.address, tokenOut.address],
            rpcUrl,

        })
        const reserves = await readContractRpc({
            address: pairAddress as string,
            abi: v2PairABI,
            functionName: 'getReserves',
            args: [],
            rpcUrl,

        })


        const [reserve0, reserve1] = reserves as any[];
        const tokens = [tokenIn, tokenOut];
        const [token0, token1] = tokens[0].sortsBefore(tokens[1]) ? tokens : [tokens[1], tokens[0]];
        const currencyAmountA = CurrencyAmount.fromRawAmount(token0, reserve0.toString())
        const currencyAmountB = CurrencyAmount.fromRawAmount(token1, reserve1.toString())

        return new Pair(currencyAmountA, currencyAmountB);
    }

    // Method: getPairAddressV2 - Implementation logic
    async getPairAddressV2(tokenA: Token, tokenB: Token): Promise<string> {
        try {
            const rpcUrl = getChainRpc(ChainType.EVM + '_' + tokenA.chainId)
            return await readContractRpc({
                address: V2_FACTORY_ADDRESSES[tokenA.chainId],
                abi: V2FactoryABI,
                functionName: 'getPair',
                args: [tokenA.address, tokenB.address],
                rpcUrl,

            }) as string
        } catch (err) {
            console.log(err)
            return ''
        }

    }

    // Method: getPairAddressV3 - Implementation logic
    async getPairAddressV3(tokenA: Token, tokenB: Token, fee: FeeAmount): Promise<string> {
        try {
            const rpcUrl = getChainRpc(ChainType.EVM + '_' + tokenA.chainId)
            return await readContractRpc({
                abi: FactoryABI,
                address: CHAIN_TO_ADDRESSES_MAP[tokenA.chainId as SupportedChainsType].v3CoreFactoryAddress,
                functionName: 'getPool',
                args: [tokenA.address, tokenB.address, fee],
                rpcUrl,
            }) as string
        } catch (err) {
            console.log(err)
            return ''
        }

    }

    // Method: getPairReservesV2 - Implementation logic
    async getPairReservesV2(pairAddress: string, chainId: number): Promise<any[]> {
        try {
            const rpcUrl = getChainRpc(ChainType.EVM + '_' + chainId)
            return await readContractRpc({
                address: pairAddress,
                abi: v2PairABI,
                functionName: 'getReserves',
                args: [],
                rpcUrl,

            }) as any[]
        } catch (err) {
            console.log(err)
            return []
        }
    }

    // Method: getTokensByPoolAddress - Implementation logic
    async getTokensByPoolAddress(poolAddress: string, chainId: number): Promise<{
        token0: Token | NativeToken,
        token1: Token | NativeToken
    } | undefined> {
        try {
            const rpcUrl = getChainRpc(ChainType.EVM + '_' + chainId)
            const pairInfoCall = (functionName: string, args?: Array<string>) => {
                return {
                    abi: v2PairABI,
                    address: poolAddress,
                    functionName,
                    args: args ? args : []


                }
            }
            const [data_token0, data_token1] = await multicallRpc([
                pairInfoCall("token0"),
                pairInfoCall("token1"),
            ], {
                multicallAddress: CHAIN_TO_ADDRESSES_MAP[chainId as SupportedChainsType].multicallAddress,
                multicallAbi: Multicall3ABI,
                rpcUrl,
            }) as any[]
            const [token0, token1] = [
                data_token0?.returnData,
                data_token1.returnData,
            ]

            const t0 = await this.tokenFetcher(token0, chainId)
            const t1 = await this.tokenFetcher(token1, chainId)

            return {
                token0: t0,
                token1: t1,
            }
        } catch (err) {
            console.log(err)
            return undefined
        }

    }

    // Method: getPairInfoV2 - Implementation logic
    async getPairInfoV2(pairAddress: string, chainId: number, walletAddress?: string): Promise<IPairInfoV2 | undefined> {
        try {
            const rpcUrl = getChainRpc(ChainType.EVM + '_' + chainId)
            const pairInfoCall = (functionName: string, args?: Array<string>) => {
                return {
                    abi: v2PairABI,
                    address: pairAddress,
                    functionName,
                    args: args ? args : []
                }
            }
            const calls = [
                pairInfoCall("token0"),
                pairInfoCall("token1"),
                pairInfoCall("getReserves"),
                pairInfoCall("totalSupply"),
            ]
            if (walletAddress) {
                calls.push(pairInfoCall("balanceOf", [walletAddress]))
            }
            const [data_token0, data_token1, data_reserves, data_supply, data_balance] = await multicallRpc(calls, {
                multicallAddress: CHAIN_TO_ADDRESSES_MAP[chainId as SupportedChainsType].multicallAddress,
                multicallAbi: Multicall3ABI,
                rpcUrl,
            }) as any[]
            const [token0, token1, reserves, supply, balance] = [
                data_token0?.returnData,
                data_token1.returnData,
                data_reserves.returnData,
                data_supply.returnData,
                data_balance?.returnData,
            ]

            const t0 = await this.tokenFetcher(token0, chainId)
            const t1 = await this.tokenFetcher(token1, chainId)
            const [reserve0, reserve1] = reserves

            const price0 = trimTrailingZeros(BigNumber(ethers.formatUnits(reserve0, t0.decimals)).div(BigNumber(ethers.formatUnits(reserve1, t1.decimals))).toFixed())
            const price1 = trimTrailingZeros(BigNumber(ethers.formatUnits(reserve1, t1.decimals)).div(BigNumber(ethers.formatUnits(reserve0, t0.decimals))).toFixed())


            return {
                token0: t0,
                token1: t1,
                reserves,
                balance,
                supply,
                price0,
                price1
            }
        } catch (e) {
            console.log(e)
            return undefined
        }

    }

    // Method: getPairInfoV3 - Implementation logic
    async getPairInfoV3(pairAddress: string, chainId: number): Promise<IPairInfoV3 | undefined> {
        try {
            const rpcUrl = getChainRpc(ChainType.EVM + '_' + chainId)

            const pairInfoCall = (functionName: string, args?: Array<string>) => {
                return {
                    abi: PoolABI,
                    address: pairAddress,
                    functionName,
                    args: args ? args : []
                }
            }
            const [token0, token1, fee, tickSpacing, liquidity, slot0] = await multicallRpc([
                pairInfoCall("token0"),
                pairInfoCall("token1"),
                pairInfoCall("fee"),
                pairInfoCall("tickSpacing",),
                pairInfoCall("liquidity"),
                pairInfoCall("slot0"),
            ], {
                multicallAddress: CHAIN_TO_ADDRESSES_MAP[chainId as SupportedChainsType].multicallAddress,
                multicallAbi: Multicall3ABI,
                rpcUrl,
            }) as any[]

            const t0 = await this.tokenFetcher(token0.returnData, chainId)
            const t1 = await this.tokenFetcher(token1.returnData, chainId)

            return {
                token0: t0,
                token1: t1,
                fee: Number(fee.returnData),
                tickSpacing: Number(tickSpacing.returnData),
                liquidity: liquidity.returnData,
                sqrtPriceX96: slot0.returnData[0],
                tick: Number(slot0.returnData[1]),
            }
        } catch (e) {
            console.log(e)
            throw e
            // return undefined

        }


    }


    /**
     * Get output quote V2
     * @param arg
     */
    // Method: getOutputQuoteV2 - Implementation logic
    async getOutputQuoteV2(arg: IQuoteParams): Promise<IQuoteInfo | undefined> {

        try {
            const trade = await this.createTradeV2({...arg});
            const amount = arg.type === TradeType.EXACT_INPUT ? trade.outputAmount.toSignificant() : trade.inputAmount.toSignificant();
            const priceImpact = trade.priceImpact.toFixed();
            return {
                amount,
                priceImpact,
                version: 'v2',
            }
        } catch (e) {
            console.log(e)
            return undefined
        }

    };


    /**
     * Creat trade V2
     * @param fromToken
     * @param toToken
     * @param amount
     * @param type
     */
    // Method: createTradeV2 - Implementation logic
    async createTradeV2({
                            fromToken,
                            toToken,
                            amount,
                            type
                        }: ICreateTradeV2Params) {

        const [tokenIn, tokenOut] = type === TradeType.EXACT_INPUT
            ? [fromToken.wrapped, toToken.wrapped]
            : [toToken.wrapped, fromToken.wrapped];

        const pair = await this.createPairV2(tokenIn, tokenOut);
        const router = new Route([pair], fromToken.wrapped, toToken.wrapped);
        const _amount = ethers.parseUnits(amount, tokenIn.decimals).toString();
        return new TradeV2(router, CurrencyAmount.fromRawAmount(tokenIn, _amount), type);
    };

    // Method: createTradeV3 - Implementation logic
    async createTradeV3({
                            fromToken,
                            toToken,
                            amount,
                            amountOut,
                            feeTier,
                            type
                        }: ICreateTradeV3Params) {

        const rpcUrl = getChainRpc(ChainType.EVM + '_' + fromToken.chainId)
        const poolAddress = this.computeV3PoolAddress(fromToken.wrapped, toToken.wrapped, feeTier);
        console.log('------')
        const res = await multicallRpc([
            {
                address: poolAddress,
                abi: PoolABI,
                functionName: 'liquidity'
            },
            {
                address: poolAddress,
                abi: PoolABI,
                functionName: 'slot0'
            }
        ], {
            rpcUrl,
            multicallAbi: Multicall3ABI,
            multicallAddress: CHAIN_TO_ADDRESSES_MAP[fromToken.chainId as SupportedChainsType].multicallAddress,
        }) as any[];
        const [liquidityCall, slot0Call] = res
        const liquidity = liquidityCall?.success ? liquidityCall.returnData : '0';
        console.log('liquidityCall', liquidityCall);
        console.log('slot0Call', slot0Call);

        let sqrtPriceX96 = '0';
        let tick = 0;

        if (slot0Call?.success && Array.isArray(slot0Call.returnData)) {
            [sqrtPriceX96, tick] = slot0Call.returnData;
        }
        const pool = new Pool(fromToken.wrapped, toToken.wrapped, feeTier, sqrtPriceX96.toString(), liquidity.toString(), tick);

        const swapRoute = new RouteV3([pool], fromToken.wrapped, toToken.wrapped);
        return TradeV3.createUncheckedTrade({
            route: swapRoute,
            inputAmount: CurrencyAmount.fromRawAmount(
                fromToken,
                ethers.parseUnits(amount, fromToken.wrapped.decimals).toString()
            ),
            outputAmount: CurrencyAmount.fromRawAmount(
                toToken,
                ethers.parseUnits(amountOut, toToken.wrapped.decimals).toString()
            ),
            tradeType: type
        });


    };

    /**
     * Executes a token trade operation using a decentralized exchange router contract.
     * @param trade
     * @param fromToken
     * @param toToken
     * @param walletAddress
     * @param slippage
     * @param deadline
     */
    // Method: executeTradeV2 - Implementation logic
    async executeTradeV2({
                             fromToken,
                             toToken,
                             walletAddress,
                             slippage,
                             deadline,
                             amount
                         }: IExecuteTradeParams): Promise<string> {

        const {writeContract,sendTransaction} = getWalletKit();

        const slippageTolerance = new Percent(slippage, 100);

        const trade = await this.createTradeV2({fromToken, toToken, amount, type: TradeType.EXACT_INPUT})

        const amountIn = ethers.parseUnits(trade.inputAmount.toExact(), fromToken.decimals);

        const amountOutMin = ethers.parseUnits(trade.minimumAmountOut(slippageTolerance).toExact(), toToken.decimals).toString();
        const path = [fromToken.wrapped.address, toToken.wrapped.address];
        const txDeadline = Math.floor(Date.now() / 1000) + deadline * 60;
        const rpcUrl = getChainRpc(ChainType.EVM + '_' + fromToken.chainId)

        const iface = new Interface(v2RouterABI);

        // fromToken is native token
        if (fromToken.isNative) {

            const args = [amountOutMin, path, walletAddress, txDeadline];


            // const calldata = iface.encodeFunctionData('swapExactETHForTokensSupportingFeeOnTransferTokens', args)
            // console.log('calldata', calldata)
            // const tx = {
            //     from: walletAddress,
            //     data: calldata,
            //     value: ethers.toBeHex(amountIn),
            //     to: V2_ROUTER_ADDRESSES[fromToken.chainId]
            // }
            // const gas = await this.estimateGas(rpcUrl,tx)
            // console.log('gas', gas)
            // return await sendTransaction({
            //     ...tx,
            //     ...gas,
            // })
            console.log('ethers.toBeHex(amountIn)',(amountIn))
            return await writeContract({
                address: V2_ROUTER_ADDRESSES[fromToken.chainId],
                abi: v2RouterABI,
                functionName: 'swapExactETHForTokensSupportingFeeOnTransferTokens',
                args,
                value: '0x'+amountIn.toString(16),
                rpcUrl,
            }) as string
            //
            //



        }else {
            const args = [amountIn, amountOutMin, path, walletAddress, txDeadline];

            // const fn = toToken.isNative ? 'swapExactTokensForETHSupportingFeeOnTransferTokens' : 'swapExactTokensForTokensSupportingFeeOnTransferTokens'
            // const calldata = iface.encodeFunctionData(fn, args)
            // const tx = {
            //     data: calldata,
            //     from: walletAddress,
            //     value: ethers.toBeHex(amountIn),
            //     to: V2_ROUTER_ADDRESSES[fromToken.chainId]
            // }
            // const gas = await this.estimateGas(rpcUrl,tx)
            // console.log('gas', gas)
            // return await sendTransaction({
            //     ...tx,
            //     ...gas,
            // })

            // console.log('ethers.toBeHex(amountIn)',ethers.toBeHex(amountIn))

            return await writeContract({
                address: V2_ROUTER_ADDRESSES[fromToken.chainId],
                abi: v2RouterABI,
                functionName: toToken.isNative ? 'swapExactTokensForETHSupportingFeeOnTransferTokens' : 'swapExactTokensForTokensSupportingFeeOnTransferTokens',
                args,
                rpcUrl,
            }) as string

        }

    };
    // Method: estimateGas - Implementation logic
    async estimateGas(rpc:string,tx:any){
        try {
            const p = new JsonRpcProvider(rpc);
            const estimatedGas = await p.estimateGas(tx)
            const {gasPrice} = await p.getFeeData()
            if(gasPrice !== null){
                return {
                    gasPrice:Number(gasPrice),
                    gasLimit: Math.floor(Number((estimatedGas * 120n) / 100n)),
                }
            }
            return {}

        }catch(err){}

    }


    /**
     * Execute trade V3
     * @param walletAddress
     * @param trade
     * @param fromToken
     * @param toToken
     * @param slippage
     * @param deadline
     */
    // Method: executeTradeV3 - Implementation logic
    async executeTradeV3({
                             walletAddress,
                             fromToken,
                             toToken,
                             slippage,
                             deadline,
                             amount,
                             amountOut,
                             feeTier,
                         }: IExecuteTradeParams) {
        const {sendTransaction} = getWalletKit()


        if (!amountOut || !feeTier) {
            throw new Error('Params invalid')
        }
        const trade = await this.createTradeV3({
            fromToken,
            toToken,
            amount,
            amountOut,
            feeTier,
            type: TradeType.EXACT_INPUT
        })
        if (trade) {
            const rpcUrl = getChainRpc(ChainType.EVM + '_' + fromToken.chainId)
            const options: SwapOptions = {
                slippageTolerance: new Percent(slippage, 100),
                deadline: Math.floor(Date.now() / 1000) + deadline * 60, // deadline minutes from the current Unix time
                recipient: walletAddress
            };
            const methodParameters = SwapRouter.swapCallParameters([trade], options);

            const tx = BigNumber(methodParameters.value).gt(0) ? {
                from: walletAddress,
                data: methodParameters.calldata,
                to: CHAIN_TO_ADDRESSES_MAP[fromToken.chainId as SupportedChainsType].swapRouter02Address,
                value: '0x'+BigInt(methodParameters.value).toString(16)
            } : {
                from: walletAddress,
                data: methodParameters.calldata,
                to: CHAIN_TO_ADDRESSES_MAP[fromToken.chainId as SupportedChainsType].swapRouter02Address
            }

           //const gas = await this.estimateGas(rpcUrl,tx)

            const hash: string = await sendTransaction({
                ...tx,
                // ...gas
            });

            return hash;
        } else {
            throw new Error('Execute Trade Error')
        }

    };


    /**
     * Get V3 pool address
     * @param tokenIn
     * @param tokenOut
     * @param fee
     */
    // Method: computeV3PoolAddress - Implementation logic
    computeV3PoolAddress(tokenIn: Token, tokenOut: Token, fee: FeeAmount) {
        return computePoolAddress({
            factoryAddress: CHAIN_TO_ADDRESSES_MAP[tokenIn.chainId as SupportedChainsType].v3CoreFactoryAddress,
            tokenA: tokenIn,
            tokenB: tokenOut,
            fee,
            chainId: tokenIn.chainId
        });
    };

    /**
     * Get output quote V3
     * @param arg
     */
    // Method: getOutputQuoteV3 - Implementation logic
    async getOutputQuoteV3(arg: IQuoteParams): Promise<IQuoteInfo | undefined> {
        const {fromToken, toToken, amount, type} = arg
        const tokenIn = fromToken.wrapped;
        const tokenOut = toToken.wrapped;
        const rpcUrl = getChainRpc(ChainType.EVM + '_' + fromToken.chainId)
        try {
            const amountOutResult = await multicallRpc(
                FeeTierList.map(({value}, index) => {
                    return {
                        abi: QuoterABI,
                        address: CHAIN_TO_ADDRESSES_MAP[fromToken.chainId as SupportedChainsType].quoterAddress,
                        functionName: type === TradeType.EXACT_INPUT ? 'quoteExactInputSingle' : 'quoteExactOutputSingle',
                        args: [
                            tokenIn.address,
                            tokenOut.address,
                            value,
                            ethers.parseUnits(amount, tokenIn.decimals).toString(),
                            0
                        ]
                    };
                }), {
                    rpcUrl,
                    multicallAbi: Multicall3ABI,
                    multicallAddress: CHAIN_TO_ADDRESSES_MAP[fromToken.chainId as SupportedChainsType].multicallAddress,
                }) as any[];
            console.log('amountOutResult', amountOutResult)

            const {amountOut, feeTier} = amountOutResult
                .map((item: any, index: number) => ({
                    amountOut: item.success === true ? ethers.formatUnits(item.returnData, tokenOut.decimals) : '0',
                    feeTier: FeeTierList[index].value
                }))
                .reduce((max: any, current: any) => (BigNumber(current.amountOut).gt(max.amountOut) ? current : max), {
                    amountOut: '0',
                    feeTier: FeeTierList[0].value
                });

            console.log(amountOut, feeTier)
            const trade = await this.createTradeV3({
                fromToken: tokenIn,
                toToken: tokenOut,
                amount,
                amountOut,
                feeTier,
                type: arg.type
            })

            return {
                amount: trade ? amountOut : '0',
                priceImpact: trade ? trade.priceImpact.toFixed() : '0',
                version: 'v3',
                feeTier: feeTier
            }
        } catch (error) {
            console.log(error)
            return undefined
        }


    };


    // Method: addLiquidityV3 - Implementation logic
    async addLiquidityV3(arg: IAddLiquidityV3Params, version = 'v3') {
        const {walletAddress, token0, token1, deadline, slippage, poolInfoV3, position} = arg
        const {sendTransaction} = getWalletKit();

        const hasNative = token0?.isNative || token1?.isNative;
        const isPoolExists = (
            poolInfoV3.poolState === PoolState.PoolExistsAndHasLiquidity ||
            poolInfoV3.poolState === PoolState.PoolExistsButHasNoLiquidity
        );

        let mintOptions: MintOptions = {
            recipient: walletAddress,
            useNative: hasNative ? ETH9[token0.chainId] : undefined,
            deadline: Math.floor(Date.now() / 1000) + 60 * Number(deadline),
            slippageTolerance: new Percent(parseInt((Number(slippage) * 100).toString()), 10000),
            ...(!isPoolExists && {createPool: true})
        };


        const {calldata, value} = NonfungiblePositionManager.addCallParameters(position, mintOptions);


        const transaction = {
            from: walletAddress,
            data: calldata,
            to: CHAIN_TO_ADDRESSES_MAP[token0.chainId as SupportedChainsType].nonfungiblePositionManagerAddress,
            value: '0x'+BigInt(value).toString(16),
        }

        const hash: string = await sendTransaction(transaction);

        return hash;


    };

    /**
     *
     * @param arg
     */
    // Method: addLiquidityV2 - Implementation logic
    async addLiquidityV2(arg: IAddLiquidityV2Params) {
        const {writeContract} = getWalletKit();
        const {token0, token1, amount0, amount1, deadline, slippage, walletAddress} = arg
        if (token0.isNative && token1.isNative) {
            throw new Error('token invalid')
        }
        const rpcUrl = getChainRpc(ChainType.EVM + '_' + token0.chainId)
        const hasNative = token0.isNative || token1.isNative
        const _deadline = Math.floor(Date.now() / 1000) + 60 * Number(deadline);
        let hash: string
        if (hasNative) {
            const [token, nativeToken] = token0.isNative ? [token1, token0] : [token0, token1];
            const tokenAddress = token.wrapped.address;
            const nativeAmount = token0.isNative ? amount0 : amount1;
            const amountTokenDesired = token0.isToken ? amount0 : amount1;
            const amountTokenMin = BigNumber(amountTokenDesired).times(BigNumber(1).minus(BigNumber(slippage).div(BigNumber(100))));
            const amountETHMin = BigNumber(nativeAmount).times(BigNumber(1).minus(BigNumber(slippage).div(BigNumber(100))));
            const value = '0x'+ethers.parseEther(BigNumber(nativeAmount).toFixed(nativeToken.decimals)).toString(16)

            hash = await writeContract({
                address: V2_ROUTER_ADDRESSES[token0.chainId],
                abi: v2RouterABI,
                functionName: 'addLiquidityETH',
                args: [
                    tokenAddress,
                    ethers.parseUnits(BigNumber(amountTokenDesired).toFixed(token.decimals), token.decimals).toString(),
                    ethers.parseUnits(amountTokenMin.toFixed(token.decimals), token.decimals).toString(),
                    ethers.parseEther(BigNumber(amountETHMin).toFixed(nativeToken.decimals)).toString(),
                    walletAddress,
                    _deadline
                ],
                rpcUrl,
                value
            });
        } else {
            const amount0Desired = BigNumber(amount0).toFixed(token0.decimals);
            const amount0Min = BigNumber(amount0Desired).times(BigNumber(1).minus(BigNumber(slippage).div(BigNumber(100)))).toFixed(token0.decimals);
            const amount1Desired = BigNumber(amount1).toFixed(token1.decimals);
            const amount1Min = BigNumber(amount1Desired).times(BigNumber(1).minus(BigNumber(slippage).div(BigNumber(100)))).toFixed(token1.decimals);
            hash = await writeContract({
                address: V2_ROUTER_ADDRESSES[token0.chainId],
                abi: v2RouterABI,
                functionName: 'addLiquidity',
                args: [
                    token0.address,
                    token1.address,
                    ethers.parseUnits(amount0Desired, token0.decimals).toString(),
                    ethers.parseUnits(amount1Desired, token1.decimals).toString(),
                    ethers.parseUnits(amount0Min, token0.decimals).toString(),
                    ethers.parseUnits(amount1Min, token1.decimals).toString(),
                    walletAddress,
                    _deadline
                ],
                rpcUrl,
            });
        }
        return hash
    };


    // Method: removeLiquidityV2 - Implementation logic
    async removeLiquidityV2(arg: IRemoveLiquidityV2Params): Promise<string> {
        const {writeContract} = getWalletKit();
        const {token0, token1, liquidity, amount0, amount1, slippage, deadline, to} = arg
        const token = token0.isToken ? token0 : token1
        const d0 = ethers.parseUnits(BigNumber(amount0).times(BigNumber(1).minus(BigNumber(slippage).div(BigNumber(100)))).toFixed(token0.decimals), token0.decimals)
        const d1 = ethers.parseUnits(BigNumber(amount1).times(BigNumber(1).minus(BigNumber(slippage).div(BigNumber(100)))).toFixed(token1.decimals), token1.decimals)
        let tx = ''
        const rpcUrl = getChainRpc(ChainType.EVM + '_' + token0.chainId)
        const hasNative = token0.isNative || token1.isNative
        if (hasNative) {
            const [amountTokenMin, amountETHMin] = [token0.isToken ? d0 : d1, token0.isNative ? d0 : d1]
            tx = await writeContract({
                address: V2_ROUTER_ADDRESSES[token0.chainId],
                abi: v2RouterABI,
                functionName: 'removeLiquidityETHSupportingFeeOnTransferTokens',
                args: [token.wrapped.address, liquidity, amountTokenMin, amountETHMin, to, deadline],
                rpcUrl,

            })
        } else {
            tx = await writeContract({
                address: V2_ROUTER_ADDRESSES[token0.chainId],
                abi: v2RouterABI,
                functionName: 'removeLiquidity',
                args: [token0.address, token1.address, liquidity, d0, d1, to, deadline],
                rpcUrl,
            })

        }
        return tx
    }

    // Method: increaseLiquidityV3 - Implementation logic
    async increaseLiquidityV3(arg: IIncreaseLiquidityV3Params): Promise<string> {

        const {sendTransaction} = getWalletKit();
        const {deadline, slippage, position, id, token0, token1, walletAddress} = arg
        const nativeToken = token0.isNative ? token0 : token1.isNative ? token1 : undefined
        const addLiquidityOptions: AddLiquidityOptions = {
            deadline: Math.floor(Date.now() / 1000) + 60 * Number(deadline),
            slippageTolerance: new Percent(parseInt((Number(slippage) * 100).toString()), 10000),//new Percent(Number(slippage) * 100, 10000),
            tokenId: id,
            useNative: nativeToken,
        };
        const {amount0, amount1} = position.mintAmounts

        const minimumAmounts = position.mintAmountsWithSlippage(addLiquidityOptions.slippageTolerance)


        const {calldata, value} = NonfungiblePositionManager.addCallParameters(position, addLiquidityOptions);

        const transaction = {
            data: calldata,
            to: CHAIN_TO_ADDRESSES_MAP[token0.chainId as SupportedChainsType].nonfungiblePositionManagerAddress,
            value: '0x'+BigInt(value).toString(16),
            from: walletAddress
        };


        const hash: string = await sendTransaction(transaction);
        return hash

    }

    // Method: removeLiquidityV3 - Implementation logic
    async removeLiquidityV3(arg: IRemoveLiquidityV3Params): Promise<string> {
        const {sendTransaction} = getWalletKit();
        const {
            token0,
            token1,
            id,
            liquidity,
            feeTier,
            tickLower,
            tickUpper,
            currentTick,
            to,
            collectAmounts,
            sqrtPriceX96,
            percentage,
            slippage,
            deadline,
        } = arg

        const configuredPool = new Pool(
            token0.wrapped,
            token1.wrapped,
            feeTier,
            sqrtPriceX96,
            liquidity,
            currentTick
        );

        const currentPosition = new Position({
            pool: configuredPool,
            liquidity,
            tickLower,
            tickUpper
        });


        const collectOptions: Omit<CollectOptions, 'tokenId'> = {
            expectedCurrencyOwed0: CurrencyAmount.fromRawAmount(
                token0,
                collectAmounts[0].toString()
            ),
            expectedCurrencyOwed1: CurrencyAmount.fromRawAmount(
                token1,
                collectAmounts[1].toString()
            ),
            recipient: to,
        };

        const removeLiquidityOptions: RemoveLiquidityOptions = {
            deadline: Math.floor(Date.now() / 1000) + 60 * Number(deadline),
            slippageTolerance: new Percent(parseInt((Number(slippage) * 100).toString()), 10000),
            tokenId: id,
            liquidityPercentage: new Percent(percentage, 100),
            collectOptions,
        };

        const {calldata, value} = NonfungiblePositionManager.removeCallParameters(
            currentPosition,
            removeLiquidityOptions
        );

        const transaction = {
            data: calldata,
            to: CHAIN_TO_ADDRESSES_MAP[token0.chainId as SupportedChainsType].nonfungiblePositionManagerAddress,
            value: '0x'+BigInt(value).toString(16),
            from: to
        };

        const hash: string = await sendTransaction(transaction);
        return hash

    }


    // Method: tokenFetcher - Implementation logic
    async tokenFetcher(tokenAddress: string, chainId: number): Promise<Token | NativeToken> {
        if (WETH9[chainId].address.toLowerCase() === tokenAddress.toLowerCase()) {
            return ETH9[chainId]
        }
        const rpcUrl = getChainRpc(ChainType.EVM + '_' + chainId)
        const tokenInfoCall = (address: string, functionName: string) => {
            return {
                abi: ERC20ABI,
                address:address as `0x${string}`,
                functionName,
                args: []
            }
        }

        const m3 = Multicall3Address[chainId]
        const [{returnData: name}, {returnData: symbol}, {returnData: decimals}] = await multicallRpc([
            tokenInfoCall(tokenAddress, 'name'),
            tokenInfoCall(tokenAddress, 'symbol'),
            tokenInfoCall(tokenAddress, 'decimals'),
        ], {
            multicallAddress:m3,
            rpcUrl,
            multicallAbi: Multicall3ABI,
        }) as any[]
        return new Token(chainId, tokenAddress, decimals, symbol, name)
    }


    getSortedCurrenciesTuple(
        a: Token,
        b: Token,
    ): [Token, Token] {
        if (a?.isNative || !b) {
            return [a, b]
        }

        if (b?.isNative || !a) {
            return [b, a]
        }
        return a.sortsBefore(b) ? [a, b] : [b, a]
    }


    getInvertedTuple<T extends Currency>(tuple: [T, T], inverted: boolean): [T, T] {
        return inverted ? [tuple[1], tuple[0]] : tuple
    }

    // Method: sqrtPriceX96ToPrice - Implementation logic
    sqrtPriceX96ToPrice(sqrtPriceX96: string, token0: Token, token1: Token): Price<Token, Token> {
        const sqrtPriceX96JSBI = JSBI.BigInt(sqrtPriceX96)

        const tick = TickMath.getTickAtSqrtRatio(sqrtPriceX96JSBI)
        return tickToPrice(token0, token1, tick)
    }

    // Method: isInvalidPrice - Implementation logic
    isInvalidPrice(price?: Price<Currency, Currency>) {
        const sqrtRatioX96 = price ? encodeSqrtRatioX96(price.numerator, price.denominator) : undefined
        return (
            !!price &&
            !!sqrtRatioX96 &&
            !(
                JSBI.greaterThanOrEqual(sqrtRatioX96, TickMath.MIN_SQRT_RATIO) &&
                JSBI.lessThan(sqrtRatioX96, TickMath.MAX_SQRT_RATIO)
            )
        )
    }


    // Method: truncateValue - Implementation logic
    truncateValue(value: string, decimals: number): string {
        const parts = value.split(/[.,]/)
        const symbol = value.includes('.') ? '.' : ','
        if (parts.length > 1 && parts[1].length > decimals) {
            return parts[0] + symbol + parts[1].slice(0, decimals)
        }
        return value
    }

    tryParseCurrencyAmount<T extends Currency>(
        value?: string,
        currency?: T,
    ): CurrencyAmount<T> | undefined {
        if (!value || !currency || isNaN(parseFloat(value))) {
            return undefined
        }
        try {
            const typedValueParsed = ethers.parseUnits(this.truncateValue(value, currency.decimals), currency.decimals).toString()
            if (typedValueParsed !== '0') {
                return CurrencyAmount.fromRawAmount(currency, JSBI.BigInt(typedValueParsed))
            }
        } catch (error) {
            // fails if the user specifies too many decimal places of precision (or maybe exceed max uint?)
            console.debug('tryParseCurrencyAmount', 'tryParseCurrencyAmount', `Failed to parse input amount: "${value}"`, error)
        }
        return undefined
    }


    // Method: getInitialPrice - Implementation logic
    getInitialPrice({
                        baseCurrency,
                        sortedCurrencies,
                        initialPrice,
                    }: {
        baseCurrency: Currency
        sortedCurrencies: [Currency, Currency]
        initialPrice: string
    }) {
        const [currency0, currency1] = sortedCurrencies
        const invertPrice = Boolean(baseCurrency && currency0 && !baseCurrency.equals(currency0))

        const parsedQuoteAmount = this.tryParseCurrencyAmount(initialPrice, invertPrice ? currency0 : currency1)
        if (!parsedQuoteAmount) {
            return undefined
        }

        const baseAmount = this.tryParseCurrencyAmount('1', invertPrice ? currency1 : currency0)
        const price =
            baseAmount && parsedQuoteAmount
                ? new Price(baseAmount.currency, parsedQuoteAmount.currency, baseAmount.quotient, parsedQuoteAmount.quotient)
                : undefined

        return invertPrice ? price?.invert() : price
    }

    tryParsePrice<T extends Currency>(baseToken?: T, quoteToken?: T, value?: string) {
        if (!baseToken || !quoteToken || !value) {
            return undefined
        }

        if (!value.match(/^\d*\.?\d+$/)) {
            return undefined
        }

        const [whole, fraction] = value.split('.')

        const decimals = fraction?.length ?? 0
        const withoutDecimals = JSBI.BigInt((whole ?? '') + (fraction ?? ''))

        return new Price(
            baseToken,
            quoteToken,
            JSBI.multiply(JSBI.BigInt(10 ** decimals), JSBI.BigInt(10 ** baseToken.decimals)),
            JSBI.multiply(withoutDecimals, JSBI.BigInt(10 ** quoteToken.decimals)),
        )
    }

    tryParseTick(
        baseToken?: Token,
        quoteToken?: Token,
        feeAmount?: FeeAmount,
        value?: string,
    ): number | undefined {
        if (!baseToken || !quoteToken || !feeAmount || !value) {
            return undefined
        }

        const price = this.tryParsePrice(baseToken, quoteToken, value)

        if (!price) {
            return undefined
        }

        let tick: number


        const sqrtRatioX96 = encodeSqrtRatioX96(price.numerator, price.denominator)
        if (JSBI.greaterThanOrEqual(sqrtRatioX96, TickMath.MAX_SQRT_RATIO)) {
            tick = TickMath.MAX_TICK
        } else if (JSBI.lessThanOrEqual(sqrtRatioX96, TickMath.MIN_SQRT_RATIO)) {
            tick = TickMath.MIN_TICK
        } else {
            tick = priceToClosestTick(price)
        }

        return nearestUsableTick(tick, TICK_SPACINGS[feeAmount])
    }

    // Method: getTickToPrice - Implementation logic
    getTickToPrice(baseToken?: Token, quoteToken?: Token, tick?: number): Price<Token, Token> | undefined {
        if (!baseToken || !quoteToken || typeof tick !== 'number') {
            return undefined
        }
        return tickToPrice(baseToken, quoteToken, tick)
    }

    // Method: getPositionNFT - Implementation logic
    async getPositionNFT(tokenId: number | string, chainId: number, rpcUrl: string): Promise<{
        name: string,
        image: string,
        description: string
    } | undefined> {
        try {
            const uri = await readContractRpc({
                address: CHAIN_TO_ADDRESSES_MAP[chainId as SupportedChainsType].nonfungiblePositionManagerAddress as string,
                abi: NonfungiblePositionManagerABI,
                functionName: 'tokenURI',
                args: [tokenId],
                rpcUrl,
            }) as string
            const res = await fetch(uri);
            const data: {
                name: string;
                image: string;
                description: string;
            } = await res.json();

            return data;
        } catch (e) {
            console.log(e)
            return undefined
        }
    }

    // Method: getCollectFeeAmount - Implementation logic
    async getCollectFeeAmount(tokenId: number | string, chainId: number, walletAddress: string) {
        const MaxUint128 = BigNumber(2).pow(128).minus(1).toFixed();
        const rpcUrl = getChainRpc(ChainType.EVM + '_' + chainId)
        return await readContractRpc({
            address: CHAIN_TO_ADDRESSES_MAP[chainId as SupportedChainsType].nonfungiblePositionManagerAddress as string,
            abi: NonfungiblePositionManagerABI,
            functionName: 'collect',
            args: [{tokenId, recipient: walletAddress, amount0Max: MaxUint128, amount1Max: MaxUint128}],
            rpcUrl,
        }) as [bigint, bigint]
    }

    getMintAmounts(
        token0: Token,
        token1: Token,
        fee: FeeAmount,
        sqrtPriceX96: string,
        liquidity: string,
        tickLower: number,
        tickUpper: number,
        tick: number
    ) {
        if (tick === undefined) return {amount0: '0', amount1: '0'};

        const pool = new Pool(token0, token1, fee, sqrtPriceX96, liquidity, tick);

        const position = new Position({
            pool: pool,
            liquidity,
            tickLower,
            tickUpper
        });

        return {
            amount0: ethers.formatUnits(position.mintAmounts.amount0.toString(), token0.decimals),
            amount1: ethers.formatUnits(position.mintAmounts.amount1.toString(), token1.decimals)
        };
    };

}

```