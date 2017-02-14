/**
 * Created by xindo on 2017/2/9.
 */
function getEmailHtml(data,mbti_result){
    //样式
    var styleCode='<style type="text/css">table{border-collapse:collapse;border:none;}td{border:solid #3e3e3e 1px;padding:5px 15px;}</style>';

    //数组存放各个字母的统计
    var score=[
        {key:"I",count:0},
        {key:"S",count:0},
        {key:"T",count:0},
        {key:"P",count:0},
        {key:"E",count:0},
        {key:"N",count:0},
        {key:"F",count:0},
        {key:"J",count:0}
    ];

    //把各题原始答案输出html表格，并统计好各字母数量
    var originalAnswerHtml='<table>';
    for(var i=1;i<=31;i++){
        for(var k=0;k<8;k++){
            if(score[k].key==data['q'+i]){
                score[k].count++;
            }
        }
        if(i%7==1){
            originalAnswerHtml+='<tr>';
            for(var j=i;j<=i+6 && j<=31;j++){
                originalAnswerHtml=originalAnswerHtml+'<td>'+j+" </td>";
            }
            originalAnswerHtml+='</tr><tr>';
        }
        originalAnswerHtml+='<td>'+data['q'+i]+'</td>'
        if(i%7==0){
            originalAnswerHtml+='</tr>';
        }
    }
    originalAnswerHtml+='</table>';

    //进行排序并生成统计后的表格html
    score.sort(function(a,b){
        return a.count<b.count;
    });

    var countedAnswerHtml='<table><tr>';
    for(var i=0;i<8;i++){
        countedAnswerHtml=countedAnswerHtml+'<td>'+score[i].key+' </td>';
    }
    countedAnswerHtml+='</tr><tr>';
    for(var i=0;i<8;i++){
        countedAnswerHtml=countedAnswerHtml+'<td>'+score[i].count+' </td>';
    }
    countedAnswerHtml+='</tr></table>';

    //取出得分最高的四个字母，进行结果匹配 ISTPENFJ
    var fourStr='';
    var matcherStr='';
    for(var i=0;i<4;i++){
        fourStr+=score[i].key;
    }
    for(var i=0;i<8;i++){
        var patternStr='ISTPENFJ';
        if(fourStr.indexOf(patternStr.substring(i,i+1))!=-1){
            matcherStr+='1';
        }else{
            matcherStr+='0';
        }
    }
    var mbti;
    var mbtiHtml='';
    for(var i=0;i<mbti_result.length;i++){
        if(mbti_result[i].pattern==matcherStr){
            mbti=mbti_result[i];
            break;
        }
    }
    if(mbti==null){
        mbtiHtml='系统没有找到匹配的测试结果！请手动尝试。';
    }
    else{
        mbtiHtml='<h4>'+mbti.name+' 型</h4>' +
            '<p><b>【描述】</b></p><p>'+mbti.description+'</p>' +
            '<p><b>【适合职业】</b></p><p>'+mbti.jobs+'</p>' +
            '<br/><br/><b>系统自动匹配结果仅供参考，请根据作答统计结果检查是否遗漏或错误。</b>';
    }





    var html=styleCode+'<br/><h2>MBTI测试结果</h2><br/><hr/><br/><h3>基本信息</h3><table>' +
        '<tr><td>姓名</td><td>' +data.name+'</td></tr>'+
        '<tr><td>学校</td><td>' +data.school+'</td></tr>'+
        '<tr><td>生日</td><td>' +data.birthday_year+'年 '+data.birthday_month+'月 '+data.birthday_day+'日 '+'</td></tr>'+
        '<tr><td>星座</td><td>' +data.zodiac+'</td></tr>'+
        '<tr><td>提交时间</td><td>' +new Date().toLocaleString()+'</td></tr>'+
        '</table><br/><hr/><br/><h3>测试作答</h3>' +originalAnswerHtml+
        '<br/><h3>作答统计</h3>' +countedAnswerHtml+
        '<br/><hr/><br/><h3>结果分析</h3>' +mbtiHtml+
        '<br/><br/><br/><hr/><br/><br/><p>&copy;中美加国际</p>';

    return html;
}

exports.getEmailHtml=getEmailHtml;