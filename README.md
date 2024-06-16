This is a next app to create a project market place with the ArkProject

it use the ark project SDKs:
https://www.npmjs.com/package/@ark-project/core
https://www.npmjs.com/package/@ark-project/react

Good to know:
After listing a token to sell it take a few seconds before the end of the transaction to see the listing placed in the market place.

After that you'll after to wait 1 minutes before the listing become active & buyable.

Env variables for mainnet:

Demo API url & key to gather nft data from the ArkProject API:
NEXT_PUBLIC_NFT_API_URL=https://api.arkproject.dev
NEXT_PUBLIC_NFT_API_KEY=AY1oXgEAmF139oBoxDSomzVnHqy8ZdQ2NxLmzJ6i

Demo Orderbook api to get the orderbook data (listings, orders, etc.):
NEXT_PUBLIC_ORDERBOOK_API_URL=https://api-orderbook.arkproject.dev

Demo Broker ID (the broker ID used in the example app, unique identifier for the marketplace, used to split fees in the arkproject protocol):
NEXT_PUBLIC_BROKER_ID=0x00E4769a4d2F7F69C70951A003eBA5c32707Cef3CdfB6B27cA63567f51cdd078

Your contract address for the NFT collection you are making the marketplace for (used to gather the NFT data from the ArkProject API & also used in the mint page, adapt the mint page logic to your usecase if you change the contract or remove it):
NEXT_PUBLIC_STARKNET_NFT_CONTRACT=0x32d99485b22f2e58c8a0206d3b3bb259997ff0db70cffd25585d7dd9a5b0546

Env variables for sepolia:

Demo API url & key to gather nft data from the ArkProject API:
NEXT_PUBLIC_NFT_API_URL=https://
staging.api.arkproject.dev
NEXT_PUBLIC_NFT_API_KEY=AY1oXgEAmF139oBoxDSomzVnHqy8ZdQ2NxLmzJ6i

Demo Orderbook api to get the orderbook data (listings, orders, etc.):
NEXT_PUBLIC_ORDERBOOK_API_URL=https://staging.api-orderbook.arkproject.dev

Demo Broker ID (the broker ID used in the example app, unique identifier for the marketplace, used to split fees in the arkproject protocol):
NEXT_PUBLIC_BROKER_ID=0x6b86e40118f29ebe393a75469b4d926c7a44c2e2681b6d319520b7c1156d114

Your contract address for the NFT collection you are making the marketplace for (used to gather the NFT data from the ArkProject API & also used in the mint page, adapt the mint page logic to your usecase if you change the contract or remove it):
NEXT_PUBLIC_STARKNET_NFT_CONTRACT=0xf71c219d75e28425c640548411e8e58642894f291c989abff4ecfaa3f1b775

## Local development:

copy the .env.example file to .env.local & fill the env variables with your own values.

```bash
cp .env.example .env.local
```

Install the dependencies & run the app:

```bash
npm install
npm run dev
```

This app is just a demo so it's subject to bugs & some features may be missing, feel free to contribute to the project if you want to add more features or fix bugs.
