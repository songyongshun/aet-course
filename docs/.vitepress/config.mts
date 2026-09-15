import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'

const customElements = [
  'mjx-container',
  'mjx-assistive-mml',
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mspace',
  'msqrt',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'annotation',
  'annotation-xml',
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(mathjax3)
    },
  },
  title: '汽车电工电子技术',
  description: '高职汽车电工电子技术课程 - 静态文档网站',
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索',
            buttonCloseText: '清除',
            buttonCloseAriaLabel: '清除',
          },
          modal: {
            searchBox: {
              containerText: '搜',
              displayRecents: '最近搜索',
              gotoButton: '前往',
              goToSuggestions: '前往建议',
              inputPlaceholder: '搜索内容...',
            },
            startScreen: {
              recentlySearched: '最近搜索',
              noRecent: '暂无最近搜索',
              searchShortcuts: '快捷搜索',
            },
            footer: { selectText: '选择跳转', navigateText: '浏览' },
          },
        },
      },
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '项目', link: '/projects/project-01' },
      { text: '附录', link: '/appendix/course-standard' },
      { text: '评估', link: '/assessment/test-papers' },
    ],
    sidebar: {
      '/': [
        {
          text: '课程概况',
          items: [
            { text: '课程首页', link: '/' },
            { text: '课程标准', link: '/appendix/course-standard' },
            { text: '课程进度', link: '/appendix/course-schedule' },
          ],
        },
      ],
      '/projects/': [
        {
          text: 'Module 1: 基础模块 (基础电路)',
          items: [
            { text: '项目一 汽车直流电路的分析与测量', link: '/projects/project-01' },
            { text: '  └ 任务一 电路组成及基本物理量', link: '/projects/project-01/task-01' },
            { text: '  └ 任务二 元器件识别与检测', link: '/projects/project-01/task-02' },
            { text: '  └ 任务三 汽车电路的分析', link: '/projects/project-01/task-03' },
            { text: '项目二 汽车电源交流电路的分析与测量', link: '/projects/project-02' },
            { text: '  └ 任务一 正弦交流电路分析', link: '/projects/project-02/task-01' },
            { text: '  └ 任务二 交流发电机拆解与检测', link: '/projects/project-02/task-02' },
            { text: '  └ 任务三 汽车整流电路分析', link: '/projects/project-02/task-03' },
          ],
        },
        {
          text: 'Module 2: 关键模块 (电磁器件与控制)',
          items: [
            { text: '项目三 汽车常用电磁器件原理分析与检测', link: '/projects/project-03' },
            { text: '  └ 任务一 汽车用继电器分析与检测', link: '/projects/project-03/task-01' },
            { text: '  └ 任务二 汽车用变压器原理分析', link: '/projects/project-03/task-02' },
            { text: '项目四 汽车执行器与控制电路的分析', link: '/projects/project-04' },
            { text: '  └ 任务一 晶体管识别与检测', link: '/projects/project-04/task-01' },
            { text: '  └ 任务二 晶体管电路分析测试', link: '/projects/project-04/task-02' },
            { text: '  └ 任务三 充电系统电压监视器', link: '/projects/project-04/task-03' },
          ],
        },
        {
          text: 'Module 3: 数字模块 (数字电路)',
          items: [
            { text: '项目五 数字电路及其在汽车上的应用', link: '/projects/project-05' },
            { text: '  └ 任务一 组合逻辑电路应用', link: '/projects/project-05/task-01' },
            { text: '  └ 任务二 555时基电路应用', link: '/projects/project-05/task-02' },
          ],
        },
        {
          text: 'Module 4: 高压模块 (NEV 安全防护)',
          items: [
            { text: '项目六 新能源汽车的高压安全防护', link: '/projects/project-06' },
            { text: '  └ 任务一 新能源汽车高压系统认知', link: '/projects/project-06/task-01' },
            { text: '  └ 任务二 新能源汽车高压安全防护', link: '/projects/project-06/task-02' },
          ],
        },
      ],
      '/appendix/': [
        {
          text: '附录',
          items: [
            { text: '课程标准', link: '/appendix/course-standard' },
            { text: '教学进度表', link: '/appendix/course-schedule' },
            { text: '教案概览', link: '/appendix/teaching-plan' },
            { text: '习题答案', link: '/appendix/exercise-answers' },
          ],
        },
      ],
      '/assessment/': [
        {
          text: '评估',
          items: [
            { text: '考试试卷', link: '/assessment/test-papers' },
          ],
        },
      ],
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/' }],
  },
})
