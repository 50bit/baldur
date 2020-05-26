## Baldur ( Guestbook App )

Baldur is a simple guestbook application .

The application consists of :
* Cient side using Reactjs .
* Server side using nodejs , express and mongo .

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install Baldur used modules .
```bash
git clone https://github.com/50bit/baldur.git
```
* Client side :
```bash
cd client ; npm i
```
* Server side :
```bash
cd server ; npm i
```

## Structure
* `/` - The root directory is npm proejct which contain only scripts to run, build and deploy the application.
* `/server` - contains the server-side .
* `/server/config` - contains passport , database , routes and server configuration . 
* `/server/lib` - contains the frequently used functions .
* `/server/src` - contains the MVC application structure .
* `/client` - contain the client-side React application .
