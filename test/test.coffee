###*
# 
# @date 2016-02-02 17:44:28
# @author vfasky <vfasky@gmail.com>
# @link http://vfasky.com
###
'use strict'

h2v = require '../h2v'
fs = require 'fs'

t1 = fs.readFileSync './tpl/t2.html', 'utf8'
fs.writeFileSync './tpl/t1.js', h2v(t1), 'utf8'
