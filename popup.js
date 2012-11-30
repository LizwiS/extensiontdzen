// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function redirect(){
    window.open("http://tdzen.com/");
}
chrome.browserAction.onClicked.addListener(redirect);
