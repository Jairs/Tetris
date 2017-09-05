var Game = function() {
	//dom元素
	var gameDiv;
	var nextDiv;
	//游戏矩阵
	var gameData = [
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0]
	];
	//当前方块
	var cur;
	//下一个方块
	var next;
	//divs
	var nextDivs = [];
	var gameDivs = [];
	//初始化div
	var initDiv = function(container,data,divs){
		for (var i = 0; i < data.length; i++) {
			var div = [];
			for (var j = 0; j < data[0].length; j++) {
				var newNode = document.createElement('div');
				newNode.className = 'none';
				newNode.style.top = (i*20) + 'px';
				newNode.style.left = (j*20) +'px';
				container.getElementById('game').appendChild(newNode);
				div.push(newNode);
			}
			divs.push(div);
		}
	}
	//刷新div
	var refreshDiv = function(data,divs){
		for (var i = 0; i < data.length; i++) {
			for (var j = 0; j < data[0].length; j++) {
				if(data[i][j]==0){
					divs[i][j].className = 'none';
				}else if (gameData[i][j]==1) {
					divs[i][j].className = 'done';
				}else if (gameData[i][j]==2) {
					divs[i][j].className = 'current';
				}
			}
		}
	}
}