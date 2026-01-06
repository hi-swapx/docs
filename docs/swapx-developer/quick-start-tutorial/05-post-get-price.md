---
title: Token Price GET/POST
---


Provides real-time 24-hour market statistics for specific tokens. This service is optimized for mobile applications requiring fast and reliable price data.

### 🔌 API Information

| Feature | Details |
| :--- | :--- |
| **Base URL** | `https://api4-wt.tokenup.org` |
| **Endpoint** | `/v4/market/24hr` |
| **Method** | `GET` / `POST` |
| **Scenario** | Mobile-end token price query services |

---

### 📥 Request Parameters

#### Body / Query Parameters

| Name | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `params` | `Array` | Yes | An array containing query conditions. |

#### `params` Format
The data should be structured as a JSON array of arrays or objects:
`[ ["chaintype_chainid", "contract"] ]`

**Field Details:**

1.  **`chaintype_chainid`** (String)
    * **Format:** `{Blockchain Type}_{Chain ID}`
    * **Example:** `eth_1` (Ethereum Mainnet), `bsc_56` (BSC Mainnet)
    * **Purpose:** Specifies the target blockchain network.

2.  **`contract`** (String)
    * **Definition:** The smart contract address of the token.
    * tip Important Note
        If querying **Native Tokens** (e.g., ETH, BNB) which do not have a contract address:
        * Pass the token **Symbol** (e.g., `ETH`)
        * OR pass an **Empty String** `""`
        :::

---

### 🚀 Request Example

Example for retrieving prices for **XOC**, **USDX**, **B3**, and **USDT**:

```bash
curl 'https://api4-wt.tokenup.org/v4/market/24hr' \ 
-H 'accept: application/json, text/plain, /' \
-H 'accept-language: zh-CN,zh;q=0.9,en;q=0.8' \ 
-H 'cache-control: no-cache' \
-H 'content-type: application/json' \  
-H 'origin: https://web.tokenup.org' \ 
-H 'pragma: no-cache' \
-H 'priority: u=1, i' \
-H 'referer: https://web.tokenup.org/' \
-H 'sec-ch-ua: "Google Chrome";v="143", "Chromium";v="143", "Not A(Bra nd";v="24"' \
-H 'sec-ch-ua-mobile: ?0' \
-H 'sec-ch-ua-platform: "macOS"' \
-H 'sec-fetch-dest: empty' \
-H 'sec-fetch-mode: cors' \
-H 'sec-fetch-site: same-site' \
--data-raw '[{"Ethereum_3721":"XOC"},{"Ethereum_3721":"0xb575796D29  3f37F112f3694b8ff48D711FE67EC7"},{"Ethereum_3721":"0x4917eac92fc89 2d0ff077fa39feee07acefd2ca6"},{"Ethereum_3721":"0x1470855ee884fa84 9cda43f4c1ef031dfd8ecb72"}]'