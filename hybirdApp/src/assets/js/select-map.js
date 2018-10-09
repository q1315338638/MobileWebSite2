class Ajax{
	get(url, fn) { 
		var xhr = new XMLHttpRequest();            
		xhr.open('GET', url, true);
		xhr.onreadystatechange = function() {
		  // readyState == 4说明请求已完成
		  if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) { 
				// 从服务器获得数据 
				fn.call(this, xhr.responseText);  
		  }
		};
		xhr.send();
  }
}

var Theme = {
	_getTheme: function(){
		console.log('执行_getTheme');
		let themeType = localStorage["pq_ThemePlan"];
		if(themeType == "" || themeType == null){
			console.log('执行ajax');
			Ajax.get("http://183.6.104.189:9011/api/I18N/GetTheme", function(data){
				themeType = data;
				console.log(data);
			})
		}
		this._setMap(themeType);
	},
	_setMap: function(data){
		console.log('执行了_setMap');
		console.log(data);
		let head = document.getElementsByTagName("head")[0];
		let scriptNode = document.createElement("script");
		switch (data){
			case 1:
			scriptNode.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAL8GioOqb_OUeFefm0Th6l8gR2yNTgj70";
			break;
			case 2:
			scriptNode.src = "http://api.map.baidu.com/api?v=2.0&ak=hbWw2xvCIMit4HsCVuNvHUXFudv6y0cP";
			break;
		}
		console.log(head);
		console.log(scriptNode);
		head.appendChild(scriptNode);
		document.write(1);
	}
}

// export class Theme{

// 	_getTheme(){
// 		console.log('执行_getTheme');
// 		let themeType = localStorage["pq_ThemePlan"];
// 		if(themeType == "" || themeType == null){
// 			console.log('执行ajax');
// 			Ajax.get("http://183.6.104.189:9011/api/I18N/GetTheme", function(data){
// 				themeType = data;
// 				console.log(data);
// 			})
// 		}
// 		this._setMap(themeType);
// 	}

// 	_setMap(data){
// 		console.log('执行了_setMap');
// 		console.log(data);
// 		let head = document.getElementsByTagName("head")[0];
// 		let scriptNode = document.createElement("script");
// 		switch (data){
// 			case 1:
// 			scriptNode.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAL8GioOqb_OUeFefm0Th6l8gR2yNTgj70";
// 			break;
// 			case 2:
// 			scriptNode.src = "http://api.map.baidu.com/api?v=2.0&ak=hbWw2xvCIMit4HsCVuNvHUXFudv6y0cP";
// 			break;
// 		}
// 		console.log(head);
// 		console.log(scriptNode);
// 		head.appendChild(scriptNode);
// 		document.write(1);
// 	}
// }