---
title: WEB前端
createTime: 2025/10/03 17:05:49
permalink: /LearningRoute/WEB/frontend/
---

> 鸣谢李文灏学长提供的学习路线！


## 前端开发学习（2023.09.25 版）
### 学习路线说明
1. 本路线基于个人大一下学期学习经历整理，未标注具体学习任务（因个人空闲时间差异较大），建议根据自身情况合理分配学习时间。
2. 初期以国外老师的教程为主，时长普遍较长，可结合自身时间选择适配的学习内容。
3. 🌟 标识代表内容对「比赛开发」的适用程度，不代表知识点本身的重要程度。
4. **重要补充**：Node.js 对前端开发有重要辅助作用，有多余时间建议学习。


## 一、基础三件套（核心前置知识）
建议优先掌握，开发过程中可通过 **MDN Web Docs** 随时查阅细节知识点。

### 1. HTML + CSS（🌟🌟🌟）
#### **学习重点**
无需掌握全部属性（部分属性使用率低，可通过 JavaScript 实现同等效果），实际开发中需用时再搜索即可。

#### **核心目标**
能够独立完成单页网站开发，理解页面布局逻辑与样式控制方法。

#### **推荐教程**
[B站 - 【Udemy排名第一的HTML5+CSS3课程】使用HTML和CSS构建响应式真实世界网站（中英文字幕）](https://www.bilibili.com/video/BV1A34y1e7wL/?spm_id_from=333.999.0.0&vd_source=8c6b6aff2ab21d2569269571a7cc0218)
- 课程特点：偏向「知识融入项目」，附带前端审美培养；最终项目为 `omnifood` 单页网站（可搜索线上部署版本参考效果），同时包含多个小型实战案例。
- 补充学习：同一老师有 **CSS 进阶课程**，可学习 CSS 高级属性与动画效果，按需选择是否学习。

### 2. JavaScript（🌟🌟🌟🌟）
#### **核心地位**
所有前端框架的底层基础，只有理解 JavaScript 核心逻辑，才能高效学习 Vue、React 等框架；且 JavaScript 仍在持续迭代，需重点掌握基础语法与核心概念。

#### （1）JavaScript 基础（🌟🌟🌟🌟）
##### **学习重点**
掌握后可满足大部分基础开发需求，进阶内容可根据后续学习进度补充。

##### **推荐教程**
[B站 - 【Udemy排名第一的JavaScript课程】2023最新完整JavaScript课程 从入门到精通 -- 通过项目、挑战和理论掌握JS（中英文字幕）上](https://www.bilibili.com/video/BV1vA4y197C7/?spm_id_from=333.999.0.0&vd_source=8c6b6aff2ab21d2569269571a7cc0218)
- 课程特点：同一老师授课，包含 AJAX 知识点；jQuery 部分涉及较少，可自行补充学习；课程模块化设计，适合分时段碎片化学习。

#### （2）JavaScript 进阶（🌟🌟）
##### **学习重点**
涉及 JavaScript 底层原理，是基础内容的深度拔高，建议有一定开发经验后再系统学习。

##### **推荐教程**
[B站 - 【Udemy付费课程】JavaScript: The Advanced Concepts --> JS高级进阶课程（中文字幕）](https://www.bilibili.com/video/BV19i4y1Q7w7?p=1&vd_source=8c6b6aff2ab21d2569269571a7cc0218)


## 二、框架部分（提升开发效率）
掌握基础三件套后学习，可根据项目需求与个人技术偏好选择框架。

### 1. Vue（🌟🌟🌟🌟）
#### **（1）学习路径**
1. 优先学习 **Vue2**：结合 Vue 官方文档学习（培养自主查阅文档的能力），掌握核心概念。
2. 再学习 **Vue3 新特性**：了解 Vue3 与 Vue2 的差异（如 Composition API、新生命周期钩子函数等）。

#### **（2）核心掌握内容**
- 基础层面：组件、生命周期、路由、mixins、Vue 快捷指令、双向数据流。
- 进阶层面：状态管理（Vue2 推荐 Vuex，Vue3 推荐 Pinia）、项目部署流程。

#### **（3）版本说明**
Vue2 与 Vue3 无绝对优劣：Vue3 更适合大型项目（代码易维护），但 Composition API 可能降低部分逻辑的直观性；Vue2 对小型项目开发更友好，上手成本更低。

#### **（4）推荐教程**
[B站 - Vue 学习教程](https://www.bilibili.com/video/BV1Wr4y1n7rG/?spm_id_from=333.999.0.0)
- 课程覆盖内容：
  - Vue 基础：VueJS 概念、基础语法、模板理解、响应式数据输出、事件监听。
  - 核心能力：DOM 交互（列表渲染、条件渲染）、开发环境配置、组件使用。
  - 进阶技能：Vue 底层原理、表单输入绑定、后端 API 请求、身份验证、动画与过渡效果。
  - 项目实战：路由开发（单页应用 SPA 搭建）、状态管理（Vuex/Pinia）、项目部署。

### 2. React
#### **（1）框架特点**
- 灵活性高：相比 Vue 封装更轻量，需手动处理更多配置与业务逻辑。
- 编程思想：基于函数式编程，开发体验更贴近 JavaScript 原生语法。

#### **（2）学习重点**
- 核心 Hook：理解 Hook 原理（如「只能在组件最顶层声明」的原因）、state 的「组件记忆」功能、组件渲染流程。
- 设计模式：通过基础 Hook 逐步掌握 React 特有的开发逻辑与代码组织方式。

#### **（3）推荐学习渠道**
**优先参考 React 官方文档**：[React 中文文档 - 快速入门](https://zh-hans.react.dev/learn)
- 文档特点：内容权威、更新及时，包含从入门到进阶的完整指引，配套代码示例与交互演示，适合系统学习 React 核心概念。

## 贡献者

<div class="contributors-list" style="display: flex; gap: 20px; flex-wrap: wrap; margin-top: 20px;">
  <!-- 贡献者 1 -->
  <div style="text-align: center;">
    <img src="https://avatars.githubusercontent.com/u/94302726?v=4" alt="魏知乐" style="width: 80px; border-radius: 50%;" />
    <p style="margin-top: 8px;"><a href="https://github.com/spaceluke" target="_blank">魏知乐</a></p>
  </div>
  <!-- 贡献者 2 -->
    <div style="text-align: center;">
    <img src="https://avatars.githubusercontent.com/u/145993470?v=4" alt="吴限" style="width: 80px; border-radius: 50%;" />
    <p style="margin-top: 8px;"><a href="https://github.com/zhuningyu3" target="_blank">吴限</a></p>
  </div>
</div>