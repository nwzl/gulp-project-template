require.config({
	baseUrl: "/",
	paths: {
		"jquery": "libs/jquery-1.12.4",
		"tab": "module/tab",
		"toast": "module/toast",
		"template": "libs/template-web",
		"url": "module/url"
	},
	shim: {
		toast:{
			deps:["jquery"]
		}/*,
		tab:{
			deps:["jquery","toast"]
		}*/
	}
})