/*
 * Copyright (c) 2012-2019 Red Hat, Inc.
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Red Hat, Inc. - initial API and implementation
 */

/*eslint-env node*/

var express = require('express');
var app = express();
var request = require('request');

request('https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=tse_2330.tw&json=1&delay=0&_=1577865150892', { json: true }, function(err, res, body) {
  app
    .get('/', function (req, res) {
      res.send(body.msgArray[0]);
    })
    .listen(3000);
});
