//
// Copyright (c) 2013 Jean Alexandre Iragne (https://github.com/Iragne)
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//
var Facebook = require("./Providers/FacebookProvider.js");

UserProvider = function (options){
	"use strict";
	var self = this;
	this.opts = {
		debug : options.debug || 0,
	};
};

UserProvider.prototype.getUser = function(partner,options,callback){
	"use strict";
	var self = this;
	if (partner == "facebook"){
		new Facebook(options).getMe(options, function (err,user){
			self.callback(err,user,callback);
		});
	}else
		throw "No Partner Found For : "+partner;
};

UserProvider.prototype.callback = function(err,user,callback){
	"use strict";
	if(self.opts.debug == 1){
		if(user)
			console.log("User",user);
		if (err)
			console.log("Error",err);
	}
	callback(err,user);
};

module.exports = UserProvider;
