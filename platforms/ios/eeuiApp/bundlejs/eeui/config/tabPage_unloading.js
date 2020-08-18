/**
 * Created by ksheen on 2020/08/10.
 */

export default {

    tabTitles: [
      {
        title: '卸货作业',
      },
      {
        title: '附件',
      },
    ],
    tabStyles: {
        bgColor: 'black',
        titleColor: 'rgb(255, 255, 255)',
        activeTitleColor: 'rgb(255, 255, 255)',
        activeBgColor: 'rgb(0, 0, 0)',
        isActiveTitleBold: true,
        iconWidth: 0,
        iconHeight: 0,
        width: 350,
        height: 40,
        fontSize: 24,
        hasActiveBottom: true,
        activeBottomColor: 'rgb(255, 0, 0)',
        activeBottomHeight: 3,
        activeBottomWidth: 400,
        textPaddingLeft: 0,
        textPaddingRight: 0,
        normalBottomColor: 'rgba(0,0,0,0.4)',
        normalBottomHeight: 2,
        hasRightIcon: false,
		rightOffset: 100,
    },
    // 使用 iconfont 模式的tab title配置
    tabIconFontTitles: [
      {
        title: '首页',
        codePoint: '\ue623'
      },
      {
        title: '特别推荐',
        codePoint: '\ue608'
      },
      {
        title: '消息中心',
        codePoint: '\ue752',
        badge: 5
      },
      {
        title: '我的主页',
        codePoint: '\ue601',
        dot: true
      }
    ],
    tabIconFontStyles: {
      bgColor: '#FFFFFF',
      titleColor: '#666666',
      activeTitleColor: '#3D3D3D',
      activeBgColor: '#FFFFFF',
      isActiveTitleBold: true,
      width: 160,
      height: 120,
      fontSize: 24,
      textPaddingLeft: 10,
      textPaddingRight: 10,
      iconFontSize: 50,
      iconFontColor: '#333333',
      iconFontMarginBottom: 8,
      activeIconFontColor: 'red',
      iconFontUrl: '//at.alicdn.com/t/font_501019_mauqv15evc1pp66r.ttf'
    }
  }