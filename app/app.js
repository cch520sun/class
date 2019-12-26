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

app.get('/', function (req, res) {
  res.send('<table border=1><tr><td>Name</td><td>XX</td></td></tr><tr><td>Id</td><td>YY</td></tr><tr><td>Adress</td><td>XX</td></tr></table></body>');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
