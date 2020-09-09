# Shake-Poke API
A challenge to use the Shakespeare translator and pokeAPI's to provide a shakespearean description of a given pokemon via an API call.

## Technologies Used:
- Node.js
- [Shakespeare translator API](https://funtranslations.com/api/shakespeare)
- [PokeAPI](https://pokeapi.co/)

## Structure
![Diagram](https://i.imgur.com/ocfTzAQ.png)

## External API Usage

	curl http://localhost:3000/pokemon/{name}

## Requirements

For development, you will only need Node.js installed, along with any npm library/package requirements outlined in ./package.json (installation covered in [Install](#Install)).

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm


- #### Node installation on Fedora, CentOS
 

      $ sudo dnf install nodejs
      $ sudo dnf install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, run:

    $ npm install npm -g

---

## Install

    $ git clone https://github.com/jamesoneill997/pokemon-shakespeare.git
    $ cd {PROJECT_DIRECTORY}
    $ npm install

## Running the project
	$ node app.js
