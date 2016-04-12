var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

	var lilv = require('../data/lilv');
	var json = {
		title: '房贷计算器',
		lilv: lilv, //利率数据
		loanradiotype: ['商业贷款','公积金贷款','组合型贷款'] // 贷款类别
	};

  res.render('index', json);
  
});

module.exports = router;
