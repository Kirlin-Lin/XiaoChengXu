const express = require('express')
// var bodyParser = require('body-parser')
const app = new express()

//app.use(bodyParser.urlencoded({ extended: false }))
//app.use(bodyParser.json())



app.get('/list', (req, res) => {
    var data = [{
            date: "Sep 18 2016",
            title: "正是虾肥蟹壮时",
            imgSrc: "/images/post/crab.png",
            avatar: "/images/avatar/1.png",
            content: "菊黄蟹正肥，品尝秋之味。徐志摩把,“看初花的荻芦”和“到楼外楼吃蟹”,并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“螯封嫩玉双双满，",
            reading: "112",
            collection: "96",
            headImgSrc: "/images/post/crab.png",
            author: "林白衣",
            dateTime: "24小时前",
            detail: "菊黄蟹正肥，品尝秋之味。徐志摩把“看初花的荻芦”和“到楼外楼吃蟹”并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“螯封嫩玉双双满，壳凸红脂块块香”；在《世说新语》里，晋毕卓更是感叹“右手持酒杯，左手持蟹螯，拍浮酒船中，便足了一生矣。”漫漫人生长路，美食与爱岂可辜负？于是作为一个吃货，突然也很想回味一下属于我的味蕾记忆。记忆中的秋蟹，是家人的味道，弥漫着浓浓的亲情。\n\n是谁来自山川湖海，却囿于昼夜，厨房与爱？ 是母亲，深思熟虑，聪明耐心。吃蟹前，总会拿出几件工具，煞有介事而乐此不疲。告诉我们螃蟹至寒，需要佐以姜茶以祛寒，在配备的米醋小碟里，亦添入姜丝与紫苏，前者驱寒后者增香。泡好菊花茶，岁月静好，我们静等。",
            postId: 0,
            music: {
                url: "http://ws.stream.qqmusic.qq.com/C100003507bR0gDKBm.m4a?fromtag=38",
                title: "夜夜夜夜-齐秦",
                coverImg: "http://y.gtimg.cn/music/photo_new/T002R150x150M000001TEc6V0kjpVC.jpg?max_age=2592000"
            }
        },
        {
            title: "比利·林恩的中场故事",
            content: "一 “李安是一位绝不会重复自己的导演，本片将极富原创性李安众所瞩目的新片《比利林恩漫长的中场休息》，正式更名《半场无战事》。",
            imgSrc: "/images/post/bl.png",
            reading: 62,
            detail: "一 “李安是一位绝不会重复自己的导演，本片将极富原创性”李安众所瞩目的新片《比利林恩漫长的中场休息》，正式更名《半场无战事》。预告片首次曝光后，被视作是明年奥斯卡种子选手。该片根据同名畅销书改编。原著小说荣获美国国家图书奖。也被BBC评为21世纪最伟大的12本英文小说之一。影片讲述一位19岁德州男孩的比利·林恩入伍参加伊战，在一次交火中他大难不死，意外与战友成为大众的关注焦点，并被塑造成英雄。之后他们返回国内，在橄榄球赛中场休息时授勋。这名战争英雄却面临前所未有的心灵煎熬……李安为什么选中这部电影来拍？因为李安想要挑战前所未有的技术难题：以120帧每秒的速度、4K、3D技术全面结合，来掀起一场电影视觉革命。什么意思？所谓“电影是24格每秒的谎言”，其中的24格，就是帧数。",
            collection: 92,
            dateTime: "24小时前",
            headImgSrc: "/images/post/bl.png",
            author: "迷的城",
            date: "Nov 20 2016",
            avatar: "/images/avatar/1.png",
            postId: 1,
            music: {
                url: "http://ws.stream.qqmusic.qq.com/C100003GdCmG4NkEOR.m4a?fromtag=38",
                title: "鬼迷心窍-李宗盛",
                coverImg: "http://y.gtimg.cn/music/photo_new/T002R150x150M000002xOmp62kqSic.jpg?max_age=2592000"
            }
        },
        {
            //按住alt + shift + F 可以格式化代码样式
            title: "当我们在谈论经济学时，我们在谈论什么?",
            content: "引言在我跟学生课后交流时，以及我在知乎上阅读有关“经济”问题的论题时，经常会遇到这样的情况：...",
            detail: "1 引言\n\n在我跟学生课后交流时，以及我在知乎上阅读有关“经济”问题的论题时，经常会遇到这样的情况：有些人套用“经济理论“的知识去解释现实中发生的经济事件，结果发现很多事情讲不通，或者发现”理论告诉我们的“与现实发生的是相反的。也有学生经常跟我说：经济学有什么用？为了说明这个，我经常从两个方面来进行解释，尝试用我个人所擅长的解决问题的视角和他们能够听懂的方法来说明经济学是什么，它的作用边界在哪里：\r\n\n2 ”简笔素描“与”油画肖像“我们给人画肖像画，可以用简笔素描，也可以用油画肖像。油画肖像可以在最大程度上保存了人物的各方面的细节和特点，而简笔素描则忽略了很多细节。尽管简笔素描忽略了人物的许多细节，但我们仍旧能够很容易的认出画中的人物是谁。为什么？因为这种方法保留了人物最显著的特征，以至于我们可以忽略其次要特征而对人物做出判定。\n\n2.1 ”简笔素描“对于绝大多数的非经济学专业大众而言（经济学相关专业硕士学历以上），人们所接触到的经济学都是初级微观经济学。所谓的初级微观经济学，对于经济问题的”画法“就是一种”简笔素描“。比如初级微观经济学教材中广为使用的这种一元一次需求函数：y=bx+a，需求量的唯一变量是产品价格。但仅凭直觉我们就可以断言，现实中影响需求量的因素绝不止价格这一种，因此我们可以认为这个模型对经济问题的描述是失真的。然而但这种失真却是必要的和有意义的，其意义在与它利于揭示价格对于需求的影响，而不在于否定影响需求的其他因素——",
            imgSrc: "/images/post/sls.jpg",
            headImgSrc: "/images/post/sls.jpg",
            reading: 62,
            collection: 92,
            author: "知乎",
            date: "Nov 12 2016",
            dateTime: "三天前",
            avatar: "/images/avatar/3.png",
            postId: 2,
            music: {
                url: "http://ws.stream.qqmusic.qq.com/C100004HLusI2lLjZy.m4a?fromtag=38",
                title: "女儿情-万晓利",
                coverImg: "http://y.gtimg.cn/music/photo_new/T002R150x150M000004Wv5BO30pPc0.jpg?max_age=2592000"
            }
        },
        {
            title: "微信·小程序开发工具安装指南",
            content: "这两天闲来无事，也安装了 “微信折叠”的开发工具来玩一下。以下是一些小道消息及使用体验，过两天我会写一篇文章以开发者的角度来详细评价微信小程序",
            imgSrc: "/images/post/xiaolong.jpg",
            reading: 102,
            detail: "这两天闲来无事，也安装了 “微信折叠”的开发工具来玩一下。以下是一些小道消息及使用体验，过两天我会写一篇文章以开发者的角度来详细评价微信小程序:微信小程序不能开发游戏类、直播类功能，小程序每个人关注的上限是20个（还不确定，不过我相信这是真的，这次公布的API里并没有视频组件。微信太大，苹果要有所顾忌，但是微信也要做出相应的让步)微信目前有没有同苹果商谈好，还是个未知数，毕竟会对AppStore有一定的冲击。抛弃了大量的javascript组件后，这个生态体系变得相当的封闭，微信解释肯定是：为了更好的性能提升。那么我们拭目以待。小程序的入口是微信里的三级菜单，就是在“Tab栏发现里的游戏下面加入一个“小程序”。反正，这一栏里的购物和游戏我是从来没点进去过的。以腾讯的尿性，小程序同服务号一样，其关系链及重要功能的开放程度会因“人”而异。对，优质的接口只会开放给腾讯的儿子们（滴滴呀、京东呀）",
            collection: 92,
            dateTime: "24小时前",
            headImgSrc: "/images/post/xiaolong.jpg",
            author: "猫是猫的猫",
            date: "Nov 20 2016",
            avatar: "/images/avatar/5.png",
            postId: 3,
            music: {
                url: "http://ws.stream.qqmusic.qq.com/C100002mWVx72p8Ugp.m4a?fromtag=38",
                title: "恋恋风尘-老狼",
                coverImg: "http://y.gtimg.cn/music/photo_new/T002R150x150M000001VaXQX1Z1Imq.jpg?max_age=2592000",
            }
        },
        {
            title: "从视觉到触觉 这款VR手套能给你真实触感",
            content: "8月29日消息，据国外媒体VentureBeat报道，一家名为Dexta Robotics的公司最近发布了一款有望变革虚拟现实手部追踪与交互方式的新产品",
            imgSrc: "/images/post/vr.png",
            reading: 102,
            detail: "消息，据国外媒体VentureBeat报道，一家名为Dexta Robotics的公司最近发布了一款有望变革虚拟现实手部追踪与交互方式的新产品。该产品名为“Dexmo”，它是一款像手套那样戴在手上使用的未来主义外骨骼。它内置大量的元件，能够与VR体验进行交互，可帮助你感觉握在你的双手的虚拟物体。Dexmo据Dexta称，“Dexmo是一款针对你的双手的机械外骨骼。它能够捕捉你的手部运动，以及提供即时的力反馈。有了Dexmo，你可以感受到虚拟物体的大小、形状和坚硬度。你可以接触数字世界。”市面上已经有数款产品旨在处理虚拟现实中的手部交互，也有相关的产品即将要进入市场。例如，颇受欢迎的HTC Vive头盔配有一副控制器，其控制器能够使得追踪系统看到你的双手，让你可以用它们来在特定体验中与物体进行交互。今年晚些时候，Oculus将开始出货类似的手部控制产品Oculus Touch。10月，索尼也将开始出货配备两个PlayStation Move手部控制器的PS VR。Leap Motion甚至更进一步：利用传感器来追踪手指和手部的运动。",
            collection: 26,
            dateTime: "24小时前",
            headImgSrc: "/images/post/vr.png",
            author: "深白色",
            date: "Nov 20 2016",
            avatar: "/images/avatar/3.png",
            postId: 4,
            music: {
                url: "http://ws.stream.qqmusic.qq.com/C100000Zn0vS4fKKo8.m4a?fromtag=38",
                title: "沉默是金-张国荣",
                coverImg: "http://y.gtimg.cn/music/photo_new/T002R150x150M000003at0mJ2YrR2H.jpg?max_age=2592000"
            }
        },
        {
            title: "爱奇艺创维开展战略合作，合力布局开放娱乐生态",
            content: "爱奇艺和创维分别作为国内领先的在线视频品牌",
            imgSrc: "/images/iqiyi.png",
            reading: 96,
            detail: "爱奇艺和创维分别作为国内领先的在线视频品牌和家电品牌。双方一直锐意创新，为用户提供优质的服务体验和产品体验。据悉，爱奇艺与创维将展开从资本到VIP会员服务等各方面的深入合作。籍由此次合作，爱奇艺将战略投资创维旗下拥有高端互联网电视品牌的酷开公司。从下一财年开始，创维旗下互联网电视将通过银河互联网电视集成播控平台，预置VIP会员服务及相关内容。这种捆绑终端与VIP内容的全新销售模式，将大幅提升互联网电视终端用户的体验，给予用户更多优质内容的选择。",
            collection: 26,
            dateTime: "21小时前",
            headImgSrc: "/images/iqiyi.png",
            author: "深白色",
            date: "Nov 20 2016",
            avatar: "/images/avatar/5.png",
            postId: 5,
            music: {
                url: "http://ws.stream.qqmusic.qq.com/C100002I8eGJ28BI17.m4a?fromtag=38",
                title: "朋友-谭咏麟",
                coverImg: "http://y.gtimg.cn/music/photo_new/T002R150x150M000004eGsCN3SUheO.jpg?max_age=2592000"
            }
        },
    ]
    res.json({
        code: 2000,
        data: data
    })
})

