/*
* @Author: 15985_000
* @Date:   2018-01-19 11:17:36
* @Last Modified by:   15985_000
* @Last Modified time: 2018-01-20 15:37:08
*/
var weather;
var city;
// 请求太原天气情况
$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=太原",
	dataType:"jsonp",
	type:"get",
	success:function(obj){
		weather=obj.data.weather;
		// console.log(weather);
	}
})

$.ajax({
    url:"https://www.toutiao.com/stream/widget/local_weather/city/",
    dataType:"jsonp",
    type:"get",
    success:function(obj){
        city=obj.data;

    }

})
// 渲染数据
function update(){
	var cityname=document.getElementsByClassName("header")[0];
	cityname.innerHTML=weather.city_name;
	//渲染当前温度
	var current_temperature=document.getElementsByClassName("title1")[0];
	current_temperature.innerHTML=weather.current_temperature+"°"; 
	// 获取当前天气状况
	var current_condition=document.getElementsByClassName("title2")[0];
	current_condition.innerHTML=weather.current_condition;
	// 渲染今天最高温
	var dat_high_temperature=document.getElementById("dat_high_temperature");
	dat_high_temperature.innerHTML=weather.dat_high_temperature;
	//渲染最低温
	var dat_low_temperature=document.getElementById("dat_low_temperature");
	dat_low_temperature.innerHTML=weather.dat_low_temperature;
	//渲染当天天气
    var dat_condition=document.getElementById("dat_condition");
	dat_condition.innerHTML=weather.dat_condition;
	// 渲染icon图片
	var dat_weather_icon_id=document.getElementById("dat_weather_icon_id");
	dat_weather_icon_id.style=`background-image:url(img/${weather.dat_weather_icon_id }.png);`;
	//渲染明天icon图片
	var tomorrow_weather_icon_id=document.getElementById("tomorrow_weather_icon_id");
	tomorrow_weather_icon_id.style=`background-image:url(img/${weather.tomorrow_weather_icon_id }.png);`;
	// 渲染明天最高温
    var tomorrow_high_temperature=document.getElementById("tomorrow_high_temperature");
	tomorrow_high_temperature.innerHTML=weather.tomorrow_high_temperature;
	//渲染明天最低温度
	var tomorrow_low_temperature=document.getElementById("tomorrow_low_temperature");
	tomorrow_low_temperature.innerHTML=weather.tomorrow_low_temperature;
    //
    for(var i in weather.hourly_forecast){
    	// 创建父元素
    	var now=document.createElement("div");
    	// 给父元素div加样式
    	now.className="now";
    	// 获取now的父元素
    	var nowp=document.getElementById("now");
    	// 把now插入到父元素
    	nowp.appendChild(now);

        var now_time=document.createElement("h2");
        now_time.className="now_time";
        now_time.innerHTML=weather.hourly_forecast[i].hour+":00";
        now.appendChild(now_time);
        
        var now_icon=document.createElement("div");
        now_icon.className="now_icon";
        now_icon.style=`background-image:url(img/${weather.hourly_forecast[i].weather_icon_id}.png);`;
        now.appendChild(now_icon);

        var now_temperature=document.createElement("h3");
        now_temperature.className="now_time";
        now_temperature.innerHTML=weather.hourly_forecast[i].temperature+"°";
        now.appendChild(now_temperature);

    } 
    for(var j in weather.forecast_list){
    	var recent=document.createElement("div");
    	// 给父元素div加样式
    	recent.className="recent";
    	// 获取recent的父元素
    	var recentp=document.getElementById("recent");
    	// 把recent插入到父元素
    	recentp.appendChild(recent);
        
        var recent_time=document.createElement("div");
        recent_time.className="recent_time";
        recent_time.innerHTML=weather.forecast_list[j].date.substring(5,7)+"/"+weather.forecast_list[j].date.substring(8);
        recent.appendChild(recent_time);
        // var month=document.createElement("span");
        // var day=document.createElement("span");
        // recent_time.className="recent_time";
        // month.className="month";
        // day.className="day";
        // console.log(weather.innerHTML=weather.forecast_list[j].date.substring(5,7));
        // console.log(weather.innerHTML=weather.forecast_list[j].date.substring(8));
       


        var recent_wea=document.createElement("h2");
        recent_wea.className="recent_wea";
        recent_wea.innerHTML=weather.forecast_list[j].condition;
        recent.appendChild(recent_wea);
      

        var recent_pic=document.createElement("div");
        recent_pic.className="recent_pic";
        recent_pic.style=`background-image:url(img/${weather.forecast_list[j].weather_icon_id}.png);`;
        recent.appendChild(recent_pic);


        var recent_high=document.createElement("h3");
        recent_high.className="recent_high";
        recent_high.innerHTML=weather.forecast_list[j].high_temperature+"°";
        recent.appendChild(recent_high);


        var recent_low=document.createElement("h4");
        recent_low.className="recent_low";
        recent_low.innerHTML=weather.forecast_list[j].low_temperature+"°";
        recent.appendChild(recent_low);


        var recent_wind=document.createElement("h5");
        recent_wind.className="recent_wind";
        recent_wind.innerHTML=weather.forecast_list[j].wind_direction;
        recent.appendChild(recent_wind);


        var recent_level=document.createElement("h6");
        recent_level.className="recent_level";
        recent_level.innerHTML=weather.forecast_list[j].wind_level+"级";
        recent.appendChild(recent_level);
    }
    var header=document.getElementsByClassName("header")[0];
    var city_box= document.getElementsByClassName("city_box")[0];
    
    header.onclick=function(){
    $(".text").val("");
    $(".button").html("取消");
    city_box.style="disply.block";
    }
    //渲染城市
    for(var k in city){


        var cityp=document.getElementById("city");

        var title=document.createElement("h1");
        title.className="title";
        title.innerHTML=k;
        cityp.appendChild(title);

        var con=document.createElement("div")
        con.className="con";

        for(var y in city[k]){

            //创建二级城市渲染
            //定义erji为div格式
            var erji=document.createElement("div");
            //erji类名为son
            erji.className="son";
            //
            erji.innerHTML=y;
            //标注con的下级为erji
            con.appendChild(erji);
        }
        cityp.appendChild(con);

    }
}
//渲染城市
function AJAX(str){
    $.ajax({
        url:`https://www.toutiao.com/stream/widget/local_weather/data/?city=${str}`,
        dataType:"jsonp",
        type:"get",
        success:function(obj){
        weather=obj.data.weather;
        update();
        // console.log(weather);
            $(".city_box").css({"display":"none"});
        }
    })
}

window.onload=function(){
    update();
    $(".son").on("click",function(){
        var cityh=this.innerHTML;
        AJAX(cityh);
    })


    //当input获取焦点是botton变确认
    //focus获取焦点
    $(".text").on("focus",function(){
        // html获取或设置改变的内容
        $(".button").html("确认");
    })
    //操作按钮
    var button=document.getElementsByClassName("button")[0];
    // console.log(button);
   // 获取button中间的内容
    button.onclick=function(){
        var btn=this.innerHTML;
        // console.log(btn)；
        if(btn=="取消"){
            // console.log(1);
           let citys=document.getElementsByClassName("city_box")[0];
           citys.style="display:none;";
         }
         else{
            var str=document.getElementsByClassName("text")[0].value;
            // console.log(str);
            for(var i in city){
                for(var j in city[i]){
                    if(str==j){
                        AJAX(str);
                        return;
                    }
                }
            }
            alert("没有该城市气象信息");       
        }
    }
}













