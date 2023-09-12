/**
 * 题目0202-去除多余空格
 * https://wiki.amoscloud.com/zh/ProgramingPractice/NowCoder/Adecco/Topic0202
 * 
 * 相关标签: 字符串
 * 
 * 题目描述
 * 去除文本多余空格，但不去除配对单引号之间的多余空格。
 * 给出关键词的起始和结束下标，去除多余空格后刷新关键词的起始和结束下标。
 * 
 * 条件约束：
 * 1. 不考虑关键词起始和结束位置为空格的场景；
 * 2. 单词的的开始和结束下标保证涵盖一个完整的单词，即一个坐标对开始和结束下标之间不会有多余的空格；
 * 3. 如果有单引号，则用例保证单引号成对出现；
 * 4. 关键词可能会重复；
 * 5. 文本字符长度length取值范围：[0, 100000];
 * 
 * 示例一
 * 输入：
 * Life is painting a  picture, not doing 'a  sum'.
 * 8 15,20 26,43 45
 * 输出：
 * Life is painting a picture, not doing 'a  sum'.
 * [8, 15][19, 25][42, 44]
 * 说明： a和picture中间多余的空格进行删除
 * 
 * 示例二
 * 输入：
 * Life is painting a picture, not doing 'a  sum'.
 * 8 15,19 25,42 44
 * 输出：
 * Life is painting a picture, not doing 'a  sum'.
 * [8, 15][19, 25][42, 44]
 * 说明：a和sum之间有多余的空格，但是因为有成对单引号，不去除多余空格
 * */

function removeExtraSpaces(line) {
    const lines = line.split('/n');
    let text = lines[0]
    // 将关键词的起始和结束下标解析为数组
    const keywordRanges = lines[1].split(',').map(pos => {
        const [start, end] = pos.split(' ').map(Number);
        return [start, end];
    });
    console.log('text---', text)
    console.log('keywordRanges---', keywordRanges)

    // 创建一个辅助函数来删除多余空格
    function removeSpacesInText(start, end) {
      let newText = '';
      let insideQuotes = false; // 用于跟踪是否在单引号内

      for (let i = start; i <= end; i++) {
        const char = text[i];

        if (char === "'") {
          // 切换是否在单引号内的状态
          insideQuotes = !insideQuotes;
          newText += char;
        } else if (char === ' ' && !insideQuotes) {
          // 如果不在单引号内，跳过多余的空格
          while (i + 1 <= end && text[i + 1] === ' ') {
            i++;
          }
          newText += ' ';
        } else {
          newText += char;
        }
      }

      return newText;
    }

    // 对每个关键词的范围应用删除多余空格的函数
    let updatedKeywordRanges = keywordRanges.map(([start, end]) => {
      const updatedText = removeSpacesInText(start, end);
      return [updatedText, updatedText.length ? [start, start + updatedText.length - 1] : []];
    });
    console.log('updatedKeywordRanges',updatedKeywordRanges)

    // 更新文本并输出结果
    let newText = text;
    updatedKeywordRanges.forEach(([updatedText, positions]) => {
        console.log('positions--',positions)
      let positions1 = positions.forEach(([start, end]) => {
    //     // newText = newText.substring(0, start) + updatedText + newText.substring(end + 1);
      });
    });

    console.log('newText--', newText)
    // return [newText, updatedKeywordRanges.map(([_, positions]) => positions)];
}

//   // 测试示例一
//   const text1 = "Life is painting a  picture, not doing 'a  sum'.";
//   const keywordPositions1 = ["8 15", "20 26", "43 45"];
//   const [resultText1, updatedPositions1] = removeExtraSpaces(text1, keywordPositions1);
//   console.log(resultText1);
//   console.log(updatedPositions1);

//   // 测试示例二
//   const text2 = "Life is painting a picture, not doing 'a  sum'.";
//   const keywordPositions2 = ["8 15", "19 25", "42 44"];
//   const [resultText2, updatedPositions2] = removeExtraSpaces(text2, keywordPositions2);
//   console.log(resultText2);
//   console.log(updatedPositions2);


// function removeExtraSpaces(line) {
//     const lines = line.split('/n');
//     let strArr = lines[0].split(" ")
//     // let keysIndex = lines[1].split(',').map(item=>item.split(' ').map(Number))
//     let keysIndex = lines[1].split(/,| /).map(Number)
//     console.log('strArr---',strArr)
//     console.log('keysIndex---',keysIndex)

//     let newStrArr = []
//     let isJump = true
//     let isJumpNum = 0

//     let strIndex = 0
//     let keyIndex = 0
//     for(let i = 0; i < strArr.length;i++){
//         // strIndex = strIndex + strArr[i].length + 1
//         // console.log('strIndex,strArr[i]',strIndex,strArr[i])
//         if(strArr[i].includes("'")) {
//             isJump = false
//             isJumpNum+=1
//             if(isJumpNum == 2) {
//                 isJump = true
//                 isJumpNum = 0
//             }
//         }
//         if(strArr[i] == "" && isJump) {
//             continue
//         } else {
//             newStrArr.push(strArr[i])
//         }
//     }
//     console.log('newStrArr---',newStrArr.join(" "))
// }

module.exports = removeExtraSpaces