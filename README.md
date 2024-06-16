# ArkProject Marketplace

This is a Next.js app to create a project marketplace with the ArkProject.

## ArkProject SDKs Used

- [@ark-project/core](https://www.npmjs.com/package/@ark-project/core)
- [@ark-project/react](https://www.npmjs.com/package/@ark-project/react)

## Good to Know

- After listing a token for sale, it takes a few seconds for the transaction to complete before the listing appears in the marketplace.
- You will need to wait 1 minute after listing for it to become active and buyable.

## Environment Variables

### Mainnet

#### Demo API URL & Key (for gathering NFT data from the ArkProject API)

```
NEXT_PUBLIC_NFT_API_URL=https://api.arkproject.dev
NEXT_PUBLIC_NFT_API_KEY=AY1oXgEAmF139oBoxDSomzVnHqy8ZdQ2NxLmzJ6i
```

#### Demo Orderbook API (for getting orderbook data such as listings, orders, etc.)

```
NEXT_PUBLIC_ORDERBOOK_API_URL=https://api-orderbook.arkproject.dev
```

#### Demo Broker ID (unique identifier for the marketplace, used to split fees in the ArkProject protocol)

```
NEXT_PUBLIC_BROKER_ID=0x00E4769a4d2F7F69C70951A003eBA5c32707Cef3CdfB6B27cA63567f51cdd078
```

#### NFT Collection Contract Address (used to gather NFT data from the ArkProject API and in the mint page)

```
NEXT_PUBLIC_STARKNET_NFT_CONTRACT=0x32d99485b22f2e58c8a0206d3b3bb259997ff0db70cffd25585d7dd9a5b0546
```

### Sepolia

#### Demo API URL & Key (for gathering NFT data from the ArkProject API)

```
NEXT_PUBLIC_NFT_API_URL=https://staging.api.arkproject.dev
NEXT_PUBLIC_NFT_API_KEY=AY1oXgEAmF139oBoxDSomzVnHqy8ZdQ2NxLmzJ6i
```

#### Demo Orderbook API (for getting orderbook data such as listings, orders, etc.)

```
NEXT_PUBLIC_ORDERBOOK_API_URL=https://staging.api-orderbook.arkproject.dev
```

#### Demo Broker ID (unique identifier for the marketplace, used to split fees in the ArkProject protocol)

```
NEXT_PUBLIC_BROKER_ID=0x6b86e40118f29ebe393a75469b4d926c7a44c2e2681b6d319520b7c1156d114
```

#### NFT Collection Contract Address (used to gather NFT data from the ArkProject API and in the mint page)

```
NEXT_PUBLIC_STARKNET_NFT_CONTRACT=0xf71c219d75e28425c640548411e8e58642894f291c989abff4ecfaa3f1b775
```

## Local Development

1. Copy the `.env.example` file to `.env.local` and fill in the environment variables with your own values:

   ```bash
   cp .env.example .env.local
   ```

2. Install the dependencies and run the app:
   ```bash
   npm install
   npm run dev
   ```

## Contributing

This app is a demo, so it's subject to bugs and some features may be missing. Feel free to contribute to the project if you want to add more features or fix bugs.
