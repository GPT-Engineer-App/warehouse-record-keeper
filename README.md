# warehouse-record-keeper

The purpose of the project is to keep a complete record of all raw materials entering the warehouse, to record shipments, to collect statistical data as well as a separate module/cabinet should be implemented trading platform, which will be sold items from the warehouse (for sale is put out by the Manager). Further details on the levels and division of cabinets
1.	Master. Sections of the cabinet: 
A.	Add a position to the internal stock (a card with parameters of the Unit/OB including dimensions and photo is filled in)
B.	Internal stock (All positions created by the master are stored, an example of display is available in the system.
C.	Shipments (Upcoming shipments - orders from the user-buyer cabinet. Principle of work: all movements of the stone must be fixed, so when the master wants to ship this or that position - he must request permission from the cabinet "cerber" (confirms whether the payment for a particular position that the master wants to ship) and "Quarry Manager" (gives final permission for shipment if he is satisfied with everything) )
D.	Shipment Archive( list of everything that has been shipped by a particular foreman)
E.	All actions in the program by all users should be saved in the history table

Translated with DeepL.com (free version)

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/warehouse-record-keeper.git
cd warehouse-record-keeper
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
