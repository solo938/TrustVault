# 🏦 TrustVault

**TrustVault** is a smart contract-based multi-signature wallet inspired by Gnosis Safe. It allows a group of owners to collectively manage and execute Ethereum transactions, requiring a minimum number of confirmations to approve each action.

---

## ✨ Features

- ✅ Multi-owner support
- ✅ Confirmations required before execution
- ✅ Transaction queueing and execution
- ✅ Owner management (add/remove)
- ✅ Reentrancy-safe logic
- ✅ Built with Hardhat and Solidity

---

## 🧪 Tech Stack

- Solidity (v0.8.x)
- Hardhat
- Ethers.js
- OpenZeppelin contracts (for security)

---

## 🚀 Usage

1. Clone the repo:
```bash
git clone https://github.com/solo938/TrustVault
cd TrustVault
```

2. Install dependencies:
```bash
npm install
```

3. Run tests:
```bash
npx hardhat test
```

---

## 🧠 Smart Contract Flow

1. Deploy with a set of owners and required confirmations
2. Owners submit transactions
3. Other owners confirm
4. Once threshold is met, any owner can execute


