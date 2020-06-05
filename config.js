/*!
 * Copyright (c) 2020 Digital Bazaar, Inc. All rights reserved.
 */
'use strict'

/**
 * Simple config file (to help test against local instances of authn.io, local
 * wallets, etc).
 */

const MEDIATOR = 'https://beta.authn.io/mediator' + '?origin=' +
  encodeURIComponent(window.location.origin);

const WALLET_LOCATION = 'https://docknetwork.github.io/chapi-demo-wallet/';
