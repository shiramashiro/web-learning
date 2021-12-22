$(function () {
    // 方法接收一个参数，类型是一个字符串。在第36行有调用，调用时传递的参数为第32~33行。
    function parseLyric(text) {
        // 每一项歌词之间由“\n”分割（具体查看第32~33行，歌词书写的格式），以\n分割每一项歌词，得到一个数组。
        let lyricArr = text.split('\n');
        let result = [];
        for (i = 0; i < lyricArr.length; i++) {
            // 得到当前歌词中的时间，也就是[00:00.00]，是一个字符串。
            let lyricTime = lyricArr[i].match(/\[\d{2}:\d{2}((\.|\:)\d{2})\]/g);
            // 去掉 if ，貌似没用，请你测试，如果有用，请改回来。
            // 比如：[00:00.52]想你知道-余奥成，lyricTime 是 [00:00.52]，那么以 lyricTime 来分割歌词，得到“想你知道-余奥成”部分。
            // 注意：因为 lyricTime 是字符串的前面，而又以它来分割字符串，所以，会得到长度为2的数组，但是第一个元素是空字符串，并无实际意义。
            let lineLyric = lyricArr[i].split(lyricTime);
            // 因为第一个是null，所以要避免这个情况。
            if (lyricTime != null) {
                // 由于 lyricTime 分割出来之后是一个数组，又因为第一个元素是时间，我们需要把[00:00.52]形式的时间换算成秒数。
                // lyricTime[0].indexOf(']')，查询[00:00.52]中，最后一个]出现的索引值。
                //  lyricTime[0].substring(1, lyricTime[0].indexOf(']'))，就是分割把00:00.52从中括号里面抽取出来，然后再把00:00.52分割开来，以:来分割。
                let time = lyricTime[0].substring(1, lyricTime[0].indexOf(']')).split(':');
                // 最后的到一个秒数，然后再把秒数计算成分秒。
                result.push({
                    time: (parseInt(time[0]) * 60 + parseFloat(time[1])).toFixed(4),
                    content: lineLyric[1]
                });
            }
        }
        return result;
    }
    // 这里请按照格式放入相应歌词--开始
    // 格式可能看着很复杂,其实是根据lrc歌词文件换句前加入\n 换行符,然后删除多余空行.即可!
    let text =
        '[ar:zoneJay][ti:想你知道]\n[00:00.52]想你知道-余奥成\n[00:03.06]词作：ZoneJay/余奥成ACE\n[00:04.33]曲作：ZoneJay\n[00:05.69]编曲：曾吴秋杰@深声文化\n[00:07.13]出品：网易飓风工作室\n[00:08.53]\n[00:13.04]脚步多轻盈 等雨过天晴 \n[00:15.31]脸上的表情不需要再次说明\n[00:18.18]我擅长倾听 你心里的声音\n[00:21.10]浪漫是我为你注入的基因\n[00:24.20]就像是一场梦 呼吸随着风\n[00:27.00]润物无声的温柔水到渠成\n[00:29.84]有你才完整 牵手过余生\n[00:32.44]每时每刻都是永恒\n[00:34.26] \n[00:35.82]I Wish you know\n[00:38.69]想跟你吹吹海风\n[00:41.25]I Wish you know\n[00:44.32]想为你点一盏灯\n[00:46.98]I Wish you know\n[00:49.98]开始崭新的旅程\n[00:52.83]I Wish you know\n[00:56.34] \n[00:57.83]其实炙热的爱 不需要回声\n[01:00.75]你像一阵清风安抚我的伤痕\n[01:03.70]Like dream we are same 爱你是天生\n[01:06.32]you know me I know you 我知道你的心声\n[01:09.17]你是我执迷不悟的爱 you in my life\n[01:12.04]我只因为你而感到存在I feel so right\n[01:14.94]或许是命运的安排 我看得出来\n[01:17.64]你是我最美的意外 有点小小期待\n[01:21.64]I Wish you know\n[01:23.92]想跟你吹吹海风\n[01:27.29]I Wish you know\n[01:29.49]想为你点一盏灯\n[01:32.36]I Wish you know\n[01:35.15]开始崭新的旅程\n[01:37.93]I Wish you know\n[01:40.68] \n[01:43.00]你的温柔半两让我从容一下\n[01:45.87]是我心之所动当爱已发生\n[01:48.88]每字每句都是对你吐露心声\n[01:51.64]无论时光怎样变迁你都在我的心中\n[01:53.93] \n[01:55.05]I Wish you know\n[03:01.24]如情浓有点泪流\n[01:57.81]想跟你吹吹海风\n[02:00.62]I Wish you know\n[02:03.44]想为你点一盏灯\n[02:06.02]I Wish you know\n[02:09.00]开始崭新的旅程\n[02:11.76]I Wish you know\n[02:15.75] \n[02:17.02]远处的风铃 感觉特别的动听\n[02:19.60]未来的憧憬 习惯有你的声音\n[02:22.41]夜晚的屋顶 把你捧在我手心\n[02:25.21]消失的光影 梦里我陪你看清\n[02:27.36] \n[02:28.91]I Wish you know\n[02:31.69]想跟你吹吹海风\n[02:34.51]I Wish you know\n[02:37.11]想为你点一盏灯\n[02:39.53]\n[02:40.10]编曲：曾吴秋杰@深声文化\n[02:40.61]混音：曾吴秋杰@深声文化\n[02:41.14]统筹：李程程/颜朝涔\n[02:41.72]监制：王解/黄雨薇\n[02:42.26]企划：丁柏昕\n[02:42.87]出品人：谢奇笛\n[02:43.45]本歌曲来自〖飓风计划〗';
    // 这里请按照格式放入相应歌词--结束
    let result = parseLyric(text);
    let audio = document.querySelector('audio');
    // 把生成的数据显示到界面上去
    let $ul = $('<ul></ul>');
    for (let i = 0; i < result.length; i++) {
        let $li = $('<li></li>').text(result[i].content);
        $ul.append($li);
    }
    $('.bg').append($ul);
    let lineNo = 0; // 当前行歌词
    let preLine = 1; // 当播放1行后开始滚动歌词
    let lineHeight = -52; // 每次滚动的距离
    // 滚动播放 歌词高亮  增加类名active
    function highLight() {
        let $li = $('li');
        $li.eq(lineNo).addClass('active').siblings().removeClass('active');
        if (lineNo > preLine) {
            $ul.stop(true, true).animate({ top: (lineNo - preLine) * lineHeight });
        }
    }
    highLight();
    // 播放的时候不断渲染
    audio.addEventListener('timeupdate', function () {
        if (lineNo == result.length) return;
        if ($('li').eq(0).hasClass('active')) {
            $('ul').css('top', '0');
        }
        lineNo = getLineNo(audio.currentTime);
        highLight();
        lineNo++;
    });
    // 当快进或者倒退的时候，找到最近的后面那个result[i].time
    function getLineNo(currentTime) {
        if (currentTime >= parseFloat(result[lineNo].time)) {
            // 快进
            for (let i = result.length - 1; i >= lineNo; i--) {
                if (currentTime >= parseFloat(result[i].time)) {
                    return i;
                }
            }
        } else {
            // 后退
            for (let i = 0; i <= lineNo; i++) {
                if (currentTime <= parseFloat(result[i].time)) {
                    return i - 1;
                }
            }
        }
    }
    //播放结束自动回到开头
    audio.addEventListener('ended', function () {
        lineNo = 0;
        highLight();
        audio.play();
        $('ul').css('top', '0');
    });
});
