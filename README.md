# personal

personal is my personal website. It is developped thanks to my [AngularJS](https://angularjs.org) kickstarter [ngclient](https://github.com/soryboums/ngclient).

***

## Quick Start with Vagrant

Install [Vagrant](https://www.vagrantup.com/) and then:

```sh
$ cd personal
$ vagrant up
$ vagrant ssh
$ cd /vagrant
$ npm start
```
Finally, go to [`http://localhost:9090/#/home`](http://localhost:9090/#/home).

***

## Standalone Quick Start

Install [Node.js](https://nodejs.org) and then:

```sh
$ cd personal
$ sudo npm -g install grunt-cli karma
$ npm install
$ grunt watch
```

Now open `file:///path/to/personal-folder/build/index.html` in your browser.
Happy coding!
