function tv(s) {
	str = str + s;
	t.value = str;
}

function tv3(s) {
	str3 = str3 + s;
	t3.value = str3;
}

function hr() {
	str = str + "\n――――――――――――――――――――――――――――――――――――――――――――――――\n";
	t.value = str;
}

function br() {
	str = str + "\n";
	t.value = str;
}

function r(n) {
	var random = Math.floor(Math.random() * n) + 1;
	return random;
}

function ai(name, hp, attack, exp, gold) {
	this.name = name;
	this.hp = hp;
	this.max_hp = hp;
	this.attack = attack;
	this.exp = exp;
	this.gold = gold;
	this.info = function () {
		tv("[" + this.name + "(" + this.hp + "/" + this.max_hp + ")]");
	}
}

function player() {
	this.name;
	this.hp;
	this.max_hp;
	this.attack;
	this.exp;
	this.next_exp;
	this.gold;
	this.info = function () {
		tv3("[" + this.name + "(" + this.hp + "/" + this.max_hp + ")]" + "(exp: " + this.exp + "/" + this.next_exp + ")"
			+ "🍁:" + this.gold);
	}
}


var npc
var hero;
var t;
var t2;
var t3;

var str = "";
var str2 = "";
var str3 = "";

window.onload = function(){
	t = document.getElementById("a");
	t2 = document.getElementById("b");
	t3 = document.getElementById("c");
	npc = new ai("상대 미라이돈",315,135,100,1000);

	hero = new player();
	hero.name = "🥪미라이돈";
	hero.hp = 315;
	hero.max_hp = 315;
	hero.attack = 135;
	hero.exp= 0 ;
	hero.next_exp = 15000;
	hero.gold=0;

	hero.info();
	npc.info();

	hr();
	br();
	tv("투로 AI가 승부를 걸어왔다!");
	br();
	tv("낙원 방어 프로그램 기동");
	br();
	tv("투로 AI는 더 싸울 생각이 없다!");
	br();
	tv("낙원 방어 프로그램이 승부를 걸어왔다!");
	br();

	while(true){
		battle();
		if(hero.hp <= 0 || npc.hp <= 0){
			break;
		}
	}
	br()
	tv("투로 AI와의 승부에서 이겼다!");
	br();
	tv(hero.name+"은 "+npc.name+"로부터 많은양의 "+npc.exp+"경험치를 얻었다");
	br();
	tv("푸름은 상금으로 "+npc.gold+"원을 얻었다");
	hero.exp = hero.exp + npc.exp;
	hero.gold = hero.gold + npc.gold;

	hr();hr();
	hero.info();
}

var hero_attack;
var npc_attack;

function battle(){
	hero_attack = r(hero.attack);
	npc_attack = r(npc.attack);
	hr();
	tv("🥪미라이돈의 테라버스트 "+hero_attack);
	hr();
	tv("상대 미라이돈의 파워젬 "+npc_attack);
	hr();

	hero.hp = hero.hp - npc_attack;
	npc.hp = npc.hp - hero_attack;
	br();
	hero.info();
	npc.info();
	br();
}