// 电影页面
app.get('/movies', (req, res) => {
    var data = {

        reying: {
            title: "正在热映",
            yemianId: 2,
            count: 3,
            start: 0,
            subjects: [{
                    casts: [{
                            avatars: {
                                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p44501.jpg"
                            },
                            name: "刘若英"
                        },
                        {
                            avatars: {
                                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1452260519.76.jpg"
                            },
                            name: "井柏然"
                        },
                        {
                            avatars: {
                                large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p36798.jpg"
                            },
                            name: "周冬雨"
                        }
                    ],
                    comments_count: 642,
                    countries: [
                        "中国大陆"
                    ],
                    directors: [{
                        avatars: {
                            large: null
                        },
                        name: "刘若英"
                    }],
                    genres: [
                        "剧情",
                        "爱情"
                    ],
                    id: 326,
                    images: {
                        large: "https://bkimg.cdn.bcebos.com/pic/6a600c338744ebf8f7090369d5f9d72a6059a768?x-bce-process=image/watermark,g_7,image_d2F0ZXIvYmFpa2UxODA=,xp_5,yp_5"
                    },
                    original_title: "后来的我们",
                    rating: {
                        average: 7,
                        max: 10,
                        min: 0,
                        stars: "35"
                    },
                    reviews_count: 119,
                    summary: "这是一个爱情故事，关于一对异乡漂泊的年轻人。\n十年前，见清和小晓偶然地相识在归乡过年的火车上。两人怀揣着共同的梦想，一起在北京打拼，并开始了一段相聚相离的情感之路。\n十年后，见清和小晓在飞机上再次偶然重逢……\n命运似乎是一个轮回。在一次次的偶然下，平行线交叉，再平行，故事始终有“然后”。可后来的他们，学会如何去爱了吗？",
                    title: "后来的我们",
                    warning: "数据来源于网络整理，仅供学习，禁止他用。如有侵权请联系公众号：小楼昨夜又秋风。我将及时删除。",
                    wish_count: 26250,
                    year: 2018
                },
                {
                    casts: [{
                            avatars: {
                                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1520825133.06.jpg"
                            },
                            name: "任鹏远"
                        },
                        {
                            avatars: {
                                large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p43738.jpg"
                            },
                            name: "徐峥"
                        },
                        {
                            avatars: {
                                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p18662.jpg"
                            },
                            name: "王丽坤"
                        }
                    ],
                    comments_count: 540,
                    countries: [
                        "中国大陆"
                    ],
                    directors: [{
                        avatars: {
                            large: null
                        },
                        name: "任鹏远"
                    }],
                    genres: [
                        "剧情",
                        "悬疑",
                        "犯罪"
                    ],
                    id: 305,
                    images: {
                        large: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2518645794.jpg"
                    },
                    original_title: "幕后玩家",
                    rating: {
                        average: 6.9,
                        max: 10,
                        min: 0,
                        stars: "35"
                    },
                    reviews_count: 49,
                    summary: "坐拥数亿财产的钟小年(徐峥 饰)意外遭人绑架，不得不在一位神秘人的操控下完 成一道道令人两难的选择题。在选择的过程中，钟小年落入陷阱，不仅巨额财产被盗取、 濒临身败名裂的边缘，还将妻子魏思蒙(王丽坤 饰)牵扯进一个个险境。为了洗脱罪名， 救回爱人，钟小年在重重危机中与神秘人展开了一场关乎生死和救赎的金钱游戏…",
                    title: "幕后玩家",
                    warning: "数据来源于网络整理，仅供学习，禁止他用。如有侵权请联系公众号：小楼昨夜又秋风。我将及时删除。",
                    wish_count: 11432,
                    year: 2018
                },
                {
                    casts: [{
                            avatars: {
                                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1371547477.26.jpg"
                            },
                            name: "哈斯朝鲁"
                        },
                        {
                            avatars: {
                                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1409055274.95.jpg"
                            },
                            name: "陈伟霆"
                        },
                        {
                            avatars: {
                                large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1460438693.8.jpg"
                            },
                            name: "林允"
                        }
                    ],
                    comments_count: 508,
                    countries: [
                        "中国大陆"
                    ],
                    directors: [{
                        avatars: {
                            large: null
                        },
                        name: "哈斯朝鲁"
                    }],
                    genres: [
                        "奇幻",
                        "冒险"
                    ],
                    id: 313,
                    images: {
                        large: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2519726014.jpg"
                    },
                    original_title: "战神纪",
                    rating: {
                        average: 0,
                        max: 10,
                        min: 0,
                        stars: "00"
                    },
                    reviews_count: 62,
                    summary: "少年铁木真(陈伟霆 饰）身为部落首领之子，年幼丧父，母亲独自将他抚养成人，铁木真成人之际返回翁吉剌部落迎娶自幼定有婚约的孛尔帖（林允 饰），谁知途中却逐步陷入叔父（赵立新 饰）设置的杀戮陷阱，而青梅竹马的恋人孛尔帖也在新婚之夜被另一部落首领忽出鲁（胡军 饰）掳走，铁木真在好兄弟札木合（李光洁 饰）的支持与萨满长老的辅佐下，踏上拯救恋人和守卫草原的征途……",
                    title: "战神纪",
                    warning: "数据来源于网络整理，仅供学习，禁止他用。如有侵权请联系公众号：小楼昨夜又秋风。我将及时删除。",
                    wish_count: 5439,
                    year: 2018
                }
            ],
            total: 26
        },
        shangying: {
            title: "即将上映",
            yemianId: 3,
            count: 3,
            start: 0,
            subjects: [{
                    casts: [{
                            avatars: {
                                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p44501.jpg"
                            },
                            name: "刘若英"
                        },
                        {
                            avatars: {
                                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1452260519.76.jpg"
                            },
                            name: "井柏然"
                        },
                        {
                            avatars: {
                                large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p36798.jpg"
                            },
                            name: "周冬雨"
                        }
                    ],
                    comments_count: 642,
                    countries: [
                        "中国大陆"
                    ],
                    directors: [{
                        avatars: {
                            large: null
                        },
                        name: "刘若英"
                    }],
                    genres: [
                        "剧情",
                        "爱情"
                    ],
                    id: 326,
                    images: {
                        large: "https://bkimg.cdn.bcebos.com/pic/6a600c338744ebf8f7090369d5f9d72a6059a768?x-bce-process=image/watermark,g_7,image_d2F0ZXIvYmFpa2UxODA=,xp_5,yp_5"
                    },
                    original_title: "后来的我们",
                    rating: {
                        average: 7,
                        max: 10,
                        min: 0,
                        stars: "35"
                    },
                    reviews_count: 119,
                    summary: "这是一个爱情故事，关于一对异乡漂泊的年轻人。\n十年前，见清和小晓偶然地相识在归乡过年的火车上。两人怀揣着共同的梦想，一起在北京打拼，并开始了一段相聚相离的情感之路。\n十年后，见清和小晓在飞机上再次偶然重逢……\n命运似乎是一个轮回。在一次次的偶然下，平行线交叉，再平行，故事始终有“然后”。可后来的他们，学会如何去爱了吗？",
                    title: "后来的我们",
                    warning: "数据来源于网络整理，仅供学习，禁止他用。如有侵权请联系公众号：小楼昨夜又秋风。我将及时删除。",
                    wish_count: 26250,
                    year: 2018
                },
                {
                    casts: [{
                            avatars: {
                                large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1463987507.49.jpg"
                            },
                            name: "周英男"
                        },
                        {
                            avatars: {
                                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1494494152.36.jpg"
                            },
                            name: "文松"
                        },
                        {
                            avatars: {
                                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6UqjsvauI4Ucel_avatar_uploaded1359094991.62.jpg"
                            },
                            name: "修睿"
                        }
                    ],
                    comments_count: 15,
                    countries: [
                        "中国大陆"
                    ],
                    directors: [{
                            avatars: {
                                large: null
                            },
                            name: "陈晨"
                        },
                        {
                            avatars: {
                                large: null
                            },
                            name: "周英男"
                        }
                    ],
                    genres: [
                        "喜剧"
                    ],
                    id: 312,
                    images: {
                        large: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2519542323.jpg"
                    },
                    original_title: "尖叫直播",
                    rating: {
                        average: 0,
                        max: 10,
                        min: 0,
                        stars: "00"
                    },
                    reviews_count: 0,
                    summary: "七仙女（文松 饰）和YY（修睿 饰）领导的五人组参加了“尖叫直播”平台推出的一千万奖金任务，和上官带刀（魏冰洋 饰）带领的团队为了名利展开了激烈的争夺，通过惊险刺激的多重环节后，成为了全民追捧的“网红”，却不料落入“尖叫直播”背后操纵者晋北（姜玉铬 饰）的阴谋里。在太平洋小岛上为了躲避国际杀手的追杀，他们在荒野中四处逃窜，最终在当地土著部落的帮助下逃离回国并揭露了平台的阴谋，背后操纵者被绳之以法。 五人组经历了这一番惊心动魄的事件后，重新回到现实生活当中，明白了网络名利的虚幻只是浮云，只有脚踏实地通过自己的努力去追求梦想，才是正确的人生道路；五人重新树立了正确的价值观、人生观后，通过积极正能量的努力工作生活，获得了各自的幸福。",
                    title: "尖叫直播",
                    warning: "数据来源于网络整理，仅供学习，禁止他用。如有侵权请联系公众号：小楼昨夜又秋风。我将及时删除。",
                    wish_count: 68,
                    year: 2018
                },
                {
                    casts: [{
                            avatars: {
                                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/pVUhhcCTzVhIcel_avatar_uploaded1353924831.96.jpg"
                            },
                            name: "S·S·拉贾穆里"
                        },
                        {
                            avatars: {
                                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/pKneBVU7FdSscel_avatar_uploaded1391068830.54.jpg"
                            },
                            name: "帕拉巴斯"
                        },
                        {
                            avatars: {
                                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1437830956.04.jpg"
                            },
                            name: "拉纳·达格巴提"
                        }
                    ],
                    comments_count: 3264,
                    countries: [
                        "印度"
                    ],
                    directors: [{
                        avatars: {
                            large: null
                        },
                        name: "S·S·拉贾穆里"
                    }],
                    genres: [
                        "剧情",
                        "动作",
                        "战争",
                        "奇幻",
                        "冒险"
                    ],
                    id: 309,
                    images: {
                        large: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2452075545.jpg"
                    },
                    original_title: "巴霍巴利王2：终结 Baahubali 2: The Conclusion",
                    rating: {
                        average: 7,
                        max: 10,
                        min: 0,
                        stars: "35"
                    },
                    reviews_count: 76,
                    summary: "同蛮族的大战以摩喜施末底的胜利而告终，根据战场上的表现，希瓦伽米太后（拉姆亚·克里希南饰）选择了养子阿玛兰德拉·巴霍巴利（帕拉巴斯饰）作为王国的王储。在加冕典礼之前太后交给巴霍巴利的最后一项任务是游历王国，体察臣民的疾苦，理解'臣民的审判'。同时，太后还竭尽全力满足自己的亲子巴拉拉德夫德斯（纳拉·达古巴提饰）的各种需求，希望能够克制他的贪婪，平衡兄弟的关系。\n巴霍巴利经过一个叫昆达拉的诸侯小国时，偶遇美丽绝伦、剑术高超的提婆犀那公主（安努舒卡·谢蒂饰），立刻惊为天人，无以自拔。同行的卡塔帕将军（萨蒂亚拉吉饰）灵机一动，让巴霍巴利装成傻子去接近公主，在妙趣横生的交往中，感情在慢慢滋生。这时，希瓦伽米太后派人来到昆达拉为子提亲，遭到提婆犀那的拒绝。一个夜晚，蛮族忽然入侵昆达拉，王国命运危在旦夕，这时巴霍巴利有如天兵天将，凭借其盖世武功将敌军击退。正在此时...",
                    title: "巴霍巴利王2：终结 Baahubali 2: The Conclusion",
                    warning: "数据来源于网络整理，仅供学习，禁止他用。如有侵权请联系公众号：小楼昨夜又秋风。我将及时删除。",
                    wish_count: 21802,
                    year: 2017
                }
            ],
            total: 23
        },
        top250: {
            title: "top250",
            yemianId: 1,
            count: 3,
            start: 0,
            subjects: [{
                    casts: [{
                            avatars: {
                                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p230.jpg"
                            },
                            name: "弗兰克·德拉邦特"
                        },
                        {
                            avatars: {
                                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p17525.jpg"
                            },
                            name: "蒂姆·罗宾斯"
                        },
                        {
                            avatars: {
                                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p34642.jpg"
                            },
                            name: "摩根·弗里曼"
                        }
                    ],
                    comments_count: 222527,
                    countries: [
                        "美国"
                    ],
                    directors: [{
                        avatars: {
                            large: null
                        },
                        name: "弗兰克·德拉邦特"
                    }],
                    genres: [
                        "剧情",
                        "犯罪"
                    ],
                    id: 3,
                    images: {
                        large: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg"
                    },
                    original_title: "肖申克的救赎 The Shawshank Redemption",
                    rating: {
                        average: 9.6,
                        max: 10,
                        min: 0,
                        stars: "50"
                    },
                    reviews_count: 5794,
                    summary: "",
                    title: "肖申克的救赎 The Shawshank Redemption",
                    warning: "数据来源于网络整理，仅供学习，禁止他用。如有侵权请联系公众号：小楼昨夜又秋风。我将及时删除。",
                    wish_count: 98814,
                    year: 1994
                },
                {
                    casts: [{
                            avatars: {
                                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1451727734.81.jpg"
                            },
                            name: "陈凯歌"
                        },
                        {
                            avatars: {
                                large: "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p67.jpg"
                            },
                            name: "张国荣"
                        },
                        {
                            avatars: {
                                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p46345.jpg"
                            },
                            name: "张丰毅"
                        }
                    ],
                    comments_count: 182073,
                    countries: [
                        "中国大陆",
                        "香港"
                    ],
                    directors: [{
                        avatars: {
                            large: null
                        },
                        name: "陈凯歌"
                    }],
                    genres: [
                        "剧情",
                        "爱情",
                        "同性"
                    ],
                    id: 52,
                    images: {
                        large: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910813120.jpg"
                    },
                    original_title: "霸王别姬",
                    rating: {
                        average: 9.5,
                        max: 10,
                        min: 0,
                        stars: "50"
                    },
                    reviews_count: 5015,
                    summary: "",
                    title: "霸王别姬",
                    warning: "数据来源于网络整理，仅供学习，禁止他用。如有侵权请联系公众号：小楼昨夜又秋风。我将及时删除。",
                    wish_count: 83628,
                    year: 1993
                },
                {
                    casts: [{
                            avatars: {
                                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33301.jpg"
                            },
                            name: "吕克·贝松"
                        },
                        {
                            avatars: {
                                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p8833.jpg"
                            },
                            name: "让·雷诺"
                        },
                        {
                            avatars: {
                                large: "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p2274.jpg"
                            },
                            name: "娜塔莉·波特曼"
                        }
                    ],
                    comments_count: 203861,
                    countries: [
                        "法国"
                    ],
                    directors: [{
                        avatars: {
                            large: null
                        },
                        name: "吕克·贝松"
                    }],
                    genres: [
                        "剧情",
                        "动作",
                        "犯罪"
                    ],
                    id: 169,
                    images: {
                        large: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p511118051.jpg"
                    },
                    original_title: "这个杀手不太冷 Léon",
                    rating: {
                        average: 9.4,
                        max: 10,
                        min: 0,
                        stars: "45"
                    },
                    reviews_count: 3776,
                    summary: "",
                    title: "这个杀手不太冷 Léon",
                    warning: "数据来源于网络整理，仅供学习，禁止他用。如有侵权请联系公众号：小楼昨夜又秋风。我将及时删除。",
                    wish_count: 71203,
                    year: 1994
                }
            ],
            total: 250
        }
    }
    res.json({
        code: 2000,
        data: data
    })
})


app.post('/di', (req, res) => {
    console.log(req.body)
    res.json({
        code: 200
    })
})
app.listen(8001, '127.0.0.1')