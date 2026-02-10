//commonConfig.json不能独立出文件，原因是浏览器的安全机制主要是为了防止跨站脚本攻击（XSS）和其他安全问题，限制了从本地文件系统直接读取文件的操作
//这不仅限于 .json 文件，实际上任何类型的文件（如 .txt, .xml, .csv 等）都受到相同的限制
// const commonConfig = {
const commonConfig = {
    "sections": [
        {
            "title": "ROBOT",
            "id": "gridContainer1",
            "items": [
                {
                    "name": "Gemini",
                    "url": "https://gemini.google.com/",
                    "img": "https://assets-global.website-files.com/614c82ed388d53640613982e/65731925337413d7614c64bd_google-gemini.webp",
                    "remark": "Gemini's deepresearch is amazing"
                },{
                    "name": "Chatgpt",
                    "url": "https://chatgpt.com/?openaicom_referred=true",
                    "img": "https://img.icons8.com/?size=100&id=FBO05Dys9QCg&format=png&color=000000",
                    "remark": "Chatgpt"
                },{
                    "name": "Ai-Studio",
                    "url": "https://aistudio.google.com/",
                    "img": "https://static.vecteezy.com/system/resources/previews/046/861/646/original/gemini-icon-on-a-transparent-background-free-png.png",
                    "remark": "use Gemini Preview freely"
                },{
                    "name": "Copilot",
                    "url": "https://copilot.microsoft.com/",
                    "img": "https://www.microsoft.com/en-us/microsoft-copilot/blog/wp-content/uploads/2024/09/Blog-Hero-CopilotWordmark-3840x2160-1.png",
                    "remark": "use GPT5 freely"
                },
                {
                    "name": "DeepSeek",
                    "url": "https://chat.deepseek.com/",
                    "img": "https://img.icons8.com/?size=100&id=YWOidjGxCpFW&format=png&color=000000",
                    "remark": "The analysis of view info is more detailed"
                },
                {
                    "name": "TongYiQianWen",
                    "url": "https://www.qianwen.com/",
                    "img": "https://img.alicdn.com/imgextra/i4/O1CN01P8z9P91OBXM3D0VOt_!!6000000001667-2-tps-174-60.png",
                    "remark": "ALi"
                },
                {
                    "name": "Doubao",
                    "url": "https://www.doubao.com/",
                    "img": "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/chat/static/image/logo-icon-white-bg.72df0b1a.png",
                    "remark": "Bytedance"
                },
                {
                    "name": "XiaoZhi",
                    "url": "https://xiaozhi.xdf.cn",
                    "img": "https://oss-xlss.xdf.cn/xzgpt-resource/template/avatar/xz-male-avatar.png",
                    "remark": "AI XDF"
                }
            ]
        },
        {
            "title": "READING",
            "id": "gridContainer4",
            "items": [
                {
                    "name": "Tophub",
                    "url": "https://tophub.today/",
                    "img": "https://file.ipadown.com/tophub/assets/images/logo.png",
                    "remark": "News and article"
                },
                {
                    "name": "YABook",
                    "url": "https://yabook.blog/",
                    "img": "https://yabook.blog/skin/Yabook/include/yabook.png",
                    "remark": "Find valuable info"
                },
                {
                    "name": "Reddit",
                    "url": "https://www.reddit.com/",
                    "img": "https://www.svgrepo.com/show/349489/reddit.svg",
                    "remark": "Info community"
                },
                {
                    "name": "Wikipedia",
                    "url": "https://www.wikipedia.org/",
                    "img": "https://zh.wikipedia.org/static/images/icons/wikipedia.png",
                    "remark": "Req scient net"
                },{
                    "name": "DialectLang",
                    "url": "https://hotgold90000.github.io/DilalectLang/",
                    "img": "https://ts1.tc.mm.bing.net/th/id/R-C.1dc18b23a16a216ad63874ea083ece8c?rik=XAx8qWkgvj2b7w&riu=http%3a%2f%2fpic.xfdown.com%2fuploads%2f2023-1%2f2023151732563405.png&ehk=qfX2rc6XY%2fmDj3J%2faJli5tdwU%2fNJ4OcDraSHtUH%2flq0%3d&risl=&pid=ImgRaw&r=0",
                    "remark": "Dialect record"
                }
            ]
        },
        {
            "title": "VIDEO",
            "id": "gridContainer5",
            "items": [
                {
                    "name": "HaoHaoKan",
                    "url": "https://103.194.185.51:51123",
                    "img": "https://vf.zclmjc.com/vod_pc_static_hkan/images/p/logo_horizontal.png?ver=ggewasd",
                    "remark": "Perfect Video"
                }
            ]
        },
        {
            "title": "TOOL-PIC",
            "id": "gridContainer6",
            "items": [
                {
                    "name": "Emojipedia",
                    "url": "https://emojipedia.org/",
                    "img": "https://em-content.zobj.net/mashup/twitter/twemoji-14.0/base/cowboy.png",
                    "remark": "Emojis Directory"
                },{
                    "name": "SvgRepo",
                    "url": "https://www.svgrepo.com/",
                    "img": "https://www.svgrepo.com/logo.svg",
                    "remark": "Svg icon download & link copy"
                },
                {
                    "name": "Icons8",
                    "url": "https://icons8.com/icons",
                    "img": "https://goodies.icons8.com/web/common/header/logo/logo-icons8.svg",
                    "remark": "Icon download & link copy"
                },
                {
                    "name": "Colab",
                    "url": "https://colab.research.google.com/#scrollTo=Wf5KrEb6vrkR",
                    "img": "https://azhar.blog.uma.ac.id/wp-content/uploads/2023/05/google-colaboratory6512.jpg",
                    "remark": "Chart pic by python codes"
                },
                {
                    "name": "Picsman",
                    "url": "https://www.picsman.ai/zh-cn/create?type=tool",
                    "img": "https://www.picsman.ai/images/b_tools_active.svg",
                    "remark": "Automatic removal of image clutter text"
                }
            ]
        }
    ]
};