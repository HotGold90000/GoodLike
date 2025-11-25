//config.json不能独立出文件，原因是浏览器的安全机制主要是为了防止跨站脚本攻击（XSS）和其他安全问题，限制了从本地文件系统直接读取文件的操作
//这不仅限于 .json 文件，实际上任何类型的文件（如 .txt, .xml, .csv 等）都受到相同的限制
// const config = {
const config = {
    "sections": [
        {
            "title": "Robots",
            "id": "gridContainer1",
            "items": [
                {
                    "name": "Chatgpt",
                    "url": "https://chatgpt.com/?openaicom_referred=true",
                    "img": "https://img.icons8.com/?size=100&id=FBO05Dys9QCg&format=png&color=000000",
                    "remark": "Chatgpt"
                },
                {
                    "name": "DeepSeek",
                    "url": "https://chat.deepseek.com/",
                    "img": "https://img.icons8.com/?size=100&id=YWOidjGxCpFW&format=png&color=000000",
                    "remark": "The analysis of view info is more detailed"
                },
                {
                    "name": "Gemini",
                    "url": "https://gemini.google.com/",
                    "img": "https://assets-global.website-files.com/614c82ed388d53640613982e/65731925337413d7614c64bd_google-gemini.webp",
                    "remark": "Gemini's deepresearch is amazing"
                },
                {
                    "name": "Copilot",
                    "url": "https://copilot.microsoft.com/",
                    "img": "https://www.microsoft.com/en-us/microsoft-copilot/blog/wp-content/uploads/2024/09/Blog-Hero-CopilotWordmark-3840x2160-1.png",
                    "remark": "use GPT5 freely"
                }
            ]
        },
        {
            "title": "Tools",
            "id": "gridContainer2",
            "items": [
                {
                    "name": "OA-XDF",
                    "url": "https://oa.xdf.cn/",
                    "img": "https://oa.xdf.cn/oanew/img/d-bg-p.11c8c886.png",
                    "remark": "XDF Portal"
                },
                {
                    "name": "Office Map",
                    "url": "https://hotgold90000.github.io/GoodLike/src/haixing_offices_rooms.png",
                    "img": "https://www.svgrepo.com/show/500639/office-building.svg",
                    "remark": "Office Map"
                },
            ]
        },

        {
            "title": "Readings",
            "id": "gridContainer4",
            "items": [
                {
                    "name": "Reddit",
                    "url": "https://www.reddit.com/",
                    "img": "https://www.svgrepo.com/show/349489/reddit.svg",
                    "remark": "Info community"
                },
                {
                    "name": "Tophub",
                    "url": "https://tophub.today/",
                    "img": "https://file.ipadown.com/tophub/assets/images/logo.png",
                    "remark": "News and article"
                },
                {
                    "name": "Wikipedia",
                    "url": "https://www.wikipedia.org/",
                    "img": "https://zh.wikipedia.org/static/images/icons/wikipedia.png",
                    "remark": "Req scient net"
                },
                {
                    "name": "Quora",
                    "url": "https://www.quora.com/",
                    "img": "https://ts4.tc.mm.bing.net/th/id/OSAAS.777FC27383CA52BA3DF3AB04CAB4F66B?w=72&h=72&c=1&rs=1&o=6&pid=TechQna",
                    "remark": "Info community"
                }
            ]
        },
        {
            "title": "Tools-Pic",
            "id": "gridContainer5",
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