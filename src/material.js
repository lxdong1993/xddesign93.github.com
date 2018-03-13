/**
 * @file material.js
 */
var materials = {
    plane: {
        up: '平面',
        down: '&PLANE',
        tabs: {
            left: {
                name: '北京汽车',
                values: [
                    '八一建军节',
                    '2.0大都之美',
                    '三周年海报',
                    '报告封面',
                    '端午节',
                    '北汽幻速S7试驾会',
                    '其他综合'
                ],
                pics: ['plane1.png', 'plane2.png', 'plane3.png', 'plane4.png', 'plane5.png', 'plane6.png', 'plane7.png']
            },
            right: {
                name: '其他',
                values: ['京东伊利国货奶粉节', '梧桐人家', '华人运通'],
                pics: ['plane8.png', 'plane9.png', 'plane10.png']
            }
        }
    },
    web: {
        up: '网页',
        down: '&WEB',
        tabs: {
            left: {
                name: '官网',
                values: ['丰田中国', '蒙牛瑞哺恩', '讴歌', 'JTB中国'],
                pics: ['web1.png', 'web2.png', 'web3.png', 'web4.png']
            },
            right: {
                name: '活动站',
                values: ['讴歌安全', '佳能PRO-500'],
                pics: ['web5.png', 'web6.png']
            }
        }
    },
    c4d: {
        up: '三维',
        down: '&C4D',
        tabs: {
            left: {
                name: '联系稿',
                values: ['郎知圣诞节', '金属字', '卡通娃娃', '摩托车'],
                pics: ['c4d1.png', 'c4d2.png', 'c4d3.png', 'c4d4.png']
            },
            right: {}
        }
    },
    art: {
        up: '艺术',
        down: '&ART',
        tabs: {
            left: {
                name: '23度设计工作室',
                values: ['四季海报', '地理角度'],
                pics: ['art1.png', 'art2.png']
            },
            right: {
                name: '郎知',
                values: ['元宵节'],
                pics: ['art3.png']
            }
        }
    },
    ui: {
        up: '移动',
        down: '&UI',
        tabs: {
            left: {
                name: 'H5',
                values: ['美的空调', '阿拉善SEE', '红牛骑兵', '佳能问卷'],
                pics: ['ui1.png', 'ui2.png', 'ui3.png', 'ui4.png']
            },
            right: {
                name: 'APP',
                values: ['胎教盒子', '星座概念'],
                pics: ['ui5.png']
            }
        }
    }
};
