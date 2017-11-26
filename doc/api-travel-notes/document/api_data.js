define({ "api": [  {    "type": "get",    "url": "/v1/security/sms/captcha",    "title": "获取图片验证码",    "version": "1.0.0",    "name": "_____",    "group": "Security",    "permission": [      {        "name": "none"      }    ],    "description": "<p>Compare Verison 1.0.0</p>",    "examples": [      {        "title": "Example usage:",        "content": "curl -i http://localhost/v1/security/sms/captcha",        "type": "json"      }    ],    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "buffer",            "description": "<p>图片，base64 格式</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "captcha_id",            "description": "<p>图片验证码ID</p>"          }        ]      },      "examples": [        {          "title": "Response (example):",          "content": "HTTP/1.1\n{\n  \"captcha_id\": xxxxxx,\n  \"buffer\": \"xxxxxx\"\n}",          "type": "json"        }      ]    },    "filename": "routes/security.js",    "groupTitle": "Security",    "sampleRequest": [      {        "url": "https://api.github.com/v1/v1/security/sms/captcha"      }    ]  },  {    "type": "get",    "url": "/v1/security/sms/:mobile",    "title": "获取手机短信验证码",    "version": "1.0.0",    "name": "______",    "group": "Security",    "permission": [      {        "name": "none"      }    ],    "description": "<p>Compare Verison 1.0.0</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "mobile",            "description": "<p>接受信息的手机号码</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "captcha",            "description": "<p>验证码(可选)</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "captchaId",            "description": "<p>验证码ID(可选)</p>"          }        ]      }    },    "examples": [      {        "title": "Example usage:",        "content": "curl -i http://localhost/v1/security/sms/15218486390?captcha=xxxx&captchaId=1321321",        "type": "json"      }    ],    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "state",            "description": "<p>接口调用结果</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "msg",            "description": "<p>结果说明</p>"          }        ]      },      "examples": [        {          "title": "Response (example):",          "content": "HTTP/1.1 200\n{\n  \"state\": 1,\n  \"msg\": \"验证码发送成功\"\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Response (example):",          "content": "HTTP/1.1\n{\n  \"state\": -1,\n  \"msg\": \"验证码失效\"\n}",          "type": "json"        }      ]    },    "filename": "routes/security.js",    "groupTitle": "Security",    "sampleRequest": [      {        "url": "https://api.github.com/v1/v1/security/sms/:mobile"      }    ]  },  {    "type": "post",    "url": "/user",    "title": "注册用户",    "version": "1.0.0",    "name": "PostUser",    "group": "User",    "permission": [      {        "name": "none"      }    ],    "description": "<p>创建用户</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>用户名称</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>新用户的ID</p>"          }        ]      }    },    "filename": "routes/users.js",    "groupTitle": "User",    "sampleRequest": [      {        "url": "https://api.github.com/v1/user"      }    ]  },  {    "type": "get",    "url": "/v1/users/signin",    "title": "登录接口",    "version": "1.0.0",    "name": "__",    "group": "User",    "permission": [      {        "name": "none"      }    ],    "description": "<p>Compare Verison 1.0.0</p>",    "examples": [      {        "title": "Example usage:",        "content": "curl -i http://localhost/user/4711",        "type": "json"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "mobile",            "description": "<p>用户的手机号码</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>用户的登录密码</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "platform",            "description": "<p>平台（mobile）(可选参数， 放在请求头里面)</p>"          }        ]      }    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UserNotFound",            "description": "<p>该用户不存在</p>"          }        ]      },      "examples": [        {          "title": "Response (example):",          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"UserNotFound\"\n}",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "Response (example):",          "content": "HTTP/1.1 200\n{\n     \"state\": 200,\n     \"msg\": \"sign in success\",\n     \"sessionToken\":\"xxxxxx\"\n}",          "type": "json"        }      ]    },    "filename": "routes/users.js",    "groupTitle": "User",    "sampleRequest": [      {        "url": "https://api.github.com/v1/v1/users/signin"      }    ]  },  {    "type": "put",    "url": "/user/:id",    "title": "更新用户信息",    "version": "1.0.0",    "name": "____",    "group": "User",    "permission": [      {        "name": "none"      }    ],    "description": "<p>可以提交用户信息的一部分上来</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "int",            "optional": false,            "field": "id",            "description": "<p>用户ID</p>"          }        ]      }    },    "filename": "routes/users.js",    "groupTitle": "User",    "sampleRequest": [      {        "url": "https://api.github.com/v1/user/:id"      }    ]  },  {    "type": "get",    "url": "/user/:id",    "title": "查询用户信息",    "version": "1.0.0",    "name": "______",    "group": "User",    "permission": [      {        "name": "none"      }    ],    "description": "<p>Compare Verison 1.0.0</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>用户ID</p>"          }        ]      }    },    "examples": [      {        "title": "Example usage:",        "content": "curl -i http://localhost/user/4711",        "type": "json"      }    ],    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>用户ID</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "registered",            "description": "<p>注册时间</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "name",            "description": "<p>用户名称</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "profile",            "description": "<p>用户简介</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "profile.age",            "description": "<p>年龄</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "profile.image",            "description": "<p>头像地址</p>"          },          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "options",            "description": "<p>空</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "options.name",            "description": "<p>Option Name.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "options.value",            "description": "<p>Option Value.</p>"          }        ]      }    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "NoAccessRight",            "description": "<p>没有认证登录</p>"          },          {            "group": "Error 4xx",            "optional": false,            "field": "UserNotFound",            "description": "<p>该用户不存在</p>"          }        ]      },      "examples": [        {          "title": "Response (example):",          "content": "HTTP/1.1 401 Not Authenticated\n{\n  \"error\": \"NoAccessRight\"\n}",          "type": "json"        }      ]    },    "filename": "routes/users.js",    "groupTitle": "User",    "sampleRequest": [      {        "url": "https://api.github.com/v1/user/:id"      }    ]  },  {    "type": "get",    "url": "/v1/storage/sts/token",    "title": "获取阿里云sts token",    "version": "1.0.0",    "name": "_____token",    "group": "storage",    "permission": [      {        "name": "user"      }    ],    "description": "<p>Compare Verison 1.0.0 没有请求参数，但是要求用户登录 ，请求的时候携带 Token 即可</p>",    "examples": [      {        "title": "Example usage:",        "content": "curl -i http://localhost/v1/storage/sts/token",        "type": "json"      }    ],    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "AccessKeySecret",            "description": "<p>阿里云KeySecret</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "AccessKeyId",            "description": "<p>阿里云KeySecretID</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "Expiration",            "description": "<p>Token过期时间</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "SecurityToken",            "description": "<p>Token</p>"          }        ]      },      "examples": [        {          "title": "Response (example):",          "content": "{\n      \"AccessKeySecret\": \"BAFwpmjU8RQ7u4oxnK5zvVpGemsuc2XZTAbhWMBcGx9\",\n      \"AccessKeyId\": \"STS.K9TiMKKLBDXURxmr4MEqcK47f\",\n      \"Expiration\": \"2017-11-26T06:27:21Z\",\n      \"SecurityToken\": \"CAISwgJ1q6Ft5B2yfSjIqvrhIvf/ppNj85q+UF7cljQYSf5PpPGchDz2IHhFfXVvAOgZsfw+lGBR6v8dlqFoR59HTBWeNpOWBXWHZkDzDbDasumZsJbj4f/MQBpyYnyW9cvWZPqDA7G5U/yxalfCuzZuyL/hD1uLVECkNpv77vwCac8MDDGlcR1MBtpdOnFdyqkgOGDWKOymPzPzn2PUFzAIgAdnjn5l4qnNka/i4xHF3lrh0b1X9cajPoKtccRoOpBjXrX81edtJK3ay3wSuVoY6L1/kqFA/zDbs5aGD1lT6kzcaK2W0KU2cFMkPPVrQ/Mc9qeiz60igIGJydSrkSQqFPpOTiHSSLqnxMb5A+6zPr47D+2jai2RjYnXacat4lN0OC5Caxk3YdMkMHh0BAA2Qy/XLqa/4E/QYxuuW3pGCwuXdzofGoABmMLwoNmBGf27oWlfjlcRXAkXhOY0X1KsYvudltFr4JMbO636EgyW92T1y7tBVOwg2Z8dczThBxbRDDWoTd1+5Z1ihBLIxQH/304TuARC7/tcnhebQJqxr1uv06jaoiRB/r7bdU1r5M//ClzMeuIFHqk5opFVdDBCKOh0kK5Z9qQ=\"\n }",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "NoAccessRight",            "description": "<p>没有认证登录</p>"          }        ]      },      "examples": [        {          "title": "Response (example):",          "content": "HTTP/1.1 401 NoAccessRight\n{\n  \"error\": \"NoAccessRight\"\n}",          "type": "json"        }      ]    },    "filename": "routes/storage.js",    "groupTitle": "storage",    "sampleRequest": [      {        "url": "https://api.github.com/v1/v1/storage/sts/token"      }    ]  }] });
